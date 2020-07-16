import { GET_EVENTS, DELETE_EVENT, ADD_EVENT } from "./types";
import axios from "axios";

export const getEvents = () => async (dispatch) => {
  const res = await axios.get("http://localhost:3000/events");

  dispatch({
    type: GET_EVENTS,
    payload: res.data,
  });
};

export const addEvent = (event) => async (dispatch) => {
  const res = await axios.post("http://localhost:3000/events", event);
  dispatch({
    type: ADD_EVENT,
    payload: res.data,
  });
};

export const deleteEvent = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3000/events/${id}`);
  dispatch({
    type: DELETE_EVENT,
    payload: id,
  });
};
