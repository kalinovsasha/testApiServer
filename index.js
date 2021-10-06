const express = require("express");
const cors = require('cors');// Для того, чтобы не выкидывало ошибку corse 

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors(corsOptions)); //

const users = {
    users: [
      {  
    id:"2petrov",
    name:"Vasili Petrov",
    phone:"+375292848622",
    city:"Grodno",
    company:"Epam",
    avatar:"https://i1.u-mama.ru/513/631/8a0/1fa162373d7f09ce80c9051a1098c4ef.jpg"
      },
      {  
        "id":"3ivanov",
        "name":"Alexey Ivanov",
        "phone":"+375292856565",
        "city":"Grodno",
        "company":"GRSU",
        "avatar":"https://yaustal.com/uploads/posts/2019-05/1558358759_0-21_1.jpg"
          },
          {  
            "id":"4pran",
            "name":"Vladimir Kivemkin",
            "phone":"+375337536564",
            "city":"Minsk",
            "company":"Atlant",
            "avatar":"https://i.imgur.com/jSyNR1A.jpg"
              },
              {  
                "id":"5mila",
                "name":"Ekaterina Ivanova",
                "phone":"+375338626331",
                "city":"Vitebsk",
                "company":"Vitba",
                "avatar":"https://r3.mt.ru/r25/photo64E7/20208713471-0/jpg/bp.jpeg"
                  },
                  {  
                    "id":"6vas",
                    "name":"Vaselisa Petrova",
                    "phone":"+375337621331",
                    "city":"Gomel",
                    "company":"Jurtizanka",
                    "avatar":"https://im0-tub-ru.yandex.net/i?id=4d1247f615493050522270a50c9e8745-l&ref=rim&n=13&w=640&h=640"
                      },
                      {  
                        "id":"hif",
                        "name":"Arseni Hiferenko",
                        "phone":"+375257543535",
                        "city":"Minsk",
                        "company":"Evroopt",
                        "avatar":"https://avatars.mds.yandex.net/get-zen_doc/1779163/pub_5de2580b8d5b5f00b251a6d1_5de25914c49f2900b166ccdc/scale_1200"
                          }
    
    ]
  };



app.listen(
    PORT, ()=>{
        console.log("Start");
    });
    


    app.get("/",(req,res)=>{
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS") ;
        res.json(users);
        
    });
    app.get("/test",(req,res)=>{
        let a=req.query.name;
        res.send(a);
    });
    