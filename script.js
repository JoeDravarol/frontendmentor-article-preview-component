(() => {
  const shareBtn = document.querySelector('.share__btn')
  const shareTooltip = document.querySelector('.share__social-icons')
  
  shareBtn.addEventListener('click', () => {
    shareTooltip.classList.toggle('share__social-icons--active')
  })
})()