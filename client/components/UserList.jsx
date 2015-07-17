import React, {Component} from 'react';

import myusers from './listUsers';
import UserInfo from './UserInfo.jsx';

import routeEventBus from '../router/routeEventBus.js'
import routeActions from '../router/RouteConstants.js'

var userListStyle = {
	width: "24%",
	float: "left"
};
class UserList extends Component {
	constructor(props) {
		super(props);

		this.RouteMappings = {
			"/users/:id": () => {
				return <UserInfo uid={this.state.url}/>;
			},
			"/users": () => {
				return <div>Please select</div>;
			}
		};
		this.subID = routeEventBus.subscribe(routeActions.ROUTE_CHANGE_EVENT, (routePath, routeObj) => {
			if(Object.keys(this.RouteMappings).indexOf(routePath) !== -1){
				this.setState({
					url: routeObj.pathname,
					componentResolver: routePath
				});
			}
		});

		var componentResolver = "/users";
		if(window.location.pathname.split("/")[1] === "users" && window.location.pathname.split("/")[2] !== undefined){
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
		console.log("userList Render");
		console.log(this.state);
		return  <div>
			<ul style={userListStyle}>{
				myusers.map(user => {
					return <li key={user.twitter} ><a href={"/users/" + user.twitter}>{user.name}</a></li>
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