import Element, {
  ParentDiv, Bye, Calculate,LogIn,ElementDesign,
  RenderList, Card
}
from './welcome';
import WelcomeClass from './WelcomeClass';

function App() {
  return (
    <div>
      <Element />
      <ParentDiv />
      <Bye />
      <Calculate/>
      <LogIn/>
     <ElementDesign/>
     <RenderList/>
     <Card title="Practise First Props in React" desc="learning new react props" id="39393"/>
     <Card title="Practise First Props in React 2" desc="learning new react props 2" id="39393"/>
    </div>
  );
}

export default App;