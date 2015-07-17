import React, {Component} from 'react';

import UserList from './UserList.jsx';
import About from './About.jsx';

import routeEventBus from '../router/routeEventBus.js'
import routeActions from '../router/RouteConstants.js'


class ContentArea extends Component {
	constructor(props) {
		super(props);
		this.RouteMappings = {
			"/about":{
				component:  <About/>,
				state: "/about"
			},
			"/users": {
				component:<UserList/>,
				state: "/users"
			},
			"/users/:id": {
				component: <UserList/>,
				state: "/users"
			},
			"/": {
				component: <div>This is default Page, reloading.....</div>,
				state:"/"
			}
		};
		this.subID = routeEventBus.subscribe(routeActions.ROUTE_CHANGE_EVENT, (routePath, routeObj) => {
			//console.log(routePath);
			this.setState({
				currentRoute: this.RouteMappings[routePath].state
			})
		});

		this.state = {
			currentRoute:"/"
		};
	}
	componentWillUnmount(){
		routeEventBus.unsubscribe(this.subID);
	}
	render() {
		return  <div className="mainContentArea">
			{this.RouteMappings[this.state.currentRoute].component}
		</div>;
	}
}

export default ContentArea;