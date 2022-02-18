import React, { useEffect, useState, useRef } from "react";
import { Input } from "./Input";
import { Terms } from "./Terms";
export const Clever = (props) => {

    const [cycle, setCycle] = useState(props.value);
    const [cycleArr, setCycleArr] = useState([]);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < cycle; i++) {
          const obj = { n: 0, t: 0, i: i };
          arr.push(obj);
        }
        console.log(arr)
        setCycleArr(arr)
      }, [cycle]);

    return (
        <div>
            <Input
                label={"Введите количество циклов"}
                value={cycle}
                onChange={(e) => setCycle(e.target.value)}
            />
            <fieldset>
                <legend>Циклы</legend>
                {cycle > 0 ? (
                    <div>
                        {cycleArr.map((el) => (
                            <Terms el={el} />
                        ))}
                    </div>
                ) : null}
            </fieldset>
        </div>
    );
};
