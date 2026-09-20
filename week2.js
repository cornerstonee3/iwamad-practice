const likeBtn = document.querySelector('#like-btn');
const profileCard = document.querySelector('.card');
likeBtn.addEventListener('click', () => {
  profileCard.classList.toggle('liked');
  if (profileCard.classList.contains('liked')) {
    likeBtn.textContent = 'Liked';
  } else {
    likeBtn.textContent = 'Like';
  }
});