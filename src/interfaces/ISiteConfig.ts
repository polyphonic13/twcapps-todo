export interface IRouteConfig {
    path: string;
    name: string;
    component: string;
}

export interface IFlag {
    key: string;
    value: boolean;
}

export interface IPageConfig {
    name: string;
    components: Array<any>;
    flags: IFlag[];
}

export interface ISiteConfig {
    version: string;
    build: string;
    debug: boolean;
    routes: IRouteConfig[];
    pages: IPageConfig[];
    flags: IFlag[];
}


/*
{
    "version": "1.0.0",
    "build": "1",
    "debug": true,
    "routes": [
        {
            "path": "/",
            "name": "Delivery",
            "component": "Home"
        },
        {
            "path": "/todos/",
            "name": "Reports",
            "component": "Todos"
        },
        {
            "path": "/sites/",
            "name": "Inventory",
            "component": "Sites"
        },
        {
            "path": "/admin/",
            "name": "Admin",
            "component": "Admin"
        }
    ]
}

*/