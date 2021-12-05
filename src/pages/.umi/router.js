import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default,
        "title": "首页",
        "Routes": [require('../../routes/showTitle.js').default]
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login.js').default,
        "title": "登录页",
        "Routes": [require('../../routes/showTitle.js').default]
      },
      {
        "path": "/welcome",
        "exact": true,
        "component": require('../welcome.js').default,
        "title": "欢迎页",
        "Routes": [require('../../routes/privateRoute.js').default, require('../../routes/showTitle.js').default]
      },
      {
        "component": () => React.createElement(require('C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
