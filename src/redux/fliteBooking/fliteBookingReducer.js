import ActionType from "./actionType";

const initialState = {
  booking: [],
};

const FliteBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_BOOKING:
      return {
        ...state,
        booking: [...state.booking, action.payload],
      };
    case ActionType.DELETE_BOOKING:
      const elementIdToRemove = action.payload;
      const updatedElements = state.booking.filter(
        (element) => element.id !== elementIdToRemove
      );
      return {
        ...state,
        booking: updatedElements,
      };
    default:
      return state;
  }
};

export default FliteBookingReducer;
