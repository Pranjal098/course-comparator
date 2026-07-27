import { courses } from './courses.js';

// Application State
let selectedCourses = [];
let filters = {
    search: '',
    levels: [],
    modes: [],
    categories: [],
    universities: [],
    maxCost: 700000
};

// DOM Elements
const coursesGrid = document.getElementById('courses-grid');
const resultCountEl = document.getElementById('result-count');
const searchInput = document.getElementById('search-input');
const costSlider = document.getElementById('cost-slider');
const costValueEl = document.getElementById('cost-value');
const compareTray = document.getElementById('compare-tray');
const trayItemsContainer = document.getElementById('tray-items');
const compareActionBtn = document.getElementById('compare-action-btn');
const comparisonModal = document.getElementById('comparison-modal');
const modalContentBody = document.getElementById('modal-content-body');
const closeModalBtn = document.getElementById('close-modal-btn');
const totalCoursesStat = document.getElementById('total-courses-stat');
const avgRatingStat = document.getElementById('avg-rating-stat');

// Initial Setup
function init() {
    renderFilterCheckboxes();
    renderCourses();
    setupEventListeners();
    updateDashboardStats();
}

// Update dashboard metrics
function updateDashboardStats() {
    if (totalCoursesStat) totalCoursesStat.textContent = courses.length;
    if (avgRatingStat) {
        const totalRating = courses.reduce((acc, c) => acc + c.rating, 0);
        avgRatingStat.textContent = (totalRating / courses.length).toFixed(1);
    }
}

// Generate checkboxes dynamic lists based on unique courses properties
function renderFilterCheckboxes() {
    const levelsContainer = document.getElementById('levels-filter');
    const modesContainer = document.getElementById('modes-filter');
    const categoriesContainer = document.getElementById('categories-filter');
    const universitiesContainer = document.getElementById('universities-filter');

    // Levels
    const levels = ['UG', 'PG'];
    levelsContainer.innerHTML = levels.map(level => `
        <label class="custom-checkbox">
            <input type="checkbox" name="level" value="${level}">
            <span class="checkbox-box"></span>
            ${level === 'UG' ? 'Undergraduate (UG)' : 'Postgraduate (PG)'}
        </label>
    `).join('');

    // Delivery Modes
    const modes = [...new Set(courses.map(c => c.mode))];
    modesContainer.innerHTML = modes.map(mode => `
        <label class="custom-checkbox">
            <input type="checkbox" name="mode" value="${mode}">
            <span class="checkbox-box"></span>
            ${mode}
        </label>
    `).join('');

    // Categories
    const categories = [...new Set(courses.map(c => c.category))];
    categoriesContainer.innerHTML = categories.map(cat => `
        <label class="custom-checkbox">
            <input type="checkbox" name="category" value="${cat}">
            <span class="checkbox-box"></span>
            ${cat}
        </label>
    `).join('');

    // Universities
    const universities = [...new Set(courses.map(c => c.university))];
    universitiesContainer.innerHTML = universities.map(univ => `
        <label class="custom-checkbox">
            <input type="checkbox" name="university" value="${univ}">
            <span class="checkbox-box"></span>
            ${univ}
        </label>
    `).join('');
}

// Render filtered courses
function renderCourses() {
    const filtered = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                              course.university.toLowerCase().includes(filters.search.toLowerCase()) ||
                              course.category.toLowerCase().includes(filters.search.toLowerCase());
        
        const matchesLevel = filters.levels.length === 0 || filters.levels.includes(course.level);
        const matchesMode = filters.modes.length === 0 || filters.modes.includes(course.mode);
        const matchesCategory = filters.categories.length === 0 || filters.categories.includes(course.category);
        const matchesUniversity = filters.universities.length === 0 || filters.universities.includes(course.university);
        const matchesCost = course.cost <= filters.maxCost;

        return matchesSearch && matchesLevel && matchesMode && matchesCategory && matchesUniversity && matchesCost;
    });

    resultCountEl.textContent = `${filtered.length} courses match your criteria`;

    if (filtered.length === 0) {
        coursesGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-icon">🔍</div>
                <h3>No courses found</h3>
                <p>Try resetting some filters or tweaking your search terms.</p>
            </div>
        `;
        return;
    }

    coursesGrid.innerHTML = filtered.map(course => {
        const isAdded = selectedCourses.some(c => c.id === course.id);
        return `
            <div class="course-card" data-id="${course.id}">
                <div class="card-banner" style="background: ${course.imageColor}">
                    <span class="univ-badge">${course.university}</span>
                    <span class="level-badge ${course.level.toLowerCase()}">${course.level}</span>
                </div>
                <div class="card-body">
                    <h3 class="course-title">${course.title}</h3>
                    <div class="card-metrics">
                        <div class="metric">
                            <span class="metric-label">Duration</span>
                            <span class="metric-val">${course.duration}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Type</span>
                            <span class="metric-val">${course.category}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Rating</span>
                            <div class="metric-val rating-row">
                                <span class="star-icon">★</span>
                                <span>${course.rating} (${course.reviewsCount})</span>
                            </div>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Mode</span>
                            <span class="metric-val" style="font-size: 0.8rem; line-height: 1.1;">
                                ${course.type.split(' / ')[0]}
                            </span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <div class="cost-display">
                            <span class="metric-label">Tuition Fee</span>
                            <span class="cost-amount">₹${course.cost.toLocaleString('en-IN')}</span>
                        </div>
                        <button class="compare-btn ${isAdded ? 'active' : ''}" data-id="${course.id}">
                            <span>${isAdded ? 'Selected' : 'Compare'}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Bind event listeners to new compare buttons
    document.querySelectorAll('.compare-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseId = e.currentTarget.getAttribute('data-id');
            toggleCompareCourse(courseId);
        });
    });
}

