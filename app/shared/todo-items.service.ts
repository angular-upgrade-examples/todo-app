export interface TodoItem {
  description: string;
  completed: boolean;
}

export class TodoItems {
  protected items: TodoItem[] = [
    {description: 'Do this', completed: false},
    {description: 'Do that', completed: false},
  ];

  static $inject = ['$q'];
  constructor(protected $q: angular.IQService) {}

  fetch(): angular.IPromise<TodoItem[]> {
    return this.$q.resolve(this.items);
  }

  removeCompleted() {
    const completedItems = this.items.filter(item => item.completed);
    completedItems.forEach(item => {
      this.items.splice(this.items.indexOf(item), 1);
    });
  }
}
