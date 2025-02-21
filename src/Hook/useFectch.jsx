import { useEffect, useState } from 'react';


export const useFectch = (url) => {
  
    //let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
  
    let [state,setstate]=useState({
        data:null,
        loading:true,
        hasError:null,
        error:null
    })

    useEffect(()=>{
        getFetch()
    },[])

let getFetch = async()=>{
   let respo= await fetch(url)
await new Promise((resolve)=>setTimeout(resolve,1500))

   if (!respo.ok){
    setstate({
        data:null,
        loading:false,
        hasError:true,
        error:respo.statusText,
        message:respo.status,
    })
    return;
}
   let data= await respo.json()
   setstate({
    data,
    loading:false,
    hasError:false,
    error:null
   })
   console.log({data})
}

    return {
 data:state.data,
 isloading:state.loading, 
 hasError:state.hasError,
    error:state.error,
  }
   
}
