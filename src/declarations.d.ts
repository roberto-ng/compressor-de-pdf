module 'compactor' {
    type InputFile = {
        bytes: string, // base64 sem prefixo
        fileName: string,
        fileSize: number,
        mimeType: string,
    }

    type Options = {
        /** use between 0-2 */
        pageScale: 1.0,   
        /** use between 0-1 */
        pageQuality: 0.75,
    }

    type CallbackFn = (file: string) => void

    function compressFile(
        inputFile: InputFile, 
        callback: CallbackFn, 
        options: Options,
    ): Promise<void>
}