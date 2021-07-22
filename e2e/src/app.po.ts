import { browser, by, element } from 'protractor';
// tslint:disable:typedef
export class AppPage {
  private readonly itemSelector = by.css('.item');


  navigateToScrollbarList() {
    return browser.get(browser.baseUrl + '/scrollbar');
  }

  navigateToNormalList() {
    return browser.get(browser.baseUrl + '/normal-list');

  }

  getItemCount() {
    return element.all(this.itemSelector).count();
  }
}
