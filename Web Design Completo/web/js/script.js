if(window.SimpleSlide){


new SimpleSlide({
    slide: 'quote', 
    time: 5000, 
  });

  
new SimpleSlide({
  slide: 'portfolio', 
  time: 5000, 
  nav: true
});

}

if(window.SimpleAnime){


new SimpleAnime();
	
}

new SimpleForm({
  form: ".formphp", 
  button: "#enviar", 
  erro: "<div id='form-erro'><h2>Erro no Envio</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
});