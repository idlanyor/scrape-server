import { createDownloadButton } from '../downloader.js';

function handleYouTubeMp3Result(data, downloadOptions) {
    if (data.downloadUrl) {
        const button = createDownloadButton(data.downloadUrl, `Download MP3 ${data.quality || ''}`);
        downloadOptions.appendChild(button);
    }
}

export { handleYouTubeMp3Result }; 