import characters_json from '../data/characters.json';
import { ADD_CHARACTERS } from '../actions/index.js';
import { combineReducers } from 'redux';
import characters from './characters_reducers';
import heroes from './heroes_reducers';



function createCharcaters(id){
    let characters = characters_json.find(c => c.id === id);
    return characters;
}

const rootReducers = combineReducers({
    characters,
    heroes
})

export default rootReducers;