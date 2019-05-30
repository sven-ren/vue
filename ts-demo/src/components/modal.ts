const STORAGE_KEY = 'VUE-TYPESCRIPT-TODOS';
export interface NormalItem {
  imgIndex: number;
  hash: number;
  left: number;
}
export interface BulletItem {
  hash: number;
  top: number;
  left: number;
}

export default {
  add(item: string, list: string[]): string[] {
    return [...list, item];
  },
//   remove(todoItem: TodoItem): Promise<TodoItem[]> {
//     return this.fetch().then(allTodos => {
//       let index = -1;
//       const exist = allTodos.some((item, idx) => {
//         if (item.title === todoItem.title) {
//           index = idx;
//           return true;
//         } else {
//           return false;
//         }
//       });
//       if (!exist || index < 0) {
//         return Promise.reject(new Error(`${todoItem}不存在`));
//       }
//       allTodos.splice(index, 1);
//       this.save(allTodos);
//       return Promise.resolve(allTodos);
//     });
//   },
//   fetch(completed?: boolean): Promise<TodoItem[]> {
//     return new Promise((resolve, reject) => {
//       const allTodosString = window.localStorage.getItem(STORAGE_KEY);
//       if (!allTodosString) {
//         return resolve([]);
//       }
//       try {
//         const allTodos: TodoItem[] = JSON.parse(allTodosString);
//         if (typeof completed === 'undefined') {
//           return resolve(allTodos);
//         } else {
//           return resolve(allTodos.filter(item => item.completed === completed));
//         }
//       } catch (e) {
//         return resolve([]);
//       }
//     });
//   },
//   setComplete(todoItem: TodoItem, completed: boolean): Promise<TodoItem[]> {
//     return this.fetch().then(list => {
//       const opertatingItem = list.find(item => item.title === todoItem.title);
//       if (opertatingItem) {
//         opertatingItem.completed = completed;
//         this.save(list);
//         return Promise.resolve(list);
//       }
//       return Promise.reject(`${todoItem.title}不存在`);
//     });
//   },
//   save(todos: TodoItem[]) {
//     window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
//   }
};
