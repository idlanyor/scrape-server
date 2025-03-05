import { activeTab, setActiveTab, determineEndpoint } from './tabs.js';
import { validateURL } from './validator.js';
import { displayResult } from './downloader.js';

function filterEndpoints() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const container = document.getElementById('endpointsContainer');
    const cards = container.getElementsByClassName('endpoint-card');

    for (let card of cards) {
        const title = card.getElementsByTagName('h3')[0];
        const txtValue = title.textContent || title.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inisialisasi event listener untuk form download
document.getElementById('downloadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('urlInput').value;

    if (!validateURL(url, activeTab)) {
        return;
    }

    const loadingIndicator = document.getElementById('loadingIndicator');
    const resultSection = document.getElementById('resultSection');

    loadingIndicator.classList.remove('hidden');
    resultSection.classList.add('hidden');

    try {
        const endpoint = determineEndpoint(url);
        if (!endpoint) {
            throw new Error('URL tidak didukung untuk tab yang dipilih');
        }

        console.log('Fetching from endpoint:', `/api/${endpoint}`); // Debug log

        const response = await fetch(`/api/${endpoint}?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Response data:', data); // Debug log

        // Jika response memiliki status false, tampilkan pesan error
        if (data.status === false) {
            throw new Error(data.message || 'Terjadi kesalahan saat memproses permintaan');
        }

        // Tampilkan hasil sesuai dengan format response
        if (data.result) {
            // Format baru: { status: true, message: string, data: null, result: object }
            displayResult(data.result, activeTab);
        } else if (data.data) {
            // Format alternatif: { status: true, message: string, data: object, error: null }
            displayResult(data.data, activeTab);
        } else {
            // Format lama: langsung object hasil
            displayResult(data, activeTab);
        }

    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan: ' + error.message);
        resultSection.classList.add('hidden');
    } finally {
        loadingIndicator.classList.add('hidden');
    }
});

// Expose setActiveTab ke window object agar bisa diakses dari HTML
window.setActiveTab = setActiveTab;
