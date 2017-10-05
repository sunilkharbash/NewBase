import { GitPage } from './app.po';

describe('git App', () => {
  let page: GitPage;

  beforeEach(() => {
    page = new GitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
