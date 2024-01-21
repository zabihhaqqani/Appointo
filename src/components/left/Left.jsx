import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDataContext } from "../../context/Context";

import "./Left.css";

const Left = () => {
  const { dispatch } = useDataContext();
  return (
    <div className="left-container">
      <div>
        <h2>Test Service</h2>
        <p>
          <strong>Timezone: </strong>
          <span>{Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
        </p>
      </div>
      <Calendar
        onChange={(date) => {
          dispatch({ type: "SET_SELECTED_DATE", payload: date });
          dispatch({ type: "SELECT_TIME_SLOT", payload: "" });
        }}
      />
    </div>
  );
};

export default Left;
