import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map(mon=>
        <PokemonCard key={mon.name} mon={mon}/>
      )}
    </Card.Group>
  );
}

export default PokemonCollection;
