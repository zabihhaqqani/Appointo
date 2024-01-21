import axios from "axios";

export const fetchData = async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get(
      "https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30"
    );
    dispatch({ type: "FETCH_DATA", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.error(err.message);
  }
};
