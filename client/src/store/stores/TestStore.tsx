// test 스토어
import { observable, action, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class AnimationStore {
  @observable
  name = '이석규';

  @action
  changeNameState(name: string) {
    this.name = name;
  }
}

export default AnimationStore;
