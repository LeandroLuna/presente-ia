import Forms from '../Components/Forms';
import { Heading, Text, Container, Box, Highlight } from '@chakra-ui/react';
import { useContext} from 'react';
import { GiftsContext } from '../contexts/gifts';
import GiftSuggestionCard from '../Components/GiftSuggestionCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';

function Home() { 
  const {choices, imagesLinks} = useContext(GiftsContext);

  return (
    <Box bgColor='black' display='flex' flexDirection='column' justifyContent='center' minH='100vh'>
      <Container maxW='2xl' color='white' textAlign='center' marginY='40px' flexDirection='column'>
          <Heading as='h1' size={{base: '2xl', sm: '3xl', md: '4xl'}} noOfLines={1} textTransform='uppercase' letterSpacing='10px'>
            Presente.IA
          </Heading>
          <Text fontSize={{base: 16, sm: 'xl'}} my='40px' letterSpacing='1px' lineHeight={{base: '30px', sm: '40px'}}>
            <Highlight query={'presente perfeito para qualquer ocasião'} styles={{ px: '2', py: '2', rounded: 'full', bg: 'white' }}>
              Descubra o presente perfeito para qualquer ocasião com a ajuda da nossa inteligência artificial de recomendação de presentes!
            </Highlight>
          </Text>
          <Forms />
          {choices.length ? (
            <>
              <Box my='40px'>
                <Swiper
                 cssMode={true}
                 navigation={true}
                 pagination={true}
                 mousewheel={true}
                 keyboard={true}
                 scrollbar={{ draggable: true }}
                 centeredSlides={true}
                 modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                 >
                  {choices.map((choice: string, index: number) => {
                    return (
                      <SwiperSlide key={index}>
                        <GiftSuggestionCard suggestion={choice} imageLink={imagesLinks[index]}/>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Box>
            </>
          ) : (
            ''
          )}
      </Container>
    </Box>
  );
}

export default Home;
