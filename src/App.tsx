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

      const handleSelectItem = (item:string) => {
        console.log(item);
      }

    return <div>
      <ListGroup  items={items}  heading= "Cities"  onSelectedtem={handleSelectItem}/>
    </div>
}

export default App;