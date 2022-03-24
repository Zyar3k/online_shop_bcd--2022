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
export const getTotal = ({ products }) => products.total;

// search
export const getSearchedProducts = ({ products }) => products.searchedProducts;

const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");
const LOAD_PRODUCT = createActionName("LOAD_PRODUCT");
// request
const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");
// cart
const ADD_PRODUCT_TO_CART = createActionName("ADD_PRODUCT_TO_CART");
const PLUS_PRODUCT_IN_CART = createActionName("PLUS_PRODUCT_IN_CART");
const REMOVE_PRODUCT_FROM_CART = createActionName("REMOVE_PRODUCT_FROM_CART");
const MINUS_PRODUCT_FROM_CART = createActionName("MINUS_PRODUCT_FROM_CART");
const CALCULATE_CART_TOTAL = createActionName("CALCULATE_CART_TOTAL");
const CLEAR_CART = createActionName("CLEAR_CART");

// search
const SEARCH_PRODUCTS = createActionName("SEARCH_PRODUCTS");

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
export const plusProductInCart = (payload) => ({
  payload,
  type: PLUS_PRODUCT_IN_CART,
});
export const removeProductFromCart = (payload) => ({
  payload,
  type: REMOVE_PRODUCT_FROM_CART,
});
export const minusProductFromCart = (payload) => ({
  payload,
  type: MINUS_PRODUCT_FROM_CART,
});
export const calculateCartTotal = (payload) => ({
  payload,
  type: CALCULATE_CART_TOTAL,
});
export const clearCart = () => ({ type: CLEAR_CART });

// search
export const searchProductsAction = (payload) => ({
  payload,
  type: SEARCH_PRODUCTS,
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
  total: 0,
  searchedProducts: [],
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
      const productAdded = action.payload;
      productAdded.quantity = 1;
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case PLUS_PRODUCT_IN_CART:
      const cartProductId = action.payload;
      const cartProduct = state.cart.find(
        (product) => product._id === cartProductId
      );
      cartProduct.quantity += 1;
      return {
        ...state,
        cart: [...state.cart],
      };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload),
      };
    case MINUS_PRODUCT_FROM_CART:
      const cartProductId2 = action.payload;
      const cartProduct2 = state.cart.find(
        (product) => product._id === cartProductId2
      );
      cartProduct2.quantity -= 1;
      if (cartProduct2.quantity === 0) {
        return {
          ...state,
          cart: state.cart.filter((product) => product._id !== action.payload),
        };
      }

      return {
        ...state,
        cart: [...state.cart],
      };
    case CALCULATE_CART_TOTAL:
      const cartTotal = state.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      return {
        ...state,
        total: cartTotal,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        total: 0,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchedProducts: state.data.filter((product) => {
          return (
            product.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            product.tag.toLowerCase().includes(action.payload.toLowerCase())
          );
        }),
      };

    default:
      return state;
  }
}
