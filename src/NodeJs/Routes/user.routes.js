import {register,login} from "../Controller/users.controller.js";

//created a function to register a new user and Authenticate user and return a JWT token through login router
export function userRoutes(app){
    app.post("/register",register);
    app.post("/login",login);
}