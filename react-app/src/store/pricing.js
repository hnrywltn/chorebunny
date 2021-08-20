const LOAD = 'pricing/';
const ADD = 'pricing/ADD';
const EDIT = 'pricing/edit/';
const DELETE = 'pricing/delete/';



const load = pricings => ({
  type: LOAD,
  pricings
});

const add = (pricing) => ({
  type: ADD,
  pricing
});

const edit = (pricing) => ({
  type: EDIT,
  pricing
});







export const getPricings = () => async (dispatch) => {
  const res = await fetch(`/api/pricings/`);
  const pricings = await res.json();
  dispatch(load(pricings));
};

export const addPricing = payload => async dispatch => {
  console.log('PAYLOAD', payload);
  const res = await fetch(`/api/pricings/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if(res.ok) {
    const pricing = await res.json();
    dispatch(add(pricing));
    return pricing;
  } else {
    let err = await res.json();
    console.log('ERROR', err);
  }
}



const pricingsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      const newPricings = {...state};
      action.pricings.pricing.forEach(pricing => {
        newPricings[pricing.id] = pricing;
      });
      return newPricings;

    case ADD:
      const newState = {
        ...state,
        [action.pricing.id]: action.pricing,
      };
      return newState;








    default:
      return state;
  }
};

export default pricingsReducer;
