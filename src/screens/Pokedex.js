import { SafeAreaView,  StyleSheet, StatusBar } from 'react-native'
import React, {useState, useEffect} from 'react'
import {getPokemonApi, getPokemonDetailsByUrlApi} from "../api/pokemon"
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  //console.log("pokemons---->",pokemons);
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    (async () =>{
      await loadPokemons();
    })();
  },[]);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next)
      //console.log(response)
      const pokemonsArray = [];
      for await(const pokemon of response.results ) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        
        pokemonsArray.push({
          id:pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <SafeAreaView >
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop:StatusBar.currentHeight
  },
  profile: {
      flexDirection: 'row',
      backgroundColor: '#EEE',
  },
  imageProfile: {
      width: 34,
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 44/2,
      marginLeft: 10,
      height: 34
  },
  name: {
      alignSelf: 'center',
      marginLeft: 10,
      fontSize: 16
  }
});