import { createContext, useState } from 'react';

export const GiftsContext = createContext({
    choices: [],
    imagesLinks: [],
    setChoices: function (choices: string[]): void{},
    setImagesLinks: function (choices: string[]): void{},
});

export function GiftsProvider({children}){
    const [choices, setChoices] = useState<string[]>([]); 
    const [imagesLinks, setImagesLinks] = useState<string[]>([]); 

    return <GiftsContext.Provider value={{choices, imagesLinks, setChoices, setImagesLinks}}>{children}</GiftsContext.Provider>;
}