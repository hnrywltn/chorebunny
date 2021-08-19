const LOAD = 'chore/';
const ADD = 'chore/ADD';
const EDIT = 'chore/edit/';
const DELETE = 'chore/delete/';



const load = chores => ({
  type: LOAD,
  chores
});

const add = (chore) => ({
  type: ADD,
  chore
});

const edit = (chore) => ({
  type: EDIT,
  chore
});







export const getChores = () => async (dispatch) => {
  const res = await fetch(`/api/chores`);
  const chores = await res.json();
  dispatch(load(chores));
};

export const addChore = (chore) => async (dispatch) => {
  // const res = await fetch(`/api/chore/:id`);
  //dispatch(add(chore));
}


const choresReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      const newChores = {...state};
      action.chores.chores.forEach(chore => {
        newChores[chore.id] = chore;
      });
      return newChores;
    default:
      return state;
  }
};

export default choresReducer;
