import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import Store from "./store/context";
import reducer from "./store/reducer";
import { usePersistedContext, usePersistedReducer } from "./store/usePersist"; 
import './css/index.css';
import Form from './containers/Form';

function App() { 
    const globalStore = usePersistedContext(useContext(Store), "state"); 
    const [state, dispatch] = usePersistedReducer(
      useReducer(reducer, globalStore),
      "state" // The localStorage key
    );
  
    return ( 
      <Store.Provider value={{ state, dispatch }}>
        <div className="col-sm-6 col-sm-offset-3"> 
          <Form />
        </div>
      </Store.Provider>
    );
  }
  
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
   
