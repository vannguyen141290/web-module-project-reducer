import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { addOne, applyNumber, changeOperation, clearDislay, memoryPlus, memoryCall, memoryClear } from './actions';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  // const addOneClick = () => {
  //   return dispatch(addOne())
  // }

  const numberHandler = (number) => {
    return dispatch(applyNumber(number));
  }

  const operatorHandler = (operator) => {
    return dispatch(changeOperation(operator))
  }

  const clearHandler = () => {
    return dispatch(clearDislay());
  }

  const memoryPlusHandler = () => {
    return dispatch(memoryPlus());
  }

  const memoryCallHandler = () => {
    return dispatch(memoryCall());
  }

  const memoryClearHandler = () => {
    return dispatch(memoryClear());
  }
  console.log(state);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={memoryPlusHandler}/>
              <CalcButton value={"MR"} onClick={memoryCallHandler}/>
              <CalcButton value={"MC"} onClick={memoryClearHandler}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={numberHandler}/>
              <CalcButton value={2} onClick={numberHandler}/>
              <CalcButton value={3} onClick={numberHandler}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={numberHandler}/>
              <CalcButton value={5} onClick={numberHandler}/>
              <CalcButton value={6} onClick={numberHandler}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={numberHandler}/>
              <CalcButton value={8} onClick={numberHandler}/>
              <CalcButton value={9} onClick={numberHandler}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={operatorHandler}/>
              <CalcButton value={"*"} onClick={operatorHandler}/>
              <CalcButton value={"-"} onClick={operatorHandler}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
