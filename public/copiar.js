// Botões "Copiar" do e-mail. Sem suporte à área de transferência, o botão continua oculto e o endereço fica visível para copiar à mão.
if (navigator.clipboard) {
  for (const botao of document.querySelectorAll('[data-copiar]')) {
    const aviso = botao.nextElementSibling;
    const rotulo = botao.textContent;
    let timer;
    botao.hidden = false;
    botao.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(botao.dataset.copiar);
        botao.textContent = 'Copiado!';
        aviso.textContent = 'E-mail copiado.';
      } catch {
        aviso.textContent = 'Não foi possível copiar. Selecione o endereço e copie.';
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        botao.textContent = rotulo;
        aviso.textContent = '';
      }, 3000);
    });
  }
}
