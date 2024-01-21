import "./App.css";
import LeftBands from "./assets/bands/LeftBands";
import RightBands from "./assets/bands/RightBands";
import Navbar from "./components/navbar/Navbar";
import CalendarView from "./pages/calendarView/CalendarView";

const App = () => {
  return (
    <div>
      <Navbar />
      <RightBands />
      <LeftBands />
      <div className="App">
        <CalendarView />
      </div>
    </div>
  );
};

export default App;
