import { ADD_CHARACTERS, REMOVE_CHARACTERS } from '../actions/index.js';
import characters_json from '../data/characters.json';
import createcharacters from './helpers';


function heroes(state=[], action){
    switch(action.type){
        default: 
            return state;
        case ADD_CHARACTERS:
            let heroes = [...state, createcharacters(action.id)];
            return heroes;   

        case REMOVE_CHARACTERS:
            let heroesDeleted = state.filter(hero => hero.id !== action.id);
            return heroesDeleted;
    }
}


export default heroes;