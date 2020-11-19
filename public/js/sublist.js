fetch(`${window.location.origin}/api/v0/subscribe`)
.then(response => response.json())
.then(data => {
  const subs = data;
  return subs
}).then(subs => {
  const subList = document.querySelector('#subsList');
  let outputHTML = '';
  subs.forEach(function(sub) {
    outputHTML += `
    <li>${sub.name}<br>${sub.email}</li>
    `
    subList.innerHTML = outputHTML;
  })
});
