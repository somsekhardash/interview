import {useEffect, useState} from 'react'

export function useProduct(q) {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        async function makeTheCall(){
            const wData = await fetch(`https://dummyjson.com/products/search?q=${q}`);
            const data = await wData.json();
            setData(data.products);
        }
        q && makeTheCall();
    }, [q])
    
    return [data]
}



export function _debounce(fun, time){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            return fun(...args)
        }, time);
    }
}

