import { AppPage } from './app.po';

describe('scrollbar page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct number of items', async () => {
    console.log('Step 1');
    await page.navigateToScrollbarList();
    console.log('Step 2');
    expect(await page.getItemCount()).toEqual(10);
    console.log('Step 3');
  });

  afterEach(() => {});
});
