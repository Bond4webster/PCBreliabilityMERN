import React, { useState, useEffect } from "react";
import { Input } from "./Input";

export const Terms = ({ el,getObjs }) => {
  const [cycleObj, setCycleObj] = useState(el);

  useEffect(()=>{
    setCycleObj(el)
  },[el])

  return (
    <div key={el.i}>
      <Input
        key={`first var ${el.i}`}
        label={`n ${el.i+1}`}
        value={cycleObj.n}
        onChange={(e) => {
          setCycleObj({ ...cycleObj, n: e.target.value })
          getObjs({ ...cycleObj, n: e.target.value })
        }}
      />
      <Input
        key={`second var ${el.i}`}
        label={`t ${el.i+1}`}
        value={cycleObj.t}
        onChange={(e) => {
          setCycleObj({ ...cycleObj, t: e.target.value })
          getObjs({ ...cycleObj, t: e.target.value })
        }}
      />
    </div>
  );
};
