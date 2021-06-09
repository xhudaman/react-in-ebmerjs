import ReactComponent from '../react-component';
import { get, set } from '@ember/object';

let TaskList = ({ tasks, children }) => (
  <div className="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => {
          <tr key={task.name}>
            <th scope="row">{task.name}</th>
            <td>{task.description}</td>
          </tr>;
        })}
      </tbody>
    </table>
  </div>
);

export default class Tasks extends ReactComponent {
  didInsertElement() {
    super.didInsertElement(...arguments);
    console.log(this.tasks);
    this.reactRender(<TaskList tasks={this.tasks} />);
  }
}
