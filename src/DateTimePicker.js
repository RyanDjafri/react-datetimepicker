import React, { useState, useEffect } from "react";
import moment from "moment";
import "./DateTimePicker.css";
moment.locale("en");

const DateTimePicker = ({ onChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(
    value ? moment(value) : moment()
  );

  useEffect(() => {
    if (value) {
      setSelectedDate(moment(value));
    }
  }, [value]);

  const handleDateChange = (event) => {
    const date = moment(event.target.value, "YYYY-MM-DD");
    if (date.isValid()) {
      const newDate = moment(selectedDate).set({
        year: date.year(),
        month: date.month(),
        date: date.date(),
      });
      setSelectedDate(newDate);
      if (onChange) {
        onChange(newDate);
      }
    }
  };

  const handleTimeChange = (event) => {
    const [hour, minute] = event.target.value.split(":");
    const newDate = moment(selectedDate).set({
      hour,
      minute,
    });
    if (newDate.isValid()) {
      setSelectedDate(newDate);
      if (onChange) {
        onChange(newDate);
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
