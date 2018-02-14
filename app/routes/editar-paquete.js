import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		return this.store.findRecord('paquete', params.pack_id)
	},
	actions: {
		save(paquete){
			if(!Ember.isBlank(paquete.get('nombre'))&&!Ember.isBlank(paquete.get('precio'))){
				paquete.save()
				this.transitionTo('paquetes')
			}
			else
				alert('llena los datos')
			
		}
	}
});
