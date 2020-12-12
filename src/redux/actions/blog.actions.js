import * as types from "../constants/blog.constants";
import api from "../../apiService";

import { toast } from "react-toastify";

const blogsRequest = (pageNum) => async (dispatch) => {
  dispatch({ type: types.GET_BLOGS_REQUEST, payload: null });
  try {
    // TODO
    const res = await api.get(`api/blogs?page=${pageNum}`);
    dispatch({ type: types.GET_BLOGS_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_BLOGS_FAILURE, payload: null });
  }
};

const blogsAdd = ({ title, content, images }) => async (dispatch) => {
  dispatch({ type: types.ADD_BLOG_REQUEST, payload: null });
  try {
    const res = await api.post(`/api/blogs`, { title, content, images });
    dispatch({ type: types.ADD_BLOG_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.ADD_BLOG_FAILURE, payload: null });
  }
};
const blogActions = {
  blogsRequest,
  blogsAdd,
};
export default blogActions;
