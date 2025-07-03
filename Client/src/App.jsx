import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Appointment from "./Pages/Appointments/Appointments.jsx";
import Leave from "./Pages/Leave/Leave.jsx";

function HomePageSelector() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome! Choose an option:</h2>
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => navigate("/leave")}
          style={{
            padding: "10px 20px",
            marginRight: "20px",
            fontSize: "16px",
          }}
        >
          Leave Management
        </button>
        <button
          onClick={() => navigate("/appointment")}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Appointment Management
        </button>
      </div>
    </div>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Navbar
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Routes>
        <Route path="/" element={<HomePageSelector />} />

        <Route
          path="/leave/*"
          element={
            <Leave
              showLogin={showLogin}
              isLoggedIn={isLoggedIn}
              setShowLogin={setShowLogin}
            />
          }
        />

        <Route
          path="/appointment/*"
          element={
            <Appointment
              showLogin={showLogin}
              isLoggedIn={isLoggedIn}
              setShowLogin={setShowLogin}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
