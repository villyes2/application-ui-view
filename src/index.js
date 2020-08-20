import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "./containers/App";

import registerServiceWorker from "./registerServiceWorker";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    
	    <Router>
      <Route path="/" component={App} />      
	
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
