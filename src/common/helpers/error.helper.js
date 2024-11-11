import { responseError } from "./response.helper.js"

export const handleError = (err,req,res,next) => {
    console.log(`Loi o cuoi cung: `, err)
    const resData = responseError(err.message,err.code)
    res.status(resData.code).json(resData)
}

export class BadRequestError extends Error {
    //co che cua class giup chay ham
    constructor(message = "BadRequestError") {
        super(message);
        this.code = 400
    }
}