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
    return this.$q.resolve([...this.items]);
  }
}
