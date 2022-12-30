import Forms from '../Components/Forms';
import { Heading, Text, Container, Box, Highlight } from '@chakra-ui/react';
import { useContext } from 'react';
import { GiftsContext } from '../contexts/gifts';
import GiftSuggestionCard from '../Components/GiftSuggestionCard';

function Home() {
  const { choices } = useContext(GiftsContext);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Container maxW='2xl' h='100vh' color='white' textAlign='center'>
        <Box display='flex' flexDirection='column' justifyContent='center' h='100%'>
          <Heading as='h1' size='4xl' noOfLines={1} textTransform='uppercase' letterSpacing='10px'>
            Presente.IA
          </Heading>
          <Text fontSize='xl' my='40px' letterSpacing='1px' lineHeight='40px'>
            <Highlight query={'presente perfeito para qualquer ocasião'} styles={{ px: '2', py: '2', rounded: 'full', bg: 'white' }}>
              Descubra o presente perfeito para qualquer ocasião com a ajuda da nossa inteligência artificial de recomendação de presentes!
            </Highlight>
          </Text>
          <Forms />
          {choices.length ? (
            <>
              <hr />
              {choices.map((choice: string, index: number) => {
                return <GiftSuggestionCard key={index} props={choice} />;
              })}
            </>
          ) : (
            ''
          )}
        </Box>
      </Container>
    </div>
  );
}

export default Home;
