import { useDataContext } from "../../context/Context";
import moment from "moment";
import "./Right.css";
import SlotsList from "./SlotsList";
import { calculateVariants } from "../../utils/calculateVariants";

const Right = () => {
  const { slots ,selectedDate} = useDataContext();

  const formattedDate = moment(selectedDate).format("dddd, MMM  D");

  const variants = calculateVariants(slots);

  const uniqueVariants = new Set(variants);
  const uniqueVariantsArray = [...uniqueVariants];

  return (
    <div className="right-container">
      
      <div className="variants-container">
        <label className="variant-label">SELECT FROM VARIANTS</label>
        <select name="" id="">
          {uniqueVariantsArray?.map((variation, index) => (
            <option key={index}  value={variation}>
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
