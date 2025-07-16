import {Hi, Greet} from "./components/Demo.js";
import Select from "./components/select.js";
import CheckAuth from "./components/ConditionalRender.js";


import {
  ElementChange, FocusInput,ModifyInput,ModifyImage,GetInputVal

} from "./components/Hook.js";

import {
  Welcome,Profile,Skills

} from "./components/Props.js";

import FormSubmit from "./components/FormSubmit.js";
import ContactForm from "./components/Contact.js";


const App = () => {
  let marks = 80;
  const mySkills = ['Javascript', 'React', 'PHP', 'Laravel'];
  const style = {marginBottom: '50px'}
  return(
    <div style={style}>
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

      <Welcome name="Jakariya Ahmed Aman"/>
      <Profile 
      name="Jakariya Ahmed"
      age={27}
      profession="Frontend Developer"
      />
      
      
      <Skills skills={mySkills} />

      <FormSubmit/>



      <ElementChange/>
      <FocusInput/>
      <ModifyInput/>
      <ModifyImage/>
      <GetInputVal/>


      <ContactForm/>
    </div>
  );
}

export default App;