import HtmlDocxService from "./implements/HtmlDocxService";
import IWordService from "./../interfaces/IWordService";

export default class WordService {
  wordService: IWordService;
  constructor(html: string) {
    this.wordService = new HtmlDocxService(html);
  }

  convertToHtml() {
    return this.wordService.convertToHtml();
  }
}
