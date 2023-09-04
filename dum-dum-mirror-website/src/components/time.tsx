'use client';
import { format, getTime } from "@mirror/lib/time";
import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState<string>('')
  var interval = 1000; // ms
  var expected = Date.now() + interval;
  useEffect(() => {
    setTimeout(step, interval)
  }, []);
  function step(): void {
    var dt = Date.now() - expected; // the drift (positive for overshooting)
    if (dt > interval) {
      // something really bad happened. Maybe the browser (tab) was inactive?
      // possibly special handling to avoid futile "catch up" run
    }
    expected += interval;
    setTimeout(step, Math.max(0, interval - dt)); // take into account drift
    setTime(format(new Date(expected)));
  }
  return <>
    <h1>{time}</h1>
  </>
}