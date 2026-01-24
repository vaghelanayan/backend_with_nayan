 // # 
-> first create npm file (nodefile)
- .env create
- .gitignore and add gitignore code -> [ gitignoregenetor](https://mrkandreev.name/snippets/gitignore-generator/#Node)
- add in github
    -> git init
    ->git add .
    ->git commit -m "first commit"
    ->git branch -M main
    -> add remote
    -> git push -u origin main
- create js file in srs
-  add type of module js in json file because module js  provie consitency
-  install dev depedenacy (nodemon) because if u will change any point in server all time server restart is important .depedeancy are two type one is main and second is devlopment (dev). use second because main production ma problem na kare 
- after  install add dev command in json file
- create folder in src 1. controllers 2. db 3.middlewares 4.models 5.routes 6.utils
- prettier 

    Prettier Shu Che? (What is Prettier?)
    Prettier ek "Opinionated Code Formatter" che. Saral bhasha ma kahiye to, aa ek evu tool che je tamara code ne aapmele (automatically) vyavasthit rite format kari de che.

    Jyare aapne code lakhiye chiye, tyare kyarek indentation bhuli javay, kyarek extra spaces rahi jay, ke kyarek single quotes ne badle double quotes vaprai jay. Prettier aa badhu fix karine tamara code ne ekdam clean ane readable banave che.

    Prettier Kem Vaparvu Joie? (Key Benefits)
    No more style debates: Team na darek member ni code lakhvani style alag hoy. Prettier badha mate ek sarkho standard set kari de che, etle "kai rite lakhu" eni mathakut bandh!

    Time Saving: Tamare manually space ke tabs set karvama time bagadvo nathi padto.

    Format on Save: Tame jevu file ne Save karsho, etle tarat j tamaro code "chakachak" thai jashe.

    Readability: Code ekdam structured lage che, jethi bijo developer tene sahelay thi samji shake.

    Kevi Rite Kaam Kare Che? (How it works?)
    Tame game tetlo gando code lakhyo hoy (jem ke badhi lines ek j bhegi hoy), Prettier tene niche mujab na rules lagadine vyavasthit kari deshe:

    Indentation: Yogya jagyae spaces ke tabs mukshe.

    Semicolons: Jo tame bhuli gaya hov, to pachal ; umerishe.

    Line Length: Jo ek line bau lambi hashe, to tene todine navi line ma lai jashe.

    Quotes: Fix kari deshe ke badhe 'single' vaparvu ke "double".
   (npm i -D prettier )
- add prettierc filee use prettier extension

# data base connetion 
- download mongoose ya use online website atlas mongoose
 - create cluster
 - add ip address 0.0.0.0/0
 - add user and passaword create user and  
 - go to databaseaccess through menu connection and get uri
-  go to .env  add port and mongoo uri
- install package npm i mongoose ,npm i dotenv ,npm i express
- go to index.js 

# api handle and error handling // express
- go to app.js 
- install cookie-parser and cors package 'npm i cookie-parser','npm i cors'
- after install import in app.js
- set cors in app.js
- set ( server par data json maj aave ae mate and ak limit maj aave . darvakhte aevu na hoy ke json maj aave amuk time form type etc. ma avta hoy atle json set karsu),in app.js
-
# middlewere("Middleware" ne tame ek "Middleman" (vachhetiyo) tarike samji shako cho.)

-Simple bhasha ma kahu toh, jyare be alag-alag software apps ke system ne ek-bija jode vaat karvi hoy, pan emni     bhasha alag hoy, tyare Middleware vachma aavi ne badhu manage kare che.
-Middleware na Main Kaam (Functions):
        Data Management: Ek system mathi data laine biji system ne samjay e format ma convert kare.
        Authentication: Check kare ke "Aa user sacho che ke nahi?" (Security check).
        API Management: Apps ne ek-bija sathe connect kare.
        Messaging: Ek app mathi message biji app ne safely pahonchaade
    Node.js ma middleware bau j important concept che. Jyare tamari application pase koi Request (Client side thi) aave ane tame Response (Server side thi) moklo, e banne ni vachche jo koi function execute thauto hoy, toh ene Middleware kahevay.
    Tame ene ek "Security Checkpoint" jem samji shako cho
    Node.js Middleware kevi rite kaam kare che?
    Middleware pase 3 main vastu hoy che:
        Req (Request object): Client ni badhi details.
        Res (Response object): Server je javab aapvano che e.
        Next: Aa ek function che. Jyare middleware nu kaam patipajay, tyare e next() call kare che jethi control biju function pase jay.   

# utilites
 - create asyncHandler in utils 
 -create errorhandler(api error)
- create api response (api response)
# models
- create user model
- create user video model
- install{ videohistory ni save mate } mongoose-aggregate-paginate-v2 ( npm install mongoose-aggregate-paginate-v2) get link from npm side and learn mongoose side 
- install (jsonwetoken)[jsonwebtoken (JWT) e backend ma authentication mate no gold standard che. Jyare user login kare, tyare server ek "Token" banavi ne aape che, jene user potana mobile ke browser ma save rakhe che],
    [Login: User email/password mokle.
    Issue Token: Server check kari ne accessToken banave ane cookie ke JSON ma return kare.
    Client Side: Frontend developer e token ne localStorage ke Cookie ma save kare.
    Subsequent Requests: Have jyare pan user profile ke biju kai mange, tyare e token header ma moklavu pade.
    Verification: Taro server token verify kare, ane jo sachu hoy to data aape.],[
        jwt.io[aama jai ne token ne joi sakay se]
    ]
- install (bcrypt)[Sadi bhasha ma kahu to, bcrypt ek password safe rakhva mate ni machine che. Tu database ma jyare password save kare, tyare direct 12345 na nakhay, nahi to hacker badhu joi jay. bcrypt e password ne badli ne ek lambi string (hash) banavi de che.][npm i bcrypt]