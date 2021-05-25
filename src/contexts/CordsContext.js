import React, {useState, createContext} from "react";
const CordsContext = createContext();

export default function CordsProvider({ children }) {
    const [cords, setCords] = useState(['-78.507','38.033']);

    return(
        <CordsContext.Provider value = {{cords, setCords}}>
            {children}
        </CordsContext.Provider>
    )
}

export {CordsContext}