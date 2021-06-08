import ReactComponent from '../react-component';

let App = ({ name, tasks, children }) => (
  <div className="container">
    <nav className="navbar navbar-expand-md navbar-secondary bg-secondary fixed-top">
      <a className="navbar-brand text-light" href="#">
        Task Tracker
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li>
            <a className="mx-2 btn btn-outline-light" href="/tasks">
              Tasks
            </a>
          </li>
          <li>
            <a className="mx-2 btn btn-outline-light" href="tasks/new">
              Add Task
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <main role="main" className="container">
      <div className="row">
        <div className="col-md-12">{children}</div>
      </div>
    </main>
  </div>
);

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments);
    this.reactRender(<App title="React in ember!" />);
  },
});
