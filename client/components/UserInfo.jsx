import React, {Component} from 'react';

import myusers from './listUsers';
import routeEventBus from '../router/routeEventBus.js'

let styleImg = {
	width: "50px",
	float: "left",
	margin: "20px"
};
class UserInfo extends Component {
	constructor(props) {
		super(props);
		let userName = window.location.pathname.split("/")[2];

		this.state = {
			selectedUser: userName
		};
		this.subID = routeEventBus.subscribe(["/users/:id", "/users"], (routePath, routeObj) => {
			let userName = window.location.pathname.split("/")[2];
			this.setState({
				selectedUser: userName
			});
		});
	}
	shouldComponentUpdate(nextProps, nextState){
		return JSON.stringify(this.state) !== JSON.stringify(nextState);
	}
	componentWillUnmount() {
		routeEventBus.unsubscribe(this.subID);
	}

	render() {
		console.log("Render UserInfo");
		var user = myusers.filter((v)=> {
			return v.twitter === this.state.selectedUser;
		})[0];
		if (user !== undefined) {
			return <div>
				<h1>{user.name}</h1>
				<img style={styleImg} src={user.img} alt=""/>

				<div><b>Twitter : </b><span><a href={"http://twitter.com/" + user.twitter}>{"http://twitter.com/" +
				user.twitter}</a></span></div>
				<div><b>Github : </b><span><a href={"http://github.com/" + user.github}>{"http://github.com/" +
				user.github}</a></span></div>
			</div>;
		} else {
			return <div>Please Select a User</div>
		}
	}
}

export default UserInfo;