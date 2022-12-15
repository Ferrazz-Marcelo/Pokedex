import { Grid } from "@mui/material"
import { Box, Container } from "@mui/system"
import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import NavBar from "../Components/Navbar"
import PokemonCard from "../Components/PokemonCard"

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() =>{
        getPokemons()
    },[])
    const getPokemons = () => {
        var endpoints = []
        for(var i = 1;i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
    };

    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if(name === "") {
            getPokemons();
        }
        for(var i in pokemons) {
            if(pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    }
    
    return (
        <>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth="xg">
                <Grid container spacing={3}>
                    {pokemons.map((pokemon, key) => (
                    <Grid item xs={2} key={key}>
                        <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};