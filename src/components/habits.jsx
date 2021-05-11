import React, { Component } from 'react';
import HabitAddForm from './habitAddForm';
import Habit from './habit';

class Habits extends Component {

  render() {

    return (
      <div className="habits">
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
        {
          this.props.habits.map(item => (
            <Habit
            key={item.id}
            habit={item}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            />
            ))
          }
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;