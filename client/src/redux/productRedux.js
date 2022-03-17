import axios from "axios";
import { API_URI } from "../config";

const reducerName = "products";
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getProducts = ({ products }) => products.data;
export const getProduct = ({ products }) => products.product;

export const getAmountOfProducts = ({ products }) => products.data.length;

// request
export const getRequest = ({ products }) => products.request;

// cart
export const getCart = ({ products }) => products.cart;

const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");
const LOAD_PRODUCT = createActionName("LOAD_PRODUCT");
// request
const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");
// cart
const ADD_PRODUCT_TO_CART = createActionName("ADD_PRODUCT_TO_CART");
const REMOVE_PRODUCT_FROM_CART = createActionName("REMOVE_PRODUCT_FROM_CART");

const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
const loadProduct = (payload) => ({ payload, type: LOAD_PRODUCT });
// request
const startRequest = () => ({ type: START_REQUEST });
const endRequest = () => ({ type: END_REQUEST });
const errorRequest = (error) => ({ error, type: ERROR_REQUEST });
// cart
export const addProductToCart = (payload) => ({
  payload,
  type: ADD_PRODUCT_TO_CART,
});
export const removeProductFromCart = (payload) => ({
  payload,
  type: REMOVE_PRODUCT_FROM_CART,
});

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  product: [],
  cart: [],
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

export const loadProductRequest = (id) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URI}/product/${id}`);
      dispatch(loadProduct(res.data[0]));
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
    case LOAD_PRODUCT:
      return {
        ...state,
        product: action.payload,
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
    case ADD_PRODUCT_TO_CART:
      console.log(action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload),
      };
    default:
      return state;
  }
}
