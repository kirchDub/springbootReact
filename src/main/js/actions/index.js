import axios from "axios";
import { FETCH_USER, SELECT_ALL, INSERT_INTO, DELETE_ROW } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const selectAllFrom = () => async dispatch => {
  const res = await axios.get("/api/query");
  dispatch({ type: SELECT_ALL, payload: res.data });
};

export const insertInto = params => async dispatch => {
  const res = await axios.post("/api/query/insert", params);
  dispatch({ type: INSERT_INTO, payload: res.data });
};

export const deleteRow = params => async dispatch => {
	const res = await axios.post("/api/query/delete", params);
	dispatch({ type: DELETE_ROW, payload: res.data });
};

