import { Request } from "express";
import WordService from "../services/WordService";
import IWordService from "../interfaces/IWordService";

export default class WordController {
  wordService: IWordService;
  constructor(req: Request) {
    this.wordService = new WordService(req.body.html);
  }

  convertToHtml() {
    this.wordService.convertToHtml();
  }
}
