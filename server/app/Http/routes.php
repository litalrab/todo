<?php
use Illuminate\Http\Request;

use App\Task;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::resource('tasks','TodoController');


// Route::get('tasks',function() {
//     // If the Content-Type and Accept headers are set to 'application/json',
//     // this will return a JSON structure. This will be cleaned up later.
//     return Task::all();
// });
// Route::get('tasks/{id}', ['middleware' => 'cors', function($id) {
//     return Task::find($id);
// }]);



// /**
//  * Add New Task
//  */
// Route::post('/tasks', ['middleware' => 'cors',function (Request $request) {
//     $task = Task::create($request->all());
//     return $task;
// }]);

// /**
//  * Delete Task
//  */
// Route::delete('/tasks/{id}', ['middleware' => 'cors', function ($id) {
//     $task =Task::findOrFail($id);
//     $task->delete();
//     return $task ;
// }]);

// /**
//  * edit Task
//  */
// Route::put('tasks/{id}', ['middleware' => 'cors', function(Request $request, $id) {
//     $task = Task::findOrFail($id);
//     $task->update($request->all());
//     return $task;
// }]);

// Route::patch('tasks/{id}',['middleware' => 'cors', function(Request $request, $id) {
//     $task = Task::findOrFail($id);
//     $task->update($request->all());
//     return $task;
// }]);
