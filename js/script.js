// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav__list');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('nav__list--open');
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Animate timeline items
document.querySelectorAll('.timeline__content').forEach(item => {
    observer.observe(item);
});

// Screenshot lightbox gallery
const galleries = {
    calculator: {
        title: 'Calculator',
        images: ['Calculator/Screenshot (446).png']
    },
    coffee: {
        title: 'Christmas Coffee & Dessert',
        images: [
            'Christmes Coffee & Dessert/Screenshot (453).png',
            'Christmes Coffee & Dessert/Screenshot (454).png',
            'Christmes Coffee & Dessert/Screenshot (455).png',
            'Christmes Coffee & Dessert/Screenshot (456).png',
            'Christmes Coffee & Dessert/Screenshot (457).png',
            'Christmes Coffee & Dessert/Screenshot (458).png',
            'Christmes Coffee & Dessert/Screenshot (460).png',
            'Christmes Coffee & Dessert/Screenshot (461).png',
            'Christmes Coffee & Dessert/Screenshot (462).png',
            'Christmes Coffee & Dessert/Screenshot (463).png'
        ]
    },
    enrollment: {
        title: 'Enrollment System',
        images: [
            'Enrollment System/Screenshot (448).png',
            'Enrollment System/Screenshot (449).png',
            'Enrollment System/Screenshot (450).png',
            'Enrollment System/Screenshot (451).png',
            'Enrollment System/Screenshot (452).png'
        ]
    },
    scientific: {
        title: 'Scientific Calculator',
        images: ['Scientific Calculator/Screenshot (447).png']
    },
    memories: {
        title: 'IT Memories Museum',
        images: [
            'portfolio/FB_IMG_1791175817558.jpg',
            'portfolio/FB_IMG_1791175910183.jpg',
            'portfolio/FB_IMG_1791176038178.jpg',
            'portfolio/received_1255470180081053.jpeg',
            'portfolio/received_1625349032051525.jpeg',
            'portfolio/received_1646438063227566.jpeg',
            'portfolio/received_26292576717105772.jpeg',
            'Port. Pics/IMG_20250815_002518.jpg',
            'Port. Pics/IMG_20250815_004202.jpg',
            'Port. Pics/IMG_20260613_141653_180.jpg',
            'Port. Pics/IMG_20260613_141750_543.jpg',
            'Port. Pics/IMG_20260613_142416_209.jpg',
            'Port. Pics/IMG_20260613_142422_558.jpg',
            'Port. Pics/IMG_20260614_085737_220.jpg',
            'Port. Pics/IMG_20260614_085743_902.jpg',
            'Port. Pics/IMG_20260614_113538_345.jpg',
            'Port. Pics/IMG_20260614_113606_063.jpg',
            'Port. Pics/IMG_20260614_142919_967.jpg',
            'Port. Pics/IMG_20260614_142934_137.jpg',
            'Port. Pics/IMG_20260614_143023_216.jpg',
            'Port. Pics/IMG_20260620_095406_133.jpg',
            'Port. Pics/IMG_20260620_095857_098.jpg',
            'Port. Pics/IMG_20260620_103213_573.jpg',
            'Port. Pics/IMG_20260621_072741_482.jpg',
            'Port. Pics/IMG_20260621_090835_086.jpg',
            'Port. Pics/IMG_20260621_091238_608.jpg',
            'Port. Pics/IMG_20260621_100234_501.jpg',
            'Port. Pics/IMG_20260621_100243_672.jpg',
            'Port. Pics/IMG_20260621_100252_669.jpg',
            'Port. Pics/IMG_20260621_100259_835.jpg',
            'Port. Pics/IMG_20260712_145058_487.jpg',
            'Port. Pics/IMG_20260712_145102_233.jpg',
            'Port. Pics/IMG_20260712_145532_729.jpg',
            'Port. Pics/IMG_20260712_145539_261.jpg',
            'Port. Pics/IMG_20260712_150138_236.jpg',
            'Port. Pics/IMG_20260712_150143_121.jpg',
            'Port. Pics/IMG20251106141314.jpg',
            'Port. Pics/IMG20251106141330.jpg',
            'Port. Pics/IMG20251106141358.jpg',
            'Port. Pics/IMG20251106141407.jpg',
            'Port. Pics/IMG20251120191610.jpg',
            'Port. Pics/IMG20251120191852.jpg',
            'Port. Pics/IMG20251120194549.jpg',
            'Port. Pics/IMG20251120194903.jpg',
            'Port. Pics/IMG20251120195135.jpg',
            'Port. Pics/IMG20251120195347.jpg',
            'Port. Pics/IMG20251120195519.jpg',
            'Port. Pics/IMG20251129181609.jpg',
            'Port. Pics/IMG20251129181629.jpg',
            'Port. Pics/IMG20251129181644.jpg',
            'Port. Pics/IMG20251129181723.jpg',
            'Port. Pics/IMG20251129181751.jpg',
            'Port. Pics/IMG20251129181810.jpg',
            'Port. Pics/IMG20251129181904.jpg',
            'Port. Pics/IMG_20251129182004.jpg',
            'Port. Pics/IMG_20251129182023.jpg',
            'Port. Pics/IMG_20251129182037.jpg',
            'Port. Pics/IMG_20251129182052.jpg',
            'Port. Pics/IMG_20251129182058.jpg',
            'Port. Pics/IMG_20251210082451.jpg',
            'Port. Pics/IMG_20251210082511.jpg',
            'Port. Pics/IMG_20251210082526.jpg',
            'Port. Pics/IMG_20251210082539.jpg',
            'Port. Pics/IMG_20251210082632.jpg',
            'Port. Pics/IMG_20251211002701.jpg',
            'Port. Pics/IMG_20260214133314.jpg',
            'Port. Pics/IMG_20260214133325.jpg',
            'Port. Pics/IMG_20260214133336.jpg',
            'Port. Pics/IMG_20260214134845.jpg',
            'Port. Pics/Screenshot_20241020-103159.png',
            'Port. Pics/Screenshot_20241020-103235.png',
            'Port. Pics/Screenshot_20241020-103301.png',
            'Port. Pics/Screenshot_20241020-103343.png',
            'Port. Pics/Screenshot_20241020-103410.png',
            'Port. Pics/Screenshot_20241020-103422.png',
            'Port. Pics/Screenshot_20241020-103447.png',
            'Port. Pics/Screenshot_20241020-103511.png',
            'Port. Pics/Screenshot_20241020-103541.png',
            'Port. Pics/Screenshot_20241020-103604.png',
            'Port. Pics/Screenshot_20241020-103757.png',
            'Port. Pics/Screenshot_20241020-103803.png',
            'Port. Pics/Screenshot_20241020-103815.png',
            'Port. Pics/Screenshot_20241020-103855.png',
            'Port. Pics/Screenshot_20241020-103905.png',
            'Port. Pics/Screenshot_20241020-103946.png',
            'Port. Pics/Screenshot_20241020-104017.png',
            'Port. Pics/Screenshot_20241020-104035.png',
            'Port. Pics/Screenshot_20241020-104041.png',
            'Port. Pics/Screenshot_20241020-104111.png',
            'Port. Pics/Screenshot_20241020-104136.png',
            'Port. Pics/Screenshot_20241020-104145.png',
            'Port. Pics/Screenshot_20241020-104152.png',
            'Port. Pics/Screenshot_20241020-104221.png',
            'Port. Pics/Screenshot_20241020-104300.png',
            'Port. Pics/Screenshot_20241020-104316.png',
            'Port. Pics/Screenshot_20241020-104352.png',
            'Port. Pics/Screenshot_20241020-104354.png',
            'Port. Pics/Screenshot_20241020-104401.png',
            'Port. Pics/Screenshot_20241020-104410.png',
            'Port. Pics/Screenshot_20241020-104452.png',
            'Port. Pics/Screenshot_20241020-104457.png',
            'Port. Pics/Screenshot_20241020-104501.png',
            'Port. Pics/Screenshot_20241020-104506.png'
        ],
        captions: [
            'Campus memory 1',
            'Campus memory 2',
            'Campus memory 3',
            'Campus memory 4',
            'Campus memory 5',
            'Campus memory 6',
            'Campus memory 7'
        ]
    }
};

