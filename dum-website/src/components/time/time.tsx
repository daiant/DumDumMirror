import { useEffect, useState } from "react"

export default function Time() {
  const [time, setTime] = useState(0)
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
    setTime(expected);
  }

  function format(date: number): string {
    if (date === 0) { return 'Loading...' }
    return new Intl.DateTimeFormat("es", {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date(date));
  }

  return <p>{format(time)}</p>
}