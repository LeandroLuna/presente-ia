import axios from 'axios';
import Gift from '../models/gift';

const API_BASE_URL = 'https://api.openai.com/v1';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY


async function fetchOpenAI(userInput: Gift) {
  
  const PROMPT = `
  Me sugira uma lista de 5 presentes para uma pessoa que tem os interesses listados abaixo. Os presentes precisam ser do tipo ${userInput.giftType} e o meu nivel de intimidade com essa pessoa é ${userInput.intimacy}. Não enumere os itens da lista. Me explique cada item com no máximo 2 frases. Indique o valor do item sugerido ao final, separado por dois hifens, convertido para reais.
  
  Interesses: ${userInput.preference}

  Exemplo:
  Miniatura do Trono de Ferro -- A Miniatura do Trono de Ferro é uma réplica em miniatura do Trono de Ferro, um dos elementos mais icônicos da série de televisão Game of Thrones. É um assento de pedra esculpido com uma aparência sombria e imponente, e é usado pelo governante do reino como símbolo de sua autoridade. -- R$50.
  Livro de Stephen King -- A obra literária de Stephen King é muito famosa e seu estilo de escrita é único. Escolha um livro de sua preferência e presenteie essa pessoa com a obra do autor que ela tanto admira. -- R$30. 
  Camiseta de Reservoir Dogs -- A camiseta de Reservoir Dogs é uma camiseta de algodão de excelente qualidade, com a estampa da icônica cena do filme Reservoir Dogs, dirigido por Quentin Tarantino, que foi lançado em 1992. É uma camiseta versátil e confortável, perfeita para qualquer tipo de look. -- R$60.

  Sugestões:
  `

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  }

  const body = {
    model: 'text-davinci-003',
    prompt: `${PROMPT}\n`,
    temperature: 0.8,
    max_tokens: 1000,
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/completions`, body, {headers});
    const data = response.data;
    const formatedData = data.choices.pop().text.split('\n').map((choice: string) => choice.trim().replace(/^\d+\. /, ''));
    return formatedData;
  } catch (err) {
    console.log('Error OpenAI: ', err);
    alert('A capacidade de realizar novas solicitações de presentes está esgotada. Por favor, volte em outro dia para tentar novamente.') // Prod
  }
}

export default fetchOpenAI;