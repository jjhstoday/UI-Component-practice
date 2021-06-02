export class Chips {
  constructor(configuration) {
    this.data = configuration.data;
    this.container = document.querySelector(configuration.selector);

    this.chipElements = this.initialize(this.container, configuration.data);
    this.inputElement = this.initializeInput(this.container);

    this.eventBinding();
  }

  initialize(selector, data) {
    for (let i = 0; i < data.length; i++) {
      selector.appendChild(this.chipTemplete(data[i]));
    }

    return document.querySelectorAll('.chips-item');
  }

  chipTemplete(data) {
    const newItem = document.createElement('div');
    newItem.classList.add('chips-item');
    newItem.innerHTML = `
        <span class="chips-label">${data}</span>
        <img class="chips-close" src="./src/solution/presenter/chips/assets/close.svg">
        `;

    return newItem;
  }

  initializeInput(selector) {
    const inputElement = document.createElement('input');
    inputElement.classList.add('chips-input');
    inputElement.placeholder = 'enter text...';
    selector.appendChild(inputElement);

    return inputElement;
  }

  eventBinding() {
    this.chipElements.forEach((element, i) => {
      element.querySelector('.chips-close').addEventListener('click', () => {
        const label = element.querySelector('.chips-label').innerHTML;
        this.removeData(label);
        element.remove();
      });
    });
    /*
     ==* insertAdjacentElement *==
    'beforebegin': targetElement그 자체 전에 .
    'afterbegin': targetElement첫 번째 자식 앞에.
    'beforeend': 막내 targetElement, 마지막 자식 뒤.
    'afterend': targetElement자체 후 .
    */
    this.inputElement.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        const newItem = this.chipTemplete(e.target.value);
        newItem.querySelector('.chips-close').addEventListener('click', () => {
          const label = newItem.querySelector('.chips-label').innerHTML;
          this.removeData(label);
          newItem.remove();
        });
        this.container.insertAdjacentElement('afterbegin', newItem);
        this.data.unshift(e.target.value);
        e.target.value = '';
      }
    });
  }

  // q4. 입력된 문자열에 대한 데이터를 가져올 수 있도록 하시오.
  // TODO: Write JS code here!'
  getChips() {
    return this.data;
  }

  removeData(label) {
    const targetIndex = this.data.findIndex(item => item === label);
    this.data.splice(targetIndex, 1);
  }
}
