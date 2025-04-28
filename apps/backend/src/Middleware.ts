import { request } from "express";


export function AuthMiddleware() {
   const header = request.headers['authorization'];
   
}