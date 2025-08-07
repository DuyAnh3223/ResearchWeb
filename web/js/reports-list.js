// Reports List Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sample reports data
    const reportsData = [
        {
            id: 'field-study-progress-report',
            title: 'Field Study Progress Report',
            date: '2024-05-10',
            author: 'Henry Calvins',
            image: 'images/placeholder_event.jpg',
            description: 'Progress report on field studies conducted in selected Southeast Asian cities. This report covers initial findings from site visits and preliminary data collection activities.',
            category: 'reports'
        },
        {
            id: 'stakeholder-workshop-summary',
            title: 'Stakeholder Workshop Summary',
            date: '2024-04-22',
            author: 'Dr. Sarah Johnson',
            image: 'images/placeholder_event.jpg',
            description: 'Detailed summary of the first stakeholder workshop conducted in Bangkok. The workshop focused on identifying key challenges in urban water security and exploring potential Nature-based Solutions.',
            category: 'reports'
        },
        {
            id: 'project-kickoff-report',
            title: 'Project Kick-off Meeting Report',
            date: '2024-03-15',
            author: 'Prof. Michael Chen',
            image: 'images/placeholder_event.jpg',
            description: 'Comprehensive report on the initial project kick-off meeting held in Ho Chi Minh City. The meeting brought together all partner institutions to discuss project objectives, timelines, and collaborative strategies.',
            category: 'reports'
        },
        {
            id: 'pre-project-planning-report',
            title: 'Pre-project Planning Report',
            date: '2024-02-20',
            author: 'Dr. Emily Rodriguez',
            image: 'images/placeholder_event.jpg',
            description: 'Initial planning and preparation report for the APN project. This document outlines the project framework, methodology, and expected outcomes.',
            category: 'reports'
        },
        {
            id: 'project-proposal-framework',
            title: 'Project Proposal and Framework',
            date: '2024-01-15',
            author: 'Prof. David Kim',
            image: 'images/placeholder_event.jpg',
            description: 'Original project proposal and theoretical framework document. This report establishes the foundation for the Nature-based Solutions research.',
            category: 'reports'
        },
        {
            id: 'interim-research-findings',
            title: 'Interim Research Findings',
            date: '2024-06-30',
            author: 'Dr. Lisa Wang',
            image: 'images/placeholder_event.jpg',
            description: 'Interim findings from ongoing research activities, including preliminary analysis of data collected from field studies and stakeholder interviews.',
            category: 'reports'
        },
        {
            id: 'methodology-validation-report',
            title: 'Methodology Validation Report',
            date: '2024-07-15',
            author: 'Dr. James Thompson',
            image: 'images/placeholder_event.jpg',
            description: 'Report on the validation of research methodologies and assessment frameworks used in the Nature-based Solutions evaluation process.',
            category: 'reports'
        },
        {
            id: 'stakeholder-engagement-report',
            title: 'Stakeholder Engagement Report',
            date: '2024-08-05',
            author: 'Dr. Maria Garcia',
            image: 'images/placeholder_event.jpg',
            description: 'Comprehensive report on stakeholder engagement activities, including interviews, surveys, and collaborative workshops conducted across the region.',
            category: 'reports'
        },
        {
            id: 'policy-analysis-report',
            title: 'Policy Analysis Report',
            date: '2024-09-20',
            author: 'Prof. Robert Wilson',
            image: 'images/placeholder_event.jpg',
            description: 'Analysis of existing water management policies across Southeast Asian countries and recommendations for policy integration with Nature-based Solutions.',
            category: 'reports'
        }
    ];

    let currentReports = [...reportsData];
    let currentPage = 1;
    const itemsPerPage = 9;

    // Initialize the page
    function init() {
        displayReports();
        setupEventListeners();
        updatePagination();
    }

    // Display reports
    function displayReports() {
        const grid = document.getElementById('reports-grid');
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageReports = currentReports.slice(startIndex, endIndex);

        grid.innerHTML = '';

        pageReports.forEach(report => {
            const articleElement = document.createElement('article');
            articleElement.className = 'article-item';
            articleElement.setAttribute('data-date', report.date);
            
            articleElement.innerHTML = `
                <div class="article-image">
                    <img src="${report.image}" alt="${report.title}">
                </div>
                <div class="article-content">
                    <h4>${report.title}</h4>
                    <p class="article-date">${formatDate(report.date)}</p>
                    <p class="article-author">By ${report.author}</p>
                    <p>${report.description}</p>
                    <a href="article-detail.html?id=${report.id}&category=${report.category}&source=reports" class="read-more">Read Full Report</a>
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
                displayReports();
                updatePagination();
            }
        });

        nextBtn.addEventListener('click', () => {
            const maxPages = Math.ceil(currentReports.length / itemsPerPage);
            if (currentPage < maxPages) {
                currentPage++;
                displayReports();
                updatePagination();
            }
        });
    }

    // Perform search
    function performSearch() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        
        currentReports = reportsData.filter(report => 
            report.title.toLowerCase().includes(searchTerm) ||
            report.description.toLowerCase().includes(searchTerm) ||
            report.author.toLowerCase().includes(searchTerm)
        );
        
        currentPage = 1;
        displayReports();
        updatePagination();
    }

    // Perform sort
    function performSort() {
        const sortValue = document.getElementById('sort-select').value;
        
        currentReports.sort((a, b) => {
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
        displayReports();
        updatePagination();
    }

    // Update pagination
    function updatePagination() {
        const maxPages = Math.ceil(currentReports.length / itemsPerPage);
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
            displayReports();
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
        const endIndex = Math.min(currentPage * itemsPerPage, currentReports.length);
        const totalItems = currentReports.length;
        
        document.getElementById('pagination-info').textContent = 
            `Showing ${startIndex}-${endIndex} of ${totalItems} reports`;
    }

    // Initialize the page
    init();
}); 