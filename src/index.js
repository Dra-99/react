import routerConfig from './routerConfig';
import dva from "dva";
import counter from './models/counter';
import {createBrowserHistory} from "history"

// 返回一个dva对象
const app = dva({
    history: createBrowserHistory()
});

app.model(counter)

app.router(routerConfig)

app.start(document.querySelector("#root"))