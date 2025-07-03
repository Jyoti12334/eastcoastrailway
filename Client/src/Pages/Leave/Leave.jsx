import { Routes, Route } from "react-router-dom";
import DateFilterBox from "../../components/Leave/components/DateFilterBox";
import LeaveList from "../../components/Leave/components/LeaveList";
import LeaveForm from "../../components/Leave/components/LeaveForm";
import EditForm from "../../components/Leave/components/EditForm";
import { useState } from "react";

function Leave({ showLogin, isLoggedIn }) {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFilter = (from, to) => {
    setFromDate(from);
    setToDate(to);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {!showLogin && <DateFilterBox onFilter={handleFilter} />}
            <LeaveList
              fromDate={fromDate}
              toDate={toDate}
              isLoggedIn={isLoggedIn}
              showLogin={showLogin}
            />
          </>
        }
      />
      <Route
        path="leave/form"
        element={
          isLoggedIn ? <LeaveForm /> : <p>Please login to access this page.</p>
        }
      />
      <Route
        path="/edit/:id"
        element={
          isLoggedIn ? <EditForm /> : <p>Please login to access this page.</p>
        }
      />
    </Routes>
  );
}

export default Leave;
