import { QuattroPage } from './app.po';

describe('quattro App', () => {
  let page: QuattroPage;

  beforeEach(() => {
    page = new QuattroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
