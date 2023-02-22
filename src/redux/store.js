import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import FliteBookingReducer from "./fliteBooking/fliteBookingReducer";

const store = createStore(FliteBookingReducer, composeWithDevTools());
export default store;
