import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TestStore from '@Store/stores/TestStore';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import Header from './Header';
import Aside from './Aside';

import './index.scss';

interface IndexProps {
  TestStore: TestStore;
}

interface IndexState {
  collapsed: boolean;
}

@inject('TestStore')
@observer
class Index extends Component<IndexProps, IndexState> {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  componentDidMount() {}

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="index-page-wrap">
        <Header></Header>
        <Aside></Aside>
        <div className="content-wrap">content</div>
      </div>
    );
  }
}

export default Index;
