import { Blob } from "buffer";

export default interface IPdfService {
  convertToHtml(): Blob;
}
