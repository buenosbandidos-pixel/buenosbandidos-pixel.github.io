(function(){
  const lb = document.querySelector('.lightbox');
  if(!lb) return;
  const lbImg = lb.querySelector('img');
  const tiles = document.querySelectorAll('[data-lightbox]');
  function open(src, alt){
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function close(){
    lb.classList.remove('open');
    lbImg.src='';
    document.body.style.overflow='';
  }
  tiles.forEach(t=>{
    t.addEventListener('click', (e)=>{
      e.preventDefault();
      open(t.getAttribute('href'), t.getAttribute('data-alt') || '');
    });
  });
  lb.addEventListener('click', close);
  window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') close();
  });
})();