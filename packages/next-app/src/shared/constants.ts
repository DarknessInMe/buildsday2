const ROUTE_HOME = '/';
const ROUTE_MY_BUILDS = '/my-builds';
const ROUTE_CREATE = '/create';

function getBuildRoute(id: string) {
   return `/build/${id}`;
};

export const ROUTER = {
   HOME: ROUTE_HOME,
   MY_BUILDS: ROUTE_MY_BUILDS,
   CREATE: ROUTE_CREATE,
   BUILD: getBuildRoute,
}