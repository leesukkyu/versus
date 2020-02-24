import UserStore from '@/store/stores/UserStore';
import AnimationStore from '@/store/stores/AnimationStore';
import SnackbarStore from './stores/SnackbarStore';

class RootStore {
    userStore: UserStore;
    animationStore: AnimationStore;
    snackbarStore: SnackbarStore;

    constructor() {
        this.userStore = new UserStore(this);
        this.animationStore = new AnimationStore(this);
        this.snackbarStore = new SnackbarStore(this);
    }
}

export default RootStore;
