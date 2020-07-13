import { observable, action } from "mobx";

class RootStore {
  @observable count = 0;
  @action
  setCount(newCount: number) {
    this.count = newCount;
  }
  get pluss5() {
    return this.count + 5;
  }
}

export default new RootStore();
