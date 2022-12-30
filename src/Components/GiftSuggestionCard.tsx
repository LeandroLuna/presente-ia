import { Card, CardBody, Divider, Heading, Stack, Text, Image } from '@chakra-ui/react';

function GiftSuggestionCard({props}) {
    const title = 'Box de DVD do Game of Thrones';
    const SHOPPING_URL = `https://www.google.com/search?q=${title.replace('', '+')}&client=safari&sa=X&rls=en&biw=1440&bih=795&tbm=shop&ei=8UmuY_a7JpPS1sQP4sey4AY&ved=0ahUKEwi2-Kz-oqD8AhUTqZUCHeKjDGwQ4dUDCAc&uact=5&oq=teste&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQsAMQQzoJCAAQsAMQChBDOggIABCABBCwAzoOCAAQgAQQsQMQgwEQsAM6BAgAEEM6CggAELEDEIMBEEM6DQgAEIAEELEDEIMBEAo6BwgAEIAEEApKBAhBGAFQwQFY6zlg5jpoAnAAeACAAWGIAYgEkgEBNpgBAKABAqABAcgBCsABAQ&sclient=products-cc`

    return (
    <Card maxW='sm'>
      <CardBody>
        <a href={SHOPPING_URL}>
        {/* <Image
          src=''
          alt=''
          borderRadius='lg'
        /> */}
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Title</Heading>
          <Text>
            Body
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            Price
          </Text>
        </Stack>
        </a>
      </CardBody>
      <Divider />
    </Card>
  );
}

export default GiftSuggestionCard;