// Files in the memories folder that failed to load (corrupt or unsupported)
const brokenMemoryImages = new Set();

function captionFor(gallery, index) {
    if (gallery.captions && gallery.captions[index]) return gallery.captions[index];
    const src = gallery.images[index];
    if (!src) return '';
    return src.split('/').pop().split('.')[0];
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxThumbs = document.getElementById('lightbox-thumbs');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let activeGallery = null;
let activeIndex = 0;
let lastFocused = null;

function showSlide(index) {
    const images = activeGallery.images;
    activeIndex = (index + images.length) % images.length;
    const src = images[activeIndex];

    lightboxImg.src = src;
    lightboxImg.alt = captionFor(activeGallery, activeIndex);
    lightboxCaption.textContent = captionFor(activeGallery, activeIndex);
    lightboxCounter.textContent = `${activeIndex + 1} / ${images.length}`;

    const hasMultiple = images.length > 1;
    lightboxPrev.hidden = !hasMultiple;
    lightboxNext.hidden = !hasMultiple;

    lightboxThumbs.querySelectorAll('.lightbox__thumb').forEach((thumb, i) => {
        thumb.classList.toggle('lightbox__thumb--active', i === activeIndex);
    });
}

// Advances past images the browser could not decode
function showSlideSkippingBroken(offset) {
    const images = activeGallery.images;
    let index = activeIndex;

    for (let step = 0; step < images.length; step++) {
        index = (index + offset + images.length) % images.length;
        if (!brokenMemoryImages.has(images[index])) break;
    }

    showSlide(index);
}

function openLightbox(galleryKey, startIndex) {
    const gallery = galleries[galleryKey];
    if (!gallery) return;

    activeGallery = gallery;
    lastFocused = document.activeElement;

    lightboxTitle.textContent = gallery.title;
    lightboxThumbs.innerHTML = '';

    if (gallery.images.length > 1) {
        gallery.images.forEach((src, i) => {
            const thumb = document.createElement('button');
            thumb.type = 'button';
            thumb.className = 'lightbox__thumb';
            thumb.setAttribute('aria-label', `View screenshot ${i + 1}`);
            const thumbImg = document.createElement('img');
            thumbImg.src = src;
            thumbImg.alt = '';
            thumbImg.loading = 'lazy';
            thumb.appendChild(thumbImg);
            thumb.addEventListener('click', () => showSlide(i));
            lightboxThumbs.appendChild(thumb);
        });
    }

    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    showSlide(startIndex || 0);
    document.querySelector('.lightbox__btn--close').focus();
}

function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    activeGallery = null;
    if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('[data-gallery]').forEach(trigger => {
    trigger.addEventListener('click', () => {
        openLightbox(trigger.dataset.gallery, Number(trigger.dataset.galleryIndex) || 0);
    });
});

// Build the IT Memories museum grid
const memoriesGrid = document.getElementById('memories-grid');
const memoriesTotal = document.getElementById('memories-total');
const memoriesGallery = galleries.memories;
const MEMORIES_PREVIEW_COUNT = 5;

function hideMemoryItem(item, src) {
    item.classList.add('memory-item--broken');
    brokenMemoryImages.add(src);
}

if (memoriesGrid && memoriesGallery) {
    const previewImages = memoriesGallery.images.slice(0, MEMORIES_PREVIEW_COUNT);

    previewImages.forEach((src, i) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'memory-item';
        button.setAttribute('data-gallery', 'memories');
        button.setAttribute('data-gallery-index', String(i));
        button.setAttribute('aria-label', `Open memory: ${captionFor(memoriesGallery, i)}`);

        const img = document.createElement('img');
        img.src = src;
        img.alt = captionFor(memoriesGallery, i);
        img.loading = 'lazy';
        img.addEventListener('error', () => hideMemoryItem(button, src));

        const label = document.createElement('span');
        label.className = 'memory-item__label';
        label.textContent = captionFor(memoriesGallery, i);

        button.appendChild(img);
        button.appendChild(label);
        button.addEventListener('click', () => openLightbox('memories', i));
        memoriesGrid.appendChild(button);
        observer.observe(button);
    });

    if (memoriesTotal) {
        memoriesTotal.textContent = String(memoriesGallery.images.length);
    }
}

lightbox.addEventListener('click', (e) => {
    if (e.target.closest('[data-lightbox-close]')) {
        closeLightbox();
    }
});

lightboxImg.addEventListener('error', () => {
    if (!activeGallery) return;
    brokenMemoryImages.add(lightboxImg.src.split('/').pop());
    brokenMemoryImages.add(activeGallery.images[activeIndex]);

    if (brokenMemoryImages.size >= activeGallery.images.length) {
        closeLightbox();
        return;
    }
    showSlideSkippingBroken(1);
});

lightboxPrev.addEventListener('click', () => showSlideSkippingBroken(-1));
lightboxNext.addEventListener('click', () => showSlideSkippingBroken(1));

document.addEventListener('keydown', (e) => {
    if (!activeGallery) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showSlideSkippingBroken(-1);
    if (e.key === 'ArrowRight') showSlideSkippingBroken(1);
});

// Header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.borderBottomColor = 'var(--color-border-light)';
    }
});

// Update nav links active state on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
    let current = 'about';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('nav__link--active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('nav__link--active');
        }
    });
});