import React from 'react';
import { Label } from './Label';
import { HelpBtn } from './HelpBtn';

export const Input = (props) => {

    return (
        <div className="form-group mb-3 col-12 col-sm-3 col-lg position-relative">
            <div className="d-flex justify-content-between">
                <Label id={props.id} label={props.label} sub={props.sub} />
                <HelpBtn description={props.description} />
            </div>
            <input
                type="number"
                className="form-control"
                {...props}
            />
        </div>
    )
}