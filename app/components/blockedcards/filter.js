import Component from '@glimmer/component';

export default class CardslistFilterComponent extends Component {
    get results() {
        const query1 = "active";
        let { cardslist, query } = this.args;
    
        if (query1) {
            cardslist = cardslist.filter((cards) => cards.status.includes(query1) && cards.username.includes(query));
        }
    
        return cardslist;
      }
}