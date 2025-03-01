import ListGroup from "./assets/components/ListGroup";

function App(){

    let items = [
        "New York",
        "Akure",
        "San Francisco",
        "Manchester",
        "London",
        "Lagos",
        "Wigan",
        "Abuja",
      ];

    return <div><ListGroup  items={items}  heading= "Cities" /></div>
}

export default App;