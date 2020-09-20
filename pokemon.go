package main

import (
	"encoding/json"
	"fmt"
	"github.com/sirupsen/logrus"
	"net/http"
	"strconv"
	"strings"
)

const URL = "https://pokeapi.co/api/v2/pokemon/"

type Pokemon struct {
	Id    int64 `json:"id"`
	Name  string `json:"name"`
	Url   string `json:"url"`
	Image string `json:"image"`
	Types []Type `json:"types"`
}

type DetailPokemon struct {
	Types []Types `json:"types"`
}

type Types struct {
	Type Type `json:"type"`
}

type Type struct {
	Name string `json:"name"`
	Url  string `json:"url"`
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

func GetId(url string) int64 {
	arr := strings.TrimPrefix(url, URL)
	id,_ := strconv.ParseInt(strings.TrimSuffix(arr, "/"),10,64)
	return id
}

func GetImage(url string) string {
	id := GetId(url)
	return "https://pokeres.bastionbot.org/images/pokemon/" + fmt.Sprint(id) + ".png"
}

func GetDetail(pkm Pokemon) *Pokemon {
	pokemon := Pokemon{
		Id:    pkm.Id,
		Name:  pkm.Name,
		Url:   pkm.Url,
		Image: pkm.Image,
		Types: []Type{},
	}

	res, err := http.Get(URL + fmt.Sprint(pkm.Id))

	if err != nil {
		return nil
	}

	defer res.Body.Close()
	var response DetailPokemon

	logrus.Println("Res", res.Body)
	err = json.NewDecoder(res.Body).Decode(&response)
	for _, t := range response.Types {
		pokemon.Types = append(pokemon.Types, t.Type)
	}
	return &pokemon
}
