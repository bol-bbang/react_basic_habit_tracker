import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import SimpleHabit from './components/simpleHabit';


class App extends Component {
  state = {
    habits : [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ],
  }
  
  handleAdd = name => {
    let habits = [...this.state.habits];
    let id = habits[habits.length-1].id + 1;  //id를 Date.now()로 할수 있음.
    habits.push({id, name, count:0});
    this.setState({habits});
  }

  handleIncrement = (id) => {
    let habits = [...this.state.habits];
    // habits = habits.map(item => item.id === id ? {...item, count: item.count+1} : item);
    habits = habits.map(item => {
      if(item.id === id){
        // item.count = item.count+1;   //직접적으로 객체의 데이터를 수정하면 얕은 비교에서는 객체의 변화로 감지하지않음.
        return {...item, count: item.count+1};
      }
      return item;
    });
    // console.log(id, habits);  //count++로 했을때, 카운트가 1개씩 늘어나지 않고, 콘솔창에서 object를 열어볼때 당시의 카운트로 나옴.
    this.setState({habits});
  }
  handleDecrement = (id) => {
    let habits = [...this.state.habits];
    habits = habits.map(item => item.id === id ? {...item, count: item.count-1} : item);
    /*
    //habit을 파라미터로 받는다.
    let index = habits.indexOf(habit);
    habits[index]++;
    */
    this.setState({habits});
  }
  handleDelete = (id) => {
    let habits = [...this.state.habits];
    habits = habits.filter(item => item.id !== id);
    this.setState({habits});
  }
  handleReset = () => {
    // this.setState({habits: []});
    let habits = [...this.state.habits];
    habits = habits.map(habit => {
      if(habit.count !== 0){
        return {...habit, count: 0}
      }
      return habit;
    });
    this.setState({ habits });
  }
 
  render(){
    // const totalCount = this.state.habits.reduce((a, b) => a + b.count , 0);
    const totalCount = this.state.habits.filter(item => item.count > 0).length;

    return (
      <>
        <Navbar totalCount={totalCount} />
        <Habits
          habits={this.state.habits} 
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );

      // return <SimpleHabit/>;
  }
}

export default App;
