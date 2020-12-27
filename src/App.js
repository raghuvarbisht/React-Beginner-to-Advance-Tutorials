import React from 'react';
import './App.css';
import JsxExample from './components/JsxExample';
import FuncationComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import PropsExample from './components/PropsExample';
import ChildrenPropsExample from './components/ChildrenPropsExample';
import StateExample from './components/StateExample';
import SetStateExample from './components/SetStateExample';
import BindingEventExample from './components/BindingEventExample';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import SetStateUseStateHooks from './components/SetStateUseStateHooks';
import TwoWayBinding from './components/TwoWayBinding';
import StateImmutableList from './components/StateImmutableList';

function App() {
  return (
    <div className="App">
      {/* JSX  example */ }
      <JsxExample />
      {/* Functional components */ }
      <FuncationComponent/>

      {/** Class Component example */}
      <ClassComponent/>

      {/**How to use props? using example */}
      <PropsExample name="Raghuvar" city ="India"/>
      <PropsExample name="Jay" city ="London"/>

      {/** How to use children props?  using example */}
      <ChildrenPropsExample name="Rohit">
        <p>This is children props.</p>
        <p>We can pass html as children props.</p>
      </ChildrenPropsExample>
      <ChildrenPropsExample name="Deepak">
        <p><button>I am button</button></p>        
      </ChildrenPropsExample>

      {/** How to use state?  using example */}
      <StateExample/>

      {/** How to use setState?  using example */}
      <SetStateExample/>

      {/** How to use useState hooks?  using example */}
      <SetStateUseStateHooks/>
      
      {/** How to use event binding?  using example */}
      <BindingEventExample/>

      {/** How to call parent component method using child ccomponent?  using example */}
      <ParentComponent/>
      
      {/** How to use ConditionalRendering?  using example */}
      <ConditionalRendering/>

      {/** Two way bidning */}
      <TwoWayBinding/>


      <StateImmutableList/>

    </div>
  );
}

export default App;
