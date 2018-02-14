import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('paquetes');
  this.route('nuevo-paquete');
  this.route('editar-paquete', {path: '/paquete/:pack_id'});
  this.route('ventas');
  this.route('vender');
  this.route('detalle-venta');
});

export default Router;
