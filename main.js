const menuData = [
    {
        id: 'best-sellers',
        title: 'Best Sellers',
        icon: 'ph-crown',
        layout: 'vertical',
        items: [
            { 
                id: 'item-1',
                name: 'Caramel Macchiato', 
                desc: 'Rich espresso with steamed milk and buttery caramel drizzle', 
                price: '$6.50', 
                image: 'assets/coffee.png', 
                tag: 'BEST SELLER', 
                tagClass: '', 
                allergens: [{icon: 'ph-cow', name: 'dairy'}],
                prepTime: '3 min',
                calories: '280 cal',
                longDesc: 'A luxurious classic featuring our signature espresso poured over smooth steamed milk, perfectly balanced with a rich, buttery caramel drizzle that cascades down the glass.',
                ingredients: ['Espresso', 'Steamed Milk', 'Caramel Syrup', 'Caramel Drizzle'],
                video: 'assets/videos/CaramelMacchiato.mp4'
            },
            { 
                id: 'item-2',
                name: 'Ceremonial Matcha Latte', 
                desc: 'Premium grade matcha whisked with creamy oat milk', 
                price: '$7.00', 
                image: 'assets/matcha.png', 
                tag: "CHEF'S PICK", 
                tagClass: 'chefs-pick', 
                allergens: [{icon: 'ph-grain', name: 'oats'}],
                prepTime: '4 min',
                calories: '180 cal',
                longDesc: 'Sourced directly from Uji, Japan, our ceremonial grade matcha is traditionally whisked in a chawan to create a frothy, vibrant green brew, delicately folded into creamy oat milk.',
                ingredients: ['Ceremonial Matcha', 'Oat Milk', 'Agave (Optional)', 'Hot Water'],
                video: 'assets/videos/CeremonialMatchaLatte.mp4'
            },
            { 
                id: 'item-3',
                name: 'Truffle Mushroom Toast', 
                desc: 'Sourdough with truffle cream, wild mushrooms & microgreens', 
                price: '$14.50', 
                image: 'assets/toast.png', 
                tag: 'BEST SELLER', 
                tagClass: '', 
                allergens: [{icon: 'ph-wheat', name: 'gluten'}, {icon: 'ph-cow', name: 'dairy'}],
                prepTime: '8 min',
                calories: '420 cal',
                longDesc: 'Thick cut artisan sourdough toasted to a golden crisp, generously smothered with our house-made white truffle cream, topped with a medley of sautéed wild mushrooms and fresh microgreens.',
                ingredients: ['Sourdough', 'Truffle Cream', 'Shiitake', 'Cremini', 'Microgreens', 'Sea Salt'],
                video: 'assets/videos/TruffleMushroomToast.mp4'
            },
            { 
                id: 'item-4',
                name: 'Chocolate Croissant', 
                desc: 'French butter croissant with rich dark chocolate filling', 
                price: '$5.50', 
                image: 'assets/pastry.png', 
                tag: "CHEF'S PICK", 
                tagClass: 'chefs-pick', 
                allergens: [{icon: 'ph-warning', name: 'gluten, dairy, eggs, nuts'}],
                prepTime: 'Ready',
                calories: '350 cal',
                longDesc: 'Authentic French pain au chocolat, featuring shatteringly crisp, buttery layers that give way to a soft center filled with premium Valrhona dark chocolate batons.',
                ingredients: ['French Butter', 'Flour', 'Dark Chocolate', 'Eggs', 'Yeast'],
                video: 'assets/videos/ChocolateCroissant.mp4'
            },
            { 
                id: 'item-5',
                name: 'Avocado Toast', 
                desc: 'Smashed avocado, poached egg, chili flakes & lime', 
                price: '$13.00', 
                image: 'assets/toast.png', 
                tag: 'BEST SELLER', 
                tagClass: '', 
                allergens: [{icon: 'ph-wheat', name: 'gluten'}, {icon: 'ph-egg', name: 'eggs'}],
                prepTime: '7 min',
                calories: '380 cal',
                longDesc: 'Perfectly ripe Hass avocados roughly mashed with lime juice and cilantro, piled high on toasted multigrain bread, and crowned with a perfectly runny poached egg.',
                ingredients: ['Multigrain Bread', 'Avocado', 'Poached Egg', 'Chili Flakes', 'Lime', 'Cilantro'],
                video: 'assets/examples/salad.mp4'
            }
        ]
    },
    {
        id: 'classic',
        title: 'Classic',
        icon: 'ph-coffee',
        layout: 'horizontal',
        items: [
            { 
                id: 'item-6',
                name: 'Espresso', 
                desc: 'Double shot of our house espresso blend', 
                price: '$3.50', 
                image: 'assets/coffee.png', 
                allergens: [],
                prepTime: '1 min', calories: '5 cal',
                longDesc: 'A concentrated double shot of our signature house blend, pulled with precision to extract a rich crema, deep chocolate notes, and a bright berry finish.',
                ingredients: ['House Blend Coffee Beans', 'Filtered Water'],
                video: 'assets/videos/expresso.mp4'
            },
            { 
                id: 'item-7',
                name: 'Americano', 
                desc: 'Espresso diluted with hot water for a smooth finish', 
                price: '$4.50', 
                image: 'assets/coffee.png', 
                allergens: [],
                prepTime: '2 min', calories: '10 cal',
                longDesc: 'A classic favorite. We pull a double shot of espresso and gently pour it over hot water, maintaining the crema while creating a smooth, highly drinkable cup.',
                ingredients: ['Espresso', 'Hot Water'],
                video: 'assets/videos/amerciano.mp4'
            },
            { 
                id: 'item-8',
                name: 'Cappuccino', 
                desc: 'Equal parts espresso, steamed milk & velvety foam', 
                price: '$5.50', 
                image: 'assets/coffee.png', 
                allergens: [{icon: 'ph-cow', name: 'dairy'}],
                prepTime: '3 min', calories: '120 cal',
                longDesc: 'The perfect balance of coffee and milk. A rich espresso base topped with deeply textured microfoam that creates a velvety mouthfeel from the first sip to the last.',
                ingredients: ['Espresso', 'Whole Milk (or alt)'],
                video: 'assets/videos/capuccino.mp4'
            },
            { 
                id: 'item-9',
                name: 'Café Latte', 
                desc: 'Smooth espresso with silky steamed milk', 
                price: '$5.50', 
                image: 'assets/coffee.png', 
                allergens: [{icon: 'ph-cow', name: 'dairy'}],
                prepTime: '3 min', calories: '180 cal',
                longDesc: 'For those who prefer a milk-forward drink. Our latte features a double shot of espresso enveloped in beautifully steamed milk with just a thin layer of foam on top.',
                ingredients: ['Espresso', 'Steamed Milk'],
                video: 'assets/videos/capuccino.mp4'
            }
        ]
    },
    {
        id: 'signature',
        title: 'Signature',
        icon: 'ph-sparkle',
        layout: 'horizontal',
        items: [
            { 
                id: 'item-10',
                name: 'Lavender Honey Latte', 
                desc: 'Floral lavender syrup with raw honey & oat milk', 
                price: '$7.00', 
                image: 'assets/coffee.png', 
                tag: 'NEW', 
                tagClass: 'new', 
                allergens: [{icon: 'ph-grain', name: 'oats'}],
                prepTime: '4 min', calories: '210 cal',
                longDesc: 'A delicate and aromatic experience. House-made lavender syrup infused with raw wildflower honey, paired with espresso and creamy oat milk.',
                ingredients: ['Espresso', 'Oat Milk', 'Lavender Syrup', 'Raw Honey'],
                video: 'assets/videos/LavenderHoneyLatte.mp4'
            },
            { 
                id: 'item-11',
                name: 'Rose Cardamom Latte', 
                desc: 'Exotic rose water & cardamom with espresso', 
                price: '$7.50', 
                image: 'assets/coffee.png', 
                allergens: [{icon: 'ph-cow', name: 'dairy'}],
                prepTime: '4 min', calories: '190 cal',
                longDesc: 'An exotic journey of flavors. Earthy espresso balanced with aromatic rose water and ground green cardamom, finished with a sprinkle of dried rose petals.',
                ingredients: ['Espresso', 'Milk', 'Rose Water', 'Cardamom', 'Rose Petals'],
                video: 'assets/videos/RoseCardamomLatte.mp4'
            }
        ]
    },
    {
        id: 'sweets',
        title: 'Sweets',
        icon: 'ph-cake',
        layout: 'horizontal',
        items: [
            { 
                id: 'item-12',
                name: 'Crème Brûlée', 
                desc: 'Vanilla bean custard with caramelized sugar top', 
                price: '$8.50', 
                image: 'assets/dessert.png', 
                allergens: [{icon: 'ph-warning', name: 'dairy, eggs'}],
                prepTime: '2 min', calories: '320 cal',
                longDesc: 'Madagascar vanilla bean custard, slow-baked to silky perfection and finished with a thin, crackling layer of caramelized sugar. Break through the crust to reveal the creamy treasure beneath.',
                ingredients: ['Vanilla Beans', 'Heavy Cream', 'Egg Yolks', 'Sugar'],
                video: 'assets/videos/CremeBrulee.mp4'
            },
            { 
                id: 'item-13',
                name: 'Chocolate Lava Cake', 
                desc: 'Warm cake with molten dark chocolate center', 
                price: '$10.00', 
                image: 'assets/dessert.png', 
                allergens: [{icon: 'ph-warning', name: 'gluten, dairy, eggs'}],
                prepTime: '5 min', calories: '550 cal',
                longDesc: 'A decadent individual chocolate cake that, when broken, reveals a flowing center of rich, warm Valrhona dark chocolate. Served with a dusting of powdered sugar.',
                ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour'],
                video: 'assets/videos/ChocolateLavaCake.mp4'
            }
        ]
    }
];

