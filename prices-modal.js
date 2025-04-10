function showPricesModal() {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center';
    overlay.onclick = hidePricesModal;

    const modal = document.createElement('div');
    modal.className = 'bg-white rounded-lg p-8 w-full max-w-4xl mx-4';
    modal.onclick = e => e.stopPropagation();

    modal.innerHTML = `
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-3xl font-bold text-caribbean-500">PRECIOS 2025</h3>
            <button onclick="hidePricesModal()" class="text-gray-500 hover:text-drysuit-orange">
                <i class="fas fa-times text-2xl"></i>
            </button>
        </div>
        
        <div class="grid gap-4 md:grid-cols-2">
            <img src="images/precios01.jpeg" alt="Tarifas 2025 - Parte 1" class="w-full h-auto rounded-lg shadow-lg">
            <img src="images/precios02.jpeg" alt="Tarifas 2025 - Parte 2" class="w-full h-auto rounded-lg shadow-lg">
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Animación de entrada
    modal.style.transform = 'scale(0.9)';
    modal.style.opacity = '0';
    modal.style.transition = 'all 0.3s ease-out';
    
    setTimeout(() => {
        modal.style.transform = 'scale(1)';
        modal.style.opacity = '1';
    }, 10);
}

function hidePricesModal() {
    const overlay = document.querySelector('.fixed.inset-0.bg-black');
    if (overlay) {
        overlay.remove();
    }
}