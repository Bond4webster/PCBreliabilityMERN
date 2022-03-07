import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import { Terms } from "./Terms";
export const Clever = ({value,var1,var2,label,getSum,legend,description,descriptionVar1,descriptionVar2}) => {

    const [cycle, setCycle] = useState(value);
    const [cycleArr, setCycleArr] = useState([]);
    
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < cycle; i++) {
          const obj = { [var1]: 0, [var2]: 0, i: i };
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
    useEffect(()=>{
        getSum(cycleArr)
    },[cycleArr])  

    return (
        <div className="col-12 col-md-6">
            <Input
                label={label}
                value={cycle}
                description={description}
                onChange={(e) => setCycle(e.target.value)}
            />
            <fieldset>
                <legend className="caption">{legend}</legend>
                {cycle > 0 ? (            
                        cycleArr.map((el,i) => (
                            <Terms el={el} getObjs={getObjs} key={`Term-${i}`} var1={var1} var2={var2} descriptionVar1={descriptionVar1} descriptionVar2={descriptionVar2}/>
                        )) 
                ) : null}
            </fieldset>
        </div>
    );
};
