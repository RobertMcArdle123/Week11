import { LAB6Page } from './app.po';

describe('lab6 App', function() {
  let page: LAB6Page;

  beforeEach(() => {
    page = new LAB6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
