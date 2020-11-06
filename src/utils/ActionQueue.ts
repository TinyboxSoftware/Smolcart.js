// TODO determine how to best utilize this without sacrificing functional approach 🤔

import Action from './Action';

class ActionQueue {
  private queue: Array<Action>;
  private queueRunning: boolean;

  constructor() {
    this.queueRunning = false;
  }

  public add(action: Action): void {
    this.queue.push(action);
    // NOTE: If the queue is already active, there is no need to rerun executeAction
    if (!this.queueRunning) this.executeAction();
  }

  private async executeAction(): Promise<unknown> {
    if (!this.queueRunning) this.queueRunning = true;
    const currentAction = this.queue.shift();
    await currentAction.execute();
    if (this.queue.length == 0) {
      this.queueRunning = false;
    } else {
      this.executeAction();
    }
    return;
  }
}

export default ActionQueue;
