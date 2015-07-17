import React, {Component} from 'react';

import myusers from './listUsers';
import UserInfo from './UserInfo.jsx';

import routeEventBus from '../router/routeEventBus.js'
import routeActions from '../router/RouteConstants.js'

class UserList extends Component {
	constructor(props) {
		super(props);

		this.RouteMappings = {
			"/users/:id": () => {
				console.log("called");
				return <UserInfo uid={this.state.url}/>;
			},
			"/users": () => {
				return <div>Please select</div>;
			}
		};
		this.subID = routeEventBus.subscribe(routeActions.ROUTE_CHANGE_EVENT, (routePath, routeObj) => {
			//console.log(routePath);
			this.setState({
				url: routeObj.pathname,
				componentResolver: routePath
			});
			console.log("new state", this.state);
		});

		var componentResolver = "/users";
		if(window.location.pathname !== "/users"){
			componentResolver = "/users/:id";
		}
		this.state = {
			url: window.location.pathname,
			componentResolver: componentResolver
		};
	}
	componentWillUnmount(){
		routeEventBus.unsubscribe(this.subID);
	}
	render() {
		return  <div>
			<ul>{
				myusers.map(user => {
					return <li><a href={"/users/" + user.twitter}>{user.name}</a></li>
				})
			}
			</ul>

			<div className="userInfoBox">
				{this.RouteMappings[this.state.componentResolver]()}
			</div>
		</div> ;
	}
}

export default UserList;