import config from './config.js';

function validateURL(url, activeTab) {
    if (!url || url.trim() === '') {
        alert('URL tidak boleh kosong!');
        return false;
    }

    try {
        const urlObj = new URL(url);
        if (!urlObj.protocol || !urlObj.host) {
            throw new Error('Invalid URL format');
        }
    } catch (e) {
        alert('Format URL tidak valid! Pastikan URL dimulai dengan http:// atau https://');
        return false;
    }

    const urlDomain = new URL(url).hostname.replace('www.', '');
    const isSupported = config.supportedDomains[activeTab]?.some(domain => urlDomain.includes(domain));

    if (!isSupported) {
        alert(`URL tidak sesuai dengan tab yang dipilih! Gunakan URL ${activeTab}`);
        return false;
    }

    return true;
}

export { validateURL }; 