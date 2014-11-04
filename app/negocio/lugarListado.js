var lugarListado=(function(){
    var self=Object.create({});

     var lugar = require('../entidades/lugar.js');
       var lista=[];
        self.listado=function(lugar){
         var ent=null;

        for (i=0;i<3;i++){
		
		  ent=new lugar();
           ent.setNombre=('lugar N '+i);
		   lista.push=(ent);
        };
             return lista;
        };
     

     return self;
});
module.exports=lugarListado;


