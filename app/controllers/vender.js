import Controller from '@ember/controller';
import {isBlank} from "@ember/utils"

export default Controller.extend({


	actions: {
		save(venta){
			if(!isBlank(venta.get('cantidad'))&&!isBlank(venta.get('paquete'))){
				venta.set('fecha', Date.now())
				venta.save()
				window.swal(
				  'Buen trabajo!',
				  'Venta guardada',
				  'success'
				)
				this.transitionToRoute('index')
			}
		}
	}
});
