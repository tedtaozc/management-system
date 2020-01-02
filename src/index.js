import React from "react";
import ReactDom from 'react-dom';

import App from './App';

import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

const user = storageUtils.getUser();

if (user != null || user.id != null) {
    memoryUtils.user = user;
}


ReactDom.render(<App />, document.getElementById("root"));