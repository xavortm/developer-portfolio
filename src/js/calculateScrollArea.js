const calculateScrollArea = () => {
  const appNav = document.querySelector('.app-header__navigation');
  const appFooter = document.querySelector('.app-footer');
  const tabs = document.querySelector('.split-view-container__view > .file-tabs');
  let totalHeight = 0;

  if (appNav) {
    totalHeight += appNav.clientHeight;
  }

  if (tabs) {
    totalHeight += tabs.clientHeight;
  }

  if (appNav) {
    totalHeight += appNav.clientHeight;
  }

  document.documentElement.style.setProperty('--calculated-header-height', totalHeight + 'px');
}

export default calculateScrollArea;
