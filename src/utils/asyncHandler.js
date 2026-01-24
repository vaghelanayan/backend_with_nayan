// 1.
const asyncHandler = (requestHandler)=>{
   return (req,res,next)=>{
      Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}

/*
a code no main purpose che Clean Code ane Standard Error Handling. Jyaare tame Express ma async/await use karo cho, tyaare jo tame try-catch na lakho to server crash thai shake che. Aa code e problem ne solve kare che.

Niche mujab aa code badhi mahiti (information) provide kare che:

      1. Centralized Error Handling
      Aa code badhi async errors ne pakdi ne Express na Global Error Handler pase mokli de che. Tamare darek function ma alag thi error handle karvani jaroorat nathi padti.
      2. High Order Function (HOF)
      asyncHandler ek Higher Order Function che. E ek function (requestHandler) ne argument tarike leve che ane badle ma ek navu function (middleware) return kare che.
      3. Promise Wrapper
      Promise.resolve(): Aa line khub jaroori che. Te tame aapela requestHandler ne Promise ma wrap kare che.
      Jo tamaru function async hoy to te return karela promise ne resolve karshe.
      Jo kashu pan error avshe (Promise reject thashe), to .catch() valo bhag execute thashe ane next(err) dwara Express ne janavshe ke error avi che.
      4. Code Readability (Safaai)
      Aa use karvathi tamaro controller code bau j nano thai jashe.
*/





// 2. 
/*
const asyncHandler = ()=>{} 
const asyncHandler = (func)=>{()=>{}} 
const asyncHandler = (func)=>()=>{} 
const asyncHandler = (func)=>async()=>{} */

/*
const asyncHandler =(fn)=>async()=>{ // Higher-Order Function
  try {
    await fn(req,res,next)
  } catch (error) {
    res.status(error.code || 500).json({
        success: false,// Jyare pan API ma kai locho thay (error aave), tyare Frontend (React, Angular, ke Mobile App) ne khabar padvi joie ke request fail gai che. / Frontend ne signal aapyo ke "Kaam nathi thayu"
        message: error.message // Frontend ne batavyu ke "Shu locho che"
})
    })
  }
}

*/
    /*Node.js ma jyare tame database sathe kaam karo tyare async/await vapro cho. Pan jo database ma error aave, toh tamare darek vakhat try-catch lakhvu pade. Jo tame 100 routes lakho, toh 100 vaar try-catch lakhvu kantala janak che.
    Aa asyncHandler tamara badha try-catch no bhar potana mathe lai le che!
    Code nu Post-mortem:
                (fn) =>: Aa function ek biju function (fn) argument tarike leve che (jem ke tamaro route handler).
                async(req, res, next) =>: Aa ek navu async function return kare che je actually Express chlavshe.
                await fn(req, res, next): Ahiya tamaru main kaam thase. Jo badhu barabar chalse toh await thai ne response mali jashe.
                catch (error): Jo fn ni andar kai pan locho thayo (e.g. database down che), toh control direct ahiya aavshe.
                res.status(...).json(...): Tame manually error handle nathi karta, aa handler potana ritede error code (ke 500) ane message mokli de che. */
