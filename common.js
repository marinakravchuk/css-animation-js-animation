/* спинер */
const spinnerBtn = document.querySelector('.spinner_btn');
spinnerBtn.addEventListener('click', () => {
  spinnerBtn.disabled = true;
  spinnerBtn.classList.add('loading');
  setTimeout(() => {
    spinnerBtn.disabled = false;
    spinnerBtn.classList.remove('loading');
  }, 5000);
});
