import routerConfig from './routerConfig';
import dva from "dva";
import counter from './models/counter';
import {createBrowserHistory} from "history"
import myDvaPlugin from './myDvaPlugin';
import createLoading from "dva-loading"

// 返回一个dva对象
const app = dva({
    history: createBrowserHistory()
});

app.use(myDvaPlugin);
app.use(createLoading())

app.model(counter)

app.router(routerConfig)

app.start(document.querySelector("#root"))