let activeTab = 'youtube';

function setActiveTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-rgb-primary', 'text-rgb-accent');
    });
    event.target.classList.add('active', 'bg-rgb-primary', 'text-rgb-accent');
    document.getElementById('urlInput').placeholder = `Tempel URL ${tab} di sini...`;
    document.getElementById('urlInput').value = '';
    document.getElementById('resultSection').classList.add('hidden');
}

function determineEndpoint(url) {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.replace('www.', '');

    if (domain.includes('youtube.com') || domain.includes('youtu.be')) {
        return activeTab === 'ytmp3' ? 'ytmp3' : 'youtube';
    }
    if (domain.includes('instagram.com')) return 'instagram';
    if (domain.includes('spotify.com')) return 'spotify';
    if (domain.includes('tiktok.com')) return 'tiktok';
    if (domain.includes('facebook.com') || domain.includes('fb.com')) return 'facebook';
    if (domain.includes('threads.net')) return 'threads';
    if (domain.includes('capcut.com')) return 'capcut';
    if (domain.includes('rednote.app')) return 'rednote';
    if (domain.includes('mediafire.com')) return 'mediafire';
    return '';
}

export { activeTab, setActiveTab, determineEndpoint }; 