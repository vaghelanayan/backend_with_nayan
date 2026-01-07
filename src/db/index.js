/*
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB= async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) ;
        console.log(`\n MongoDB connected !! DB HOST :${connectionInstance.connection.host }`);
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR :", error);
       process.exit(1) ;
    }
}
export default connectDB; // aa line lakhvi jaruri se km ke jo tame aa use karo to const connectDB = async () => { ... }

// connnectionInstance :-Jyare tamaro code database sathe connect thai jay, tyare computer ek specific ID ke Memory Space fadvay che. Aa "live" connection ne connectionInstance kahevay che.
// Jyare tame Node.js ma aa command vapro cho, tyare tame computer ne kaho cho ke program ne attyare ne attyare j bandh kari de, pan thodi "asafalta" (failure) na sanket sathe.

    // Ahiya teno break-down che:

    // 1. process
    // Aa Node.js no ek global object che jo tamara chalu program ni badhi mahiti rakhe che.

    // 2. .exit()
    // Aa ek function che jenu kaam program ne turant bandh karvanu che. Jem tame computer nu button dabi ne direct "Shut down" kari do, e rite.

    // 3. (1) - The Exit Code
    // Aa sauthi mava ni vastu che. Computer ni bhasha ma alag alag "Exit Codes" hoy che:

        // 0 (Success): Program badhu barobar pati gayu ane bandh thayu.

        // 1 (Failure): Program ma kaik locho (error) thayo che ane e adhure thi bandh karvu padyu che.