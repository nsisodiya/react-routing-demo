import React, {Component} from 'react';

import UserList from './UserList.jsx';
import About from './About.jsx';

import routeEventBus from '../router/routeEventBus.js'
import routeActions from '../router/RouteConstants.js'


class ContentArea extends Component {
	constructor(props) {
		super(props);
		this.RouteMappings = {
			"/about": <About/>,
			"/users": <UserList/>,
			"/users/:id": <UserList/>,
			"/": <div>This is default Page</div>,
		};
		this.subID = routeEventBus.subscribe(routeActions.ROUTE_CHANGE_EVENT, (routePath, routeObj) => {
			if(Object.keys(this.RouteMappings).indexOf(routePath) !== -1){
				this.setState({
					componentResolver: routePath
				})
			}
		});

		this.state = {
			componentResolver:"/"
		};
	}
	shouldComponentUpdate(nextProps, nextState){
		return JSON.stringify(this.state) !== JSON.stringify(nextState);
  }
	componentWillUnmount(){
		routeEventBus.unsubscribe(this.subID);
	}
	render() {
		return  <div className="mainContentArea">
			{this.RouteMappings[this.state.componentResolver]}
		</div>;
	}
}

export default ContentArea;