import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name() {
    return `taks - ${Math.floor(Math.random() * Math.floor(100))}`;
  },
  description() {
    return faker.lorem.sentence();
  },
});
