const btn = document.querySelectorAll('.button');
    let names = document.querySelectorAll('.product-list > p');
    
    btn.forEach((element, i) => element.addEventListener('click', function(){
        modal.style.display = 'block';
        document.querySelector('.nameGood').innerHTML = names[i].innerText;
      }));
    const modal = document.querySelector('.form');

  var span = document.getElementsByClassName("close")[0];

  
span.onclick = function() {
  modal.style.display = "none";
  
};

const form = document.querySelector('#myForm');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  const formData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    phone: document.querySelector('input[name="phone"]').value,
    product: document.querySelector('.nameGood').innerText
  };

  const request = new XMLHttpRequest();

  request.addEventListener('load', function() {
    form.innerHTML = '<h2>Заявка принята!</h2>';
  });

  request.open('POST', '/send.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&email=' + encodeURIComponent(formData.email) + '&phone=' + encodeURIComponent(formData.phone) + 'product=' + encodeURIComponent(formData.product));
});