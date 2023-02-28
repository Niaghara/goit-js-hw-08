"use strict";
// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryDiv = document.querySelector('.gallery');

const makeGalleryImage = image => {
  const { preview, original, description } = image;
  return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" 
        data-source="${original}" 
        alt="${description}"/>
        </a>
    </div>`;
};

const createGallery = galleryItems.map(makeGalleryImage).join('');

galleryDiv.insertAdjacentHTML('beforeend', createGallery);
const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
