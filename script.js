(function () {
    const menuIconId = 'burger-icon';
    const closeIconId = 'header__nav-close';
    const headerContainerId = 'header';

document.getElementById(menuIconId).addEventListener('click', () => {
  document.getElementById(headerContainerId).classList.add('mobile-menu');
});

document.getElementById(closeIconId).addEventListener('click', () => {
  document.getElementById(headerContainerId).classList.remove('mobile-menu');
});
