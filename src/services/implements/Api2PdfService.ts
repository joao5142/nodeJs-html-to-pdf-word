import IPdfService from "../../interfaces/IPdfService";
let Api2Pdf = require("api2pdf");
import { Blob } from "buffer";

export default class Api2PdfService implements IPdfService {
  Api2Pdf: any;
  a2pClient: any;
  html: string;

  constructor(html: string) {
    this.html = html;

    let a2pClient = new Api2Pdf(process.env.API_KEY_API2PDF);

    this.Api2Pdf = Api2Pdf;
    this.a2pClient = a2pClient;
  }

  convertToHtml() {
    this.a2pClient.wkHtmlToPdf(this.html).then(function (result: any) {
      console.log(result);
      return result.data;
    });
    return new Blob([]);
  }
}
