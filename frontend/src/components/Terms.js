import React, { useState, useEffect } from "react";
import { Input } from "./Input";

export const Terms = ({ el,getObjs,var1,var2,descriptionVar1,descriptionVar2 }) => {
  const [cycleObj, setCycleObj] = useState(el);
  let label1=var1,label2="";

  if(var2==="tau"){
    label2="𝜏";
  }else{
    label2="Δ"+var2;
  }

  useEffect(()=>{
    setCycleObj(el)
  },[el])

  return (
    <div className="row px-2" key={el.i}>
      <Input
        key={`first var ${el.i}`}
        label={label1}
        sub={el.i+1}
        value={cycleObj[var1]}
        description={descriptionVar1}
        onChange={(e) => {
          setCycleObj({ ...cycleObj, [var1]: e.target.value })
          getObjs({ ...cycleObj, [var1]: e.target.value })
        }}
      />
      <Input
        key={`second var ${el.i}`}
        label={label2}
        sub={el.i+1}
        value={cycleObj[var2]}
        description={descriptionVar2}
        onChange={(e) => {
          setCycleObj({ ...cycleObj, [var2]: e.target.value })
          getObjs({ ...cycleObj, [var2]: e.target.value })
        }}
      />
    </div>
  );
};
