import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome-functionsl components';
import Greetings from './components/Greetings-Class components';
import { FirstComp, SecondComp as SC } from './components/MyComponents-import and export';
import MyComponent from './components/MyComponents-import and export';
import HelloWorld from './components/HelloWorld-JSX rules';
import Student from './components/Student';
import Employee from './components/Employee State-setState';
import User from './components/User useState';

function App() {

  const studentObject = {
    firstName:"James",
    lastName:"Bond",
    email:"james@mail.com",
  }

  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <Welcome name="James Bond"/> */}
      {/* <Greetings name="James Bond"/> */}
      {/* <FirstComp />
      <SC />
      <MyComponent /> */}
      {/* <HelloWorld /> */}
      {/* <Student 
        firstName="James"
        lastName="Bond"
        email="james@mail.com"
      /> */}
      {/* <Student student={studentObject} /> */}
      {/* <Employee /> */}
      <User />
    </div>
  );
}

export default App;