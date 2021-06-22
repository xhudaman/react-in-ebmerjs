import ReactComponent from '../react-component';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';

let TaskList = ({ tasks, children }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Task</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.name}>
                <th scope="row">{task.id}</th>
                <td>{task.name}</td>
                <td>{task.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default class Tasks extends ReactComponent {
  @tracked testTasks;

  constructor() {
    super(...arguments);

    this.testTasks = [];
  }

  async didInsertElement() {
    super.didInsertElement(...arguments);

    const data = await fetch('/tasks');
    console.log(data);

    this.renderComponent();
  }

  renderComponent() {
    const testTasks = [
      { id: 1, name: 'asdfasdf', description: 'asdfafef' },
      { id: 2, name: 'asdfaasdf', description: 'asdfafef' },
    ];

    this.reactRender(<TaskList tasks={this.tasks} />);
  }
}
