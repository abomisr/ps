"use client";

import {
    VerticalTimeline,
  } from "react-vertical-timeline-component";
  import 'react-vertical-timeline-component/style.min.css';
  import { crimes } from "@/constants";
  import CrimeCard from "@/components/CrimeCard";
  import { useTheme } from "next-themes";
  import { useEffect, useState } from "react";

const Experience = () => {
    const [isDark, setIsDark] = useState(true)
  const {theme} = useTheme();
  useEffect(()=>{
    setIsDark(theme == "dark")
  },[theme])

  return (
    <div className="md:w-[75%] sm:w-[85%] w-full p-4 flex items-center justify-center mx-auto" dir="ltr">
        <VerticalTimeline animate={false}>
          {
            crimes.map(crime => (
              <CrimeCard key={crime.date} crime={crime} isDark={isDark} />
            ))
          }        
        </VerticalTimeline>
    </div>
  )
}

export default Experience