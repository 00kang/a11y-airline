import store from '../../../store';
import Button from './Button';

export default class MinusButton extends Button {
  constructor() {
    super({
      children: '-',
      onClick: () => {
        store.minusCounter();
      },
    });
  }
}
