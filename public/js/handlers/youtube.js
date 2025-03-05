import { createDownloadButton } from '../downloader.js';

function handleYouTubeResult(data, downloadOptions) {
    console.log('Handling YouTube result:', data); // Debug log

    if (!data) {
        console.error('No data provided to YouTube handler');
        return;
    }

    // Clear existing download options
    downloadOptions.innerHTML = '';

    // Handle new response format
    if (data.title && data.downloads) {
        // Add title if available
        const titleElement = document.createElement('h3');
        titleElement.textContent = data.title;
        titleElement.className = 'text-xl font-bold mb-4';
        downloadOptions.appendChild(titleElement);

        // Add video player if videoUrl is available
        if (data.videoUrl) {
            const videoContainer = document.createElement('div');
            videoContainer.className = 'mb-4 w-full max-w-2xl mx-auto';
            
            const video = document.createElement('video');
            video.src = data.videoUrl;
            video.controls = true;
            video.className = 'w-full rounded-lg shadow-lg';
            video.style.maxHeight = '400px';
            
            videoContainer.appendChild(video);
            downloadOptions.appendChild(videoContainer);
        }

        // Create table for download options
        const table = document.createElement('table');
        table.className = 'w-full border-collapse border border-gray-300 rounded-lg overflow-hidden';
        
        // Create table header
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr class="bg-gray-100">
                <th class="px-4 py-2 text-left">Kualitas</th>
                <th class="px-4 py-2 text-center">Unduh</th>
            </tr>
        `;
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement('tbody');
        
        // Add download options for different qualities
        if (Array.isArray(data.downloads)) {
            data.downloads.forEach((download) => {
                const tr = document.createElement('tr');
                tr.className = 'border-t border-gray-300 hover:bg-gray-50';
                
                if (typeof download === 'object' && download.url) {
                    // New format with quality information
                    const button = createDownloadButton(
                        download.url,
                        'Download'
                    );
                    button.className = 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded';
                    
                    tr.innerHTML = `
                        <td class="px-4 py-2">${download.quality || 'Unknown'}</td>
                        <td class="px-4 py-2 text-center"></td>
                    `;
                    tr.querySelector('td:last-child').appendChild(button);
                    
                } else if (typeof download === 'string') {
                    // Old format with just URL
                    const quality = getQualityFromUrl(download);
                    const button = createDownloadButton(
                        download,
                        'Download'
                    );
                    button.className = 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded';
                    
                    tr.innerHTML = `
                        <td class="px-4 py-2">${quality}</td>
                        <td class="px-4 py-2 text-center"></td>
                    `;
                    tr.querySelector('td:last-child').appendChild(button);
                }
                
                tbody.appendChild(tr);
            });
        }
        
        table.appendChild(tbody);
        downloadOptions.appendChild(table);
        return;
    }

    // Fallback for legacy format handling
    if (Array.isArray(data.url)) {
        const table = document.createElement('table');
        table.className = 'w-full border-collapse border border-gray-300 rounded-lg overflow-hidden';
        
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr class="bg-gray-100">
                <th class="px-4 py-2 text-left">Kualitas</th>
                <th class="px-4 py-2 text-center">Unduh</th>
            </tr>
        `;
        table.appendChild(thead);
        
        const tbody = document.createElement('tbody');
        
        data.url.forEach(quality => {
            if (quality && quality.url) {
                const tr = document.createElement('tr');
                tr.className = 'border-t border-gray-300 hover:bg-gray-50';
                
                const button = createDownloadButton(
                    quality.url,
                    'Download'
                );
                button.className = 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded';
                
                tr.innerHTML = `
                    <td class="px-4 py-2">${quality.quality || 'Unknown'}</td>
                    <td class="px-4 py-2 text-center"></td>
                `;
                tr.querySelector('td:last-child').appendChild(button);
                tbody.appendChild(tr);
            }
        });
        
        table.appendChild(tbody);
        downloadOptions.appendChild(table);
        return;
    }

    // Handle single URL
    if (data.url) {
        const button = createDownloadButton(data.url, 'Download Video');
        button.className = 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded';
        downloadOptions.appendChild(button);
        return;
    }

    // Handle direct string URL
    if (typeof data === 'string') {
        const button = createDownloadButton(data, 'Download Video');
        button.className = 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded';
        downloadOptions.appendChild(button);
        return;
    }

    console.warn('No valid download URL found in YouTube response');
}

// Helper function to extract quality information from URL
function getQualityFromUrl(url) {
    const itag = url.match(/[&?]itag=(\d+)/)?.[1];
    if (!itag) return 'Video';

    const qualities = {
        '18': '360p MP4',
        '22': '720p MP4',
        '137': '1080p MP4',
        '136': '720p MP4',
        '135': '480p MP4',
        '134': '360p MP4',
        '133': '240p MP4',
        '140': 'Audio MP4',
    };

    return qualities[itag] || 'Video';
}

export { handleYouTubeResult }; 