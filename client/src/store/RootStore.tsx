import AnimationStore from '@Stores/AnimationStore';
import TestStore from '@Stores/TestStore';

class RootStore {
  animationStore: AnimationStore;
  TestStore: TestStore;

  constructor() {
    this.animationStore = new AnimationStore();
    this.TestStore = new TestStore();
  }
}

export default new RootStore();
