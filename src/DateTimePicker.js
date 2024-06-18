import React, { useState } from "react";
import moment from "moment";
import "./DateTimePicker.css";
moment.locale("en");

const DateTimePicker = ({ onChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(
    value ? moment(value) : moment()
  );

  const handleDateChange = (event) => {
    const date = moment(event.target.value, "YYYY-MM-DD");
    if (date.isValid()) {
      setSelectedDate((prevDate) => {
        const newDate = moment(prevDate).set({
          year: date.year(),
          month: date.month(),
          date: date.date(),
        });
        if (onChange) {
          onChange(newDate);
        }
        return newDate;
      });
    }
  };

  const handleTimeChange = (event) => {
    const time = event.target.value.split(":");
    const date = moment(selectedDate).set({
      hour: time[0],
      minute: time[1],
    });
    if (date.isValid()) {
      setSelectedDate(date);
      if (onChange) {
        onChange(date);
      }
    }
  };

  return (
    <div className="datetime-picker">
      <div className="picker-dropdown">
        <input
          type="date"
          value={selectedDate.format("YYYY-MM-DD")}
          onChange={handleDateChange}
        />
        <input
          type="time"
          value={selectedDate.format("HH:mm")}
          onChange={handleTimeChange}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
