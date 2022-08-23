import logo from "./logo.svg";
// import "./App.css";
import Header from "./Header";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login  from "./Login";
import Register from "./Register";
import Confirm from "./Confirm";
import About from "./About";


function App() {
  return(
    <div className="App">

        
       <BrowserRouter>
        <Switch>
        
          <Route path="/" exact>
          <Header />
          
          </Route>
          <Route path="/loginpage"  component={Login} />
          <Route path="/forgetpassword"  component={Confirm}/>
          <Route path="/aboutpage"  component={About}/>
         
          
          <Route path="/registerpage" component={Register} />
          
          
         

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
