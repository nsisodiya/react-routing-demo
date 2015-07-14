import React, {Component} from 'react';

import myusers from './listUsers';

class UserInfo extends Component {
	constructor(props) {
		super(props);
		let userName = window.location.pathname.split("/")[2];
		this.userInfo = myusers.filter((v)=>{
			return v.twitter === userName;
		})[0];
	}
	render() {
		return  <div>
			<h1>{this.userInfo.name}</h1>
			<div><b>Twitter : </b><span><a href={"http://twitter.com/" + this.userInfo.twitter}>{"http://twitter.com/" + this.userInfo.twitter}</a></span></div>
			<div><b>Github : </b><span><a href={"http://github.com/" + this.userInfo.github}>{"http://github.com/" + this.userInfo.github}</a></span></div>
		</div> ;
	}
}

export default UserInfo;