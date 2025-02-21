import { useFectch } from "../Hook/useFectch"
export const MultipleCustomHook = () => {
  
  //fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  
  
  let {data,isloading}=useFectch('https://pokeapi.co/api/v2/pokemon/ditto');
  
    return (
    
    <>
    <h1> Imformacion del pokemon</h1>
    <hr/>

{
    isloading ? <h1>Cargando...</h1>:
    <h2>{data?.name}</h2>
}
    <pre>{JSON.stringify(data,null,2)}</pre>
    </>
    
  )
}