// Flat map for easy lookup
const allItemsMap = new Map();
menuData.forEach(section => {
    section.items.forEach(item => {
        allItemsMap.set(item.id, item);
    });
});

function getSafeVideoUrl(videoPath) {
    return videoPath ? encodeURI(videoPath) : '';
}

function getVideoMarkup(item, className, placeholderUrl) {
    if (!item.video) {
        return `<img src="${item.image}" alt="${item.name}" class="${className}" onerror="this.src='${placeholderUrl}'">`;
    }

    return `
        <video
            class="${className}"
            autoplay
            loop
            muted
            playsinline
            preload="metadata"
            poster="${item.image || ''}"
            data-src="${getSafeVideoUrl(item.video)}"
        ></video>
    `;
}

function setupLazyVideos() {
    const videos = document.querySelectorAll('video[data-src]');
    if (!videos.length) return;

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    video.src = video.dataset.src;
                    video.load();
                    video.play().catch(() => {});
                    obs.unobserve(video);
                }
            });
        }, { rootMargin: '150px 0px' });

        videos.forEach(video => observer.observe(video));
    } else {
        videos.forEach(video => {
            video.src = video.dataset.src;
            video.load();
            video.play().catch(() => {});
        });
    }
}

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    renderTopNav();
    renderSections();
    renderBottomNav();
    setupLazyVideos();
    
    // Smooth scroll for nav links
    setupScrollSpy();
    
    // Scroll to top
    document.getElementById('scrollTopBtn').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Modal Close handlers
    const modalOverlay = document.getElementById('itemModalOverlay');
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});

