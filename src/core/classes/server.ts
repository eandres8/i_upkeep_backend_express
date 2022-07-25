import { Application, Router } from 'express';

export class ServerExpress {
    public readonly app: Application;
    public readonly port: string;

    constructor(builder: typeof ServerExpress.Builder.prototype) {
        this.app = builder.app!;
        this.port = builder.port;
    } 

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`server listen on port: ${this.port}`)
        });
    }


    static Builder = class {
        private _port: string = '8000';
        private _app: Application | null = null;
        private _routes: Router | null = null;

        get port() {
            return this._port;
        }

        get routes() {
            return this._routes;
        }

        get app() {
            return this._app;
        }

        public setApp(app: Application) {
            this._app = app;

            return this;
        }

        public setPort(port: string) {
            this._port = port;

            return this;
        }

        public setRoutes(routes: Router) {
            this._routes = routes;

            return this;
        }

        public build(): ServerExpress {
            
            if (!this._app) {
                throw new Error('No app express provided');
            }

            !!this._routes && this._app.use(this._routes);

            return new ServerExpress(this);
        }

    }

}