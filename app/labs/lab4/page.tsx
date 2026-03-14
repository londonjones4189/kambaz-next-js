"use client"
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import Link from "next/dist/client/link";
import store from "./store"; 
import { Provider } from "react-redux";
import ReduxExamples from "./redux/page";


export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return (
         <Provider store={store}>
      <div>
        <h2>Lab 4</h2>
        <Link href="./lab4/redux">Redux Examples</Link>
        <Link href="./lab4/react-context">React Context Examples</Link>
        <Link href="./lab4/zustand">Zustand Examples</Link>
        <ReduxExamples/>
        <ClickEvent/>
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello}/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>
       </div>
         </Provider>
  );
}

       