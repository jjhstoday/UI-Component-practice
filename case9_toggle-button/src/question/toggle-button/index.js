export class ToggleButton {
  constructor(configuration) {
    this.selectedIndex = -1;

    this.callback = configuration.changeEvent;

    this.buttonElements = this.initialize(
      document.querySelector(configuration.selector),
      configuration.data
    );

    this.eventBinding();
  }

  initialize(selector, data) {
    let renderStr = '';
    for (let i = 0; i < data.length; i++) {
      renderStr += `
            <button class="toggle-button">
                <span class="${i > 0 ? 'border' : ''}">${data[i]}</span>
            </button>
            `;
    }
    selector.innerHTML = renderStr;

    return document.querySelectorAll('.toggle-button');
  }

  eventBinding() {
    this.buttonElements.forEach((element, i) => {
      element.addEventListener('click', () => {
        if (this.selectedIndex === i) {
          return;
        }

        if (this.selectedIndex > -1) {
          this.buttonElements[this.selectedIndex].classList.remove('select');
        }

        this.selectedIndex = i;
        this.buttonElements[i].classList.add('select');

        this.callback(this.selectedIndex);
      });
    });
  }
}
