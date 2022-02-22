import React, { useState } from "react";
import { Input } from "./Input";

export const Terms = ({ el,getObjs }) => {
  const [cycleObj, setCycleObj] = useState(el);

  return (
    <div key={el.i}>
      <Input
        key={`first var ${el.i}`}
        label={"Введите переменную n"}
        value={cycleObj.n}
        onChange={(e) => {
          setCycleObj({ ...cycleObj, n: e.target.value })
          getObjs({ ...cycleObj, n: e.target.value })
        }}
      />
      <Input
        key={`second var ${el.i}`}
        label={"Введите переменную t"}
        value={cycleObj.t}
        onChange={(e) => {
          setCycleObj({ ...cycleObj, t: e.target.value })
          getObjs({ ...cycleObj, t: e.target.value })
        }}
      />
      {JSON.stringify(cycleObj)}
    </div>
  );
};
