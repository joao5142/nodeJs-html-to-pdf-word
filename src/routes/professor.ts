import express from "express";
const router = express.Router();

import PdfController from "../controllers/PdfController";
import WordController from "../controllers/WordController";

router.post("/avaliacao/pdf", (req: any, res: any) => {
  /*
  #swagger.description = 'Rota que converter uma string html em pdf'
  */
  /*
  #swagger.parameters['html'] = {
	description: 'Recebe um código de um html em uma string no corpo da requisição e converte para pdf.',
    type: 'string',
    required: true,
    in: 'body',
   
  }
*/

  console.log(req.body);
  let pdfController = new PdfController(req);

  res.setHeader("Content-Type", "application/octet-stream");

  let blobFile = pdfController.convertToHtml();
  res.status(200).send(blobFile);
});

router.post("/avaliacao/word", (req: any, res: any) => {
  /*
  #swagger.description = 'Rota que converter uma string html em word'
  */
  /*
  #swagger.parameters['html'] = {
	description: 'Recebe um código de um html em uma string no corpo da requisição e converte para word.',
    type: 'string',
    required: true,
    in: 'body',
   
  }
*/
  let wordController = new WordController(req);
  let blobFile = wordController.convertToHtml();

  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("Content-Disposition", `attachment; filename=document.docx`);

  res.status(200).send(blobFile);
});

export default router;
