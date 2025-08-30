
// script.js - search + quiz
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuqxxQT6lWDvYeUX0Tf9Rh01I_UtxJfwk",
  authDomain: "dinosaurs-website.firebaseapp.com",
  projectId: "dinosaurs-website",
  storageBucket: "dinosaurs-website.firebasestorage.app",
  messagingSenderId: "887783744239",
  appId: "1:887783744239:web:455362f876f3b94b81311a",
  measurementId: "G-XFH359N6NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("✅ Welcome back " + userCredential.user.email);
  })
  .catch((error) => {
    console.error(error.code, error.message); // Debug info
    alert("❌ Error: " + error.code);
  });

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

