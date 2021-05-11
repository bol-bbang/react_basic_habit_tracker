import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    // console.log('navbar'); //하이라이트 툴이 명확하지 않은경우, 콘솔에 출력해서 확인
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
