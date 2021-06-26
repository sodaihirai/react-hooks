import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";

import BookablePage from "./components/BookablePage";
import BookingsPage from "./components/Bookings/BookingsPage";
import UsersPage from "./components/UserPage";
import UserPicker from "./components/UserPicker";

export default function App () {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt/>
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen/>
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers/>
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>

          <UserPicker/>
        </header>

        <Routes>
          <Route path="/bookings" element={<BookingsPage/>}/>
          <Route path="/bookables" element={<BookablePage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}
