import { useDataContext } from "../../context/Context";
import moment from "moment";
import CircleCheck from "../../assets/iconComponents/CircleCheck";
import { Scrollbars } from "react-custom-scrollbars";
import { Oval } from "react-loader-spinner";
import "./SlotsList.css";

const SlotsList = () => {
  const { slots, selectedTimeSlot, dispatch, loading } = useDataContext();

  return (
    <div className="time-slots-container">
      {loading ? (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#378760"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
        />
      ) : slots?.slots?.length > 0 ? (
        <Scrollbars style={{
            width: "100%",
            // width:"fit-content",
            // width:"25rem",
            // maxWidth: 380,
            height: 250,
            // overflowY: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'dark',
           
            // Add more media queries as needed
          }}>
          <div className="slots">
            {slots.slots.map((slot, index) => (
              <button
                id={selectedTimeSlot === index ? "selected-slot-btn" : ""}
                onClick={() =>
                  dispatch({
                    type: "SLOT_TIME_SELECTED",
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
        </Scrollbars>
      ) : (
        !loading && <p className="no-slots">No Slots available for the day</p>
      )}
    </div>
  );
};

export default SlotsList;
