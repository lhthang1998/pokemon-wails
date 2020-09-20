class Type {
    name: String;
    url: String;
    color:String;

    constructor(name,url,color){
        this.name = name;
        this.url = url;
        this.color = color;
    }
}


const Types:Type[]=[
    new Type('normal','https://pokeapi.co/api/v2/type/1/','white'),
    new Type('fighting','https://pokeapi.co/api/v2/type/2/','white'),
    new Type('flying','https://pokeapi.co/api/v2/type/3/','white'),
    new Type('poison','https://pokeapi.co/api/v2/type/4/','white'),
    new Type('ground','https://pokeapi.co/api/v2/type/5/','white'),
    new Type('rock','https://pokeapi.co/api/v2/type/6/','white'),
    new Type('bug','https://pokeapi.co/api/v2/type/7/','white'),
    new Type('ghost','https://pokeapi.co/api/v2/type/8/','white'),
    new Type('steel','https://pokeapi.co/api/v2/type/9/','white'),
    new Type('fire','https://pokeapi.co/api/v2/type/10/','white'),
    new Type('water','https://pokeapi.co/api/v2/type/11/','white'),
    new Type('grass','https://pokeapi.co/api/v2/type/12/','white'),
    new Type('electric','https://pokeapi.co/api/v2/type/13/','white'),
    new Type('psychic','https://pokeapi.co/api/v2/type/14/','white'),
    new Type('ice','https://pokeapi.co/api/v2/type/15/','white'),
    new Type('dragon','https://pokeapi.co/api/v2/type/16/','white'),
    new Type('dark','https://pokeapi.co/api/v2/type/17/','white'),
    new Type('fairy','https://pokeapi.co/api/v2/type/18/','white'),
    new Type('unknown','https://pokeapi.co/api/v2/type/19/','white'),
    new Type('shadow','https://pokeapi.co/api/v2/type/20/','white'),
]

export default {Type,Types}