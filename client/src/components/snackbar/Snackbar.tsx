import React from 'react';

import { CSSTransition } from 'react-transition-group';

import './snackbar.scss';

import { inject, observer } from 'mobx-react';
import snackbarStoreTypes from '@Stores/SnackbarStore';
import { when } from 'mobx';

export interface SnackbarProps {
  snackbar: any;
  snackbarStore: snackbarStoreTypes;
}
export interface SnackbarState {
  isOpen: any;
}

@inject('snackbarStore')
@observer
class Snackbar extends React.Component<SnackbarProps, SnackbarState> {
  componentDidMount() {
    const { snackbarStore } = this.props;
    when(
      () => snackbarStore.isOpen,
      () => {
        setTimeout(() => {
          snackbarStore.closeSnackbar();
        }, 2000);
      },
    );
  }

  render() {
    const { snackbarStore } = this.props;
    return (
      <div className="comp-snackbar">
        <CSSTransition
          in={snackbarStore.isOpen}
          unmountOnExit
          timeout={3000}
          classNames="scale"
        >
          <div className="snackbar-wrap green z-5">
            <div className="snackbar-box">{snackbarStore.msg}</div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Snackbar;
