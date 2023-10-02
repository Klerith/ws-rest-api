import { Router } from 'express';
import { TicketRoutes } from './tickets/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    // router.use('/api/todos', /*TodoRoutes.routes */ );

    router.use('/api/ticket',  TicketRoutes.routes  );



    return router;
  }


}

