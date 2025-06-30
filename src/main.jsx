import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Provider } from "mobx-react";
// import DashboardStore from "./stores/Dashboard_store.js";

const stores = {};

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider {...stores}>
        <App />
    </Provider>
);
