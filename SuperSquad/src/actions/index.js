export const ADD_CHARACTERS = 'ADD_CHARACTERS';

export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTERS,
        id
    }
    return action;
}

export const REMOVE_CHARACTERS = 'REMOVE_CHARACTERS';

export function removeCharacterById(id){
    const action = {
        type: REMOVE_CHARACTERS,
        id
    }

    return action;
}