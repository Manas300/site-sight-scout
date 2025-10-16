import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const difference = tomorrow.getTime() - now.getTime();
      
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return { hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-destructive/20 border-2 border-destructive rounded-xl px-4 sm:px-6 py-3 sm:py-4 min-w-[70px] sm:min-w-[90px]">
        <div className="text-4xl sm:text-5xl md:text-6xl font-black text-destructive tabular-nums">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-sm sm:text-base md:text-lg font-bold text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-6 animate-fade-in">
      <div className="text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl font-black text-destructive mb-4 animate-pulse">
          ⏰ OFFER EXPIRES IN ⏰
        </p>
      </div>
      
      <div className="flex gap-3 sm:gap-4 md:gap-6">
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <div className="text-4xl sm:text-5xl md:text-6xl font-black text-destructive self-center mb-8">:</div>
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <div className="text-4xl sm:text-5xl md:text-6xl font-black text-destructive self-center mb-8">:</div>
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};
