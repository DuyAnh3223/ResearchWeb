// Publications List Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sample publications data
    const publicationsData = [
        {
            id: 'nature-based-solutions-urban-water',
            title: 'Nature-based Solutions in Urban Water Management',
            date: '2024-06-15',
            author: 'Dr. Emily Rodriguez',
            image: 'images/placeholder_event.jpg',
            description: 'Research paper published in the International Journal of Environmental Studies. This publication presents the theoretical framework for evaluating Nature-based Solutions in Southeast Asian urban contexts.',
            category: 'publications'
        },
        {
            id: 'policy-recommendations-urban-water',
            title: 'Policy Recommendations for Urban Water Security',
            date: '2024-07-20',
            author: 'Prof. David Kim',
            image: 'images/placeholder_event.jpg',
            description: 'Policy brief outlining key recommendations for enhancing urban water security through Nature-based Solutions. The document targets policymakers and urban planners in the region.',
            category: 'publications'
        },
        {
            id: 'case-studies-nbs-implementation',
            title: 'Case Studies: NbS Implementation in Southeast Asia',
            date: '2024-08-10',
            author: 'Dr. Lisa Wang',
            image: 'images/placeholder_event.jpg',
            description: 'Comprehensive case study document featuring successful Nature-based Solutions implementations across different Southeast Asian cities, with detailed analysis and lessons learned.',
            category: 'publications'
        },
        {
            id: 'literature-review-urban-water-security',
            title: 'Literature Review: Urban Water Security Challenges',
            date: '2024-05-30',
            author: 'Dr. James Thompson',
            image: 'images/placeholder_event.jpg',
            description: 'Comprehensive literature review examining urban water security challenges across Southeast Asian cities and existing mitigation strategies.',
            category: 'publications'
        },
        {
            id: 'methodology-framework-nbs-assessment',
            title: 'Methodology Framework for NbS Assessment',
            date: '2024-04-15',
            author: 'Dr. Maria Garcia',
            image: 'images/placeholder_event.jpg',
            description: 'Detailed methodology framework for assessing Nature-based Solutions effectiveness in urban water management contexts.',
            category: 'publications'
        },
        {
            id: 'urban-water-governance-analysis',
            title: 'Urban Water Governance Analysis',
            date: '2024-09-15',
            author: 'Prof. Robert Wilson',
            image: 'images/placeholder_event.jpg',
            description: 'Analysis of urban water governance structures and their effectiveness in implementing Nature-based Solutions across Southeast Asian cities.',
            category: 'publications'
        },
        {
            id: 'climate-change-adaptation-strategies',
            title: 'Climate Change Adaptation Strategies',
            date: '2024-10-05',
            author: 'Dr. Sarah Johnson',
            image: 'images/placeholder_event.jpg',
            description: 'Research on climate change adaptation strategies using Nature-based Solutions for urban water security in Southeast Asia.',
            category: 'publications'
        },
        {
            id: 'economic-assessment-nbs-projects',
            title: 'Economic Assessment of NbS Projects',
            date: '2024-11-20',
            author: 'Dr. Michael Chen',
            image: 'images/placeholder_event.jpg',
            description: 'Economic analysis and cost-benefit assessment of Nature-based Solutions projects in urban water management.',
            category: 'publications'
        },
        {
            id: 'community-participation-nbs',
            title: 'Community Participation in NbS Implementation',
            date: '2024-12-10',
            author: 'Dr. Lisa Wang',
            image: 'images/placeholder_event.jpg',
            description: 'Study on community participation and engagement strategies in implementing Nature-based Solutions for urban water security.',
            category: 'publications'
        }
    ];

    let currentPublications = [...publicationsData];
    let currentPage = 1;
    const itemsPerPage = 9;

    // Initialize the page
    function init() {
        displayPublications();
        setupEventListeners();
        updatePagination();
    }

    // Display publications
    function displayPublications() {
        const grid = document.getElementById('publications-grid');
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pagePublications = currentPublications.slice(startIndex, endIndex);

        grid.innerHTML = '';

        pagePublications.forEach(publication => {
            const articleElement = document.createElement('article');
            articleElement.className = 'article-item';
            articleElement.setAttribute('data-date', publication.date);
            
            articleElement.innerHTML = `
                <div class="article-image">
                    <img src="${publication.image}" alt="${publication.title}">
                </div>
                <div class="article-content">
                    <h4>${publication.title}</h4>
                    <p class="article-date">${formatDate(publication.date)}</p>
                    <p class="article-author">By ${publication.author}</p>
                    <p>${publication.description}</p>
                    <a href="article-detail.html?id=${publication.id}&category=${publication.category}&source=publications" class="read-more">View Publication</a>
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
                displayPublications();
                updatePagination();
            }
        });

        nextBtn.addEventListener('click', () => {
            const maxPages = Math.ceil(currentPublications.length / itemsPerPage);
            if (currentPage < maxPages) {
                currentPage++;
                displayPublications();
                updatePagination();
            }
        });
    }

    // Perform search
    function performSearch() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        
        currentPublications = publicationsData.filter(publication => 
            publication.title.toLowerCase().includes(searchTerm) ||
            publication.description.toLowerCase().includes(searchTerm) ||
            publication.author.toLowerCase().includes(searchTerm)
        );
        
        currentPage = 1;
        displayPublications();
        updatePagination();
    }

    // Perform sort
    function performSort() {
        const sortValue = document.getElementById('sort-select').value;
        
        currentPublications.sort((a, b) => {
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
        displayPublications();
        updatePagination();
    }

    // Update pagination
    function updatePagination() {
        const maxPages = Math.ceil(currentPublications.length / itemsPerPage);
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
            displayPublications();
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
        const endIndex = Math.min(currentPage * itemsPerPage, currentPublications.length);
        const totalItems = currentPublications.length;
        
        document.getElementById('pagination-info').textContent = 
            `Showing ${startIndex}-${endIndex} of ${totalItems} publications`;
    }

    // Initialize the page
    init();
}); 