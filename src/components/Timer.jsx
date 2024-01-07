import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <center>
        <p>
          Current Indian Time is{" "}
          <span>
            {time.toLocaleDateString()} - {time.toLocaleTimeString()}
          </span>
        </p>
      </center>{" "}
    </>
  );
};
export default Timer;
