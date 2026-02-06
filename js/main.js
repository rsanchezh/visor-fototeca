
// Initialize App when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM Content Loaded - main.js executing');

    // Initialize Filter Toggle (Independent of App)
    const filtersToggle = document.getElementById('filtersToggle');
    const filtersBody = document.getElementById('filtersBody');

    console.log('🔍 Looking for filter elements...');
    console.log('  filtersToggle:', filtersToggle);
    console.log('  filtersBody:', filtersBody);

    if (filtersToggle && filtersBody) {
        console.log('✅ Filter toggle initialized');
        filtersToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🖱️ Filter toggle clicked');
            console.log('  Before - filtersBody classes:', filtersBody.className);
            console.log('  Before - filtersToggle classes:', filtersToggle.className);

            filtersBody.classList.toggle('collapsed');
            filtersToggle.classList.toggle('collapsed');

            console.log('  After - filtersBody classes:', filtersBody.className);
            console.log('  After - filtersToggle classes:', filtersToggle.className);
        });
    } else {
        console.warn('❌ Filter toggle elements not found');
        console.warn('  Missing:', !filtersToggle ? 'filtersToggle' : 'filtersBody');
    }

    try {
        console.log('🚀 Initializing App...');
        window.app = new App();
    } catch (error) {
        console.error('Failed to initialize App:', error);
    }
});
