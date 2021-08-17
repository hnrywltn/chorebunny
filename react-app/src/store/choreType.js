// import { csrfFetch } from './csrf'; // MANKE A CSRF FILE FOR !GET REQUESTS
const LOAD = 'choreType/';
// const ADD_ONE = 'choreType/ADD_ONE';
// const EDIT = 'choreType/EDIT';
// const REMOVE_PLANT = 'choreType/REMOVE';


const load = choreTypes => ({
  type: LOAD,
  choreTypes
});



// const add = choreType => ({
//   type: ADD_ONE,
//   choreType
// });

// const edit = choreType => ({
//   type: EDIT,
//   choreType
// });

// thunk creator:
export const getChoreTypes = () => async (dispatch) => {
  const res = await fetch('api/chore_types');
  const choreTypes = await res.json();
  dispatch(load(choreTypes));
}



//reducer:
const choreTypeReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      const newChoreTypes = {...state};
      action.choreTypes.chore_types.forEach(choreType => {
        newChoreTypes[choreType.id] = choreType;
      });
      return newChoreTypes;
    default:
      return state;
  }
}




export default choreTypeReducer;
