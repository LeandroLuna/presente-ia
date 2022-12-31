import axios from 'axios';
import Gift from '../models/gift';

const API_BASE_URL = 'https://api.openai.com/v1';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY


async function fetchOpenAI(userInput: Gift) {
  const PROMPT = `
  Me sugira uma lista de 5 presentes para uma pessoa que tem os interesses listados abaixo. Os presentes precisam ser do tipo ${userInput.giftType} e o meu nivel de intimidade com essa pessoa é ${userInput.intimacy}. Não enumere os itens da lista. Me explique cada item com no máximo 2 frases e a explicação do item não pode conter hifens em nenhum momento do texto. Indique o valor do item sugerido ao final, separado por um hifen, convertido para reais.
  
  Interesses: ${userInput.preference}

  Exemplo:
  Miniatura do Trono de Ferro - A Miniatura do Trono de Ferro é uma réplica em miniatura do Trono de Ferro, um dos elementos mais icônicos da série de televisão Game of Thrones. É um assento de pedra esculpido com uma aparência sombria e imponente, e é usado pelo governante do reino como símbolo de sua autoridade. - R$50.
  Figurinha colecionável do trono de ferro - As figurinhas colecionáveis do Trono de Ferro são itens de colecionador baseados na série de televisão Game of Thrones, produzida pela HBO. São figurinhas de pequeno tamanho, geralmente em formato de cartão ou de metal, que representam personagens, cenas ou elementos da série. - R$30. 
  Quadro da casa Stark - O Quadro da Casa Stark é um item de decoração baseado na série de televisão Game of Thrones, produzida pela HBO. A série é baseada nas séries de livros "As Crônicas de Gelo e Fogo" do autor George R.R. Martin e se passa em um mundo fictício de fantasia medieval onde várias famílias disputam o trono de um reino dividido. - R$60.
  Livro de memórias de Game of Thrones - O Livro de Memórias de Game of Thrones é um livro que contém fotos, anotações e reflexões dos atores, equipe e criador da série de televisão Game of Thrones, produzida pela HBO. A série é baseada nas séries de livros "As Crônicas de Gelo e Fogo" do autor George R.R. Martin e se passa em um mundo fictício de fantasia medieval onde várias famílias disputam o trono de um reino dividido. - R$40.

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