import axios from 'axios';
import Gift from '../models/gift';

const API_BASE_URL = 'https://api.openai.com/v1';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY


async function fetchOpenAI(userInput: Gift) {
  const PROMPT = `
  Me sugira uma lista de 5 presentes para uma pessoa que tem os interesses listados abaixo. Os presentes precisam ser do tipo ${userInput.giftType} e o meu nivel de intimidade com essa pessoa é ${userInput.intimacy}. Não enumere os itens da lista. Indique o valor do item sugerido ao final, separado por um hifen, convertido para reais.
  
  Interesses: ${userInput.preference}

  Exemplo:
  Miniatura do Trono de Ferro - R$50.
  Figurinha colecionável do trono de ferro - R$30. 
  Quadro da casa Stark - R$60.
  Cartão presente para assistir às temporadas - R$20. 
  Livro de memórias de Game of Thrones - R$40.

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
    max_tokens: 250,
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/completions`, body, {headers});
    const data = response.data;
    const formatedData = data.choices.pop().text.split('\n').map((choice: string) => choice.trim().replace(/^\d+\. /, ''));
    return formatedData;
  } catch (err) {
    console.log('Error: ', err);
  }
}

export default fetchOpenAI;