import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion} from '@fortawesome/free-solid-svg-icons'
import { useTextarea } from "../context/TextareaContext";

export const HelpBtn = (props) => {

    const {show} = useTextarea()

    const showDescription = (e)=>{
        e.preventDefault();
        show(props.description);
    }

    return (
        <button onClick={showDescription} className='btn btn-question'><FontAwesomeIcon icon={faQuestion} /></button>
    )
}