// Toggle comparison course state
function toggleCompareCourse(id) {
    const course = courses.find(c => c.id === id);
    const index = selectedCourses.findIndex(c => c.id === id);

    if (index > -1) {
        selectedCourses.splice(index, 1);
    } else {
        if (selectedCourses.length >= 3) {
            alert("You can compare a maximum of 3 courses at a time.");
            return;
        }
        selectedCourses.push(course);
    }

    updateCompareTray();
    renderCourses(); // Updates button visual active states
}

// Update comparison tray UI
function updateCompareTray() {
    if (selectedCourses.length > 0) {
        compareTray.classList.add('visible');
        trayItemsContainer.innerHTML = selectedCourses.map(course => `
            <div class="tray-item">
                <span>${course.university} - ${course.title.split(' ')[0]}...</span>
                <span class="remove-tray-item" data-id="${course.id}">✕</span>
            </div>
        `).join('');

        // Bind event listeners to tray close buttons
        document.querySelectorAll('.remove-tray-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                toggleCompareCourse(id);
            });
        });
    } else {
        compareTray.classList.remove('visible');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        filters.search = e.target.value;
        renderCourses();
    });

    // Cost slider
    costSlider.addEventListener('input', (e) => {
        filters.maxCost = parseInt(e.target.value);
        costValueEl.textContent = `₹${filters.maxCost.toLocaleString('en-IN')}`;
        renderCourses();
    });

    // Checkboxes change events (Level, Category, University)
    document.querySelectorAll('.filters-sidebar').forEach(sidebar => {
        sidebar.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const name = e.target.name;
                const value = e.target.value;
                const checked = e.target.checked;

                if (name === 'level') {
                    if (checked) filters.levels.push(value);
                    else filters.levels = filters.levels.filter(l => l !== value);
                } else if (name === 'mode') {
                    if (checked) filters.modes.push(value);
                    else filters.modes = filters.modes.filter(m => m !== value);
                } else if (name === 'category') {
                    if (checked) filters.categories.push(value);
                    else filters.categories = filters.categories.filter(c => c !== value);
                } else if (name === 'university') {
                    if (checked) filters.universities.push(value);
                    else filters.universities = filters.universities.filter(u => u !== value);
                }

                renderCourses();
            }
        });
    });

    // Modal action buttons
    compareActionBtn.addEventListener('click', openComparisonModal);
    closeModalBtn.addEventListener('click', closeComparisonModal);
    
    // Close modal on clicking backdrop
    comparisonModal.addEventListener('click', (e) => {
        if (e.target === comparisonModal) closeComparisonModal();
    });
}

// Open comparison modal
function openComparisonModal() {
    if (selectedCourses.length === 0) return;
    comparisonModal.classList.add('open');
    renderComparisonMatrix();
}

// Close comparison modal
function closeComparisonModal() {
    comparisonModal.classList.remove('open');
}

