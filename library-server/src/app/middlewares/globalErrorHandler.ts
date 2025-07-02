import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Something went wrong";
  let errorResponse: any = {
    message,
    success: false,
    errors: null,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  };

  // ✅ Mongoose Validation Error (e.g., required, enum, minlength)
  if (error instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    errorResponse.message = "Validation Error";
    errorResponse.errors = Object.values(error.errors).map((err: any) => ({
      field: err.path,
      message: err.message,
    }));
  }

  // ✅ Mongoose CastError (e.g., invalid ObjectId)
  else if (error instanceof mongoose.Error.CastError) {
    statusCode = 400;
    errorResponse.message = "Invalid ID format";
    errorResponse.errors = [{ field: error.path, message: error.message }];
  }

  res.status(statusCode).json(errorResponse);
};
