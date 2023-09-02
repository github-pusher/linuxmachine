import { STORAGE_KEY } from './constants';

export const unit = {
  subscribeRecord(store) {
    store.subscribe(() => {
      let data = store.getState();
      data = JSON.stringify(data);
      data = encodeURIComponent(data);
      localStorage.setItem(STORAGE_KEY, data);
    });
  },
}

export const { subscribeRecord } = unit;
