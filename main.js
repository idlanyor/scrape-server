import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import {
    capcutDl,
    fbdl,
    igDl,
    memberJkt,
    detailMember,
    mediafire,
    getMp3Murotal,
    pddiktiSearch,
    mahasiswaDetail,
    pinterest,
    rednote,
    shutterstock,
    spotifyDownload,
    tiktokDl,
    threads,
    ytMp3,
    ytVideo
} from './src/index.js';
import { endpoints } from './endpoints.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/downloads', express.static(path.join(__dirname, 'public/downloads')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'API Documentation',
        endpoints
    });
});

// Route handlers
const handleError = (res, error) => {
    console.error('Error:', error);
    res.status(500).json({
        status: false,
        message: 'Internal server error',
        data: null,
        error: error.message
    });
};

const validateUrl = (req, res) => {
    const { url } = req.query;
    if (!url) {
        res.status(400).json({
            status: false,
            message: 'URL parameter diperlukan',
            data: null,
            error: 'Missing URL parameter'
        });
        return false;
    }
    return true;
};

const validateQuery = (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.status(400).json({
            status: false,
            message: 'Query parameter diperlukan',
            data: null,
            error: 'Missing query parameter'
        });
        return false;
    }
    return true;
};

// YouTube Video endpoint
app.get('/api/ytvideo', async (req, res) => {
    try {
        if (!validateUrl(req, res)) return;
        const result = await ytVideo(req.query.url);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// YouTube MP3 endpoint
app.get('/api/ytmp3', async (req, res) => {
    try {
        if (!validateUrl(req, res)) return;
        const result = await ytMp3(req.query.url);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// Instagram endpoint
app.get('/api/instagram', async (req, res) => {
    try {
        if (!validateUrl(req, res)) return;
        const result = await igDl(req.query.url);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// TikTok endpoint
app.get('/api/tiktok', async (req, res) => {
    try {
        if (!validateUrl(req, res)) return;
        const result = await tiktokDl(req.query.url);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// Facebook endpoint
app.get('/api/facebook', async (req, res) => {
    try {
        if (!validateUrl(req, res)) return;
        const result = await fbdl(req.query.url);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// Spotify endpoint
app.get('/api/spotify', async (req, res) => {
    try {
        if (!validateUrl(req, res)) return;
        const result = await spotifyDownload(req.query.url);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// Threads endpoint
app.get('/api/threads', async (req, res) => {
    try {
        if (!validateUrl(req, res)) return;
        const result = await threads(req.query.url);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// CapCut endpoint
app.get('/api/capcut', async (req, res) => {
    try {
        if (!validateUrl(req, res)) return;
        const result = await capcutDl(req.query.url);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// RedNote endpoint
app.get('/api/rednote', async (req, res) => {
    try {
        if (!validateUrl(req, res)) return;
        const result = await rednote(req.query.url);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// Mediafire endpoint
app.get('/api/mediafire', async (req, res) => {
    try {
        if (!validateUrl(req, res)) return;
        const result = await mediafire(req.query.url);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// Pinterest endpoint
app.get('/api/pinterest', async (req, res) => {
    try {
        if (!validateQuery(req, res)) return;
        const result = await pinterest(req.query.q);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// Shutterstock endpoint
app.get('/api/shutterstock', async (req, res) => {
    try {
        if (!validateQuery(req, res)) return;
        const result = await shutterstock(req.query.q);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// PDDIKTI Search endpoint
app.get('/api/pddikti/search', async (req, res) => {
    try {
        if (!validateQuery(req, res)) return;
        const result = await pddiktiSearch(req.query.q);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// PDDIKTI Detail endpoint
app.get('/api/pddikti/detail', async (req, res) => {
    try {
        const { link } = req.query;
        if (!link) {
            return res.status(400).json({
                status: false,
                message: 'Link parameter diperlukan',
                data: null,
                error: 'Missing link parameter'
            });
        }
        const result = await mahasiswaDetail(link);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// JKT48 Members endpoint
app.get('/api/jkt48/members', async (req, res) => {
    try {
        const result = await memberJkt();
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// JKT48 Member Detail endpoint
app.get('/api/jkt48/member/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                status: false,
                message: 'ID parameter diperlukan',
                data: null,
                error: 'Missing ID parameter'
            });
        }
        const result = await detailMember(id);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// Murotal MP3 endpoint
app.get('/api/murrotal', async (req, res) => {
    try {
        const result = await getMp3Murotal();
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
});

// Handle 404 Not Found
app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: 'Endpoint tidak ditemukan',
        data: null,
        error: 'Not Found'
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
