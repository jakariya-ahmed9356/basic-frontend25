import {Hi, Greet} from "./components/Demo.js";
import Select from "./components/select.js";
import CheckAuth from "./components/ConditionalRender.js";



const App = () => {
  let marks = 80;
  return(
    <div>
      <Hi/>
      <Greet/>

      {
        marks > 80 ? <h1> Brilliant Result</h1> : <h1>Your result is not bad</h1>
      }

      {(() => {
        if(marks >= 80) {
          return <h1> Brilliant Result</h1>
        }else{
          return <h1>Your result is not bad</h1>
        }
      })()}

      {(() => {
        let age = 27;
        if (age >= 27) {
          return <h1> You are Young Man!</h1>
        } else {
          return <h1> Your age is less than 27 </h1>
        } 
      })()}

      <Select/>
      <CheckAuth/>
    </div>
  );
}

export default App;