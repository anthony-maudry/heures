(() => {
  if( !window.appConfiguration ) {
    alert("Pas de fichier de configuration");
    return;
  }

  function validateConfiguration( configuration )
  {
    return true;
  }

  if( !validateConfiguration(window.appConfiguration) )
  {
    alert("Fichier de configuration invalide");
    return;
  }
}();
