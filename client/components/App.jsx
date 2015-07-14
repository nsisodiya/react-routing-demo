/**
 * Created by narendrasisodiya on 14/07/15.
 */


import React, {Component} from 'react';
import page from 'page';
import NavigationBar from "./NavigationBar.jsx";
import ContentArea from "./ContentArea.jsx";

console.log(page);
class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return  <div>
			<NavigationBar/>
			<ContentArea/>
		</div> ;
	}
}

page();

export default App;