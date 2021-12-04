import React from 'react';
import App from './App';
import dva from "dva";
import counter from './models/counter';

// 返回一个dva对象
const app = dva();

app.model(counter)

app.router(() => <App />)

app.start(document.querySelector("#root"))