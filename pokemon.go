package main

import (
	"strings"
)

type Pokemon struct {
	Id    string `json:"id"`
	Name  string `json:"name"`
	Url   string `json:"url"`
	Image string `json:"image"`
}

type PokemonList struct {
	Pokemons    []Pokemon `json:"pokemons"`
	PreviousUrl string    `json:"previous"`
	NextUrl     string    `json:"next"`
	Error       error     `json:"error"`
}

type Response struct {
	PreviousUrl string    `json:"previous"`
	NextUrl     string    `json:"next"`
	Results     []Pokemon `json:"results"`
}

func GetId(url string) string {
	arr := strings.TrimPrefix(url, "https://pokeapi.co/api/v2/pokemon/")
	return strings.TrimSuffix(arr, "/")
}

func GetImage(url string) string {
	id := GetId(url)
	return "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png"
}
