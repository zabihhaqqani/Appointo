export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "SET_SELECTED_DATE":
      return { ...state, loading: false, selectedDate: action.payload };
    case "SELECT_TIME_SLOT":
      return {
        ...state,
        loading: false,
        selectedTimeSlot: action.payload.index,
      };

    default:
      return state;
  }
};
