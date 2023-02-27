import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon]=useState([])
  const [searchName, setSeachName]=useState('')

  useEffect(()=>
  {
    fetch(`http://localhost:3001/pokemon`)
    .then(res=>res.json())
    .then(mons=>setPokemon(mons))
  }, [])

 
  let searchedMons=pokemon.filter(mon=>mon.name.includes(searchName))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search setSeachName={setSeachName}/>
      <br />
      <PokemonCollection pokemon={searchedMons}/>
    </Container>
  );
}

export default PokemonPage;
