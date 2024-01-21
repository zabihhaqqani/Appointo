export const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    case "FETCH_DATA":
      return { ...state, loading: false, data: action.payload };
    case "SET_DATE":
      return { ...state, loading: false, selectedDate: action.payload };
    case "SLOT_TIME_SELECTED":
      return {
        ...state,
        loading: false,
        selectedTimeSlot: action.payload.index,
      };

    default:
      return state;
  }
};
