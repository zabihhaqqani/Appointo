import moment from "moment";
import CircleCheck from "./../assets/iconComponents/CircleCheck";

export const displaySlots = (slots, selectedTimeSlot, dispatch) => {
  return (
    <div className="slots">
      {slots.slots.map((slot, index) => (
        <button
          id={selectedTimeSlot === index ? "selected-slot-btn" : ""}
          onClick={() =>
            dispatch({
              type: "SELECT_TIME_SLOT",
              payload: { slot, index },
            })
          }
          key={index}
        >
          <span>
            {moment(slot.start_time).format("h:mm a")} -{" "}
            {moment(slot.end_time).format("h:mm a")}
          </span>
          {selectedTimeSlot === index && <CircleCheck />}
        </button>
      ))}
    </div>
  );
};
