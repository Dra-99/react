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
        "component": require('../index.js').default
      },
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
      {
        "path": "/page1",
        "exact": true,
        "component": require('../page1.js').default
      },
      {
        "path": "/page2",
        "exact": true,
        "component": require('../page2.js').default
      },
      {
        "path": "/sub",
        "exact": false,
        "component": require('../sub/_layout.js').default,
        "routes": [
          {
            "path": "/sub/page1",
            "exact": true,
            "component": require('../sub/page1.js').default
          },
          {
            "path": "/sub/page2",
            "exact": true,
            "component": require('../sub/page2.js').default
          },
          {
            "path": "/sub/:id",
            "exact": true,
            "component": require('../sub/$id.js').default
          },
          {
            "component": () => React.createElement(require('C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
          }
        ]
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
