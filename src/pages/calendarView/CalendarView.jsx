import Footer from "../../components/footer/Footer";
import Left from "../../components/left/Left";
import Right from "../../components/slots/Right";

import "./CalendarView.css";

const CalendarView = () => {
  return (
    <div className="container">
      <div className="calendar-view-container">
        <Left />
        <Right />
      </div>
      <Footer />
    </div>
  );
};

export default CalendarView;
