import { browser, element, by, protractor, $$, $} from 'protractor';

export class HomePage{
    OpenBrowser(url: string)
    {
        browser.get(url);
    }
}