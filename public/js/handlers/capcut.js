import { createDownloadButton } from '../downloader.js';

function handleCapcutResult(data, downloadOptions) {
    if (data.template) {
        const button = createDownloadButton(data.template, 'Download Template');
        downloadOptions.appendChild(button);
    }
}

export { handleCapcutResult }; 