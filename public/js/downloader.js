import { handleYouTubeResult } from './handlers/youtube.js';
import { handleYouTubeMp3Result } from './handlers/ytmp3.js';
import { handleInstagramResult } from './handlers/instagram.js';
import { handleTikTokResult } from './handlers/tiktok.js';
import { handleFacebookResult } from './handlers/facebook.js';
import { handleSpotifyResult } from './handlers/spotify.js';
import { handleThreadsResult } from './handlers/threads.js';
import { handleCapcutResult } from './handlers/capcut.js';
import { handleRednoteResult } from './handlers/rednote.js';
import { handleMediafireResult } from './handlers/mediafire.js';

function createDownloadButton(url, text) {
    const button = document.createElement('a');
    button.href = url;
    button.target = '_blank';
    button.className = 'flex items-center justify-between bg-rgb-secondary p-3 rounded-lg hover:bg-opacity-80 transition-colors';
    button.innerHTML = `
        <span class="text-rgb-accent">${text}</span>
        <span class="bg-rgb-accent text-rgb-primary px-3 py-1 rounded-full text-sm">Download</span>
    `;
    return button;
}

function displayResult(data, activeTab) {
    console.log('Displaying result:', { data, activeTab }); // Debug log

    const resultSection = document.getElementById('resultSection');
    const videoTitle = document.getElementById('videoTitle');
    const videoAuthor = document.getElementById('videoAuthor');
    const downloadOptions = document.getElementById('downloadOptions');

    if (!resultSection || !videoTitle || !videoAuthor || !downloadOptions) {
        console.error('Required elements not found');
        return;
    }

    // Clear previous results
    downloadOptions.innerHTML = '';
    videoTitle.textContent = '';
    videoAuthor.textContent = '';

    // Set title dan author jika tersedia
    if (data.title) videoTitle.textContent = data.title;
    if (data.author) videoAuthor.textContent = data.author;
    else if (data.username) videoAuthor.textContent = data.username;

    // Handle different response types based on the active tab
    const handlers = {
        'youtube': handleYouTubeResult,
        'ytmp3': handleYouTubeMp3Result,
        'instagram': handleInstagramResult,
        'tiktok': handleTikTokResult,
        'facebook': handleFacebookResult,
        'spotify': handleSpotifyResult,
        'threads': handleThreadsResult,
        'capcut': handleCapcutResult,
        'rednote': handleRednoteResult,
        'mediafire': handleMediafireResult
    };

    const handler = handlers[activeTab];
    if (handler) {
        try {
            handler(data, downloadOptions);
            // Tampilkan section hasil hanya jika ada konten yang ditambahkan
            if (downloadOptions.children.length > 0) {
                resultSection.classList.remove('hidden');
            } else {
                console.warn('No download options generated');
                resultSection.classList.add('hidden');
            }
        } catch (error) {
            console.error('Error in handler:', error);
            resultSection.classList.add('hidden');
        }
    } else {
        console.error('No handler found for tab:', activeTab);
        resultSection.classList.add('hidden');
    }
}

export { createDownloadButton, displayResult }; 