function renderTopNav() {
    const nav = document.getElementById('categoriesNav');
    nav.innerHTML = menuData.map((cat, index) => `
        <a href="#${cat.id}" class="category-pill ${index === 0 ? 'active' : ''}" data-target="${cat.id}">
            <i class="ph ${cat.icon}"></i> ${cat.title}
        </a>
    `).join('');
}

function renderBottomNav() {
    const nav = document.getElementById('bottomCategories');
    nav.innerHTML = menuData.map((cat, index) => `
        <a href="#${cat.id}" class="bottom-category ${index === 0 ? 'active' : ''}" data-target="${cat.id}">
            <i class="ph ${cat.icon}"></i>
            <span>${cat.title}</span>
        </a>
    `).join('');
}

function renderSections() {
    const container = document.getElementById('menu-container');
    
    let html = '';
    menuData.forEach((section, index) => {
        const isVertical = section.layout === 'vertical';
        const gridClass = isVertical ? '' : 'grid-wrap';
        
        const itemsHtml = section.items.map(item => {
            if (isVertical) {
                return `
                <div class="card-vertical cinematic-card" onclick="openModal('${item.id}')">
                    <div class="card-img-container">
                        ${getVideoMarkup(item, 'card-img', 'https://via.placeholder.com/300x200?text=Image')}
                        <div class="img-gradient-overlay"></div>
                        ${item.tag ? `<div class="card-tag ${item.tagClass}">${item.tag}</div>` : ''}
                        <div class="card-price-badge">${item.price}</div>
                    </div>
                    <div class="card-content">
                        <div class="card-title">${item.name}</div>
                        <div class="card-desc">${item.desc}</div>
                        ${item.allergens && item.allergens.length > 0 ? `
                        <div class="card-allergens">
                            <i class="ph ph-warning"></i>
                            <span>${item.allergens.map(a => a.name).join(', ')}</span>
                        </div>
                        ` : ''}
                    </div>
                </div>
                `;
            } else {
                return `
                <div class="card-horizontal cinematic-card" onclick="openModal('${item.id}')">
                    <div class="card-hz-img-wrapper">
                        ${getVideoMarkup(item, 'card-hz-img', 'https://via.placeholder.com/150?text=Image')}
                    </div>
                    ${item.tag && isVertical == false ? `<div class="card-hz-tag ${item.tagClass}">${item.tag}</div>` : ''}
                    <div class="card-hz-content">
                        <div>
                            <div class="card-hz-title">${item.name}</div>
                            <div class="card-hz-desc">${item.desc}</div>
                        </div>
                        <div class="card-hz-bottom">
                            <div class="card-hz-price">${item.price}</div>
                            ${item.allergens && item.allergens.length > 0 ? `
                            <div class="card-allergens">
                                <i class="ph ph-warning"></i>
                                <span>${item.allergens.map(a => a.name).join(', ')}</span>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
                `;
            }
        }).join('');

        html += `
        <section id="${section.id}" class="menu-section">
            <div class="section-header">
                <h3 class="section-title">
                    <div class="section-title-icon-wrapper">
                        <i class="ph ${section.icon}"></i>
                    </div>
                    ${section.title}
                </h3>
                ${index === 0 ? '<div class="view-all hover-pop">View All <i class="ph ph-caret-right"></i></div>' : `<div class="item-count">${section.items.length} items</div>`}
            </div>
            <div class="items-grid ${gridClass}">
                ${itemsHtml}
            </div>
        </section>
        `;
    });
    
    container.innerHTML = html;
}

function openModal(itemId) {
    const item = allItemsMap.get(itemId);
    if (!item) return;
    
    const modalContent = document.getElementById('itemModalContent');
    const hasWarning = item.allergens && item.allergens.length > 0;
    const warningText = hasWarning ? item.allergens.map(a => a.name).join(', ') : '';

    modalContent.innerHTML = `
        <div class="modal-close-btn" onclick="closeModal()">
            <i class="ph ph-x"></i>
        </div>
        <div class="modal-hero">
            ${item.video ? 
                getVideoMarkup(item, 'modal-hero-video', item.image)
                : `<img src="${item.image}" class="modal-hero-img" alt="${item.name}">`
            }
            <div class="modal-hero-gradient"></div>
            ${item.video ? '' : `
            <div class="modal-play-btn">
                <i class="ph-fill ph-play"></i>
            </div>
            `}
        </div>
        <div class="modal-body">
            <div class="modal-header">
                <div class="modal-title">${item.name}</div>
                <div class="modal-price">${item.price}</div>
            </div>
            <div class="modal-meta">
                <span><i class="ph ph-clock"></i> ${item.prepTime || 'N/A'}</span>
                <span>${item.calories || 'N/A'}</span>
            </div>
            <div class="modal-desc">
                ${item.longDesc || item.desc}
            </div>
            
            ${item.ingredients && item.ingredients.length > 0 ? `
            <div class="modal-section-title">Ingredients</div>
            <div class="modal-ingredients">
                ${item.ingredients.map(ing => `<div class="ingredient-tag">${ing}</div>`).join('')}
            </div>
            ` : ''}
            
            ${hasWarning ? `
            <div class="modal-warning">
                <i class="ph-fill ph-warning-circle"></i>
                <span>Contains: ${warningText}</span>
            </div>
            ` : ''}
            
            <button class="modal-action-btn hover-pop">
                <i class="ph ph-shopping-bag"></i> Add to Order — ${item.price}
            </button>
        </div>
    `;

    document.getElementById('itemModalOverlay').classList.remove('hidden');
    // small delay to allow display block to apply before animating opacity
    setTimeout(() => {
        document.getElementById('itemModalOverlay').classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background scrolling
    }, 10);
}

function closeModal() {
    const overlay = document.getElementById('itemModalOverlay');
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }, 400); // wait for animation
}

function setupScrollSpy() {
    const sections = document.querySelectorAll('.menu-section');
    const topLinks = document.querySelectorAll('.category-pill');
    const bottomLinks = document.querySelectorAll('.bottom-category');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200; // offset for sticky header
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Activate top links
        topLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-target') === current) {
                link.classList.add('active');
                // Auto scroll the horizontal nav
                link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });

        // Activate bottom links
        bottomLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-target') === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for clicks
    const allLinks = [...topLinks, ...bottomLinks];
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerOffset = 120;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });
}
