import "./Accordion.css";
//export function Accordion(){ // imported with import {Accordion} from "filename"
//function Accordion(props)
function Accordion({id, open, onClick, children, labelText}) { // destruct children from props
    const handleClick = () => {
        onClick(id); // = handleAccordionClick(id)
    };
    return (
        <div className="accordion">
            <div className="label-text" onClick={handleClick}>{labelText}</div>
            {!!open && <div>{children}</div>} {/*open my-profile or my-hoppies */}
        </div>
    )
}

export default Accordion;
