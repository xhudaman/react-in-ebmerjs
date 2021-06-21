import ReactComponent from '../react-component';

let TaskList = ({ tasks, children }) => {
  return (
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
            return (
              <tr key={task.name}>
                <th scope="row">{task.name}</th>
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
  didInsertElement() {
    super.didInsertElement(...arguments);
    this.renderComponent();
  }

  renderComponent() {
    // const testTasks = [
    //   { id: 1, name: 'asdfasdf', description: 'asdfafef' },
    //   { id: 2, name: 'asdfaasdf', description: 'asdfafef' },
    // ];

    this.reactRender(<TaskList tasks={this.tasks} />);
  }
}
