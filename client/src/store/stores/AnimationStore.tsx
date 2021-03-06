// ajax 애니메이션 스토어
import { observable, action, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class AnimationStore {
  @observable
  isActive = false;

  @action
  public changeAnimationState(isActive: boolean) {
    this.isActive = isActive;
  }
}

export default AnimationStore;
