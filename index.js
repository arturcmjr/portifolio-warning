const storageKey = 'portfolio-warning-dismissed';

document.addEventListener("DOMContentLoaded", function (e) {
  const dismissed = localStorage.getItem(storageKey);
  if (dismissed) return;
  const el = document.body.appendChild(document.createElement("div"));
  el.classList.add("ptw-base");
  el.innerHTML = 
  `
  <div class="ptw-content">
   <h3>Disclaimer</h3>
   <p>Please note that this site is not intended for everyday use. 
      It was made for demonstration purposes only. You can see more at <a href="https://arju.dev/web" target="_blank">arju.dev</a>. 
      I recommend that you don't use any real-world data. Also, I may need 
      to delete any data entered here without notice. I hope you enjoy it, 
      and feel free to contact me at <a href="mailto:arturcmjr@gmail.com" target="_blank">arturcmjr@gmail.com</a>
   </p>
   <div class="ptw-checkbox-container">
      <input class="ptw-checkbox" id="ptwCheckbox" type="checkbox">
      <label for="ptwCheckbox">don't show again</label>
   </div>
   <div class="ptw-buttons">
      <button class="ptw-button-ok" id="ptwCloseBtn">UNDERSTOOD</button>
   </div>
  </div>
  `;

  const closeButton = document.getElementById("ptwCloseBtn");
  closeButton.addEventListener("click", function (e) {
    const checkbox = document.getElementById("ptwCheckbox");
    if (checkbox.checked) localStorage.setItem(storageKey, "true");
    el.classList.add("ptw-hide");
    window.setTimeout(() => {
      el.remove();
    },301);
  });
});
