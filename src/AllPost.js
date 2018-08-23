import React, {Component} from "react";
import {connect} from "react-redux";

class AllPost extends Component {
	render() {
		return(
			<div>
				<h1>All Posts</h1>
				{this.props.data.map((obj)=> <p key={obj.id}>{obj.val}</p>)}
			</div>
		)
	}
	
}
const mapStateToProps = (state)=>({
			data: state
		})
export default connect(mapStateToProps)(AllPost);