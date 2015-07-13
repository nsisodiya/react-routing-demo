/**
 * Created by narendrasisodiya on 28/06/15.
 */

import React, {Component} from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props);
	}
	getItemLeftCount(){

		return this.state.todos.filter(function (v) {
			return v.done === false;
		}).length;
	}
	render() {
		return <li><input onChange={this.props.onToggle.bind(this, this.props.todoIndex)} checked={this.props.todo.done} type="checkbox"/> {this.props.todo.taskName}</li>;
	}
}

export default TodoItem;