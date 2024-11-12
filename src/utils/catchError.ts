import { Response } from "express";

export const catchError = (res: Response, error: String, code: number = 500) => {
    return res.status(code).json({
        status: false,
        error: { message: error },
    });
} // TODO cambiar para que tome otros codigos http 