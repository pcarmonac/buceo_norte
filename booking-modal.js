function showBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.remove('opacity-0', 'scale-95');
        modal.querySelector('.modal-content').classList.add('opacity-100', 'scale-100');
    }, 10);
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.querySelector('.modal-content').classList.remove('opacity-100', 'scale-100');
    modal.querySelector('.modal-content').classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Cerrar al hacer click fuera del modal
document.addEventListener('click', (e) => {
    const modal = document.getElementById('bookingModal');
    if (e.target === modal) {
        closeBookingModal();
    }
});