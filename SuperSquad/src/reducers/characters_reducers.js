import { ADD_CHARACTERS, REMOVE_CHARACTERS } from '../actions/index.js';
import createcharacters from './helpers';
import characters_json from '../data/characters.json';


function characters(state=characters_json, action){
    switch(action.type){
        case ADD_CHARACTERS:
            let characters = state.filter(item => item.id !== action.id);
            return characters;

        case REMOVE_CHARACTERS:
            let characterUnremoved = [...state, createcharacters(action.id)];
            return characterUnremoved;
            
        default: 
            return state;
    }
}

export default characters;