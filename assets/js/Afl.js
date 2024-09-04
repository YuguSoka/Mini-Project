
document.addEventListener('DOMContentLoaded', () => {
  const imageContainer = document.getElementById('imageContainer');

  const images = [
    { src: './images/adelaidepng.png', alt: 'Adelaide Crows logo' },
    { src: './images/lionspng.png', alt: 'Brisbane Lions logo' },
    { src: './images/carltonpng.png', alt: 'Carlton Football Club logo' },
    { src: './images/collingwoospng.png', alt: 'Collingwood Football Club logo' },
    { src: './images/essendonpng.png', alt: 'Essendon Football Club logo' },
    { src: './images/geelongpng.png', alt: 'Geelong Football Club logo' },
    { src: '/assets/images/goldcoastpng.png', alt: 'Gold Coast Football Club logo' },
    { src: '/assets/images/hawkspng.png', alt: 'Hawthorn Football Club logo' },
    { src: '/assets/images/melbournepng.png', alt: 'Melbourne Demons Football Club' },
    { src: '/assets/images/northpng.png', alt: 'North Melbourne Football Club' },
    { src: '/assets/images/portpng.png', alt: 'Port Adelaide Football Club' },
    { src: '/assets/images/tigerspng.png', alt: 'Richmond Football Club' },
    { src: '/assets/images/saintspng.png', alt: 'St Kilda Football Club' },
    { src: '/assets/images/swanspng.png', alt: 'Sydney Swans Football Club' },
    { src: '/assets/images/eaglespng.png', alt: 'West Coast Eagles Football Club' },
    { src: '/assets/images/bulldogspng.png', alt: 'Western Bulldogs Football Club' }
  ];

  images.forEach(({ src, alt }) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.className = 'logo_image';

    const colDiv = document.createElement('div');
    colDiv.className = 'col-3';
    colDiv.appendChild(img);

    imageContainer.appendChild(colDiv);
  });
});
