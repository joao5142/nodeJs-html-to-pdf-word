import { Blob } from "buffer";

export default interface IWordService {
  convertToHtml(): Blob;
}
