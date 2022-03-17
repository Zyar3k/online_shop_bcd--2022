const reducerName = "products";
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getProducts = ({ products }) => products.data;

export const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
