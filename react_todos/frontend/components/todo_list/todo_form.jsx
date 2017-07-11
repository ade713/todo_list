import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  linkState(key) {
    return (event =>
      this.setState({[key]: event.currentTarget.value})
    );
  }

  uniqueID () {
    return new Date().getTime();
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: this.uniqueID()});
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render () {
    return (
        <div>
          <h4>Title</h4>
          <input onChange={this.linkState('title')} value={this.state.title}/>
          <h4>Body</h4>
          <input onChange={this.linkState('body')} value={this.state.body}/>
        </div>
    );
  }
}

export default TodoForm;
