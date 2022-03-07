import React from 'react';
import { Label } from './Label';

export const Input = (props)=>{
    
    return (
        <div className="form-group mb-3 col-12 col-sm-3 col-lg">
            <Label id={props.id} label={props.label} sub={props.sub}/>
            <input 
                type="number" 
                className="form-control" 
                {...props}
            />
        </div>
    )
}