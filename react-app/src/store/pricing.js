const LOAD = 'pricing/';
const ADD = 'pricing/ADD';
const EDIT = 'pricing/edit/';
const DELETE_PRICING = 'pricing/DELETE_PRICING';



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

const deletePricing = (price) => ({
  type: DELETE_PRICING,
  price
})





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


//* delete thunk for pricing

export const deletePricingThunk = (id) => async(dispatch) => {
  const res = await fetch(`/api/pricings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if(res.ok){
  const deletedPrice = await res.json()
  dispatch(deletePricing(deletedPrice))
  }
}



const initialState = {}
const pricingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const newPricings = {};
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
    case DELETE_PRICING:
      const priceToDelete = {...state}
      delete priceToDelete[action.price.id]
      return priceToDelete
    default:
      return state;
  }
};

export default pricingsReducer;
