// Script para cargar reseñas de Google para Buceo Norte

const GOOGLE_PLACE_ID = 'ChIJXXXXXXXXXXXXXXXXXX'; // Reemplazar con el ID real de Google Places de Buceo Norte
const API_KEY = 'YOUR_API_KEY'; // Reemplazar con una clave API válida de Google Places

// Función para cargar las reseñas de Google
function loadGoogleReviews() {
    // En un entorno de producción, esta solicitud debería hacerse desde el servidor
    // para proteger la clave API. Esta es una implementación de ejemplo para fines de demostración.
    
    // Simulamos reseñas de Google para la demostración
    // En producción, se reemplazaría con una llamada real a la API de Google Places
    const mockReviews = [
        {
            author_name: "Carlos Mendoza",
            profile_photo_url: "", // URL de la foto de perfil
            rating: 5,
            relative_time_description: "hace 1 mes",
            text: "Excelente centro de buceo. Hice mi curso Open Water con ellos y la experiencia fue increíble. Los instructores son muy profesionales y pacientes. Las aguas de Iquique son espectaculares."
        },
        {
            author_name: "Andrea Fuentes",
            profile_photo_url: "",
            rating: 5,
            relative_time_description: "hace 2 meses",
            text: "Mi primera experiencia de buceo y fue maravillosa. El equipo de Buceo Norte me hizo sentir segura en todo momento. Recomendado 100%."
        },
        {
            author_name: "Roberto Sánchez",
            profile_photo_url: "",
            rating: 4,
            relative_time_description: "hace 3 meses",
            text: "Muy buena atención y profesionalismo. El equipo estaba en perfectas condiciones y los instructores conocen muy bien los sitios de buceo en Iquique."
        },
        {
            author_name: "Valentina Torres",
            profile_photo_url: "",
            rating: 5,
            relative_time_description: "hace 1 semana",
            text: "Completé mi certificación Advanced Open Water con Buceo Norte y fue una experiencia fantástica. Muy recomendable para quienes quieren avanzar en su formación como buzo."
        },
        {
            author_name: "Diego Ramírez",
            profile_photo_url: "",
            rating: 5,
            relative_time_description: "hace 2 semanas",
            text: "El buceo en naufragios con Buceo Norte es una experiencia única. Los guías son excelentes y conocen perfectamente cada sitio. Volveré pronto para hacer más inmersiones."
        }
    ];

    displayGoogleReviews(mockReviews);

    // En producción, se usaría algo como esto:
    /*
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.result && data.result.reviews) {
                displayGoogleReviews(data.result.reviews);
            }
        })
        .catch(error => {
            console.error('Error al cargar reseñas de Google:', error);
        });
    */
}

// Función para mostrar las reseñas en la página
function displayGoogleReviews(reviews) {
    const reviewsContainer = document.getElementById('google-reviews-container');
    if (!reviewsContainer) return;

    // Limpiar el contenedor
    reviewsContainer.innerHTML = '';

    // Mostrar cada reseña
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105';

        // Crear estrellas basadas en la calificación
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= review.rating) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else if (i - 0.5 <= review.rating) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }

        // Obtener iniciales para el avatar
        const initials = review.author_name
            .split(' ')
            .map(name => name.charAt(0))
            .join('')
            .substring(0, 2);

        reviewElement.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-caribbean-500 flex items-center justify-center text-white font-bold mr-4">${initials}</div>
                <div>
                    <h4 class="font-bold text-gray-800">${review.author_name}</h4>
                    <div class="flex text-drysuit-orange">
                        ${starsHTML}
                    </div>
                    <p class="text-sm text-gray-500">${review.relative_time_description}</p>
                </div>
            </div>
            <p class="text-gray-600 italic">${review.text}</p>
        `;

        reviewsContainer.appendChild(reviewElement);
    });

    // Mostrar enlace a Google Maps para dejar reseña
    const reviewLinkContainer = document.getElementById('google-review-link');
    if (reviewLinkContainer) {
        reviewLinkContainer.innerHTML = `
            <a href="https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}" 
               target="_blank" 
               class="inline-flex items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" class="h-6 mr-2">
                <span class="lang-write-review">Escribe una reseña</span>
            </a>
        `;
    }
}

// Función para actualizar los textos según el idioma seleccionado
function updateGoogleReviewsLanguage(language) {
    const translations = {
        'google-reviews-title': {
            'es': 'Reseñas de Google',
            'en': 'Google Reviews'
        },
        'google-reviews-subtitle': {
            'es': 'Lo que nuestros clientes dicen sobre nosotros en Google',
            'en': 'What our customers say about us on Google'
        },
        'write-review': {
            'es': 'Escribe una reseña',
            'en': 'Write a review'
        }
    };

    // Actualizar textos
    document.querySelectorAll('[class^="lang-"]').forEach(el => {
        const key = el.className.replace('lang-', '');
        if (translations[key] && translations[key][language]) {
            el.textContent = translations[key][language];
        }
    });
}

// Cargar reseñas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    loadGoogleReviews();
    
    // Escuchar cambios de idioma
    document.getElementById('lang-es').addEventListener('click', function() {
        updateGoogleReviewsLanguage('es');
    });
    
    document.getElementById('lang-en').addEventListener('click', function() {
        updateGoogleReviewsLanguage('en');
    });
});