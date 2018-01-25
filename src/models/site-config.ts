export interface RouteConfig {
    path: string;
    name: string;
    component: string;
}

export interface Flag {
    key: string;
    value: boolean;
}

export interface PageConfig {
    name: string;
    components: Array<any>;
    flags: Flag[];
}

export interface SiteConfig {
    version: string;
    build: string;
    debug: boolean;
    routes: RouteConfig[];
    pages: PageConfig[];
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