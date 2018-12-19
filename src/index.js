import handleEvent from 'event-handlers';

export default class {
  constructor(stateKey) {
    this.stateKey = stateKey;
    this.store = null;

    this.handleEvent = handleEvent;

    if (window) {
      if (window.WFEventListener) {
        this.existingEventListener = window.WFEventListener;
      }

      window.WFEventListener = this.eventListener;
    }


  }

  eventListener(eventName) {
    if (this.store) {
      this.handleEvent(eventName, this.store);
    }

    if (this.existingEventListener) {
      this.existingEventListener(eventName);
    }
  }

  mutations() {
    return {
      updateWorkflowyState: (state, data) => {
        state[this.stateKey] = data;
      }
    }
  }

  plugin() {
    return store => {
      this.store = store;
    }
  }
}