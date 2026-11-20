document.querySelectorAll('.copy').forEach(button=>{
  button.addEventListener('click',async()=>{
    const value=button.parentElement.querySelector('blockquote').innerText;
    try{
      await navigator.clipboard.writeText(value);
      const toast=document.querySelector('.toast');toast.textContent='Текст скопирован';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200);
      button.textContent='Скопировано';setTimeout(()=>button.textContent='Скопировать текст',2200);
    }catch{
      const range=document.createRange();range.selectNodeContents(button.parentElement.querySelector('blockquote'));
      const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);
      const toast=document.querySelector('.toast');toast.textContent='Текст выделен. Скопируй его через меню устройства.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),4500);
    }
  });
});
if('IntersectionObserver' in window){
  const links=[...document.querySelectorAll('.toc a')];
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.removeAttribute('aria-current'));const active=links.find(a=>a.hash==='#'+entry.target.id);if(active)active.setAttribute('aria-current','location');}});},{rootMargin:'0px 0px -70% 0px'});
  document.querySelectorAll('.chapter').forEach(section=>observer.observe(section));
}
