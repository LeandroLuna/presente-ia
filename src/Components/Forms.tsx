import { FormControl, FormLabel, Input, Button, Select, RadioGroup, Radio, FormHelperText, HStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

function Forms() {
  return (
    <Formik
      initialValues={{ preference: '', giftType: 'saving', intimacy: 'medium' }}
      onSubmit={(values, actions) => {
        console.log(values);
        setInterval(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name='preference'>
            {({ field, form }) => (
              <FormControl isRequired>
                <FormLabel>Preferências do amigo</FormLabel>
                <Input {...field} placeholder='Ex. Naruto, Game of Thrones etc.' />
              </FormControl>
            )}
          </Field>
          <Field name='giftType'>
            {({ field, form }) => (
              <FormControl mt={4}>
                <FormLabel>Tipo de presente</FormLabel>
                <Select {...field}>
                  <option value='saving'>Econômico</option>
                  <option value='memorable'>Memorável</option>
                </Select>
              </FormControl>
            )}
          </Field>
          <Field name='intimacy'>
            {({ field, form }) => (
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
