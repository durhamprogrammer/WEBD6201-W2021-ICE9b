"use strict";
var core;
(function (core) {
    class Router {
        constructor() {
            this.ActiveLink = "";
        }
        get ActiveLink() {
            return this.m_activeLink;
        }
        set ActiveLink(link) {
            this.m_activeLink = link;
        }
        get LinkData() {
            return this.m_linkData;
        }
        set LinkData(data) {
            this.m_linkData = data;
        }
        Add(route) {
            this.m_routingTable.push(route);
        }
        AddTable(routingTable) {
            this.m_routingTable = routingTable;
        }
        Find(route) {
            return this.m_routingTable.indexOf(route);
        }
        Remove(route) {
            if (this.Find(route) > -1) {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }
        ToString() {
            return this.m_routingTable.toString();
        }
    }
    core.Router = Router;
})(core || (core = {}));
let clientRouter = new core.Router();
clientRouter.AddTable(["/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/projects",
    "/register",
    "/login",
    "/edit"]);
let route = location.pathname;
if (clientRouter.Find(route) > -1) {
    clientRouter.ActiveLink = (route == "/") ? "home" : route.substring(1);
}
else {
    clientRouter.ActiveLink = "404";
}
//# sourceMappingURL=router.js.map