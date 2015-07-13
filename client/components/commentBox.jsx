/**
 * Created by narendrasisodiya on 28/06/15.
 */

import React, {Component} from 'react';

import TodoItem from "./todoItem.jsx";

class TodoApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};
	}
	handelKeyDown(evt){

		if(evt.key === "Enter"){
			console.log();
			this.state.todos.push({
				taskName: this.refs.input.getDOMNode().value,
				done: true
			});
			this.refs.input.getDOMNode().value = "";
			this.setState({
				todos: this.state.todos
			});
		}
	}
	handelToggle(index){
		this.state.todos[index].done = !this.state.todos[index].done;
		this.setState({
			todos: this.state.todos
		});
	}
	getItemLeftCount(){

		return this.state.todos.filter(function (v) {
			return v.done === false;
		}).length;
	}
	render() {
		var self = this;
		return <div className="commentBox">
				<input ref="input" onKeyDown={this.handelKeyDown.bind(this)} type="text" placeholder="What need to be done?"/>
				<div>
					<ul>
						{this.state.todos.map(function (v, i) {
							return <TodoItem todoIndex={i} onToggle={self.handelToggle.bind(self)} todo={v}/>
						})}
					</ul>
				</div>
				<footer>
						<span>{this.getItemLeftCount()} items left</span>
				</footer>
		</div>;
	}
}

export default TodoApp;