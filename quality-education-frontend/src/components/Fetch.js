import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    useEffect(() => {
        const abort =  new AbortController()
        setTimeout(() => {
            fetch(url, {signal: abort.signal})
            .then((res)=>{
                if(!res.ok){
                    throw Error('')
                }
                return res.json()
            })
            .then((data)=>{
                setData(data)
                setLoading(false)
            })
            .catch((error)=>{
                if (error.name === 'AbortError'){
                    console.log('Error Aborted')
                }else{
                setError(error.message)
             }
            })
        }, 1000);
        return()=>{
            abort.abort()
        }
    },[data,url])
    return{data, loading, error}
}

export default useFetch;