import React from 'react';

import { observer, inject } from 'mobx-react';

import { CSSTransition } from 'react-transition-group';

import animationStoreTypes from '@Stores/AnimationStore';

import './progressbar.scss';

interface ProgressbarProps {
  animationStore?: animationStoreTypes;
}

const Progressbar = inject('animationStore')(
  observer((props: ProgressbarProps) => {
    const { isActive } = props.animationStore;
    return (
      <CSSTransition in={isActive} unmountOnExit timeout={1500} classNames="progressbar">
        <div className="progressbar-box">
          <div className="slider">
            <div className="sub-line sub-line-1" />
            <div className="sub-line sub-line-2" />
          </div>
        </div>
      </CSSTransition>
    );
  }),
);

export default Progressbar;
