// Responsive nav bar
const toggleButton = document.getElementById('toggle-button');
const navilist = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    navilist.classList.toggle('active')
})