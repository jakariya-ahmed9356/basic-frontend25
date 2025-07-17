import {Hi, Greet} from "./components/Demo.js";
import Select from "./components/select.js";
import CheckAuth from "./components/ConditionalRender.js";


import {
  ElementChange, FocusInput,ModifyInput,ModifyImage,GetInputVal,
  ProductQty,IncrementDecrement

} from "./components/Hook.js";

import {
  Welcome,Profile,Skills

} from "./components/Props.js";

import FormSubmit from "./components/FormSubmit.js";
import ContactForm from "./components/Contact.js";

import UserProfile from './components/component-types/Functional.js';

import {Increment,LoginForm} from './components/hook/UseState.js';

import {WelcomeMsg, ProductList,CleanUP} 
from './components/hook/UseEffect.js';

import {
  Counter
} from './components/hook/UseReducer.js';


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

      <ProductQty/>
      <IncrementDecrement/>
      

      <UserProfile
        name="Jakariya Ahmed Aman"
        email="aman@gmail.com"
        profession="Frontend Developer"
        avatar="https://i.pravatar.cc/150?img=11"
        status={true}
      />


      <Increment/>
      <LoginForm/>

      {/* useEffect */}

      <WelcomeMsg/>
      <ProductList/>
      <CleanUP/>

      <Counter/>


    </div>
  );
}

export default App;