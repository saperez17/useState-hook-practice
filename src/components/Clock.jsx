import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // function cleaning(interval) {
  //   clearInterval(interval);
  // }
  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
      <button>Get Time</button>
    </div>
  );
}

export default Clock;
