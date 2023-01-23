import { useContext, createContext, useState } from "react";

const Context = createContext({});
export const useBook = () => useContext(Context);

export const BookContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);

    return   (
        <Context.Provider value={{books, setBooks}}>
            {children}
        </Context.Provider>
    )
    }

