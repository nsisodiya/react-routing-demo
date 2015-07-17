/**
 * Created by narendrasisodiya on 28/06/15.
 */

import React, {Component} from 'react';

import TodoItem from "./todoItem.jsx";

class TodoApp extends Component {
	constructor(props) {
		super(props);

		let lsState = localStorage.getItem("todoState");
		if (lsState === null) {
			lsState = {
				todos: []
			}
		} else {
			lsState = JSON.parse(lsState);
		}
		this.state = lsState;
	}
	componentDidUpdate(prevProps, prevState) {
		localStorage.setItem("todoState",JSON.stringify(this.state));
	}
	handelKeyDown(evt){
		if(evt.key === "Enter" && this.refs.input.getDOMNode().value !== ""){

			this.state.todos.push({
				taskName: this.refs.input.getDOMNode().value,
				done: false
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
	onDestroy(index){
		this.state.todos.splice(index,1);
		this.setState({
			todos: this.state.todos
		});
	}
	deleteAllCompleted(){
		this.setState({
			todos: this.state.todos.filter(function (v) {
				return v.done === false;
			})
		});
	}
	render() {
		var self = this;
		return <div className="commentBox">
				<input ref="input" onKeyDown={this.handelKeyDown.bind(this)} type="text" placeholder="What need to be done?"/>
				<div>
					<ul>
						{this.state.todos.map(function (v, i) {
							return <TodoItem onDestroy={self.onDestroy.bind(self)} todoIndex={i} onToggle={self.handelToggle.bind(self)} todo={v}/>
						})}
					</ul>
				</div>
				<footer>
						<span>{this.getItemLeftCount()} items left</span>
						<button onClick={this.deleteAllCompleted.bind(this)} >Delete All Completed</button>
				</footer>
		</div>;
	}
}

export default TodoApp;