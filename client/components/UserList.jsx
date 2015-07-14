import React, {Component} from 'react';

import myusers from './listUsers';

class UserList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return  <div>
			<ul>{
				myusers.map(user => {
					return <li><a href={"/users/" + user.twitter}>{user.name}</a></li>
				})
			}
			</ul>
		</div> ;
	}
}

export default UserList;