import { createDownloadButton } from '../downloader.js';

function handleInstagramResult(data, downloadOptions) {
    if (Array.isArray(data.url)) {
        data.url.forEach((url, index) => {
            const button = createDownloadButton(url, `Download Media ${index + 1}`);
            downloadOptions.appendChild(button);
        });
    } else if (data.url) {
        const button = createDownloadButton(data.url, 'Download Media');
        downloadOptions.appendChild(button);
    }
}

export { handleInstagramResult }; 