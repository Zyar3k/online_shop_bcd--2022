import axios from "axios";
const reducerName = "products";
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getProducts = ({ products }) => products.data;

const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");

const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });

const initialState = {
  data: [],
};

export const loadProductsRequest = () => {
  return async (dispatch) => {
    try {
      await axios
        .get(`http://localhost:5000/api/products`)
        .then((res) => dispatch(loadProducts(res.data)));
    } catch (error) {
      console.warn(error);
    }
  };
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
