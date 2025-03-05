import { createDownloadButton } from '../downloader.js';

function handleSpotifyResult(data, downloadOptions) {
    if (data.downloadMp3) {
        const button = createDownloadButton(data.downloadMp3, 'Download MP3');
        downloadOptions.appendChild(button);
    }
}

export { handleSpotifyResult }; 