// Render dynamic comparison matrix inside modal
function renderComparisonMatrix() {
    const minCost = Math.min(...selectedCourses.map(c => c.cost));
    const minWeeks = Math.min(...selectedCourses.map(c => c.durationWeeks));
    const maxRating = Math.max(...selectedCourses.map(c => c.rating));

    const cols = selectedCourses;

    let html = `
        <div class="comparison-table-wrapper">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th class="feature-label">Feature</th>
                        ${cols.map(c => `
                            <th class="table-header-col">
                                <div class="univ-name">${c.university}</div>
                                <div class="course-name">${c.title}</div>
                            </th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="feature-label">Program Level</td>
                        ${cols.map(c => `<td><span class="level-badge ${c.level.toLowerCase()}">${c.level === 'UG' ? 'Undergraduate' : 'Postgraduate'}</span></td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Tuition Fee</td>
                        ${cols.map(c => {
                            const isBest = c.cost === minCost;
                            return `<td class="${isBest ? 'highlight-best' : ''}">
                                <strong>₹${c.cost.toLocaleString('en-IN')}</strong>
                                ${isBest ? '<div style="font-size:0.75rem; color:var(--accent); font-weight:bold;">Best Price</div>' : ''}
                            </td>`;
                        }).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Duration</td>
                        ${cols.map(c => {
                            const isBest = c.durationWeeks === minWeeks;
                            return `<td class="${isBest ? 'highlight-best' : ''}">
                                ${c.duration} (${c.durationWeeks} weeks)
                                ${isBest ? '<div style="font-size:0.75rem; color:var(--accent); font-weight:bold;">Shortest Program</div>' : ''}
                            </td>`;
                        }).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Category</td>
                        ${cols.map(c => `<td>${c.category}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Prerequisites</td>
                        ${cols.map(c => `<td style="font-size:0.85rem; color:var(--text-muted);">${c.eligibility}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Student Rating</td>
                        ${cols.map(c => {
                            const isBest = c.rating === maxRating;
                            return `<td class="${isBest ? 'highlight-best' : ''}">
                                <span class="star-icon">★</span> <strong>${c.rating}</strong> / 5.0 (${c.reviewsCount} reviews)
                            </td>`;
                        }).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Mode of Delivery</td>
                        ${cols.map(c => `<td style="font-size:0.85rem;">${c.type}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Career Assistance</td>
                        ${cols.map(c => `
                            <td>
                                <span class="support-badge ${c.careerSupport ? 'yes' : 'no'}">
                                    ${c.careerSupport ? 'Placement Support Included' : 'No Placement Services'}
                                </span>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="feature-label">Syllabus Highlights</td>
                        ${cols.map(c => `
                            <td>
                                <ul class="syllabus-list">
                                    ${c.syllabus.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </td>
                        `).join('')}
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- ROI Calculator Widget Section -->
        <div class="roi-section">
            <h4 class="roi-title">💼 Interactive Tuition ROI Estimator</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
                Estimate and compare your potential return on investment. Adjust the sliders to see how fast you will offset program tuition fees.
            </p>
            <div class="roi-controls">
                <div class="roi-control">
                    <label for="current-salary" style="font-size: 0.85rem; font-weight:600;">Your Current Salary (Annual): <span id="current-salary-val" style="color:var(--primary); font-weight:700;">₹5,00,000</span></label>
                    <input type="range" id="current-salary" class="range-slider" min="200000" max="3000000" step="50000" value="500000">
                </div>
                <div class="roi-control">
                    <label for="post-program-hike" style="font-size: 0.85rem; font-weight:600;">Expected Salary Hike: <span id="hike-val" style="color:var(--primary); font-weight:700;">35%</span></label>
                    <input type="range" id="post-program-hike" class="range-slider" min="5" max="80" step="5" value="35">
                </div>
            </div>
            
            <div class="roi-output-grid" id="roi-outputs">
                <!-- Will be dynamically populated for each compared course -->
            </div>
        </div>
    `;

    modalContentBody.innerHTML = html;
    setupRoiCalculator();
}

// Setup and handle ROI Calculations
function setupRoiCalculator() {
    const salarySlider = document.getElementById('current-salary');
    const hikeSlider = document.getElementById('post-program-hike');
    
    const salaryVal = document.getElementById('current-salary-val');
    const hikeVal = document.getElementById('hike-val');

    function calculateRoi() {
        const currentSalary = parseInt(salarySlider.value);
        const hikePercent = parseInt(hikeSlider.value);
        
        salaryVal.textContent = `₹${currentSalary.toLocaleString('en-IN')}`;
        hikeVal.textContent = `${hikePercent}%`;

        const salaryIncrease = currentSalary * (hikePercent / 100);
        
        const roiOutputsContainer = document.getElementById('roi-outputs');
        roiOutputsContainer.innerHTML = selectedCourses.map(course => {
            const monthsToRecover = ((course.cost / salaryIncrease) * 12).toFixed(1);
            const fiveYearProfit = (salaryIncrease * 5) - course.cost;

            return `
                <div class="roi-stat">
                    <div style="font-size:0.8rem; font-weight:700; color:var(--primary); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                        ${course.title.split(' ')[0]} (${course.university.split(' ')[0]})
                    </div>
                    <div style="margin-top:0.4rem;">
                        <span class="metric-label" style="font-size: 0.7rem;">Tuition Payback</span>
                        <div class="roi-stat-num positive">${monthsToRecover} Months</div>
                    </div>
                    <div style="margin-top:0.4rem;">
                        <span class="metric-label" style="font-size: 0.7rem;">5-Yr Net Gain</span>
                        <div class="roi-stat-num" style="color:#fff;">₹${fiveYearProfit.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    salarySlider.addEventListener('input', calculateRoi);
    hikeSlider.addEventListener('input', calculateRoi);
    
    // Initial run
    calculateRoi();
}

// Execute Init
document.addEventListener('DOMContentLoaded', init);
