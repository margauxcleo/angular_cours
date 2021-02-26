import { browser, by, element } from 'protractor';
export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  // correspond au premier test, lié à la navbar
  async getAppTitle(): Promise<string> {
    return element(by.css('.navbar-brand')).getText();
  }


  // correspondent au second test, lié à template-form
  //element() utilisé pour localiser un seul élément
  //si on veut rechercher plusieurs éléments -> utiliser element.all()
  //ces méthodes prennent un paramètre (localisateur) qui décrit comment trouver l'élément
  //By est une collection de stratégies de localisation d'éléments
  async sendKeysToInputFirstNameByName(text: string) {
    return await element(by.name('prenom')).sendKeys(text);
  }
  async sendKeysToInputLastNameByName(text: string) {
    return await element(by.name('nom')).sendKeys(text);
  }
  async clickOnSaveBtn() {
    // return await element(by.buttonText('Ajouter')).click();
    return await element(by.xpath("//div[5]/button")).click();

  }
  async CheckAllInserts() {
    let a = await element.all(by.css('.list-group li span')).count();
    return a;
  }
  async getTextContentByIndex(spanIndex: number) {
    let list = element.all(by.css('.list-group li span'));
    return list.get(spanIndex).getText();
  }

  async clickOnDeleteBtn(btnIndex: number) {
    let list = element.all(by.css('.list-group li button'));
    return list.get(btnIndex).click();
  }
}
