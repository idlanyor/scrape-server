export const endpoints = [
    {
        name: 'Youtube Video',
        path: '/api/ytvideo',
        description: 'Download video dari Youtube',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
               </svg>`,
        bgColor: 'bg-red-500',
        params: [{ name: 'url', description: 'URL Youtube' }]
    },
    {
        name: 'Youtube MP3',
        path: '/api/ytmp3',
        description: 'Download audio dari Youtube',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
               </svg>`,
        bgColor: 'bg-red-600',
        params: [{ name: 'url', description: 'URL Youtube' }]
    },
    {
        name: 'Spotify',
        path: '/api/spotify',
        description: 'Download lagu dari Spotify',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
               </svg>`,
        bgColor: 'bg-green-500',
        params: [{ name: 'url', description: 'URL Spotify' }]
    },
    {
        name: 'TikTok',
        path: '/api/tiktok',
        description: 'Download video dari TikTok',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
               </svg>`,
        bgColor: 'bg-black',
        params: [{ name: 'url', description: 'URL TikTok' }]
    },
    {
        name: 'Instagram',
        path: '/api/ig',
        description: 'Download konten dari Instagram',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
               </svg>`,
        bgColor: 'bg-pink-600',
        params: [{ name: 'url', description: 'URL Instagram' }]
    },
    {
        name: 'Pinterest',
        path: '/api/pinterest',
        description: 'Download gambar dari Pinterest',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
               </svg>`,
        bgColor: 'bg-red-700',
        params: [{ name: 'url', description: 'URL Pinterest' }]
    },
    {
        name: 'Shutterstock',
        path: '/api/shutterstock',
        description: 'Download gambar dari Shutterstock',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-13v6l5-3-5-3z"/>
               </svg>`,
        bgColor: 'bg-red-600',
        params: [{ name: 'url', description: 'URL Shutterstock' }]
    },
    {
        name: 'JKT48',
        path: '/api/jkt48/members',
        description: 'Daftar member JKT48',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
               </svg>`,
        bgColor: 'bg-pink-500',
        params: []
    },
    {
        name: 'Detail Member JKT48',
        path: '/api/jkt48/member',
        description: 'Detail informasi member JKT48',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
               </svg>`,
        bgColor: 'bg-pink-400',
        params: [{ name: 'memberId', description: 'ID Member JKT48' }]
    },
    {
        name: 'Murotal MP3',
        path: '/api/murotal',
        description: 'Download murotal Al-Quran MP3',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
               </svg>`,
        bgColor: 'bg-green-600',
        params: [{ name: 'surah', description: 'Nomor atau nama surah' }]
    },
    {
        name: 'PDDIKTI Search',
        path: '/api/pddikti/search',
        description: 'Pencarian data mahasiswa di PDDIKTI',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
               </svg>`,
        bgColor: 'bg-blue-600',
        params: [{ name: 'keyword', description: 'Kata kunci pencarian' }]
    },
    {
        name: 'PDDIKTI Detail',
        path: '/api/pddikti/detail',
        description: 'Detail data mahasiswa dari PDDIKTI',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
               </svg>`,
        bgColor: 'bg-blue-700',
        params: [{ name: 'id', description: 'ID Mahasiswa PDDIKTI' }]
    },
    {
        name: 'Facebook',
        path: '/api/fbdl',
        description: 'Download video dari Facebook',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
               </svg>`,
        bgColor: 'bg-blue-600',
        params: [{ name: 'url', description: 'URL Facebook' }]
    },
    {
        name: 'Capcut',
        path: '/api/capcut',
        description: 'Download template Capcut',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 10.5h-1.5V16h-2v-2.5H7v-2h1.5V9h2v2.5H12v2zm7-5h-3v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5zm-.5 2.5h-1v-1h1v1z"/>
               </svg>`,
        bgColor: 'bg-green-500',
        params: [{ name: 'url', description: 'URL Template Capcut' }]
    },
    {
        name: 'Mediafire',
        path: '/api/mediafire',
        description: 'Download file dari Mediafire',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
               </svg>`,
        bgColor: 'bg-blue-500',
        params: [{ name: 'url', description: 'URL Mediafire' }]
    },
    {
        name: 'Rednote',
        path: '/api/rednote',
        description: 'Download video dari Rednote',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
               </svg>`,
        bgColor: 'bg-red-500',
        params: [{ name: 'url', description: 'URL Rednote' }]
    },
    {
        name: 'Threads',
        path: '/api/threads',
        description: 'Download video dari Threads',
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zM8 12l4-4 4 4-4 4-4-4z"/>
               </svg>`,
        bgColor: 'bg-black',
        params: [{ name: 'url', description: 'URL Threads' }]
    }
];