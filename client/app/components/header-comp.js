import Component from '@ember/component';
import Ember from 'ember'

export default Component.extend({
    todo: Ember.inject.service() ,
    store: Ember.inject.service('store'),
  
          actions : {
            addTask() {
                let description =this.get('des');           
                // this.transitionToRoute("/");                     
                let newTask = this.get('store').createRecord('task',{description,isDone:false});
                newTask.save();  
                this.get('todo').addTask();
                this.set('editAddTask',false);                   

              },
              openNewTask()
             {
                this.set('editAddTask',true);                   
             }

            }

});
