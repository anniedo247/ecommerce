import { toast } from "react-toastify";
import api from "../apiService";
import * as types from "../constants/product.constants";

const getAllProducts = () => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST, payload: null });
  try {
    const res = await api.get("/products");
    if (res.data.success === true) {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data.data });
    }
  } catch (error) {
    dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: error });
  }
};

const addProduct = ({name,description,dimesions,color, weight,material,price,images,categories}) => async (dispatch) =>{
  dispatch({type: types.CREATE_PRODUCT_REQUEST, payload: null});
  try {
    const res = await api.post("/products/add",{name, description,dimesions,color, weight,material,price, images, categories})
    console.log("create",res.data)
    dispatch({type: types.CREATE_PRODUCT_SUCCESS, payload: res.data.data});
    toast.success("Product created")
  } catch (error) {
    dispatch({ type: types.CREATE_PRODUCT_FAILURE, payload: error });
  }
}

const deleteProduct = (productId) => async (dispatch) =>{
  dispatch({type: types.DELETE_PRODUCT_REQUEST, payload: null});
  try {
    const res = await api.delete(`/products/${productId}`)
    console.log("delete",res)
    dispatch({type: types.DELETE_PRODUCT_SUCCESS, payload: res.data});
    toast.success("Product deleted")
    dispatch(getAllProducts())

  } catch (error) {
    dispatch({ type: types.DELETE_PRODUCT_FAILURE, payload: error });
  }
}

const productActions = {
  getAllProducts,
  addProduct,
  deleteProduct,
}

export default productActions;