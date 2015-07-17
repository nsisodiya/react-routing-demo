/**
 * Created by narendrasisodiya on 28/06/15.
 */

import React, {Component} from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <li><input onChange={this.props.onToggle.bind(this, this.props.todoIndex)} checked={this.props.todo.done} type="checkbox"/> {this.props.todo.taskName}
			<button className="destroy" onClick={this.props.onDestroy.bind(this, this.props.todoIndex)}>X</button>
		</li>;
	}
}

export default TodoItem;