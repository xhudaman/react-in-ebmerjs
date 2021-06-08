import Component from '@ember/component';
import ReactDOM from 'react-dom';

export default Component.extend({
  layout: '',

  reactRender(reactComponent) {
    ReactDOM.render(reactComponent, this.element);
  },

  unmountReactElement() {
    ReactDOM.unmountComponentAtNode(this.element);
  },

  willDestroyComponent() {
    this._super();
    this.unmountReactElement();
  },
});
