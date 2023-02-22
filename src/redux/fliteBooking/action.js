import ActionType from "./actionType";

export const setFlightBook = (data) => {
  return {
    type: ActionType.SET_BOOKING,
    payload: data,
  };
};

export const deleteFlightBook = (id) => {
  return {
    type: ActionType.DELETE_BOOKING,
    payload: id,
  };
};
