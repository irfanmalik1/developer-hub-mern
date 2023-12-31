import React, { Component } from "react";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import {addPost} from '../../actions/postActions'
import {connect} from 'react-redux';

class PostForm extends Component {
  state = {
    text: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps){
      if(nextProps.errors){
          this.setState({errors:nextProps.errors});
      }

  }

  onChange=e=>{
      e.preventDefault();

      this.setState({[e.target.name]:e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();

    const {user} =this.props.auth;

    const newPost={
        text:this.state.text,
        name:user.name,
        avatar:user.avatar
    }

    this.props.addPost(newPost);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Somthing...</div>
          <div className="card-body">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup
                  placeholder="Create a post"
                  name="text"
                  info="Create a post to start interacting with others"
                  error={errors.text}
                  value={this.state.text}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=state=>({
    posts:state.posts,
    errors:state.error,
    auth:state.auth
})

export default connect(mapStateToProps,{addPost})(PostForm);
