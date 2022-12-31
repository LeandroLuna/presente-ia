import { createContext, useState } from 'react';

export const GiftsContext = createContext({
    choices: [],
    imagesLinks: [],
    setChoices: function (choices: string[]): void{},
    setImagesLinks: function (choices: string[]): void{},
    addImages: function (images: string[]): void{}
});

export function GiftsProvider({children}){
    const [choices, setChoices] = useState<string[]>([]); 
    const [imagesLinks, setImagesLinks] = useState<string[]>([]); 

    const addImages = (images: string[]) => {
        setChoices((prevState) => [...prevState, ...images]);
      };

    return <GiftsContext.Provider value={{choices, imagesLinks, addImages, setChoices, setImagesLinks}}>{children}</GiftsContext.Provider>;
}