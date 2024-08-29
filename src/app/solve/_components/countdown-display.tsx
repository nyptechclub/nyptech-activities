"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

function calculateTimeLeft(date: Date) {
  const difference = +date - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
}

export default function CountdownDisplay(props: { className?: string; targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.targetDate));
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft(props.targetDate);
      setTimeLeft(newTimeLeft);
      if (Object.keys(newTimeLeft).length === 0) {
        setIsLaunched(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span key={interval}>
        <span suppressHydrationWarning>{timeLeft[interval as keyof typeof timeLeft]} </span>
        <span suppressHydrationWarning>{interval}</span>
      </span>
    );
  });

  return (
    <div className={clsx("flex items-center justify-center", props.className)}>
      <div className={"text-center"}>
        {isLaunched ? (
          <h1 className={"font-bold text-6xl animate-bounce"}>Launched!</h1>
        ) : (
          <div className={"space-y-4"}>
            <h1 className={"font-bold text-3xl max-sm:text-xl text-white"}>Launching in...</h1>
            <div className={"text-2xl max-sm:text-sm space-x-4 max-sm:space-x-2"}>
              {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}