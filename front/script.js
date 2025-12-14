function showForm(formId) {
  document.querySelectorAll('.form').forEach(f => f.classList.add('hidden'));
  document.getElementById(formId).classList.remove('hidden');
}

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    fetch(form.action, {
      method: form.method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(msg => {
      console.log(msg);
      form.reset();
      alert("✅ " + msg);
    })
    .catch(() => {
      alert("Error submitting data ❌");
    });
  });
});