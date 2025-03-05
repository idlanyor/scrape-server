import { createDownloadButton } from '../downloader.js';

function handleTikTokResult(data, downloadOptions) {
    if (data.url) {
        const button = createDownloadButton(data.url, 'Download Video');
        downloadOptions.appendChild(button);
    }
    if (data.music) {
        const button = createDownloadButton(data.music, 'Download Music');
        downloadOptions.appendChild(button);
    }
}

export { handleTikTokResult }; 