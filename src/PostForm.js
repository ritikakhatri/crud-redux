import React, {Component} from "react";

import {connect} from "react-redux";

class PostForm extends Component {
	handleSubmit = (e) =>{
		e.preventDefault()
		const val = this.getInput.value;
		const data ={
			id : new Date().getTime(),
			val
		}
		console.log(data)
		this.props.dispatch({
			type: 'ADD_POSTS',
			payload: data
		});
	}
 	render() {
 		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref={(val)=>this.getInput = val}/>
					<button type="submit">Post</button>
				</form>
			</div>
		)
	}
}

export default connect()(PostForm);