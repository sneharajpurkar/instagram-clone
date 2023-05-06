import { useReducer } from 'react';

export const initialState = { email: 'Taylor', age: 0 };
function reducer(state, action) {
    console.log(action, "action")
    console.log(state,"state")
    switch (action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
                name: action.nextName,
                email: state.email
            };
        }
        case 'decremented_age':{
            return {
                name: state.name,
                age: state.age - 1
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}



export default  reducer;