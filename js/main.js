(function(){
  var NUM='5573981810688';
  function wa(t){return 'https://api.whatsapp.com/send?phone='+NUM+'&text='+encodeURIComponent(t)}
  document.querySelectorAll('[data-wa]').forEach(function(a){
    var t=a.getAttribute('data-wa');
    a.href=wa(t?'Olá, Dra. Janaína! Gostaria de falar sobre o seguinte assunto: '+t+'.':'Olá, Dra. Janaína! Gostaria de agendar uma consulta.');
  });
  var h=document.querySelector('.header'),b=document.getElementById('burger'),n=document.getElementById('nav'),w=document.querySelector('.wa'),last=0;
  function s(){
    var y=window.scrollY;
    h.classList.toggle('hide',y>400&&y>last&&!n.classList.contains('open'));
    last=y;
    if(w)w.classList.toggle('show',y>600);
  }
  s();window.addEventListener('scroll',s,{passive:true});
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded','false')})});

  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}

  // contagem dos números
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-count]').forEach(function(el){
    if(reduce)return;
    var to=parseFloat(el.dataset.count),dec=parseInt(el.dataset.dec||0,10),t0=null;
    function f(ts){
      if(!t0)t0=ts;var p=Math.min((ts-t0)/1400,1),e=1-Math.pow(1-p,3);
      el.textContent=(to*e).toFixed(dec).replace('.',',');
      if(p<1)requestAnimationFrame(f);
    }
    el.textContent=dec?'0,0':'0';
    setTimeout(function(){requestAnimationFrame(f)},900);
  });

  var mb=document.getElementById('amoreBtn'),mo=document.getElementById('amore');
  if(mb&&mo)mb.addEventListener('click',function(){
    var o=mo.classList.toggle('open');mb.setAttribute('aria-expanded',o);
    mb.firstChild.textContent=o?'Ver menos especialidades':'Ver mais especialidades';
  });
  document.getElementById('ano').textContent=new Date().getFullYear();
  document.getElementById('form').addEventListener('submit',function(ev){
    ev.preventDefault();var f=ev.target;
    var nome=f.nome.value.trim();if(!nome){f.nome.focus();return}
    var t='Olá, Dra. Janaína! Meu nome é '+nome+'.\nAssunto: '+f.assunto.value+(f.tel.value?'\nTelefone: '+f.tel.value:'')+(f.msg.value?'\n\n'+f.msg.value.trim():'');
    window.open(wa(t),'_blank','noopener');
  });
})();
