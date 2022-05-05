import { ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import  {getPokemonDetailsApi} from "../api/pokemon"
import Header from '../components/Pokemon/Header'

export default function Pokemon(props) {
  console.log(props)
  const {navigation,route: {params}} = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response)
        console.log(response)
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);
  console.log(params.id)

  if(!pokemon) return null;

  return (
    <ScrollView>
      <Header 
        name={pokemon.name} 
        order={pokemon.order} 
        image={ pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
        />
    </ScrollView>
  );
}