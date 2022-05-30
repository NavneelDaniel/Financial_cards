import Component from '@glimmer/component';

export default class CardslistFilterComponent extends Component {
  get results() {
    let { cardslist, query } = this.args;
    // debugger
    if (query) {
        cardslist = cardslist.filter((cards) => cards.name.includes(query));
    }

    return cardslist;
  }
}