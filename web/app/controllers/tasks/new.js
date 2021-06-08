import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TasksNewController extends Controller {
  @action
  async addTask(event) {
    event.preventDefault();
    const task = this.store.createRecord('task', {
      name: this.name,
      description: this.description,
    });
    await task.save();

    this.transitionToRoute('tasks');
  }
}
