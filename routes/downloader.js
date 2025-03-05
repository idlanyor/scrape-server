import express from 'express';
import { ytVideo, ytMp3, tiktokDl, igDl, spotifyDownload, rednote, threads, fbdl, capcutDl, mediafire } from '../src/index.js';
const router = express.Router();

// Render halaman downloader
router.get('/', (req, res) => {
    res.render('downloader', {
        title: 'Media Downloader'
    });
});

// YouTube Video Downloader
router.get('/youtube', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.render('downloader', {
                title: 'YouTube Downloader',
                error: 'URL tidak ditemukan'
            });
        }

        const result = await ytVideo(url);
        res.render('downloader', {
            title: 'YouTube Downloader',
            result,
            type: 'youtube'
        });

    } catch (error) {
        console.error('YouTube Error:', error);
        res.render('downloader', {
            title: 'YouTube Downloader',
            error: 'Gagal mengunduh video YouTube'
        });
    }
});

// YouTube MP3 Downloader
router.get('/ytmp3', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.render('downloader', {
                title: 'YouTube MP3 Downloader',
                error: 'URL tidak ditemukan'
            });
        }

        const result = await ytMp3(url);
        res.render('downloader', {
            title: 'YouTube MP3 Downloader', 
            result,
            type: 'ytmp3'
        });

    } catch (error) {
        console.error('YouTube MP3 Error:', error);
        res.render('downloader', {
            title: 'YouTube MP3 Downloader',
            error: 'Gagal mengunduh audio YouTube'
        });
    }
});

// Instagram Downloader
router.get('/instagram', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.render('downloader', {
                title: 'Instagram Downloader',
                error: 'URL tidak ditemukan'
            });
        }

        const result = await igDl(url);
        res.render('downloader', {
            title: 'Instagram Downloader',
            result,
            type: 'instagram'
        });

    } catch (error) {
        console.error('Instagram Error:', error);
        res.render('downloader', {
            title: 'Instagram Downloader',
            error: 'Gagal mengunduh media Instagram'
        });
    }
});

// TikTok Downloader
router.get('/tiktok', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.render('downloader', {
                title: 'TikTok Downloader',
                error: 'URL tidak ditemukan'
            });
        }

        const result = await tiktokDl(url);
        res.render('downloader', {
            title: 'TikTok Downloader',
            result,
            type: 'tiktok'
        });

    } catch (error) {
        console.error('TikTok Error:', error);
        res.render('downloader', {
            title: 'TikTok Downloader',
            error: 'Gagal mengunduh video TikTok'
        });
    }
});

// Spotify Downloader
router.get('/spotify', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.render('downloader', {
                title: 'Spotify Downloader',
                error: 'URL tidak ditemukan'
            });
        }

        const result = await spotifyDownload(url);
        res.render('downloader', {
            title: 'Spotify Downloader',
            result,
            type: 'spotify'
        });

    } catch (error) {
        console.error('Spotify Error:', error);
        res.render('downloader', {
            title: 'Spotify Downloader',
            error: 'Gagal mengunduh lagu Spotify'
        });
    }
});

// Rednote Downloader
router.get('/rednote', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.render('downloader', {
                title: 'Rednote Downloader',
                error: 'URL tidak ditemukan'
            });
        }

        const result = await rednote(url);
        res.render('downloader', {
            title: 'Rednote Downloader',
            result,
            type: 'rednote'
        });

    } catch (error) {
        console.error('Rednote Error:', error);
        res.render('downloader', {
            title: 'Rednote Downloader',
            error: 'Gagal mengunduh video Rednote'
        });
    }
});

// Threads Downloader
router.get('/threads', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.render('downloader', {
                title: 'Threads Downloader',
                error: 'URL tidak ditemukan'
            });
        }

        const result = await threads(url);
        res.render('downloader', {
            title: 'Threads Downloader',
            result,
            type: 'threads'
        });

    } catch (error) {
        console.error('Threads Error:', error);
        res.render('downloader', {
            title: 'Threads Downloader',
            error: 'Gagal mengunduh konten Threads'
        });
    }
});

// Facebook Downloader
router.get('/facebook', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.render('downloader', {
                title: 'Facebook Downloader',
                error: 'URL tidak ditemukan'
            });
        }

        const result = await fbdl(url);
        res.render('downloader', {
            title: 'Facebook Downloader',
            result,
            type: 'facebook'
        });

    } catch (error) {
        console.error('Facebook Error:', error);
        res.render('downloader', {
            title: 'Facebook Downloader',
            error: 'Gagal mengunduh video Facebook'
        });
    }
});

// Capcut Downloader
router.get('/capcut', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.render('downloader', {
                title: 'Capcut Downloader',
                error: 'URL tidak ditemukan'
            });
        }

        const result = await capcutDl(url);
        res.render('downloader', {
            title: 'Capcut Downloader',
            result,
            type: 'capcut'
        });

    } catch (error) {
        console.error('Capcut Error:', error);
        res.render('downloader', {
            title: 'Capcut Downloader',
            error: 'Gagal mengunduh template Capcut'
        });
    }
});

// Mediafire Downloader
router.get('/mediafire', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.render('downloader', {
                title: 'Mediafire Downloader',
                error: 'URL tidak ditemukan'
            });
        }

        const result = await mediafire(url);
        res.render('downloader', {
            title: 'Mediafire Downloader',
            result,
            type: 'mediafire'
        });

    } catch (error) {
        console.error('Mediafire Error:', error);
        res.render('downloader', {
            title: 'Mediafire Downloader',
            error: 'Gagal mengunduh file Mediafire'
        });
    }
});

export default router;