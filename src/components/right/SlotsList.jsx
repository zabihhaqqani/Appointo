import { useDataContext } from "../../context/Context";
import { Scrollbars } from "react-custom-scrollbars";
import { Oval } from "react-loader-spinner";

import "./SlotsList.css";
import { displaySlots } from "../../utils/displaySlots";

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
            height: 250,
            scrollbarWidth: 'thin',
            scrollbarColor: 'dark',
          }}>
          {displaySlots(slots, selectedTimeSlot, dispatch)}
        </Scrollbars>
      ) : (
        !loading && <p className="no-slots">No Slots available for the day</p>
      )}

    </div>
  );
};

export default SlotsList;

