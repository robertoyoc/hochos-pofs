import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.store.findAll('venta')
	},
	
	actions: {
		borrar(venta){
			var r = confirm("Deseas borrarla?");
			if (r == true) {
			    venta.destroyRecord()
			}

		}
	}
});
