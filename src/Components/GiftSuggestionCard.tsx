import { Card, CardBody, Heading, Stack, Text, Image } from '@chakra-ui/react';

function GiftSuggestionCard({suggestion, imageLink}) {
    const [title, description, price] = suggestion.split('-')
    const SHOPPING_URL = `https://www.google.com/search?q=${title.replace('', '+')}&client=safari&sa=X&rls=en&biw=1440&bih=795&tbm=shop&ei=8UmuY_a7JpPS1sQP4sey4AY&ved=0ahUKEwi2-Kz-oqD8AhUTqZUCHeKjDGwQ4dUDCAc&uact=5&oq=teste&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQsAMQQzoJCAAQsAMQChBDOggIABCABBCwAzoOCAAQgAQQsQMQgwEQsAM6BAgAEEM6CggAELEDEIMBEEM6DQgAEIAEELEDEIMBEAo6BwgAEIAEEApKBAhBGAFQwQFY6zlg5jpoAnAAeACAAWGIAYgEkgEBNpgBAKABAqABAcgBCsABAQ&sclient=products-cc`

    return (
    <Card minW={{base: '16em', sm: '19em', md: 'md'}} maxW={{base: '16em', sm: '19em', md: 'md'}} my='50px'>
      <CardBody>
        <a href={SHOPPING_URL} target="_blank" rel="noopener noreferrer">
        <Image
          height='sm'
          src={imageLink}
          alt={`Representação da sugestão '${title}'`}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='lg' color='grey'>{title}</Heading>
          <Text color='white'>
            {description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            Valor aproximado: {price}
          </Text>
        </Stack>
        </a>
      </CardBody>
    </Card>
  );
}

export default GiftSuggestionCard;
