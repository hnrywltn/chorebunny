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

const delChore = (choreId) => ({
  type: DELETE,
  choreId
})

export const getChores = () => async (dispatch) => {
  const res = await fetch(`/api/chores/`);
  if (res.ok) {
    const allChores = await res.json();
    dispatch(load(allChores));
    return allChores
  }
};

export const addChore = (payload) => async (dispatch) => {
  const res = await fetch(`/api/chores/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (res.ok) {
    const chore = res.json();
    dispatch(add(chore))
    return chore;
  }
}

export const deleteChore = (id) => async (dispatch) => {
  const res = await fetch(`/api/chores/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  if (res.ok) {
    const data = res.json();
    dispatch(delChore(data.message))
    return data.message
  }
}

export const editChore = (id, payload) => async (dispatch) => {
  const res = await fetch(`/api/chores/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (res.ok) {
    const data = res.json();
    dispatch(edit(data))
  }
}

// export const editChore = (id) => async(dispatch)

const initialState = {}
const choresReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const newChores = {};
      action.chores.chores.forEach(chore => {
        newChores[chore.id] = chore;
      });
      return newChores;
    case ADD: {
      return {
        ...state,
        [action.chore.id]: action.chore
      }
    }
    case DELETE: {
      const newState = { ...state }
      delete newState[action.choreId]
      return newState
    }
    case EDIT: {
      return {
        ...state,
        [action.chore.id]: action.chore
      }
    }
    default:
      return state;
  }
};

export default choresReducer;
