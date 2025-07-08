import { useState, useEffect, useRef } from "react";
import { IoMdStopwatch } from "react-icons/io";

const TimeCounter = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (start) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setTime(0);
      intervalRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [start]);

  const formatTime = (totalSeconds: number) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex gap-1">
      <div onClick={() => setStart(!start)} className="text-zinc-700 cursor-pointer">
        <IoMdStopwatch fontSize="1.5em" color="white"/>
      </div>
      {start ? (
        <p className="text-md font-bold text-zinc-200">
          : {formatTime(time)}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default TimeCounter;
