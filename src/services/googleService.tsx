import axios from "axios";

const API_BASE_URL = 'https://www.googleapis.com/customsearch/v1?';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const API_CONTEXT = process.env.REACT_APP_GOOGLE_CONTEXT

const API_PROPS = {
    searchType: "image",
    imgColorType: "trans"
}

export const googleApi = (query: string) => {
    try{
        return axios.get<any>(API_BASE_URL+`q=${query}&key=${API_KEY}&cx=${API_CONTEXT}&searchType=${API_PROPS.searchType}&imgColorType=${API_PROPS.imgColorType}`)
    }catch(err){
        console.log(err)
    }
}