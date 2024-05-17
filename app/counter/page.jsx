"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setSeconds(30);
    }
  }, [seconds]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>30 Seconds Counter</h1>
      <div style={{ fontSize: "48px" }}>{seconds} seconds</div>
    </div>
  );
}
