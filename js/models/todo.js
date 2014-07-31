Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: '1',
    title: 'Learn Ember.js',
    isCompleted: true
  },
  {
    id: '2',
    title: 'Build Ember App',
    isCompleted: false
  },
  {
    id: '3',
    title: 'Learn QUnit',
    isCompleted: false
  },
  {
    id: '4',
    title: 'Test Ember using QUnit',
    isCompleted: false
  }
];
