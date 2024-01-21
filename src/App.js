import "./App.css";
import LeftBands from "./assets/bands/LeftBands";
import RightBands from "./assets/bands/RightBands";
import Navbar from "./components/navbar/Navbar";
import CalendarView from "./pages/calendarView/CalendarView";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Navbar />
      <RightBands />
      <LeftBands />
      <div className="App">
        <CalendarView />
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
