import React from "react";
import children from "./children"
import { Router } from "dva/router";
// import {BrowserRouter} from "react-router-dom"
import Config from "./Config"

// export default class router extends Component {
//     render() {
//         return <Router history={this.props.history}>
//         <Config children={children}></Config>
//         </Router>
//     }
// }

function RouterConfig({ history }) {
    return (
        <Router history={history}>
        <Config routes={children}></Config>
        </Router>
    );
  }
  
  export default RouterConfig;
