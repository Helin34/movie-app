module.exports = (request) => {
    return new Promise((resolve, reject) => {
      try {
        // fonksiyonun göndericeği cevap
        let body = "";
  
        // frontend'den body'nin her parçası geldiğinde onu al ve yukarıdaki değişkene ekle
        request.on("data", (chunck) => {
          body += chunck;
        });
  
        // yüklenme bittiğinde json 
        request.on("end", () => {

          // fonksiyonun çağrıldığı yere body kısmını return et


          resolve(JSON.parse(body));
        });
      } catch (err) {


        //hatayı döndür
        reject(err);
      }
    });
  };