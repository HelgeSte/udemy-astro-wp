import Accordion from "./Accordion"
function App() {
  return <div>

    <Accordion labelText="My profile">
        <div>
        <strong>My first accordion</strong>
        <p>My p tag</p>
      </div>
    </Accordion>

    <Accordion labelText="My hobbie">
      <div>
        <p>new accordion</p>
      </div>  
    </Accordion> 
  </div>;
}

export default App;
