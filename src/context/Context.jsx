import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import moment from "moment";
import { fetchData } from "../utils/fetchData";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    data: [],
    loading: true,
    selectedDate: new Date(),
    selectedTimeSlot: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const formattedDate = moment(state?.selectedDate).format("YYYY-MM-DD");

  // slots selected by user
  const slots = [...state?.data]?.find((dates) => dates.date === formattedDate);

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  console.log(formattedDate)
  return (
    <DataContext.Provider value={{ ...state, dispatch, slots }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
