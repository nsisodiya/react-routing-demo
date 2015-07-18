/**
 * Created by narendrasisodiya on 14/07/15.
 */


import React, {Component} from 'react';
import NavigationBar from "./NavigationBar.jsx";
import ContentArea from "./ContentArea.jsx";
import ForkMe from "./ForkMe.jsx";

import allRoutes from './allRoutes.js';

import routeEventBus from '../router/routeEventBus.js'

routeEventBus.startRouter(allRoutes);

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>
			<ForkMe repo="https://github.com/nsisodiya/react-routing-demo"></ForkMe>
			<NavigationBar/>
			<ContentArea/>
		</div>;
	}
}
export default App;