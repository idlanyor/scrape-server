import { createDownloadButton } from '../downloader.js';

function handleThreadsResult(data, downloadOptions) {
    if (data.url) {
        const button = createDownloadButton(data.url, 'Download Media');
        downloadOptions.appendChild(button);
    }
}

export { handleThreadsResult }; 