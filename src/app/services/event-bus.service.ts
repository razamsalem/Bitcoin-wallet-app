export const SHOW_MSG = 'show-msg';

interface Listener {
  (data: any): void;
}

interface ListenersMap {
  [key: string]: Listener[];
}

export class EventBus {
  private listenersMap: ListenersMap = {};

  on(evName: string, listener: Listener): () => void {
    this.listenersMap[evName] = this.listenersMap[evName]
      ? [...this.listenersMap[evName], listener]
      : [listener];

    return () => {
      this.listenersMap[evName] = this.listenersMap[evName].filter(func => func !== listener);
    };
  }

  emit(evName: string, data: any): void {
    if (!this.listenersMap[evName]) return;

    this.listenersMap[evName].forEach(listener => listener(data));
  }
}

export const eventBus = new EventBus();

export function showUserMsg(msg: any): void {
  eventBus.emit(SHOW_MSG, msg);
}

export function showSuccessMsg(txt: string): void {
  showUserMsg({ txt, type: 'success' });
}

export function showErrorMsg(txt: string): void {
  showUserMsg({ txt, type: 'error' });
}
