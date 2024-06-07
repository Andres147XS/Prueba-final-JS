import { home } from "./scenes/public/homePage/home";
import { login } from "./scenes/public/login";
import { notFound } from "./scenes/public/notFound";
import { register } from "./scenes/public/register";

export const routes = {
  public:[
    {path: '/home', page:home},
    {path: '/login', page:login},
    {path: '/notFound', page:notFound},
    {path: '/register', page:register}
  ],
  private:[
    {}
  ]
}