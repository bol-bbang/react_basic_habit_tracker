import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  
  handleIncrement = (event) => {
    this.props.onIncrement(this.props.habit.id);
  }
  handleDecrement = (event) => {
    if(this.props.habit.count <= 0) return;
    this.props.onDecrement(this.props.habit.id);
  }
  handleDelete = () => {
    this.props.onDelete(this.props.habit.id);
  }
  
  render() {
    // let habit = this.props.habit;
    let { name, count } = this.props.habit;

    return ( 
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
        <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;