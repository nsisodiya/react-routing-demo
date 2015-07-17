import EventBus from 'eventbus_js';
import page from 'page';
import routeActions from './RouteConstants.js'
import routes from './allRoutes.js';


var routeEventBus = new EventBus();

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
console.log("Registering All Routes");
export default routeEventBus;