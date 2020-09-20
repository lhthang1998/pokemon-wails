package main

import (
	"encoding/json"
	"github.com/leaanthony/mewn"
	"github.com/sirupsen/logrus"
	"github.com/wailsapp/wails"
	"net/http"
	"sort"
)

func basic() string {
	return "World!"
}

func fetchPokemons(url string) PokemonList {

	pkms := PokemonList{
		Error:    nil,
		Pokemons: []Pokemon{},
	}
	res, err := http.Get(url)

	if err != nil {
		pkms.Error = err
		return pkms
	}

	defer res.Body.Close()
	var response Response

	err = json.NewDecoder(res.Body).Decode(&response)

	pkms.NextUrl = response.NextUrl
	pkms.PreviousUrl = response.PreviousUrl

	for _, pkm := range response.Results {
		pokemon := Pokemon{
			Id:    GetId(pkm.Url),
			Name:  pkm.Name,
			Url:   pkm.Url,
			Image: GetImage(pkm.Url),
		}
		pkms.Pokemons = append(pkms.Pokemons, pokemon)
	}

	logrus.Println(pkms.Pokemons)
	d := make(chan Pokemon)
	for i, _ := range pkms.Pokemons {
		go func(i int) {
			pkm := GetDetail(pkms.Pokemons[i])
			d <- *pkm
		}(i)
	}

	var details []Pokemon
	for i := 0; i < len(pkms.Pokemons); i++ {
		details = append(details, <-d)
	}

	sort.SliceStable(details, func(i, j int) bool {
		return details[i].Id < details[j].Id
	})
	pkms.Pokemons = details
	return pkms
}

func main() {

	js := mewn.String("./frontend/build/static/js/main.js")
	css := mewn.String("./frontend/build/static/css/main.css")

	app := wails.CreateApp(&wails.AppConfig{
		Width:  1024,
		Height: 768,
		Title:  "pokemon-wails",
		JS:     js,
		CSS:    css,
		Colour: "#131313",
	})
	app.Bind(basic)
	app.Bind(fetchPokemons)
	app.Run()
}
