import { Component } from './component';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'Learning DOM') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
  <header class="main-header">  
 <h1 class="main-title">My Series</h1> 
  </header>
  `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
