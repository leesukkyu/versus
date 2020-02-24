import UserStore from '@/store/stores/UserStore';
import AnimationStore from '@/store/stores/AnimationStore';

class RootStore {
    userStore: UserStore;
    animationStore: AnimationStore;

    constructor() {
        this.userStore = new UserStore(this);
        this.animationStore = new AnimationStore(this);
    }
}

export default RootStore;
