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
        setCycleArr(arr)
      }, [cycle]);
    
    const getObjs = (el) => {
        if(el.t!==0 || el.n!==0){
            const newArr = cycleArr.map(e=>{
                if(e.i === el.i){
                    return el
                }else{
                    return e
                }
                
            })
            setCycleArr(newArr)
        }
    }  

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
                        cycleArr.map((el,i) => (
                            <Terms el={el} getObjs={getObjs} key={`Term-${i}`} />
                        )) 
                ) : null}
            </fieldset>
            {JSON.stringify(cycleArr)}
        </div>
    );
};
