import { useDataContext } from "../../context/Context";
import moment from "moment";
import "./Right.css";
import SlotsList from "./SlotsList";

const Right = () => {
  const { slots } = useDataContext();

  const formattedDate = moment(slots?.date).format("dddd, MMM  D");

  const variants = slots?.slots?.map((time) => {
    const startTime = moment(time?.start_time);
    const endTime = moment(time?.end_time);

    const durationInHours = endTime.diff(startTime, "minutes");

    return durationInHours;
  });

  const uniqueVariants = new Set(variants);

  const uniqueVariantsArray = [...uniqueVariants];

  return (
    <div className="right-container">
      <div className="variants-container">
        <label className="variant-label">SELECT FROM VARIANTS</label>
        <select name="" id="">
          {uniqueVariantsArray?.map((variation, index) => (
            <option key={index} className="option" value="">
              {variation} min
            </option>
          ))}
        </select>
      </div>

      <hr />

      <div>
        <span className="selected-date">
          <span>{formattedDate}</span> - AVAILABLE SLOTS
        </span>
      </div>
      <SlotsList />
    </div>
  );
};

export default Right;
