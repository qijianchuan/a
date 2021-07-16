function showSearch() {
    let radius_btn = document.getElementById("radius_search_wrap");
    radius_btn.setAttribute('class', 'radius-btn radius-btn-search radius-btn-search-in');
};

function hideSearch() {
    let radius_btn = document.getElementById("radius_search_wrap");
    radius_btn.setAttribute('class', 'radius-btn radius-btn-search');
};