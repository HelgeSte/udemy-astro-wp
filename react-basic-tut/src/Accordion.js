import "./Accordion.css";
//export function Accordion(){ // imported with import {Accordion} from "filename"
//function Accordion(props)
function Accordion({children, labelText}) { // destructor children directly from the props
    //return <div>String = {props.children}</div>
    return (
        <div className="accordion">
            <div className="label-text">{labelText}</div><div>{children}</div>
        </div>
    )
}

export default Accordion;
