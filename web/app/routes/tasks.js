import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TasksRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('task');
  }
}
