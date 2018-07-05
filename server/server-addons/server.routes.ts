import {ServerConstants} from './server.constants';
import * as itemController from '../features/item/item.controller';

/**
 * Used to set up extra routes
 * and controllers
 * @export
 * @const
 */

const ServerRoutes = {
  configureRoutes: app => {
    // Set our api routes
    app.use(ServerConstants.API_PREFIX, itemController);
  }
};

export default ServerRoutes;
