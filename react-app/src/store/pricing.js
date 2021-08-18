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
  const res = await fetch(`/api/pricing`);
  const pricings = await res.json();
  dispatch(load(pricings));
};


const pricingsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      const newPricings = {...state};
      action.pricings.pricing.forEach(pricing => {
        newPricings[pricing.id] = pricing;
      });
      return newPricings;
    default:
      return state;
  }
};

export default pricingsReducer;
