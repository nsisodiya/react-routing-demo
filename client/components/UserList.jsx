import React, {Component} from 'react';

import myusers from './listUsers';
import UserInfo from './UserInfo.jsx';

var userListStyle = {
	width: "24%",
	float: "left"
};
class UserList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("userList Render");
		return <div>
			<ul style={userListStyle}>{
				myusers.map(user => {
					return <li key={user.twitter}><a href={"/users/" + user.twitter}>{user.name}</a></li>
				})
			}
			</ul>
			<div className="userInfoBox">
				<UserInfo/>
			</div>
		</div>;
	}
}

export default UserList;