
// script.js - search + quiz
document.addEventListener('DOMContentLoaded',function(){
  const search = document.getElementById('search');
  const gallery = document.getElementById('gallery');
  const cards = gallery ? Array.from(gallery.querySelectorAll('.species-card')) : [];
  if(search){
    search.addEventListener('input',function(e){
      const q = e.target.value.trim().toLowerCase();
      cards.forEach(card=>{
        const name = card.dataset.name || card.textContent.toLowerCase();
        card.style.display = name.includes(q) ? '' : 'none';
      });
    });
  }

  const answers = {q1:'Triassic', q2:'Theropod', q3:'true', q4: 'Titanosaurus', q5: 'Stegosaurus', q6: 'Therizinosaurus', q7: 'Cretaceous', q8: 'Spinosaurus', q9: 'Pterodactyl', q10: 'Triceratops'};
  const checkBtn = document.getElementById('check');
  const scoreP = document.getElementById('score');
  if(checkBtn){
    checkBtn.addEventListener('click',function(){
      let score = 0; let total = 10;
      for(const key in answers){
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if(selected && selected.value === answers[key]) score++;
      }
      scoreP.textContent = `You got ${score} of ${total} correct.`;
    });
  }
});

