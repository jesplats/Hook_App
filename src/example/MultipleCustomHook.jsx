import { useFectch } from "../Hook/useFectch"
import { UseCounter } from "../Hook/useCounter";
export const MultipleCustomHook = () => {
  
  //fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  
  let {counter,increment,decrementar}=UseCounter(1);
  let {data, isloading} = useFectch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  
    return (
    
    <>
    <h1> Imformacion del pokemon</h1>
    <hr/>

{isloading && <p>Cargando...</p>}
<h1>{data?.name}</h1>
    <hr/>
    <button className="btn btn-primary" onClick={increment}>incrementar</button>
<button className="btn btn-primary" onClick={ decrementar }>decrementar</button>

    </>
    
  )
 // <pre>{JSON.stringify(data,null,2)}</pre>
}

