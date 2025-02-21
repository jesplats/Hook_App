import { useEffect, useState } from 'react';


let localcache={}


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
    },[url])



    let setLoadingState=()=>{
        setstate({
            data:null,
            loading:true,
            hasError:null,
            error:null
        })
    }

let getFetch = async()=>{
if(localcache[url]){
    setstate({
        data:localcache[url],
        isloading:false,
        hasError:false,
        error:null
    })
    return;
}

    setLoadingState();

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


    // mensaje del cache
   

    return;
}
   let data= await respo.json()
   
   localcache[url]=data
   console.log(localcache)
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
