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
