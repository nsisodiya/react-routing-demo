import EventBus from 'eventbus_js';
import page from 'page';

var routeActions = {
	ROUTE_CHANGE_EVENT: "ROUTE_CHANGE_EVENT"
};


var routeEventBus = new EventBus();

//routeEventBus

export default {
	startRouter(arrayOfPaths) {
		arrayOfPaths.map((key) => {
			page(key, (routeObj)=> {
				if (window.location.pathname === routeObj.pathname) {
					console.log("Same Same", window.location.pathname);
				}
				window.setTimeout(()=> {
					routeEventBus.publish(routeActions.ROUTE_CHANGE_EVENT, key, routeObj);
				});
			});
		});
		page();
		console.log("Registering All Routes");
	},
	subscribe(arrayOfPaths, callback) {

		var subID = routeEventBus.subscribe(routeActions.ROUTE_CHANGE_EVENT, (routePath, routeObj) => {
			if (arrayOfPaths.indexOf(routePath) !== -1) {
				callback.call(this, routePath, routeObj);
			}
		});
		return subID;
	},
	unsubscribe(id){
		routeEventBus.unsubscribe(id);
	}
};