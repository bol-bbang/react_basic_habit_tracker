import React, { memo } from 'react';

const habitAddForm = memo((props) => {

  const inputRef = React.createRef();

  const handleAdd = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    // if(name === '') return;
    // this.props.onAdd(name);
    name && props.onAdd(name);
    inputRef.current.value = '';
  }

    return (
      <form className="add-form" onSubmit={handleAdd}>
        <input type="text" className="add-input" placeholder="Habit" ref={inputRef} />
        <button className="add-button" type="submit">Add</button>
      </form>
    );
      
});

export default habitAddForm;

/*
//class component

import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {

  inputRef = React.createRef();

  handleAdd = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    // if(name === '') return;
    // this.props.onAdd(name);
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.handleAdd}>
        <input type="text" className="add-input" placeholder="Habit" ref={this.inputRef} />
        <button className="add-button" type="submit">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
*/