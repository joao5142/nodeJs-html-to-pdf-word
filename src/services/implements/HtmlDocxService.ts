const HtmlDocx = require("html-docx-js");

export default class WordService {
  html: string;
  wordService: any;
  constructor(html: string) {
    this.html = html;
    this.wordService = HtmlDocx;
  }
  convertToHtml() {
    return this.wordService.asBlob(this.html);
  }
}
