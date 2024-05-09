export class UIModel {
  state = undefined;
  data = undefined;
  error = undefined;

  constructor(state, data, error) {
    this.state = state;
    this.data = data;
    this.error = error;
  }

  static success(data) {
    return new UIModel("SUCCESS", data, null);
  }

  static loading() {
    return new UIModel("LOADING", null, null);
  }

  static error(error) {
    return new UIModel("ERROR", null, error);
  }

  isSuccess() {
    return this.state === "SUCCESS";
  }

  isLoading() {
    return this.state === "LOADING";
  }

  isError() {
    return this.state === "ERROR";
  }
}
