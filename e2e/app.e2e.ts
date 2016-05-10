import { MorphTouch2016Page } from './app.po';

describe('morph-touch2016 App', function() {
  let page: MorphTouch2016Page;

  beforeEach(() => {
    page = new MorphTouch2016Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('morph-touch2016 works!');
  });
});
