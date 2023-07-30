
//Cannot GET /
//'<h1 style="color: blue;"</h1>'
function idPersonalizado (){
                      //
  const ip = '127.0.0.1';
  const port = 8080;
  app.listen(port, ip, () => {console.log(`Servidor rodando em http://${ip}:${port}`);    });
                      //acima: sem parametros, requisitos... ele já dá p log
}
