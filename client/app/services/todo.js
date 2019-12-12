import Service from '@ember/service';
import Ember from 'ember'
// import { inject as service } from '@ember/service';

export default Service.extend({
  store: Ember.inject.service('store'),
  
    done :0,
    total :0,
    todo   :0,
  
        init() {
          this._super(...arguments);
          var completedCounter = 0;
          this.get('store').findAll('task')
          .then(results => 
            {results.content.forEach((mission) => {
              console.log(mission) 
              if ( mission._data.isDone ) {
                completedCounter++;
              }
            }
            );
            console.log(results.content.length);

            this.set('done', completedCounter);
            this.set('total', results.content.length);
            this.set('todo', results.content.length-completedCounter);
          console.log(this.todo);
          });
       
        },
        editTask(isDone) {
              if(isDone)
              {
                this.set('done', this.done-1);
                this.set('todo', this.todo+1);

              }
            
        },
      addTask() {
        this.set('total', this.total+1);
        this.set('todo', this.todo+1);
      },
      add() {
        this.set('done', this.done+1);
        this.set('todo', this.todo-1);
  
          },
  
          removeTask(isDone) {
        if(isDone)
        {
          this.set('done', this.done-1);
        }
      else
      {
        this.set('todo', this.todo-1);
  
      }
        // this.items.removeObject(item);
        this.set('total', this.total-1);
     
      }
    
      // empty() {
      //   this.items.clear();
      // }
  });
