/**
 * Created by narendrasisodiya on 17/07/15.
 */

import routeEventBus from './routeEventBus.js'
import page from 'page';
import routeActions from './RouteConstants.js'

const routes = [
	"/about",
	"/users",
	"/users/:id",
	"/"
];

routes.map((key) => {
	page(key, (routeObj)=>{
		console.log(routeObj);
		console.log(arguments);
		window.setTimeout(()=>{
			routeEventBus.publish(routeActions.ROUTE_CHANGE_EVENT, key, routeObj);
		});
	});
});


page();