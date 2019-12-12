import Component from '@ember/component';
import Ember from 'ember'
// import { inject as service } from '@ember/service';

export default Component.extend({
  todo: Ember.inject.service() ,
  store: Ember.inject.service('store'),

        actions : {
            changeToDone() {
                this.task.set('isDone', true)
                this.task.save();
                this.get('todo').add();
            },
            deleteTask(id) {
              // console.log(this.task._internalModel._data)
              this.get('todo').removeTask(this.task._internalModel._data.isDone);
              
              console.log(this.task); 
              this.task.deleteRecord();
              console.log(this.task); 

                this.task.save();

              },
              editDescription() {
                this.set('editDescription',true);
 
              },
              editTask()
              {
                console.log(this.task._internalModel._data)
                let description =this.get('des');           
                this.task.set('description',description);
                this.get('todo').editTask(this.task._internalModel._data.isDone);
    
                this.task.set('isDone', false)
    
                this.task.save();
                this.set('editDescription',false);
    
              }
          }
    });
    