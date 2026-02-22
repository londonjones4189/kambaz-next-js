import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import FindFunction from "./FindFunction";
import ForLoops from "./ForLoops";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import LegacyFunctions from "./LegacyFunction";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import TemplateLiterals from "./Templateliterals";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import Spreading from "./Spreader";
import Destructing from "./Destructing";
import FunctionDestructing from "./FucntionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import ServerComponentDemo from "./ServerComponentDemo";
//import ClientComponentDemo from "./ClientComponentDemo";
//deleted based off piazza
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import TodoList from "./todos/TodoList";
import PathParameters from "./PathParameters";
import TodoItem from "./todos/TodoItem";



export default function Lab3() {
    return (
      <div>
        <h2>Lab 3</h2>
        console.log('Hello World!')
        <VariablesAndConstants/>
        <VariableTypes/>
        <BooleanVariables/>
        <IfElse/>
        <TernaryOperator/>
        <ConditionalOutputIfElse/>
        <ConditionalOutputInline/>
        <LegacyFunctions/>
        <ArrowFunctions/>
        <ImpliedReturn/>
        <TemplateLiterals/>
        <SimpleArrays/>
        <ArrayIndexAndLength/>
        <AddingAndRemovingToFromArrays/>
        <ForLoops/>
        <MapFunction/>
        <FindFunction/>
        <FindIndex/>
        <FilterFunction/>
        <JsonStringify/>
        <House/>
        <Spreading/>
        <Destructing/>
        <FunctionDestructing/>
        <DestructingImports/>
        <Classes/>
        <Styles/>
        <ServerComponentDemo/>
        <Add a={3} b={4} />
        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />
        <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight>
        <PathParameters/>
        <TodoItem todo={{
          title: "Buy Milk",
          status: "COMPLETED",
          done: true
        }}/>
        <TodoList/>
       </div>

  );
}

        