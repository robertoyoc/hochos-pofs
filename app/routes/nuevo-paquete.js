import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.store.createRecord('paquete')
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
