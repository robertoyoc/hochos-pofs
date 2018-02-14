import Controller from '@ember/controller';
import {computed } from "@ember/object"


export default Controller.extend({
	total:computed('model.@each.total', function(){
		if(this.get('model')){
			let suma =0 
			this.get('model').forEach((venta)=>{
				suma = suma + venta.get('total')
			})
		return suma;
		}
		else return 0
		
	})
});
