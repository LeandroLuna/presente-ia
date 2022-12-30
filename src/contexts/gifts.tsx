import { createContext, useState } from 'react';

export const GiftsContext = createContext({
    choices: [],
    setChoices: function (choices: string[]): void{}
});

export function GiftsProvider({children}){
    const [choices, setChoices] = useState<string[]>([]); 

    return <GiftsContext.Provider value={{choices, setChoices}}>{children}</GiftsContext.Provider>;
}