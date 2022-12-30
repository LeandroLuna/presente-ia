import { FormControl, FormLabel, Input, Button, Select, RadioGroup, Radio, FormHelperText, HStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { GiftsContext } from '../contexts/gifts';
import Gift from '../models/gift';
import fetchOpenAI from '../services/open-ai-service';

function Forms() {
  const [isLoading, setIsLoading] = useState(false);

  const initialFieldValues: Gift = {
    preference: '',
    giftType: 'saving',
    intimacy: 'medium'
  };

  const {setChoices} = useContext(GiftsContext);

  return (
    <Formik
      initialValues={initialFieldValues}
      onSubmit={async (values: Gift, actions) => {
        setIsLoading(true);
        setChoices(await fetchOpenAI(values));
        isLoading ? actions.setSubmitting(true) : actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Field name='preference'>
            {({ field }) => (
              <FormControl isRequired>
                <FormLabel>Preferências do amigo</FormLabel>
                <Input {...field} placeholder='Ex. Naruto, Game of Thrones, Cinema etc.' />
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
              {/* <FormHelperText>Quão intimo poderão ser os presentes sugeridos?</FormHelperText> */}
            </FormControl>
            )}
          </Field>
          <Button mt={4} colorScheme='teal' isLoading={props.isSubmitting} type='submit'>
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Forms;
