<script>

var ejercicio2 = function () {
  this.conjDatos = new Array();
  this.seriesLineas = new Array ();
  this.seriesPie = new Array ();
  $.ajaxSetup({
    async: false
  });
};

//Cargar y validar datos normalizando el formato (categoria en mayúsculas, fecha en ms y valor)

ejercicio2.prototype.cargardatos = function () {
  var objThis = this;
  $.getJSON('http://s3.amazonaws.com/logtrust-static/test/test/data1.json', function (datos){
    objThis.carvalSerie1(datos);
  });
  $.getJSON('http://s3.amazonaws.com/logtrust-static/test/test/data2.json', function (datos){
    objThis.carvalSerie2(datos);
  });
  $.getJSON('http://s3.amazonaws.com/logtrust-static/test/test/data3.json', function (datos){
    objThis.carvalSerie3(datos);
  });
  objThis.cargarSeriesGraficos();
};

ejercicio2.prototype.carvalSerie1 = function (serie1) {
  for (var i=0; i<serie1.length; i++){
      this.crearSerieDatos({
        categoria: serie1[i].cat.toUpperCase(),
        fecha: serie1[i].d,
        valor: serie1[i].value
      });
  }
};
ejercicio2.prototype.carvalSerie2 = function (serie2) {
  for (var i=0; i<serie2.length; i++){
      this.crearSerieDatos({
        categoria: serie2[i].categ.toUpperCase(),
        fecha: Date.parse(serie2[i].myDate),
        valor: serie2[i].val
      });
  }
};
ejercicio2.prototype.carvalSerie3 = function (serie3) {
  for (var i=0; i<serie3.length; i++){
      var regexFecha = /\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|[3][01])/
      this.crearSerieDatos({
        categoria: (serie3[i].raw.split('#'))[1].toUpperCase(), 
        fecha: Date.parse(regexFecha(serie3[i].raw)[0]),
        valor: serie3[i].val
      });
  }
};

// Juntamos en las 3 series en una

ejercicio2.prototype.crearSerieDatos = function (punto){
  this.conjDatos.push(punto);
};

// Obtenemos las distintas categorías

ejercicio2.prototype.distintCateg = function (dat){
  var categ=[];
  for (var i=0; i<dat.length;i++){
    if (categ.index0f(dat[i].categ)==-1){
      categ.push(dat[i].categ);
    }
  }
  return categ;
};
 
// Función para comparar fechas (val=fecha que queremos, array contiene (fecha,valor))

ejercicio2.prototype.idemfecha = function (val, array) {  
  for (var i = 0; i < array.length; i++){
    if (array[i][0]=== val) {
        return i;
    }
  }
  return -1;
};

// Añadimos datos para pintar los gráficos

ejercicio2.prototype.cargarSeriesGraficos = function () {
    var totalvalores = 0;
    var resumenCateg = {
      categoria: new Array(),
      totalCateg:0
    };
    var unicCateg = this.distintCateg(this.conjDatos);
    
    for(var i=0; i<unicCateg.length; i++){
        var nomCateg=unicCateg[i]
        var categ = {
           nombre: nomCateg,
           total: 0
        };
        this.seriesLineas.push({
          nombre: nomCateg,
          datos: new Array()
        });
        var serieCateg=$.grep(this.conjDatos, function(n,i) {return n.categ==nomCateg;});
        serieCateg.sort(function(a,b){return a.fecha<=b.fecha;}); 
      
        for (var j=0; j<serieCateg.length; j++){
          var index=this.idemfecha(serieCateg[j].fecha,this.seriesLineas[i].datos)
          if (index==-1){
            this.seriesLineas[i].datos.push([serieCateg[j].fecha,serieCateg[j].valor]);
          }
          else {
            this.seriesLineas[i].datos[index][1] += serieCateg[j].valor);
          } 
          categ.totalCateg += serieCateg[j].valor;
        }
        resumenCateg.categ.push(categ);
        resumenCateg.totalCateg += categ.totalCateg;
        this.seriesLineas[i].datos.sort(function(a,b){return a[0]>b[0]});
    }
    
    var seriesPie = {
        nombre: categ
        datos: new Array()
    };
    for (var k=0; k<resumenCateg.categ.lenght; k++){
        seriesPie.datos.push({
            nombre: resumenCateg.categ[k].nombre
            porcentaje: (resumenCateg.categ[k].total/resumenCateg.total)*100
        });
    }
    this.seriesPie.push(seriesPie);
};


  



