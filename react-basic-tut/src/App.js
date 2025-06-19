import { useState } from "react";
import Accordion from "./Accordion"
function App() {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionClick = (accordionId) => {
    //setOpenAccordionId("this wont work"); // gotta be my-profile or my-hobbies
    //setOpenAccordionId(accordionId); // doesn't disable if it's pressed a 2nd time
    setOpenAccordionId((prevValue) => {
      return prevValue === accordionId ? null : accordionId; // toggle on|off
    });
  };

  return <div>
    <Accordion id="my-profile" labelText="My profile" 
    open={openAccordionId === "my-profile"}
      onClick={handleAccordionClick}
    >
        <div>
        <strong>My first accordion</strong>
        <p>My p tag</p>
      </div>
    </Accordion>

    <Accordion id="my-hobbies" labelText="My hobbie" 
    open={openAccordionId === "my-hobbies"}
    onClick={handleAccordionClick}>
      <div>
        <p>new accordion</p>
      </div>  
    </Accordion> 
  </div>;
}

export default App;
