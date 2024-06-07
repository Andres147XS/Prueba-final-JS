import { routes } from "./routes";

export function Router(){
  const path = window.location.pathname;

  const publicRoute = routes.public.find((routes) => routes.path === path);
  const privateRoute = routes.private.find((routes) => routes.path === path);

  if (publicRoute) {
    publicRoute.page();
    return;
  };

  if (privateRoute) {
    if(!localStorage.getItem('token')){
      navigateto('/login')
      return
    };
    privateRoute.page();
    return;
  };
  navigateto('/notFound');
};
export function navigateto(path){
  window.history.pushState({},"",window.location.origin + path);
  Router();
}