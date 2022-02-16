import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [data, setData ] = useState()

    useEffect(() => {

         fetch(url)
        .then(r => r.json())


        //Object.values convierte las propiedades de un objeto en array para poder hacer un .map()
        .then(data => setData(Object.values(data.data)))
        .catch(err => console.warn(err))

    }, [url])
    
    return data
}
