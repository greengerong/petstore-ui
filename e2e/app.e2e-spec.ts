import { PetstoreUiPage } from './app.po';

describe('petstore-ui App', function() {
  let page: PetstoreUiPage;

  beforeEach(() => {
    page = new PetstoreUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
