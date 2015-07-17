import React, {Component} from 'react';

import myusers from './listUsers';

let styleImg = {
	width: "50px",
  float: "left",
	margin: "20px"
};
class UserInfo extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		let userName = window.location.pathname.split("/")[2];

		this.state = {
			selectedUser: userName
		};
		console.log(window.location.pathname);
	}
	componentWillReceiveProps(prop){
		console.log(prop);
		let userName = prop.uid.split("/")[2];
		this.setState({
			selectedUser: userName
		});
	}
	render() {
		var user = myusers.filter((v)=>{
			return v.twitter === this.state.selectedUser;
		})[0];
		return  <div>
			<h1>{user.name}</h1>
			<img style={styleImg} src={user.img} alt=""/>
			<div><b>Twitter : </b><span><a href={"http://twitter.com/" + user.twitter}>{"http://twitter.com/" + user.twitter}</a></span></div>
			<div><b>Github : </b><span><a href={"http://github.com/" + user.github}>{"http://github.com/" + user.github}</a></span></div>
		</div> ;
	}
}

export default UserInfo;