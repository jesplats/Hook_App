
import { useFectch } from "../Hook/useFectch";
import { UseCounter } from "../Hook/useCounter";
import { LoadingMessage } from "../example/LoadingMessage";
import { PokemonCard } from "../example/PokemonCard";

export const Layout = () => {
  
  let { counter, increment, decrementar } = UseCounter(1);
  let { data, isloading } = useFectch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  
  return (
    <>
      <h1>Información del Pokémon</h1>
      <hr />
      
      {isloading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard id={counter}
         name={data.name}
         Sprite={[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
                data.sprites.back_shiny
         ]}
         />
      )}

      {/* Renderizado seguro de 'data?.name' solo cuando los datos estén disponibles */}
    

      <hr />
      <button className="btn btn-primary" onClick={increment}>Incrementar</button>
      <button className="btn btn-primary" onClick={decrementar}>Decrementar</button>
    </>
  );
};
