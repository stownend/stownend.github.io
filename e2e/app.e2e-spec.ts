import { AngGitPagesPage } from './app.po';

describe('ang-git-pages App', () => {
  let page: AngGitPagesPage;

  beforeEach(() => {
    page = new AngGitPagesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
