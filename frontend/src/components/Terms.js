import React, { useState, useEffect } from "react";
import { Input } from "./Input";

export const Terms = ({ el }) => {
  const [cycleObj, setCycleObj] = useState(el);

  return (
    <div key={el.i}>
      <Input
        key={`first var ${el.i}`}
        label={"Введите переменную n"}
        value={cycleObj.n}
        onChange={(e) => setCycleObj({ ...cycleObj, n: e })}
      />
      <Input
        key={`second var ${el.i}`}
        label={"Введите переменную t"}
        value={cycleObj.t}
        onChange={(e) => setCycleObj({ ...cycleObj, t: e })}
      />
    </div>
  );
};
