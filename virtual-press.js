(() => {
  const name = (event) => ({Control:'Ctrl',Shift:'Mayús',Alt:'Alt',AltGraph:'Alt Gr',Meta:'⊞ Windows',Enter:'Entrar',Backspace:'Retroceso',Delete:'Supr',Home:'Inicio',End:'Fin',PageUp:'Re Pág',PageDown:'Av Pág',ArrowLeft:'←',ArrowUp:'↑',ArrowDown:'↓',ArrowRight:'→',Escape:'Esc',' ':'Espacio'})[event.key] || (event.key.length === 1 ? event.key.toUpperCase() : event.key);
  const buttons = (key) => [...document.querySelectorAll('.keycap')].filter((button) => button.textContent.trim() === key);
  document.addEventListener('keydown', (event) => {
    const dialog = document.querySelector('#guide');
    if (!dialog.open) return;
    buttons(name(event)).forEach((button) => button.classList.add('pressed'));
  });
  document.addEventListener('keyup', (event) => buttons(name(event)).forEach((button) => button.classList.remove('pressed')));
})();
