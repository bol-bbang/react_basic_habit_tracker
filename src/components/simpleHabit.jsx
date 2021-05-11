import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {
  
  const [count, setCount] = useState(0);    //state사용 //[변수명, set함수명] = useState(초기값);
  const spanRef = useRef();     //ref사용
  const handleIncrement = useCallback(() => {   //함수 메모리에 저장
    setCount(count + 1);
  });

  useEffect(()=>{   //componentDidMount + componentDidupdate
    console.log(`mount & update!! count : ${count}`);
  }, []);   //useEffect(실행함수, 실행조건-변화했는지 체크할 변수의 배열)


    return (
      <li className="habit">
        <span ref={spanRef} className="habit-name">Reading</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </li>
    );
};

export default SimpleHabit;

/*
import React, { Component } from 'react';

class SimpleHabit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </li>
    );
  }
}

export default SimpleHabit;
*/