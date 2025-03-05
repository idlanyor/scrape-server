import { createDownloadButton } from '../downloader.js';

function handleFacebookResult(data, downloadOptions) {
    if (data.hd) {
        const buttonHD = createDownloadButton(data.hd, 'Download HD');
        downloadOptions.appendChild(buttonHD);
    }
    if (data.sd) {
        const buttonSD = createDownloadButton(data.sd, 'Download SD');
        downloadOptions.appendChild(buttonSD);
    }
}

export { handleFacebookResult }; 