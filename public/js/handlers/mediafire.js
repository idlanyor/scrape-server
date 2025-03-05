import { createDownloadButton } from '../downloader.js';

function handleMediafireResult(data, downloadOptions) {
    if (data.downloadUrl) {
        const button = createDownloadButton(data.downloadUrl, `Download ${data.filename || 'File'}`);
        downloadOptions.appendChild(button);
    }
}

export { handleMediafireResult }; 