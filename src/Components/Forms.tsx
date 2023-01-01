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
  
    for (const el of arr) {
      const { data } = await googleApi(el.split('--')[0]);
      imageLinks.push(data.items[0].link);
    }

    return imageLinks;
  }
  
  return (
    <Formik
      initialValues={initialFieldValues}
      onSubmit={async (values: Gift, actions: { setSubmitting: (arg0: boolean) => any; }) => {
        setIsLoading(true);
        let newChoices: string[] = [];
        let newLinks: string[] = [];
        newChoices = await fetchOpenAI(values);
        newLinks = await getImagesLinks(newChoices);
        if (newLinks.length){
          setChoices(newChoices);
          setImagesLinks(newLinks);
        }
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
