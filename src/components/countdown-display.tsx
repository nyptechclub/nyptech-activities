"use client";

import { useEffect, useState } from "react";

const calculateTimeLeft = (date: Date) => {
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
};

export default function CountdownDisplay(props: {
  data: {
    targetDate: Date;
  };
}) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.data.targetDate));
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft(props.data.targetDate);
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
      <span key={interval} suppressHydrationWarning>
        {timeLeft[interval as keyof typeof timeLeft]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex items-center justify-center text-white">
      <div className="text-center">
        {isLaunched ? (
          <h1 className="text-6xl font-bold animate-bounce">Launched!</h1>
        ) : (
          <div className="text-4xl font-semibold space-y-4">
            <h1 className="text-5xl font-bold">Launching In</h1>
            <div className="space-x-6">{timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}</div>
          </div>
        )}
      </div>
    </div>
  );
}