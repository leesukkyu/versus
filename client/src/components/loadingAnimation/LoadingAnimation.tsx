import React from 'react';
import { observer, inject } from 'mobx-react';

import { CSSTransition } from 'react-transition-group';

import './loadingAnimation.scss';

import animationStore from '@/store/stores/AnimationStore';

interface LoadingAnimationProps {
  animationStore?: animationStore;
}

const LoadingAnimation = inject('animationStore')(
  observer((props: LoadingAnimationProps) => {
    const { animationStore } = props;
    const { isAnimation, isProgressbar } = animationStore;
    return (
      <div className="comp-ajax-effect-wrap xxxxx">
        {/* 일반 UI 블럭 애니메이션 */}
        <CSSTransition in={isAnimation} timeout={1500} classNames="animation">
          <div className="ajax-animation-wrap">
            <div className="ajax-animation-box">
              로딩 중
            </div>
          </div>
        </CSSTransition>

        {/* 아름다운 프로그래스 바 애니메이션 */}
        <CSSTransition in={isProgressbar} timeout={1500} classNames="animation">
          <div className="ajax-progressbar-wrap">
            <div className="slider">
              <div className="subline inc" />
              <div className="subline dec" />
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }),
);

export default LoadingAnimation;
