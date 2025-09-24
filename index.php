<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
    <title>Comparando fichas</title>
    <div class= "loteria" id="loteria">
      <div class="loteria__contenedor"> 
        <div class="loteria__contenedor__titulo_principal">
          <h2 class="titulo_principal">Ficha: <span id="nombre_ficha"></span></h2>  
        </div>
        <div class="loteria__contenedor__contenido">
          <div class="loteria__contenedor__contenido__fichas_clasicas">
            <h3 class="loteria__contenedor__contenido__titulo_secundario">Clasicas</h3>
            <div id="fichaCantada2"></div> 
          </div>
          <div class="loteria__contenedor__contenido__fichas_modernas">
            <h3 class="loteria__contenedor__contenido__titulo_secundario">Modernas</h3>
           <div id="fichaCantada"></div>
          </div>  
        </div>
        <button class="loteria__contenedor__btn" id="loteria_btn">Cantar loteria</button>
        <input type="text" name="" id="inputNumeroFicha" value="" placeholder="Número de Ficha" />
      </div>
    </div>
  </head>
  <body>
    <script type="module" src="./js/main.js"></script>
    <script type="text/javascript" src="./js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
    <script>eruda.init();</script>
  </body>
</html>