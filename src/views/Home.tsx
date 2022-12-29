import Forms from '../Components/Forms';
import { Heading, Text, Container, Box, Highlight } from '@chakra-ui/react';

function Home() {
  return (
    <div style={{backgroundColor: 'black'}}>
      <Container h='100vh' color='white' textAlign='center'>
        <Box display='flex' flexDirection='column' justifyContent='center' h='100%'>
        <Heading as='h1' size='4xl' noOfLines={1} textTransform='uppercase' letterSpacing='10px'>
          Presente.IA
        </Heading>
        <Text fontSize='xl' my='40px' letterSpacing='1px'>
            <Highlight query={'presente perfeito para qualquer ocasião'} styles={{ px: '2', py: '2', rounded: 'full', bg: 'white' }}>
                Descubra o presente perfeito para qualquer ocasião com a ajuda da nossa inteligência artificial de recomendação de presentes!
            </Highlight>
        </Text>
        <Forms />
        </Box>
      </Container>
    </div>
  );
}

export default Home;
