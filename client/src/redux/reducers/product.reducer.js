import * as types from "../constants/product.constants";

const initialState = {
  products: [],
  selectedProduct: null,
  totalPages: 1,
  loading : false
}

const productReducer = (state = initialState, action) =>{
  const {type, payload} = action;
  //GET ALL PRODUCTS
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {...state,loading: true};
    case types.GET_PRODUCTS_SUCCESS:
      return {...state, products: payload.products, loading: false};
    case types.GET_PRODUCTS_FAILURE:
      return {...state, loading: false};
    //CREATE NEW PRODUCT
    case types.CREATE_PRODUCT_REQUEST:
      return {...state,loading: true};
    case types.CREATE_PRODUCT_SUCCESS:
      return {...state, loading: false};
    case types.CREATE_PRODUCT_FAILURE:
      return {...state, loading: false};
    //DELETE PRODUCT
    case types.DELETE_PRODUCT_REQUEST:
      return {...state,loading: true};
    case types.DELETE_PRODUCT_SUCCESS:
      return {...state,loading:false, selectedProduct: {}};
    case types.DELETE_PRODUCT_FAILURE:
      return {...state,loading: false}
    
    default:
      return state;
  }

}

export default productReducer;