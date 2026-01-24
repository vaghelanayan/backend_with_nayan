import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors";

const app = express();
app.use(cors({
     origin: process.env.CORS_ORIGIN,
     credentials: true
}))
app.use(express.json({
    limit:"17kb"
})) // pahala aavi rite data nahoto levato tyre body-parser use thato
app.use(express.urlencoded({extended:true,limit:"17kb"})) // aa aek varkar incoder se url nu frotend thi aavta url  ex. jo tame google ma nayn search karso to tame url ma khali nayan nai jova male aena sathe amuk special character pan jova male se 
app.use(express.static("public"))
app.use(cookieParser())
export {app} 

//#1
/*CORS Config: Basic Locho and Solution 🚀
Agar taru Frontend (React/Vite) ane Backend (Node.js) alag alag ports par chaltu hoy, to browser security mate data block kari de che. Ene handle karva mate aa code vapray:
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
Breakdown  :
1. origin: process.env.CORS_ORIGIN 
Logic: Aa ek "Whitelist" jevu che.
Tara .env file ma je URL (jem ke localhost:5173) te set karyu hase, fakt e j website tara Backend ne request mokli sakse.
Benefit: Biji game te random site request karse to server ene direct "Access Denied" kahi dese. Security mate aa bau jaruri che, nahi to koi pan tari API misuse kari sake.
2. credentials: true 
Logic: Aa "Cookies" ane "Authorization Tokens" pass karva mate che.
Jo tare Login system banavvi hoy ane Backend mathi Cookies frontend ma mokalvi hoy, to aane true rakhvu j pade.
Problem: Jo aa false hase, to taru Login vare-ghadiye nikli jase (logout thai jase) karanke browser cookies accept nahi kare.
Ek Jaruri Vaat (Important Note):
Jyare pan tu credentials: true rakhe, tyare origin ma kyarey * (asterisk) na vapray. Hamesha specific URL j lakhvu pade, nahi to CORS error malse. */

//2
/*
Backend Note: Express JSON Body Limit
Backend ni security ane performance vadhari deva mate aa configuration bau important che.

The Code:
app.use(express.json({ limit: "17kb" }))

Detailed Breakdown:
1. express.json() 
Logic: Aa ek Middleware che jenu kaam data "Parsing" nu che.
Problem: Browser mathi jyare data JSON format ma aave, tyare Node.js ene directly read nathi kari saktu.
Solution: Aa line lakhavathi Express e JSON data ne object ma convert kare che, jethi tu req.body use kari ne data access kari sake.
2. limit: "17kb" 
Logic: Aa tare server par aavta data ni Size Cap (Limit) set kare che.
Default Behavior: Agar tu aa limit set na kare, to Express default ma 100kb sudhi no data allow kare che.
Why 17kb? Normal form data (name, email, password) mate 17-20kb bau moti size kevay. So, small limit rakhvathi server efficient rahe che.
Why Is This Needed? (Security & Stability) 🛡️
DOS Attack Protection: Vichar kar ke koi hacker tara server par continuous 50MB no JSON data mokle. Taru server e data read karva ma j overload thai jase ane crash thai sakse. Limit hovathi server moti request ne gateway par j Reject kari dese.
Resource Management: Server ni memory (RAM) falthu data parse karva ma waste nathi thati.*/

//#
/*
Backend Note: URL-Encoded Data Handling
Jyare data URL na through (form submission) aave che, tyare ene handle karva mate aa configuration vapray che.

The Code:
app.use(express.urlencoded({ extended: true, limit: "17kb" }))

Detailed Breakdown:
1. express.urlencoded() 
Logic: Aa middleware URL mathi aavta data ne parse kare che.
Context: Jyare tu browser ma search kare che google.com/search?q=chai+aur+code, tyare URL ma space ni jagyae + ya %20 thai jay che.
Solution: Aa configuration e special characters ane encoded data ne backend ma proper format ma convert kare che, jethi tu req.body ma clean data melvi sake.
2. extended: true 
Logic: Aa option decide kare che ke data parse karva mate kayi library vapravi.
extended: true: Aa qs library vapre che, je "Nested Objects" (object ni andar bijo object) handle kari sake che.
extended: false: Aa simple library vapre che, je nested data handle nathi kari sakti. Standard practice ma hamesha true rakhvu j saru.
3. limit: "17kb" 📏
Logic: Same jem JSON ma hatu, tem j URL data ni size limit set kare che.
URL through bau moto data moklavo security risk che, etle limit rakhvi bau jaruri che.*/

//
/*
aa line pan production-level app mate bau kaam ni che. Jyare tare tara server par thi direct files (jem ke images, CSS, ya PDF) client ne batavvi hoy, tyare aa vapray che.
Backend Note: Serving Static Files
app.use(express.static("public"))

Breakdown in Gujlish:
1. express.static() 
Logic: Aa Express no ek built-in middleware che je tara server par na ek folder ne "Public" banavi de che.
Meaning: Aa folder ni andar je pan hase (images, favicon, documents), e koi pan user direct URL mathi access kari sakse.
2. "public" 
Logic: Aa folder nu naam che. Tu biju kai pan rakhi sake (jem ke assets ya files), pan industry standard pramane badha "public" j rakhe che.
Storage: Badhi static assets (jem ke logo.png, temp.txt, style.css) aa folder ni andar store karvani hoy che.
Aatlu Yaad Rakhje (Important Points):
Direct Access: Jo tara public folder ma logo.png hoy, to tu browser ma localhost:8000/logo.png lakhse to direct image dekhase. Folder nu naam URL ma nathi lakhvu padtu.
Security: Fakt aa folder ni file j public ma dekhase. Tara source code (index.js, .env) secure rehse.
Temporary Storage: Jyare tu Cloudinary jevi service vapre, tyare tu image pehla tara aa public folder ma store kare ane pachi tya thi upload kare. Upload thai gaya pachi tu local file delete kari sake*/

//


// cookie-parser shu che?
/*
Jyare browser server ne request mokle, tyare browser ni andar save thayeli cookies pan sathe jay che. Pan Express.js direct aa cookies ne read nathi kari shaktu.

cookie-parser ek middleware che je aa badhi cookies ne "parse" (read) kare che ane tene req.cookies na object ma muke che. Aa na lidhe tame coding ma asani thi cookie ni value vapri shako cho.*/
/*
Middleware	What it does? (Gujlish Meaning)	Simple Example
cors()	Security Guard: Fakt trusted frontend ne j permission aape.	localhost:5173 can access.
json()	JSON Reader: API mathi aavta {} data ne object banave.	req.body.email
urlencoded()	Form Reader: URL/Form mathi aavta + ane %20 handle kare.	name=chai+aur+code
static()	File Server: Images, CSS, ya PDF ne public access aape.	localhost:8000/logo.png
cookie-parser	Cookie Manager: Browser ni cookies read ane set kare.	req.cookies.token */