const fs =require("fs");
const url =require("url");




module.exports=async (req,res)=>{
    
   const baseUrl= req.url.substring(0,req.url.lastIndexOf("/"));

    const id= req.url.split("/");

    


    if(req.url === "/api/movies"){
        //durum kodu
        res.statusCode=200;
        //headerları belirle
        res.setHeader("Content-Type","application/json");
        //json dosyası
      const movies =  fs.readFileSync("./data/movies.json","utf-8");
        //client

        return res.end(movies);
    }
    else if(baseUrl=== "/api/movies" && id){

        //bütün filmleri al
       const data =JSON.parse( fs.readFileSync("./data/movies.json","utf-8"));
        //urle eklenen film bulunursa client'a gönder
       const movie= data.movies.find((movie)=> movie.id ===id);
       if(movie){
        //eğerki film buluınursa client a gönder
        res.writeHead(200,{"Content-Type":"application/json"});

        res.end(JSON.stringify(movie));
        
       }
        else{
            //film bulunamazsa client hata gönder
        }

        


        return res.end("geçersiz Id");
    }
    else{
        return res.end("yol bulunamadı");
    }
   
};