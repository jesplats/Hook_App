export const PokemonCard = ({ id, Sprite,name = [] }) => {
    return (
      <section style={{ height: 200 }}>
        <h2>{id} - {name} </h2>
      
      <div>
        {
            Sprite.map((img, index) => (
                <img key={index} src={img} alt={name} />
            ))
            }
      </div>
      </section>
    );
  };
  