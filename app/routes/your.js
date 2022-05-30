import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MycardslistRoute extends Route {
  @service store;
  async model() {
    // let response = await fetch('/api/cards.json');
    // let { data } = await response.json();
    // return data;
    console.log(this.store.findAll('card'));
    return this.store.findAll('card');
  }
}