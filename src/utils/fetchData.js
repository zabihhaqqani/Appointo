import axios from "axios";
import { toast } from "react-toastify";

export const fetchData = async (dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });

  try {
    const response = await axios.get(
      "https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30"
    );
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
    dispatch({ type: "SET_LOADING", payload: false });
  } catch (err) {
    console.error(err.message);
    toast.error("Error fetching data come back later!");
  }
};
