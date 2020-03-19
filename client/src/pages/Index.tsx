import React, { Component, SyntheticEvent } from 'react';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

@inject('TestStore')
@observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    console.log('랜더 호출');
    var newName = '10'
    return (
      <div>
        index
        <button
          onClick={() => {
            this.props.TestStore.changeNameState('어흥');
          }}
        >
          변경
          {newName}
        </button>
      </div>
    );
  }
}

export default Index;
