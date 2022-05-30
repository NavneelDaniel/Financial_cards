import Component from '@glimmer/component';

export default class CardslistFilterComponent extends Component {
    get results() {
        const query1 = "Navneel";
        let { cardslist, query } = this.args;
    
        if (query1) {
            cardslist = cardslist.filter((cards) => cards.username.includes(query1) && cards.name.includes(query));
        }
    
        return cardslist;
      }
}