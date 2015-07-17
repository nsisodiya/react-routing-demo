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
				componentResolver: "/about"
			},
			"/users": {
				component: <UserList/>,
				componentResolver: "/users"
			},
			"/users/:id": {
				component: <UserList/>,
				componentResolver: "/users"
			},
			"/": {
				component: <div>This is default Page, reloading.....</div>,
				componentResolver:"/"
			}
		};
		this.subID = routeEventBus.subscribe(routeActions.ROUTE_CHANGE_EVENT, (routePath, routeObj) => {
			this.setState({
				componentResolver: this.RouteMappings[routePath].componentResolver
			})
		});

		this.state = {
			componentResolver:"/"
		};
	}
	componentWillUnmount(){
		routeEventBus.unsubscribe(this.subID);
	}
	render() {
		return  <div className="mainContentArea">
			{this.RouteMappings[this.state.componentResolver].component}
		</div>;
	}
}

export default ContentArea;