import {CallbackFn, compressFile, InputFile, Options} from "compactor";
import './style.css'

type FileData = {
    bytes: string,
    fileName: string, 
    fileSize: number,
    mimeType?: string,
    /** use between 0-2 */
    pageScale: 1.0,   
    /** use between 0-1 */
    pageQuality: 0.75,
}

async function comprimirPdf(fileData: FileData, callback: CallbackFn) {
    const inputFile: InputFile = {
        bytes: fileData.bytes,
        fileName: fileData.fileName,
        fileSize: fileData.fileSize,
        mimeType: fileData.mimeType ?? 'application/pdf',
    };

    const options: Options = {
        pageQuality: fileData.pageQuality,
        pageScale: fileData.pageScale,
    };

    await compressFile(inputFile, callback, options);
}

//@ts-ignore
globalThis.comprimirPdf = comprimirPdf;