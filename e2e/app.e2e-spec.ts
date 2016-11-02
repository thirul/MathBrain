import { MathsActivityPage } from './app.po';

describe('maths-activity App', function() {
  let page: MathsActivityPage;

  beforeEach(() => {
    page = new MathsActivityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
