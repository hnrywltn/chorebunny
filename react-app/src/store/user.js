// import { csrfFetch } from './csrf'; // MANKE A CSRF FILE FOR !GET REQUESTS
const LOAD = 'get/users/';
// const EDIT_BIO = 'bio/EDIT_BIO'


const load = users => ({
  type: LOAD,
  users
});

// const updateUser = (users) => ({
//   type: EDIT_BIO,
//   users
// })

// thunk creator:
export const getUsers = () => async (dispatch) => {
  const res = await fetch('/api/users');
  const users = await res.json();
  dispatch(load(users));
}


//reducer:

// //* edit bio thunk
// export const updateBioThunk = (id, user) => async(dispatch) => {
//   console.log("this is id", id, user)
//   const res = await fetch(`/api/users/${id}`, {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(user)
//   })
//   const data = await res.json()
//   console.log("THIS IS DATA", data)
//   dispatch(updateUser(data))
//   return data
// }

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      const newUsers = {...state};
      action.users.users.forEach(user => {
        newUsers[user.id] = user;
      });
      return newUsers;
    default:
      return state;
    // case EDIT_BIO: //Reducer for user edit
    //   return {
    //     ...state,
    //     [action.users.userId]: action.users
    //   }
  }
}



export default usersReducer;
