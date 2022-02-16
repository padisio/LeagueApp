import { useEffect, useState } from "react"


export const useChampFetch = (url, champId) => {
    const [data, setData ] = useState()

    useEffect(() => {

         fetch(url)
        .then(r => r.json())


        //Object.values convierte las propiedades de un objeto en array para poder hacer un .map()
        .then(data => (Object.values(data.data)).map(data=> setData(data)))
        .catch(err => console.warn(err))

    }, [url])
    
    return data
}
