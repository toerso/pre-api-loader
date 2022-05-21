class DispatcherStack {
    constructor() {
        this.start = async function () {

        }
    }

    add(callbackWithNext) {
        const next = this.start;

        this.start = async function () {
           await callbackWithNext(next);
        }
    }

  async call() {
      await this.start();
    }
}

export default new DispatcherStack();