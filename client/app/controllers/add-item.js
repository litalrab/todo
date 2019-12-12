import Controller from '@ember/controller';
// import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Controller.extend({
    todo: Ember.inject.service(),

	actions: {
		addTask: function(){
           let description =this.get('des');           
            // this.transitionToRoute("/");                     
            let newTask = this.get('store').createRecord('task',{description,isDone:false});
            newTask.save();  
            this.get('todo').addTask();
                }

    }
});
