import { TwitchPage } from './app.po';

describe('twitch App', function() {
  let page: TwitchPage;

  beforeEach(() => {
    page = new TwitchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
