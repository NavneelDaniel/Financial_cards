// import Component from '@ember/component';
// import { computed } from '@ember/object';
// import { htmlSafe } from '@ember/template';

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';



export default class ProgressBarComponent extends Component {
    
    @tracked width = 0;
    get value() {
        let { cards } = this.args;
        this.width = cards.spent.value/cards.availabletospend.value * 100;
        debugger
        // return this.width;
        return `width: ${this.width}%`;
    }
}


// export default class CardsComponent extends Component {
// // value = 0;

// didInsertElement(){
//     // console.log(this.args);
//     // value = @cardsprogress.spend.value;
    
//     // let { cards } = this.args;
    
//     // let value = 20;
//     // debugger
//     // document.querySelector(".progress_fill").style.width = value;
//     // return value;
//     width: computed('styleWidth', function() {
//         let width = cards.spent.value/cards.availabletospend.value;
//         return htmlSafe(`width: ${width}`);
//       })
// }
// }


// debugger

// export default Component.extend({
//     width: computed(function() {
//         let width = 0.5;
//         return htmlSafe(`width: ${width}`);
//     })
//   });




// import Component from '@ember/component';
// import { computed } from '@ember/object';
// import { htmlSafe } from '@ember/template';
// // debugger
// export default Component.extend({
//   classNames: ['progress-bar'],
//   width: computed(function() {
//     // let width = typeof(this.styleWidth) === 'string' ? this.styleWidth : `${this.styleWidth}%`;
//     let width = cards.spent.value/cards.availabletospend.value;
//     return htmlSafe(`width: ${width}`);
//   })
// });
