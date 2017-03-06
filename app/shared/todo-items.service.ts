export interface TodoItem {
  description: string;
  completed: boolean;
}

export class TodoItems {
  protected items: TodoItem[] = [
    {description: 'Do this', completed: false},
    {description: 'Do that', completed: false},
  ];

  fetch(): Promise<TodoItem[]> {
    return Promise.resolve([...this.items]);
  }
}
