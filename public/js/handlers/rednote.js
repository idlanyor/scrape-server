import { createDownloadButton } from '../downloader.js';

function handleRednoteResult(data, downloadOptions) {
    if (data.url) {
        const button = createDownloadButton(data.url, 'Download Video');
        downloadOptions.appendChild(button);
    }
}

export { handleRednoteResult }; 