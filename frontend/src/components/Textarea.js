import React from 'react';
import { useTextarea } from '../context/TextareaContext';

export const Textarea = (props) => {

    const textarea = useTextarea()

    return (
        <div className="form-group">
            <label htmlFor={props.id}>Пояснения</label>
            <textarea className="form-control" value={textarea.text} id={props.id} rows="10" disabled></textarea>
        </div>
    )
}