import React, { useEffect, useRef, useState } from 'react';
import { OutermostBox,Countdown,EndsIn,TimeFrame} from "./styledComponents";

function CouponBanner() {
  const [seconds, setSeconds] = useState(86400);
  const timeRef=useRef()

  useEffect(()=>{
      if(seconds&&seconds!==0)
          setTimeout(()=>{
            setSeconds(seconds=>seconds-1)
          },1000)
      return ()=>{
          clearTimeout(timeRef.current)
      }
  },[seconds]);
  
  let h=Math.floor(seconds/3600);
  let m=Math.floor(seconds%3600/60);
  let s=Math.floor(seconds%60);
  return (
    <OutermostBox>
      <Countdown>
        <EndsIn>Ends in </EndsIn> 
         <TimeFrame> {h}</TimeFrame> h <TimeFrame> {m}</TimeFrame> m <TimeFrame> {s} </TimeFrame> s  
      </Countdown>
    </OutermostBox>
      
  );
}

export default CouponBanner;
