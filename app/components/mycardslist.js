import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MycardsComponent extends Component {
  @tracked query = '';
}