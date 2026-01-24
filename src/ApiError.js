 class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = "" 
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };

/*

tame jo upar valo ApiError class code lakhyo che, ene simple words ma samjiye. Aa class no main purpose e che ke jyare project ma koi error aave, tyare badhi mahiti (information) ek standard format ma male.
    1. class ApiError extends Error
    JavaScript ma built-in Error class hoy j che. Pan tame extends use kari ne e class na badha features potana ApiError ma lai lavya cho. Matlab ke aa taro potano, custom-made error box che.
    2. constructor(...)
        Jyare pan tame new ApiError() lakho, tyare aa constructor chalu thay che.
        statusCode: Tame decide karo cho ke error kya type ni che (e.g., 404 for Not Found, 500 for Server Error).
        message: Default "Something went wrong" che, pan tame potano custom message pan muki shako.
        errors: Jo ek sathe bau badhi errors hoy (jem ke validation errors), to e aa array ma muki shakay.
    3. super(message)
        Aa line khub jaroori che. super() lakhavathi tame Parent class (Error) na constructor ne call karo cho. Ena vagar tame this keyword use nahi kari shako.
    4. this.success = false
      Aa property tame specially add kari che jethi frontend developer ne khabar pade ke response fail thayo che. Hamesha error ma aa false j rehshe.
    5. Error.captureStackTrace(this, this.constructor)
         Aa ek advanced feature che.

Jo tame code ma koi error throw karo, to aa line tane exact File Name ane Line Number batavshe ke error kya thi aavi.

Aa debugging ma bau madad kare che.*/



//  do work **