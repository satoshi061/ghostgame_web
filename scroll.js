const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll', ()=> {
  const scrollValue = document.scrollingElement.scrollTop;

  if (scrollValue >= 1000) {
    backBtn.style.opacity = 1;
  } else {
    backBtn.style.opacity = 0;
  }
});

backBtn.addEventListener('click', () =>{
  if (backBtn.style.opacity == 1){
    window.scroll({top: 0, behavior: "smooth",});
  }
})
