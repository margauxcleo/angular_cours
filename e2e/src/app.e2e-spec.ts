import { browser, logging } from 'protractor';
import { AppPage } from './app.po';
describe('workspace-project App', () => {
  let page: AppPage;
  beforeEach(async () => {
    page = new AppPage();
    await browser.waitForAngularEnabled(true);
    await browser.get('/home');
    await browser.driver.manage().window().maximize();
  });

  // it  => débuter un test
  it('should display the name of the application', async () => {
    expect(await page.getAppTitle()).toContain('Session Angular');
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });

  // deuxième test ici initier avec "it", concerne le template
  //Cas 2
  it('should add values to the ngForm', async () => {
    await browser.get('/template-form');
    await page.sendKeysToInputLastNameByName('Wick');
    await page.sendKeysToInputFirstNameByName('John');
    await page.clickOnSaveBtn();
    expect(await page.getTextContentByIndex(0)).toContain('John Wick');
    expect(await page.CheckAllInserts()).toBeGreaterThan(0);
  });

  // Cas 3 
  it('should add and delete values to the ngForm', async () => {

    await browser.get('/template-form');

    await page.sendKeysToInputLastNameByName('Wick');

    await page.sendKeysToInputFirstNameByName('John');

    await page.clickOnSaveBtn();

    await page.sendKeysToInputLastNameByName('Baton');

    await page.sendKeysToInputFirstNameByName('Jean');

    await page.clickOnSaveBtn();

    expect(await page.getTextContentByIndex(0)).toContain('John Wick');

    expect(await page.getTextContentByIndex(1)).toContain('Jean Baton');

    expect(await page.CheckAllInserts()).toBe(2);

    await page.clickOnDeleteBtn(1);

    await page.clickOnDeleteBtn(0);

  })
});
