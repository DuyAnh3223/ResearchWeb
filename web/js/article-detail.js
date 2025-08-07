// Article Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    const category = urlParams.get('category');
    const source = urlParams.get('source');

    // Article data - in a real application, this would come from a database
    const articlesData = {
        reports: {
            'field-study-progress-report': {
                title: 'Field Study Progress Report',
                date: 'May 10, 2024',
                author: 'Henry Calvins',
                category: 'Reports',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Executive Summary</h2>
                    <p>This report presents the progress of field studies conducted in selected Southeast Asian cities as part of the APN project CRRP2024-01MY-Le. The research focuses on evaluating Nature-based Solutions (NbS) for urban water security challenges.</p>
                    
                    <h2>Methodology</h2>
                    <p>Field studies were conducted across five major Southeast Asian cities: Ho Chi Minh City (Vietnam), Bangkok (Thailand), Phnom Penh (Cambodia), Can Tho (Vietnam), and Nong Khai (Thailand). Each site visit included:</p>
                    <ul>
                        <li>Site assessment and documentation</li>
                        <li>Stakeholder interviews</li>
                        <li>Water quality sampling</li>
                        <li>Infrastructure evaluation</li>
                        <li>Community engagement sessions</li>
                    </ul>
                    
                    <h2>Key Findings</h2>
                    <p>Preliminary findings indicate significant variations in urban water security challenges across the region:</p>
                    <ul>
                        <li>Flooding vulnerability in low-lying coastal cities</li>
                        <li>Water quality degradation in urban areas</li>
                        <li>Limited green infrastructure implementation</li>
                        <li>Insufficient stakeholder coordination</li>
                    </ul>
                    
                    <h2>Next Steps</h2>
                    <p>The next phase will focus on developing comprehensive NbS recommendations based on these findings and conducting detailed feasibility studies for implementation.</p>
                `,
                relatedArticles: [
                    { title: 'Stakeholder Workshop Summary', id: 'stakeholder-workshop-summary', category: 'reports' },
                    { title: 'Project Kick-off Meeting Report', id: 'project-kickoff-report', category: 'reports' }
                ]
            },
            'pre-project-planning-report': {
                title: 'Pre-project Planning Report',
                date: 'February 20, 2024',
                author: 'Dr. Emily Rodriguez',
                category: 'Reports',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Project Overview</h2>
                    <p>This report outlines the initial planning and preparation phase for the APN project CRRP2024-01MY-Le. The document establishes the foundation for implementing Nature-based Solutions in Southeast Asian urban contexts.</p>
                    
                    <h2>Project Framework</h2>
                    <p>The planning phase involved developing a comprehensive framework that includes:</p>
                    <ul>
                        <li>Research objectives and scope definition</li>
                        <li>Methodology development and validation</li>
                        <li>Stakeholder identification and engagement strategies</li>
                        <li>Resource allocation and timeline planning</li>
                        <li>Risk assessment and mitigation strategies</li>
                    </ul>
                    
                    <h2>Expected Outcomes</h2>
                    <p>The project aims to deliver:</p>
                    <ul>
                        <li>Comprehensive assessment of urban water security challenges</li>
                        <li>Nature-based Solutions implementation guidelines</li>
                        <li>Policy recommendations for regional governments</li>
                        <li>Capacity building programs for stakeholders</li>
                    </ul>
                    
                    <h2>Implementation Strategy</h2>
                    <p>The implementation strategy focuses on collaborative approaches involving multiple stakeholders across different Southeast Asian countries, ensuring local context adaptation and knowledge sharing.</p>
                `,
                relatedArticles: [
                    { title: 'Project Proposal and Framework', id: 'project-proposal-framework', category: 'reports' },
                    { title: 'Field Study Progress Report', id: 'field-study-progress-report', category: 'reports' }
                ]
            },
            'project-proposal-framework': {
                title: 'Project Proposal and Framework',
                date: 'January 15, 2024',
                author: 'Prof. David Kim',
                category: 'Reports',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Project Background</h2>
                    <p>This document presents the original project proposal and theoretical framework for the Nature-based Solutions research initiative. The proposal establishes the scientific foundation and research approach for addressing urban water security challenges in Southeast Asia.</p>
                    
                    <h2>Theoretical Framework</h2>
                    <p>The research is grounded in several theoretical frameworks:</p>
                    <ul>
                        <li>Ecosystem-based adaptation principles</li>
                        <li>Urban resilience theory</li>
                        <li>Integrated water resources management</li>
                        <li>Participatory governance models</li>
                        <li>Sustainable development frameworks</li>
                    </ul>
                    
                    <h2>Research Questions</h2>
                    <p>The project addresses key research questions:</p>
                    <ul>
                        <li>How can Nature-based Solutions enhance urban water security?</li>
                        <li>What are the most effective implementation strategies for different urban contexts?</li>
                        <li>How can stakeholder engagement be optimized for successful NbS implementation?</li>
                        <li>What policy frameworks are needed to support NbS adoption?</li>
                    </ul>
                    
                    <h2>Methodology</h2>
                    <p>The research employs a mixed-methods approach combining quantitative and qualitative analysis, including case studies, stakeholder interviews, and comparative analysis across different Southeast Asian cities.</p>
                `,
                relatedArticles: [
                    { title: 'Pre-project Planning Report', id: 'pre-project-planning-report', category: 'reports' },
                    { title: 'Field Study Progress Report', id: 'field-study-progress-report', category: 'reports' }
                ]
            },
            'stakeholder-workshop-summary': {
                title: 'Stakeholder Workshop Summary',
                date: 'April 22, 2024',
                author: 'Dr. Sarah Johnson',
                category: 'Reports',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Workshop Overview</h2>
                    <p>The first stakeholder workshop was successfully conducted in Bangkok, Thailand, bringing together representatives from government agencies, academic institutions, and community organizations.</p>
                    
                    <h2>Workshop Objectives</h2>
                    <p>The workshop aimed to:</p>
                    <ul>
                        <li>Identify key challenges in urban water security</li>
                        <li>Explore potential Nature-based Solutions</li>
                        <li>Establish collaborative partnerships</li>
                        <li>Develop action plans for implementation</li>
                    </ul>
                    
                    <h2>Participant Feedback</h2>
                    <p>Participants highlighted several critical areas for attention:</p>
                    <ul>
                        <li>Need for integrated water management approaches</li>
                        <li>Importance of community engagement</li>
                        <li>Requirement for policy framework development</li>
                        <li>Necessity for capacity building programs</li>
                    </ul>
                    
                    <h2>Recommendations</h2>
                    <p>Based on workshop outcomes, the following recommendations were developed:</p>
                    <ol>
                        <li>Establish regional water security task force</li>
                        <li>Develop standardized assessment methodologies</li>
                        <li>Create knowledge sharing platforms</li>
                        <li>Implement pilot projects in selected cities</li>
                    </ol>
                `,
                relatedArticles: [
                    { title: 'Field Study Progress Report', id: 'field-study-progress-report', category: 'reports' },
                    { title: 'Project Kick-off Meeting Report', id: 'project-kickoff-report', category: 'reports' }
                ]
            },
            'project-kickoff-report': {
                title: 'Project Kick-off Meeting Report',
                date: 'March 15, 2024',
                author: 'Prof. Michael Chen',
                category: 'Reports',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Meeting Overview</h2>
                    <p>The initial project kick-off meeting was held in Ho Chi Minh City, bringing together all partner institutions to discuss project objectives, timelines, and collaborative strategies.</p>
                    
                    <h2>Project Framework</h2>
                    <p>The meeting established the following project framework:</p>
                    <ul>
                        <li>Research objectives and scope</li>
                        <li>Timeline and milestones</li>
                        <li>Resource allocation</li>
                        <li>Communication protocols</li>
                        <li>Quality assurance measures</li>
                    </ul>
                    
                    <h2>Partner Institutions</h2>
                    <p>Representatives from the following institutions participated:</p>
                    <ul>
                        <li>Asian Institute of Technology (AIT)</li>
                        <li>Can Tho University (CTU)</li>
                        <li>Ho Chi Minh City University of Natural Resources and Environment</li>
                        <li>International University HCMC</li>
                        <li>University of Economics HCMC</li>
                        <li>Thammasat University</li>
                    </ul>
                    
                    <h2>Expected Outcomes</h2>
                    <p>The project aims to deliver:</p>
                    <ul>
                        <li>Comprehensive assessment of urban water security challenges</li>
                        <li>Nature-based Solutions implementation guidelines</li>
                        <li>Policy recommendations for regional governments</li>
                        <li>Capacity building programs for stakeholders</li>
                    </ul>
                `,
                relatedArticles: [
                    { title: 'Field Study Progress Report', id: 'field-study-progress-report', category: 'reports' },
                    { title: 'Stakeholder Workshop Summary', id: 'stakeholder-workshop-summary', category: 'reports' }
                ]
            }
        },
        publications: {
            'nature-based-solutions-urban-water': {
                title: 'Nature-based Solutions in Urban Water Management',
                date: 'June 2024',
                author: 'Dr. Emily Rodriguez',
                category: 'Publications',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Abstract</h2>
                    <p>This research paper presents the theoretical framework for evaluating Nature-based Solutions (NbS) in Southeast Asian urban contexts. The study addresses the growing challenges of urban water security and proposes innovative approaches to sustainable water management.</p>
                    
                    <h2>Introduction</h2>
                    <p>Urban areas in Southeast Asia face increasing pressure from climate change, population growth, and urbanization. Traditional water management approaches are proving insufficient to address these complex challenges. Nature-based Solutions offer a promising alternative that integrates natural processes with urban development.</p>
                    
                    <h2>Methodology</h2>
                    <p>The research employed a mixed-methods approach combining:</p>
                    <ul>
                        <li>Literature review and meta-analysis</li>
                        <li>Case study analysis of existing NbS implementations</li>
                        <li>Stakeholder interviews and surveys</li>
                        <li>Geospatial analysis of urban water systems</li>
                    </ul>
                    
                    <h2>Key Findings</h2>
                    <p>The study identified several critical factors for successful NbS implementation:</p>
                    <ul>
                        <li>Integration with existing urban planning frameworks</li>
                        <li>Multi-stakeholder engagement and collaboration</li>
                        <li>Adaptive management approaches</li>
                        <li>Long-term monitoring and evaluation systems</li>
                    </ul>
                    
                    <h2>Conclusion</h2>
                    <p>Nature-based Solutions present a viable pathway for addressing urban water security challenges in Southeast Asia. However, successful implementation requires careful consideration of local contexts, stakeholder engagement, and adaptive management strategies.</p>
                `,
                relatedArticles: [
                    { title: 'Policy Recommendations for Urban Water Security', id: 'policy-recommendations-urban-water', category: 'publications' },
                    { title: 'Case Studies: NbS Implementation in Southeast Asia', id: 'case-studies-nbs-implementation', category: 'publications' }
                ]
            },
            'policy-recommendations-urban-water': {
                title: 'Policy Recommendations for Urban Water Security',
                date: 'July 2024',
                author: 'Prof. David Kim',
                category: 'Publications',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Executive Summary</h2>
                    <p>This policy brief outlines key recommendations for enhancing urban water security through Nature-based Solutions. The document targets policymakers and urban planners in the Southeast Asian region.</p>
                    
                    <h2>Policy Context</h2>
                    <p>Current urban water management policies in Southeast Asia often focus on traditional infrastructure solutions. However, these approaches are increasingly inadequate for addressing complex, interconnected challenges such as climate change, urbanization, and environmental degradation.</p>
                    
                    <h2>Key Recommendations</h2>
                    <h3>1. Integrated Water Management</h3>
                    <p>Develop comprehensive water management frameworks that integrate NbS with traditional infrastructure approaches.</p>
                    
                    <h3>2. Stakeholder Engagement</h3>
                    <p>Establish mechanisms for meaningful participation of all stakeholders in water management decision-making processes.</p>
                    
                    <h3>3. Capacity Building</h3>
                    <p>Invest in training and education programs to build local capacity for NbS implementation and management.</p>
                    
                    <h3>4. Monitoring and Evaluation</h3>
                    <p>Develop robust monitoring and evaluation systems to track the effectiveness of NbS interventions.</p>
                    
                    <h2>Implementation Strategy</h2>
                    <p>The policy brief provides a detailed implementation roadmap including:</p>
                    <ul>
                        <li>Short-term actions (0-2 years)</li>
                        <li>Medium-term initiatives (2-5 years)</li>
                        <li>Long-term strategic goals (5-10 years)</li>
                    </ul>
                `,
                relatedArticles: [
                    { title: 'Nature-based Solutions in Urban Water Management', id: 'nature-based-solutions-urban-water', category: 'publications' },
                    { title: 'Case Studies: NbS Implementation in Southeast Asia', id: 'case-studies-nbs-implementation', category: 'publications' }
                ]
            },
            'case-studies-nbs-implementation': {
                title: 'Case Studies: NbS Implementation in Southeast Asia',
                date: 'August 2024',
                author: 'Dr. Lisa Wang',
                category: 'Publications',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Introduction</h2>
                    <p>This comprehensive case study document features successful Nature-based Solutions implementations across different Southeast Asian cities, with detailed analysis and lessons learned.</p>
                    
                    <h2>Case Study 1: Bangkok Green Infrastructure</h2>
                    <p>Bangkok's implementation of urban wetlands and green corridors demonstrates the potential for NbS to address both flooding and water quality challenges.</p>
                    
                    <h3>Key Features:</h3>
                    <ul>
                        <li>Urban wetland restoration</li>
                        <li>Green corridor development</li>
                        <li>Community engagement programs</li>
                        <li>Monitoring and evaluation systems</li>
                    </ul>
                    
                    <h2>Case Study 2: Ho Chi Minh City Water Sensitive Urban Design</h2>
                    <p>Ho Chi Minh City's adoption of water sensitive urban design principles shows how NbS can be integrated into new urban development projects.</p>
                    
                    <h3>Implementation Strategies:</h3>
                    <ul>
                        <li>Permeable pavement systems</li>
                        <li>Rainwater harvesting</li>
                        <li>Urban forest development</li>
                        <li>Water-sensitive landscaping</li>
                    </ul>
                    
                    <h2>Case Study 3: Phnom Penh Community-Based Solutions</h2>
                    <p>Phnom Penh's community-based approach to NbS implementation highlights the importance of local knowledge and participation.</p>
                    
                    <h3>Community Initiatives:</h3>
                    <ul>
                        <li>Community gardens and urban agriculture</li>
                        <li>Local water quality monitoring</li>
                        <li>Traditional knowledge integration</li>
                        <li>Capacity building programs</li>
                    </ul>
                    
                    <h2>Lessons Learned</h2>
                    <p>The case studies reveal several important lessons for successful NbS implementation:</p>
                    <ul>
                        <li>Importance of local context and adaptation</li>
                        <li>Value of community participation</li>
                        <li>Need for long-term commitment</li>
                        <li>Benefits of integrated approaches</li>
                    </ul>
                `,
                relatedArticles: [
                    { title: 'Nature-based Solutions in Urban Water Management', id: 'nature-based-solutions-urban-water', category: 'publications' },
                    { title: 'Policy Recommendations for Urban Water Security', id: 'policy-recommendations-urban-water', category: 'publications' }
                ]
            },
            'literature-review-urban-water-security': {
                title: 'Literature Review: Urban Water Security Challenges',
                date: 'May 2024',
                author: 'Dr. James Thompson',
                category: 'Publications',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Abstract</h2>
                    <p>This comprehensive literature review examines urban water security challenges across Southeast Asian cities and existing mitigation strategies. The review synthesizes current knowledge and identifies research gaps in Nature-based Solutions implementation.</p>
                    
                    <h2>Scope and Methodology</h2>
                    <p>The literature review covered peer-reviewed articles, policy documents, and technical reports published between 2010-2024. The analysis focused on:</p>
                    <ul>
                        <li>Urban water security challenges in Southeast Asia</li>
                        <li>Existing mitigation strategies and their effectiveness</li>
                        <li>Nature-based Solutions case studies</li>
                        <li>Policy frameworks and governance structures</li>
                        <li>Implementation barriers and enablers</li>
                    </ul>
                    
                    <h2>Key Findings</h2>
                    <p>The review identified several critical themes:</p>
                    <ul>
                        <li>Increasing urbanization and climate change impacts</li>
                        <li>Limited integration of NbS in urban planning</li>
                        <li>Need for improved stakeholder coordination</li>
                        <li>Importance of local knowledge and community engagement</li>
                        <li>Requirement for robust monitoring and evaluation systems</li>
                    </ul>
                    
                    <h2>Research Gaps</h2>
                    <p>The review highlighted several areas requiring further research:</p>
                    <ul>
                        <li>Long-term effectiveness of NbS interventions</li>
                        <li>Economic valuation of NbS benefits</li>
                        <li>Scalability of successful case studies</li>
                        <li>Integration of traditional and modern approaches</li>
                    </ul>
                    
                    <h2>Conclusion</h2>
                    <p>The literature review provides a foundation for understanding current challenges and opportunities in urban water security, informing the development of effective Nature-based Solutions strategies.</p>
                `,
                relatedArticles: [
                    { title: 'Nature-based Solutions in Urban Water Management', id: 'nature-based-solutions-urban-water', category: 'publications' },
                    { title: 'Methodology Framework for NbS Assessment', id: 'methodology-framework-nbs-assessment', category: 'publications' }
                ]
            },
            'methodology-framework-nbs-assessment': {
                title: 'Methodology Framework for NbS Assessment',
                date: 'April 2024',
                author: 'Dr. Maria Garcia',
                category: 'Publications',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Framework Overview</h2>
                    <p>This document presents a comprehensive methodology framework for assessing Nature-based Solutions effectiveness in urban water management contexts. The framework provides standardized approaches for evaluation and comparison across different urban settings.</p>
                    
                    <h2>Assessment Dimensions</h2>
                    <p>The framework evaluates NbS across multiple dimensions:</p>
                    <ul>
                        <li>Environmental effectiveness (water quality, quantity, biodiversity)</li>
                        <li>Social benefits (community engagement, equity, health)</li>
                        <li>Economic viability (cost-benefit analysis, financial sustainability)</li>
                        <li>Technical feasibility (implementation, maintenance, scalability)</li>
                        <li>Governance aspects (policy support, stakeholder coordination)</li>
                    </ul>
                    
                    <h2>Assessment Methods</h2>
                    <p>The framework employs various assessment methods:</p>
                    <ul>
                        <li>Quantitative indicators and metrics</li>
                        <li>Qualitative stakeholder analysis</li>
                        <li>Comparative case study analysis</li>
                        <li>Participatory evaluation approaches</li>
                        <li>Multi-criteria decision analysis</li>
                    </ul>
                    
                    <h2>Implementation Guidelines</h2>
                    <p>The framework provides step-by-step guidelines for:</p>
                    <ul>
                        <li>Baseline assessment and data collection</li>
                        <li>Indicator selection and measurement</li>
                        <li>Stakeholder engagement and consultation</li>
                        <li>Analysis and reporting procedures</li>
                        <li>Continuous monitoring and evaluation</li>
                    </ul>
                    
                    <h2>Expected Outcomes</h2>
                    <p>The framework aims to provide standardized, comparable assessments that can inform policy decisions and guide NbS implementation across Southeast Asian cities.</p>
                `,
                relatedArticles: [
                    { title: 'Literature Review: Urban Water Security Challenges', id: 'literature-review-urban-water-security', category: 'publications' },
                    { title: 'Nature-based Solutions in Urban Water Management', id: 'nature-based-solutions-urban-water', category: 'publications' }
                ]
            }
        },
        pictures: {
            'project-kickoff-gallery': {
                title: 'Project Kick-off Meeting Gallery',
                date: 'March 15, 2024',
                author: 'Project Team',
                category: 'Pictures & Media',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Event Overview</h2>
                    <p>Photo gallery from the project kick-off meeting showing team members, presentations, and collaborative activities. The meeting was held in Ho Chi Minh City and brought together representatives from all partner institutions.</p>
                    
                    <h2>Gallery Highlights</h2>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Team Group Photo">
                            <p class="caption">Team group photo with all partner institution representatives</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Presentation Session">
                            <p class="caption">Dr. Michael Chen presenting project objectives and framework</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Discussion Session">
                            <p class="caption">Interactive discussion session on project implementation strategies</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Collaborative Planning">
                            <p class="caption">Collaborative planning session for research activities</p>
                        </div>
                    </div>
                    
                    <h2>Key Moments</h2>
                    <p>The gallery captures several key moments from the kick-off meeting:</p>
                    <ul>
                        <li>Opening ceremony and welcome speeches</li>
                        <li>Project framework presentation</li>
                        <li>Partner institution introductions</li>
                        <li>Working group discussions</li>
                        <li>Timeline and milestone planning</li>
                        <li>Closing ceremony and networking</li>
                    </ul>
                    
                    <h2>Participant Feedback</h2>
                    <p>Participants expressed enthusiasm for the collaborative approach and shared commitment to addressing urban water security challenges through Nature-based Solutions.</p>
                `,
                relatedArticles: [
                    { title: 'Field Study Site Visits', id: 'field-study-site-visits', category: 'pictures' },
                    { title: 'Stakeholder Workshop Highlights', id: 'stakeholder-workshop-highlights', category: 'pictures' }
                ]
            },
            'field-study-site-visits': {
                title: 'Field Study Site Visits',
                date: 'April-May 2024',
                author: 'Research Team',
                category: 'Pictures & Media',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Field Study Overview</h2>
                    <p>Collection of photographs from field study visits to various Southeast Asian cities. Images showcase existing Nature-based Solutions, urban water challenges, and research activities.</p>
                    
                    <h2>Site Visit Locations</h2>
                    <h3>Ho Chi Minh City, Vietnam</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="HCMC Water System">
                            <p class="caption">Existing water management infrastructure in Ho Chi Minh City</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="HCMC Flooding">
                            <p class="caption">Flooding challenges in low-lying areas of the city</p>
                        </div>
                    </div>
                    
                    <h3>Bangkok, Thailand</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Bangkok Green Infrastructure">
                            <p class="caption">Green infrastructure projects in Bangkok</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Bangkok Water Quality">
                            <p class="caption">Water quality monitoring sites in Bangkok</p>
                        </div>
                    </div>
                    
                    <h3>Phnom Penh, Cambodia</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Phnom Penh River">
                            <p class="caption">Mekong River system and urban development</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Phnom Penh Community">
                            <p class="caption">Community-based water management initiatives</p>
                        </div>
                    </div>
                    
                    <h2>Research Activities</h2>
                    <p>The field studies included various research activities:</p>
                    <ul>
                        <li>Site assessment and documentation</li>
                        <li>Water quality sampling and analysis</li>
                        <li>Stakeholder interviews and surveys</li>
                        <li>Infrastructure evaluation</li>
                        <li>Community engagement sessions</li>
                        <li>Photographic documentation</li>
                    </ul>
                    
                    <h2>Key Findings</h2>
                    <p>Visual documentation revealed several important patterns:</p>
                    <ul>
                        <li>Variation in water security challenges across cities</li>
                        <li>Different approaches to NbS implementation</li>
                        <li>Community engagement levels and strategies</li>
                        <li>Infrastructure development priorities</li>
                    </ul>
                `,
                relatedArticles: [
                    { title: 'Project Kick-off Meeting Gallery', id: 'project-kickoff-gallery', category: 'pictures' },
                    { title: 'Stakeholder Workshop Highlights', id: 'stakeholder-workshop-highlights', category: 'pictures' }
                ]
            },
            'stakeholder-workshop-highlights': {
                title: 'Stakeholder Workshop Highlights',
                date: 'April 22, 2024',
                author: 'Workshop Team',
                category: 'Pictures & Media',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Workshop Overview</h2>
                    <p>Visual highlights from the stakeholder workshop including presentations, group discussions, and networking sessions. Features key stakeholders and their contributions to the project.</p>
                    
                    <h2>Workshop Sessions</h2>
                    <h3>Opening Session</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Opening Ceremony">
                            <p class="caption">Opening ceremony with welcome speeches</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Participant Registration">
                            <p class="caption">Participant registration and networking</p>
                        </div>
                    </div>
                    
                    <h3>Presentation Sessions</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Keynote Presentation">
                            <p class="caption">Keynote presentation on urban water security challenges</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Panel Discussion">
                            <p class="caption">Panel discussion on Nature-based Solutions</p>
                        </div>
                    </div>
                    
                    <h3>Group Activities</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Working Groups">
                            <p class="caption">Working group discussions and brainstorming sessions</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Group Presentations">
                            <p class="caption">Group presentations and feedback sessions</p>
                        </div>
                    </div>
                    
                    <h2>Key Stakeholders</h2>
                    <p>The workshop brought together representatives from:</p>
                    <ul>
                        <li>Government agencies and ministries</li>
                        <li>Academic and research institutions</li>
                        <li>Non-governmental organizations</li>
                        <li>Community-based organizations</li>
                        <li>Private sector representatives</li>
                        <li>International development partners</li>
                    </ul>
                    
                    <h2>Workshop Outcomes</h2>
                    <p>The visual documentation captures the collaborative spirit and productive outcomes of the workshop, including:</p>
                    <ul>
                        <li>Knowledge sharing and networking</li>
                        <li>Identification of key challenges and opportunities</li>
                        <li>Development of collaborative action plans</li>
                        <li>Establishment of working relationships</li>
                    </ul>
                `,
                relatedArticles: [
                    { title: 'Project Kick-off Meeting Gallery', id: 'project-kickoff-gallery', category: 'pictures' },
                    { title: 'Field Study Site Visits', id: 'field-study-site-visits', category: 'pictures' }
                ]
            },
            'project-planning-sessions': {
                title: 'Project Planning Sessions',
                date: 'February 2024',
                author: 'Project Team',
                category: 'Pictures & Media',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Planning Overview</h2>
                    <p>Photos from initial project planning sessions and team meetings. Shows the collaborative process of developing the research framework and establishing project objectives.</p>
                    
                    <h2>Planning Activities</h2>
                    <h3>Strategic Planning Sessions</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Strategic Planning">
                            <p class="caption">Strategic planning session with project leaders</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Framework Development">
                            <p class="caption">Research framework development workshop</p>
                        </div>
                    </div>
                    
                    <h3>Team Collaboration</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Team Discussion">
                            <p class="caption">Team discussion on methodology development</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Collaborative Work">
                            <p class="caption">Collaborative work on project timeline</p>
                        </div>
                    </div>
                    
                    <h2>Key Planning Outcomes</h2>
                    <p>The planning sessions resulted in:</p>
                    <ul>
                        <li>Clear project objectives and scope definition</li>
                        <li>Methodology framework development</li>
                        <li>Timeline and milestone planning</li>
                        <li>Resource allocation strategies</li>
                        <li>Risk assessment and mitigation plans</li>
                    </ul>
                    
                    <h2>Team Dynamics</h2>
                    <p>The visual documentation captures the collaborative spirit and professional engagement of team members during the planning phase, highlighting the importance of effective communication and shared vision in project development.</p>
                `,
                relatedArticles: [
                    { title: 'Team Introduction and Setup', id: 'team-introduction-setup', category: 'pictures' },
                    { title: 'Project Kick-off Meeting Gallery', id: 'project-kickoff-gallery', category: 'pictures' }
                ]
            },
            'team-introduction-setup': {
                title: 'Team Introduction and Setup',
                date: 'January 2024',
                author: 'Project Team',
                category: 'Pictures & Media',
                image: 'images/placeholder_event.jpg',
                content: `
                    <h2>Team Overview</h2>
                    <p>Introduction photos of the project team members and initial setup activities. Includes team building and project initiation moments that established the foundation for successful collaboration.</p>
                    
                    <h2>Team Members</h2>
                    <h3>Core Team Introduction</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Team Group Photo">
                            <p class="caption">Full team group photo with all partner institution representatives</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Individual Introductions">
                            <p class="caption">Individual team member introductions and role presentations</p>
                        </div>
                    </div>
                    
                    <h3>Team Building Activities</h3>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Ice Breaker">
                            <p class="caption">Team building ice breaker activities</p>
                        </div>
                        <div class="gallery-item">
                            <img src="images/placeholder_event.jpg" alt="Collaborative Exercise">
                            <p class="caption">Collaborative problem-solving exercises</p>
                        </div>
                    </div>
                    
                    <h2>Project Setup</h2>
                    <p>The setup phase included:</p>
                    <ul>
                        <li>Team member introductions and role assignments</li>
                        <li>Project objectives and vision sharing</li>
                        <li>Communication protocols establishment</li>
                        <li>Initial project planning activities</li>
                        <li>Team building and relationship development</li>
                    </ul>
                    
                    <h2>Collaborative Spirit</h2>
                    <p>The visual documentation captures the enthusiasm and commitment of team members, highlighting the diverse expertise and collaborative approach that will drive the project's success.</p>
                `,
                relatedArticles: [
                    { title: 'Project Planning Sessions', id: 'project-planning-sessions', category: 'pictures' },
                    { title: 'Project Kick-off Meeting Gallery', id: 'project-kickoff-gallery', category: 'pictures' }
                ]
            }
        }
    };

    // Load article content
    function loadArticle() {
        if (!articleId || !category) {
            showError('Article not found');
            return;
        }

        const categoryData = articlesData[category];
        if (!categoryData || !categoryData[articleId]) {
            showError('Article not found');
            return;
        }

        const article = categoryData[articleId];
        
        // Update page title
        document.title = `${article.title} - APN Project CRRP2024-01MY-Le`;
        
        // Update breadcrumb
        document.getElementById('breadcrumb-category').textContent = article.category;
        document.getElementById('breadcrumb-title').textContent = article.title;
        
        // Update article content
        document.getElementById('article-title').textContent = article.title;
        document.getElementById('article-date').textContent = article.date;
        document.getElementById('article-author').textContent = article.author;
        document.getElementById('article-category').textContent = article.category;
        document.getElementById('article-image').src = article.image;
        document.getElementById('article-image').alt = article.title;
        document.getElementById('article-content').innerHTML = article.content;
        
        // Load related articles
        loadRelatedArticles(article.relatedArticles, category);
        
        // Set back button
        setBackButton(source);
    }

    // Load related articles
    function loadRelatedArticles(relatedArticles, category) {
        const relatedContainer = document.getElementById('related-articles');
        relatedContainer.innerHTML = '';
        
        relatedArticles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'related-article';
            articleElement.innerHTML = `
                <h4>${article.title}</h4>
                <a href="article-detail.html?id=${article.id}&category=${article.category}&source=${category}" class="read-more">Read More</a>
            `;
            relatedContainer.appendChild(articleElement);
        });
    }

    // Set back button
    function setBackButton(source) {
        const backBtn = document.getElementById('back-btn');
        if (source === 'outcomes') {
            backBtn.href = 'outcomes.html';
        } else if (source === 'reports') {
            backBtn.href = 'reports-list.html';
        } else if (source === 'publications') {
            backBtn.href = 'publications-list.html';
        } else if (source === 'pictures') {
            backBtn.href = 'images-list.html';
        } else {
            backBtn.href = 'outcomes.html';
        }
    }

    // Show error message
    function showError(message) {
        const main = document.querySelector('main .container');
        main.innerHTML = `
            <div class="error-message">
                <h2>Error</h2>
                <p>${message}</p>
                <a href="outcomes.html" class="back-btn">← Back to Outcomes</a>
            </div>
        `;
    }

    // Article action buttons
    document.getElementById('download-btn').addEventListener('click', function() {
        alert('Download functionality will be implemented here');
    });

    document.getElementById('share-btn').addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: document.getElementById('article-title').textContent,
                url: window.location.href
            });
        } else {
            // Fallback: copy URL to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    });

    document.getElementById('print-btn').addEventListener('click', function() {
        window.print();
    });

    // Load the article
    loadArticle();
}); 