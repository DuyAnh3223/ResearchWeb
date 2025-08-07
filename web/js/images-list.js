// Images List Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sample images data
    const imagesData = [
        {
            id: 'project-kickoff-gallery',
            title: 'Project Kick-off Meeting Gallery',
            date: '2024-03-15',
            author: 'Project Team',
            image: 'images/placeholder_event.jpg',
            description: 'Photo gallery from the project kick-off meeting showing team members, presentations, and collaborative activities. Includes group photos and key moments from the event.',
            category: 'pictures'
        },
        {
            id: 'field-study-site-visits',
            title: 'Field Study Site Visits',
            date: '2024-04-22',
            author: 'Research Team',
            image: 'images/placeholder_event.jpg',
            description: 'Collection of photographs from field study visits to various Southeast Asian cities. Images showcase existing Nature-based Solutions, urban water challenges, and research activities.',
            category: 'pictures'
        },
        {
            id: 'stakeholder-workshop-highlights',
            title: 'Stakeholder Workshop Highlights',
            date: '2024-05-30',
            author: 'Workshop Team',
            image: 'images/placeholder_event.jpg',
            description: 'Visual highlights from the stakeholder workshop including presentations, group discussions, and networking sessions. Features key stakeholders and their contributions to the project.',
            category: 'pictures'
        },
        {
            id: 'project-planning-sessions',
            title: 'Project Planning Sessions',
            date: '2024-02-10',
            author: 'Project Team',
            image: 'images/placeholder_event.jpg',
            description: 'Photos from initial project planning sessions and team meetings. Shows the collaborative process of developing the research framework.',
            category: 'pictures'
        },
        {
            id: 'team-introduction-setup',
            title: 'Team Introduction and Setup',
            date: '2024-01-20',
            author: 'Project Team',
            image: 'images/placeholder_event.jpg',
            description: 'Introduction photos of the project team members and initial setup activities. Includes team building and project initiation moments.',
            category: 'pictures'
        },
        {
            id: 'site-visit-bangkok',
            title: 'Site Visit: Bangkok Green Infrastructure',
            date: '2024-06-15',
            author: 'Field Research Team',
            image: 'images/placeholder_event.jpg',
            description: 'Detailed photo documentation of green infrastructure projects in Bangkok, including urban wetlands, parks, and sustainable drainage systems.',
            category: 'pictures'
        },
        {
            id: 'site-visit-hcmc',
            title: 'Site Visit: Ho Chi Minh City Water Systems',
            date: '2024-06-20',
            author: 'Field Research Team',
            image: 'images/placeholder_event.jpg',
            description: 'Comprehensive visual documentation of water management systems in Ho Chi Minh City, including challenges and existing solutions.',
            category: 'pictures'
        },
        {
            id: 'site-visit-phnompenh',
            title: 'Site Visit: Phnom Penh River Systems',
            date: '2024-07-05',
            author: 'Field Research Team',
            image: 'images/placeholder_event.jpg',
            description: 'Photographic exploration of Phnom Penh\'s river systems and their role in urban water management and flood control.',
            category: 'pictures'
        },
        {
            id: 'community-engagement-photos',
            title: 'Community Engagement Activities',
            date: '2024-08-15',
            author: 'Community Outreach Team',
            image: 'images/placeholder_event.jpg',
            description: 'Visual documentation of community engagement activities, including public consultations, workshops, and participatory planning sessions.',
            category: 'pictures'
        }
    ];

    let currentImages = [...imagesData];
    let currentPage = 1;
    const itemsPerPage = 9;

    // Initialize the page
    function init() {
        displayImages();
        setupEventListeners();
        updatePagination();
    }

    // Display images
    function displayImages() {
        const grid = document.getElementById('images-grid');
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageImages = currentImages.slice(startIndex, endIndex);

        grid.innerHTML = '';

        pageImages.forEach(image => {
            const articleElement = document.createElement('article');
            articleElement.className = 'article-item';
            articleElement.setAttribute('data-date', image.date);
            
            articleElement.innerHTML = `
                <div class="article-image">
                    <img src="${image.image}" alt="${image.title}">
                </div>
                <div class="article-content">
                    <h4>${image.title}</h4>
                    <p class="article-date">${formatDate(image.date)}</p>
                    <p class="article-author">By ${image.author}</p>
                    <p>${image.description}</p>
                    <a href="article-detail.html?id=${image.id}&category=${image.category}&source=pictures" class="read-more">View Gallery</a>
                </div>
            `;
            
            grid.appendChild(articleElement);
        });

        updatePaginationInfo();
    }

    // Format date
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Sort functionality
        const sortSelect = document.getElementById('sort-select');
        sortSelect.addEventListener('change', performSort);

        // Pagination
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayImages();
                updatePagination();
            }
        });

        nextBtn.addEventListener('click', () => {
            const maxPages = Math.ceil(currentImages.length / itemsPerPage);
            if (currentPage < maxPages) {
                currentPage++;
                displayImages();
                updatePagination();
            }
        });
    }

    // Perform search
    function performSearch() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        
        currentImages = imagesData.filter(image => 
            image.title.toLowerCase().includes(searchTerm) ||
            image.description.toLowerCase().includes(searchTerm) ||
            image.author.toLowerCase().includes(searchTerm)
        );
        
        currentPage = 1;
        displayImages();
        updatePagination();
    }

    // Perform sort
    function performSort() {
        const sortValue = document.getElementById('sort-select').value;
        
        currentImages.sort((a, b) => {
            switch (sortValue) {
                case 'date-desc':
                    return new Date(b.date) - new Date(a.date);
                case 'date-asc':
                    return new Date(a.date) - new Date(b.date);
                case 'title-asc':
                    return a.title.localeCompare(b.title);
                case 'title-desc':
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });
        
        currentPage = 1;
        displayImages();
        updatePagination();
    }

    // Update pagination
    function updatePagination() {
        const maxPages = Math.ceil(currentImages.length / itemsPerPage);
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const paginationNumbers = document.getElementById('pagination-numbers');

        // Update button states
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === maxPages;

        // Generate page numbers
        paginationNumbers.innerHTML = '';
        
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(maxPages, currentPage + 2);

        // Add first page and dots if needed
        if (startPage > 1) {
            addPageNumber(1);
            if (startPage > 2) {
                addPageDots();
            }
        }

        // Add page numbers
        for (let i = startPage; i <= endPage; i++) {
            addPageNumber(i);
        }

        // Add last page and dots if needed
        if (endPage < maxPages) {
            if (endPage < maxPages - 1) {
                addPageDots();
            }
            addPageNumber(maxPages);
        }
    }

    // Add page number
    function addPageNumber(pageNum) {
        const paginationNumbers = document.getElementById('pagination-numbers');
        const pageElement = document.createElement('span');
        pageElement.className = `page-number ${pageNum === currentPage ? 'active' : ''}`;
        pageElement.textContent = pageNum;
        pageElement.addEventListener('click', () => {
            currentPage = pageNum;
            displayImages();
            updatePagination();
        });
        paginationNumbers.appendChild(pageElement);
    }

    // Add page dots
    function addPageDots() {
        const paginationNumbers = document.getElementById('pagination-numbers');
        const dotsElement = document.createElement('span');
        dotsElement.className = 'page-number dots';
        dotsElement.textContent = '...';
        paginationNumbers.appendChild(dotsElement);
    }

    // Update pagination info
    function updatePaginationInfo() {
        const startIndex = (currentPage - 1) * itemsPerPage + 1;
        const endIndex = Math.min(currentPage * itemsPerPage, currentImages.length);
        const totalItems = currentImages.length;
        
        document.getElementById('pagination-info').textContent = 
            `Showing ${startIndex}-${endIndex} of ${totalItems} images`;
    }

    // Initialize the page
    init();
}); 