import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: []
})


export class AppComponent  {
  title = 'generatorCss';
  styles: any = [];
  kodCss: string = '';

 
  addCustomStyle() {
    const customStyle = {
      color: this.styles.color,
      backgroundColor: this.styles.backgroundColor,
      border: this.styles.border,
      boxShadow: this.styles.boxShadow
    };

    this.styles.push(customStyle);
  }
  generateCss() {
    let css = '';

    if (this.styles.color) {
      css += `color: ${this.styles.color};\n`;
    }
    if (this.styles.backgroundColor) {
      css += `background-color: ${this.styles.backgroundColor};\n`;
    }
    if (this.styles.border) {
      css += `border: ${this.styles.border};\n`;
    }
    if (this.styles.boxShadow) {
      css += `box-shadow: ${this.styles.boxShadow};\n`;
    };

    this.kodCss = css
  }

}
