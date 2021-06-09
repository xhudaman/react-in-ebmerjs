import ReactComponent from '../react-component';

let App = ({ name, children }) => (
  <main role="main" className="container-fluid">
    {children}
  </main>
);

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments);
    this.reactRender(<App title="React in ember!" />);
  },
});
