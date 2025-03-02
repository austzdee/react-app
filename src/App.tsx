import Alert from "./Alert";
import Button from "./Button";


function App(){
    return    (
      <div >    
      <Alert>
        Thank You <span>Jesus</span>
      </Alert>

      <Button color="danger" onClick={() => console.log("Come see wetin Jesus do for me")}>
        Great
      </Button>
    </div>

    );
   
}

export default App;