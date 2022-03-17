import axios from "axios";
import { API_URI } from "../config";

const reducerName = "products";
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getProducts = ({ products }) => products.data;

// request
export const getRequest = ({ products }) => products.request;

const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");
// request
const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
// request
const startRequest = () => ({ type: START_REQUEST });
const endRequest = () => ({ type: END_REQUEST });
const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

export const loadProductsRequest = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URI}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (error) {
      dispatch(errorRequest(error));
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
    case START_REQUEST:
      return {
        ...state,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case END_REQUEST:
      return {
        ...state,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case ERROR_REQUEST:
      return {
        ...state,
        request: {
          pending: false,
          error: action.error,
          success: false,
        },
      };
    default:
      return state;
  }
}
