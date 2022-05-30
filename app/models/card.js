import Model, { attr } from '@ember-data/model';

export default class CardsModel extends Model {
  @attr name;
  @attr username;
  @attr budgetname;
  @attr spent;
  @attr availabletospend;
  @attr cardtype;
  @attr expiry;
  @attr limit;
  @attr status;

}