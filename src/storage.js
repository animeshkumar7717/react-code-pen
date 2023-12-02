import { useEffect, useState } from "react";

const NAME = '-code-pen'

export default function useLocalStorage(key, initialValue) {
    const codeKey = key + NAME;

    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(codeKey);
        if(jsonValue != null) return JSON.parse(jsonValue);

        if(typeof jsonValue === 'function') {
            return initialValue();
        } else {
            return jsonValue;
        }
    })

    useEffect(()=>{
        localStorage.setItem(codeKey, JSON.stringify(value));
    }, [codeKey, value])
    return [value, setValue]
}