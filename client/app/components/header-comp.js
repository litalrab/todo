import Component from '@ember/component';
import Ember from 'ember'

export default Component.extend({
    todo: Ember.inject.service() ,
    store: Ember.inject.service('store'),
  
          actions : {
            
            openNewTask()
           {
            this.get('todo').editAddTaskToggle(); 
            // this.$('#task-add-input').focus(); 

                          
           }

            }

});
