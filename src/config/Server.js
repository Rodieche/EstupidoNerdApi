import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

export class Server{

    app = express();

    constructor(){
        this.configuration();
        this.middlewares();
        this.routes();
        this.start();
    }

    configuration(){
        this.app.set('port', process.env.PORT || 3000);
    }

    middlewares(){
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(morgan('dev'));
    }

    routes(){

    }

    start(){
        const port = this.app.get('port');
        this.app.listen(port);
        console.log('Server running on port', port);
    }

}