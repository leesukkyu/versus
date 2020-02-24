// 전체 AJAX 로딩 애니메이션 스토어

import { observable, computed, action, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class AnimationStore {
  rootStore: any;

  @observable
  isAnimation: boolean = false;

  @observable
  isProgressbar: boolean = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed
  get animation(): boolean {
    return this.isAnimation;
  }

  @computed
  get progressbar(): boolean {
    return this.isProgressbar;
  }

  @action
  public changeAnimationState(isAnimation: boolean) {
    this.isAnimation = isAnimation;
  }

  @action
  public changeProgressbarState(isProgressbar: boolean) {
    this.isProgressbar = isProgressbar;
  }
}

export default AnimationStore;
