/**
 * Created by narendrasisodiya on 17/07/15.
 */

import routeEventBus from './routeEventBus.js'
import page from 'page';
import routeActions from './RouteConstants.js'

import routes from './allRoutes.js';

routes.map((key) => {
	page(key, (routeObj)=>{
		if(window.location.pathname === routeObj.pathname){
			console.log("Same Same", window.location.pathname);
		}
		window.setTimeout(()=>{
			routeEventBus.publish(routeActions.ROUTE_CHANGE_EVENT, key, routeObj);
		});
	});
});


page();
