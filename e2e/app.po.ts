export class MorphTouch2016Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('morph-touch2016-app h1')).getText();
  }
}
