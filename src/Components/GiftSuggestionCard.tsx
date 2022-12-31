import { Card, CardBody, Heading, Stack, Text, Image } from '@chakra-ui/react';

function GiftSuggestionCard({props}) {
    const title = 'Box de DVD do Game of Thrones';
    const SHOPPING_URL = `https://www.google.com/search?q=${title.replace('', '+')}&client=safari&sa=X&rls=en&biw=1440&bih=795&tbm=shop&ei=8UmuY_a7JpPS1sQP4sey4AY&ved=0ahUKEwi2-Kz-oqD8AhUTqZUCHeKjDGwQ4dUDCAc&uact=5&oq=teste&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQsAMQQzoJCAAQsAMQChBDOggIABCABBCwAzoOCAAQgAQQsQMQgwEQsAM6BAgAEEM6CggAELEDEIMBEEM6DQgAEIAEELEDEIMBEAo6BwgAEIAEEApKBAhBGAFQwQFY6zlg5jpoAnAAeACAAWGIAYgEkgEBNpgBAKABAqABAcgBCsABAQ&sclient=products-cc`

    return (
    <Card minW={{base: '16em', sm: '19em', md: 'md'}} maxW={{base: '16em', sm: '19em', md: 'md'}} my='50px'>
      <CardBody>
        <a href={SHOPPING_URL}>
        <Image
          src='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/j1gxnx89lrupr9jool7w.jpg'
          alt=''
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md' color='grey'>Title</Heading>
          <Text color='white'>
            O DVD de Game of Thrones é uma série de DVDs que contém episódios da famosa série de televisão Game of Thrones, produzida pela HBO. A série é baseada nas séries de livros "As Crônicas de Gelo e Fogo" do autor George R.R. Martin e se passa em um mundo fictício de fantasia medieval onde várias famílias disputam o trono de um reino dividido.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            R$50
          </Text>
        </Stack>
        </a>
      </CardBody>
    </Card>
  );
}

export default GiftSuggestionCard;
