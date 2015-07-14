import React, {Component} from 'react';

import UserList from './UserList.jsx';
import UserInfo from './UserInfo.jsx';
import About from './About.jsx';

import page from 'page';

class ContentArea extends Component {
	constructor(props) {
		super(props);

		this.RouteMappings = {
			"/about": <About/>,
			"/users": <UserList/>,
			"/users/:id": <UserInfo/>,
			"/": <div>This is default Page</div>
		};

		Object.keys(this.RouteMappings).forEach((key) => {
			page(key, ()=>{
				window.setTimeout(()=>{
					this.setState({
						currentRoute: key
					},0);
				})
			});
		});

		this.state = {
			currentRoute:"/"
		};
	}
	render() {
		return  <div>
			{this.RouteMappings[this.state.currentRoute]}
		</div>;
	}
}

export default ContentArea;