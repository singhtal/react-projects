import { ADD_CHARACTERS } from '../actions/index.js';
import characters_json from '../data/characters.json';

function createCharacters(id){
    let characters = characters_json.find(c => c.id === id);
    return characters;
}

export default createCharacters;