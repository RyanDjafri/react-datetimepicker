import React, { useState } from "react";
import DateTimePicker from "./DateTimePicker";
import moment from "moment";

const App = () => {
  const [dateTime, setDateTime] = useState(null);

  const handleDateChange = (date) => {
    setDateTime(date);
  };

  return (
    <div>
      <h1>React Date-Time Picker</h1>
      <DateTimePicker value={dateTime} onChange={handleDateChange} />
      {dateTime && (
        <p>
          Selected Date and Time: {moment(dateTime).format("MM/DD/YYYY HH:mm")}
        </p>
      )}
    </div>
  );
};

export default App;
