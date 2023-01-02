import { FormControl, FormLabel, Input, Button, Select, RadioGroup, Radio, HStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { GiftsContext } from '../contexts/gifts';
import Gift from '../models/gift';
import fetchOpenAI from '../services/open-ai-service';
import { googleApi } from '../services/googleService';

function Forms() {
  const [isLoading, setIsLoading] = useState(false);
  const { setChoices, setImagesLinks } = useContext(GiftsContext);

  const initialFieldValues: Gift = {
    preference: '',
    giftType: 'saving',
    intimacy: 'medium'
  };

  async function getImagesLinks(arr: string[]): Promise<string[]> {
    let imageLinks: string[] = [];
    
    try {
      for (const el of arr) {
        const { data } = await googleApi(el.split('--')[0]);
        imageLinks.push(data.items[0].link);   
      }
    }
    catch (err){
      // console.log('Error getImagesLinks: ', err)
      alert('A capacidade de carregar novas imagens das sugestões está esgotada. Volte outro dia para tentar novamente a utilização do serviço com as imagens devidamente carregadas. :)') // Prod
    }

    return imageLinks;
  }

  async function getChoices(userInput: Gift){
    let newChoices: string[] = [];
    let newLinks: string[] = [];
    newChoices = await fetchOpenAI(userInput);
    setChoices(newChoices);
    newLinks = await getImagesLinks(newChoices);
    setImagesLinks(newLinks);
  }
  
  return (
    <Formik
      initialValues={initialFieldValues}
      onSubmit={async (values: Gift, actions: { setSubmitting: (arg0: boolean) => any; }) => {
        setIsLoading(true);
        await getChoices(values)
        isLoading ? actions.setSubmitting(true) : actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Field name='preference'>
            {({ field }) => (
              <FormControl isRequired>
                <FormLabel>Preferências do amigo</FormLabel>
                <Input {...field} placeholder='Ex. Stephen King, Game of Thrones, Quentin Tarantino etc.' />
              </FormControl>
            )}
          </Field>
          <Field name='giftType'>
            {({ field }) => (
              <FormControl mt={4}>
                <FormLabel>Tipo de presente</FormLabel>
                <Select {...field}>
                  <option value='saving'>Econômico</option>
                  <option value='memorable'>Memorável</option>
                  <option value='expensive'>Luxuoso</option>
                </Select>
              </FormControl>
            )}
          </Field>
          <Field name='intimacy'>
            {({ field }) => (
              <FormControl mt={4}>
              <FormLabel>Nivel de intimidade</FormLabel>
              <RadioGroup {...field}>
                <HStack spacing='24px' {...field}>
                  <Radio value='low'>Baixa</Radio>
                  <Radio value='medium'>Média</Radio>
                  <Radio value='high'>Alta</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            )}
          </Field>
          <Button mt='40px' colorScheme='teal' isLoading={props.isSubmitting} type='submit'>
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Forms;
