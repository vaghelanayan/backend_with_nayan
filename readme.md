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
