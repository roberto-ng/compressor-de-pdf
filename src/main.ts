import {CallbackFn, compressFile, InputFile, Options} from "compactor";
import { z } from "zod";
import './style.css'

const fileDataSchema = z.object({
    bytes: z.string(),
    fileName: z.string(),
    fileSize: z.number(),
    mimeType: z.string().optional(),
    /** use between 0-2 */
    pageScale: z.number(),
    /** use between 0-1 */
    pageQuality: z.number()
  })
  
type FileData = z.infer<typeof fileDataSchema>;

/** Tira o prefixo de uma string em base64 */
function limparBase64(dados: string) {
    const base64Prefix = 'data:image/png;base64,';
    if (dados.startsWith(base64Prefix)) {
        return dados.replace(base64Prefix, '');
    } else {
        return dados;
    }
}

async function comprimirPdf(fileData: FileData | unknown, callback: CallbackFn) {
    const data = fileDataSchema.parse(fileData);

    const inputFile: InputFile = {
        bytes: limparBase64(data.bytes),
        fileName: data.fileName,
        fileSize: data.fileSize,
        mimeType: data.mimeType ?? 'application/pdf',
    };

    const options: Options = {
        pageQuality: data.pageQuality,
        pageScale: data.pageScale,
    };

    await compressFile(inputFile, callback, options);
}

//@ts-ignore
globalThis.comprimirPdf = comprimirPdf;