// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createMarkupOfImgCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMarkupOfImgCard(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
        `
    }).join('');
}

const modal = new SimpleLightbox(
    '.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const onImageCardClick = (e) => {
    e.preventDefault();

    const isImgEl = e.target.classList.contains('gallery__image');
    if (!isImgEl) {
        return;
    }
    modal.on('show.simplelightbox', {});
}

galleryContainer.addEventListener('click', onImageCardClick);


