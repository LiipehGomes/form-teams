document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('msg').textContent = "Enviado com sucesso!";
  this.reset();
});
