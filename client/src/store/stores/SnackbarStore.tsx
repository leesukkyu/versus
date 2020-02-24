import { observable, action, configure } from 'mobx';

configure({
  enforceActions: 'observed',
});

class SnackbarStore {
  rootStore;

  @observable
  isOpen: boolean = false;

  @observable
  msg: string = '';

  @observable
  color: string = '';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  public openSnackbar(payload: { color?: string; msg: string }) {
    this.color = payload.color ? payload.color : '';
    this.msg = payload.msg;
    this.isOpen = true;
  }

  @action
  public closeSnackbar() {
    this.isOpen = false;
  }
}

export default SnackbarStore;
