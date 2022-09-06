import { Request } from "express";
import PdfService from "../services/PdfService";
import IPdfService from "../interfaces/IPdfService";

export default class PdfController {
  pdfService: IPdfService;

  constructor(req: Request) {
    this.pdfService = new PdfService(req.body.html);
  }

  convertToHtml() {
    this.pdfService.convertToHtml();
  }
}
