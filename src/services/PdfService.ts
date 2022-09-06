import IPdfService from "../interfaces/IPdfService";
import Api2PdfService from "./implements/HtmlDocxService";

export default class PdfService {
  pdfService: IPdfService;

  constructor(html: string) {
    this.pdfService = new Api2PdfService(html);
  }
  convertToHtml() {
    return this.pdfService.convertToHtml();
  }
}
