// Cargar datos del equipo
fetch('team-info.json')
  .then(response => response.json())
  .then(data => window.teamData = data.team)
  .catch(error => console.error('Error loading team data:', error));

// Cargar datos al iniciar
window.addEventListener('DOMContentLoaded', () => {
  fetch('team-info.json')
    .then(response => response.json())
    .then(data => window.teamData = data.team)
    .catch(error => console.error('Error loading team data:', error));
});

function showTeamMember(memberId) {
  const member = window.teamData.find(m => m.id === memberId);
  if (!member) {
    console.error('Member not found:', memberId);
    return;
  }
  const modal = document.getElementById('teamModal');
  
  // Actualizar contenido del modal
  // Actualizar todos los elementos del modal
  const modalImg = document.getElementById('modalImage');
  const modalName = document.getElementById('modalName');
  const modalRole = document.getElementById('modalRole');
  const modalBio = document.getElementById('modalBio');
  
  if (modalImg && member.image) modalImg.src = member.image;
  if (modalName && member.name) modalName.textContent = member.name;
  if (modalRole && member.role) modalRole.textContent = member.role;
  if (modalBio && member.bio) modalBio.textContent = member.bio;
  
  // Mostrar el modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevenir scroll del fondo
  
  // Asegurar que el modal esté visible
  setTimeout(() => {
    modal.querySelector('.bg-opacity-75').style.opacity = '1';
    modal.querySelector('.relative.max-w-2xl').style.transform = 'scale(1)';
    modal.querySelector('.relative.max-w-2xl').style.opacity = '1';
  }, 10);
}

function closeTeamModal() {
  const modal = document.getElementById('teamModal');
  
  // Animación de cierre
  modal.querySelector('.bg-opacity-75').style.opacity = '0';
  modal.querySelector('.relative.max-w-2xl').style.transform = 'scale(0.95)';
  modal.querySelector('.relative.max-w-2xl').style.opacity = '0';
  
  // Ocultar el modal después de la animación
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restaurar scroll del fondo
  }, 300);
}

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !document.getElementById('teamModal').classList.contains('hidden')) {
    closeTeamModal();
  }
});

// Cerrar modal al hacer clic fuera del contenido
document.getElementById('teamModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('teamModal')) {
    closeTeamModal();
  }
});