import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    todo: service(),

	actions: {
        changeToDone: function(num) {
            // let des =this.get('des');
            // alert(num) ;
            // this.task.set('done', !this.task.get('done'))
            // this.task.save();
            this.todo.change( num);
 
            // this.todos.change({ description: num, isDone:false });
 
       },
       addTask() {
        let description =this.get('des');           
        // this.transitionToRoute("/");                     
        let newTask = this.get('store').createRecord('task',{description,isDone:false});
        newTask.save();  
        this.get('todo').addTask();
        this.set('editAddTask',false);                   

      }
    }
});
