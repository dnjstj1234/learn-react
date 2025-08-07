export default function todoReducer(draft, action) {
    switch(action.type) {
        case 'added': {
            const { nextId, todoText } = action;
            draft.push({ id: nextId, text: todoText, done: false })
            break;
            // return [
            //     ...todos,
            //     { id: nextId, text: todoText, done: false }
            // ];
        }
        case 'deleted': {
            const { deleteId } = action;
            // return todos.filter(todo => todo.id !== deleteId);
            return draft.filter(todo => todo.id !== deleteId);
        }
        case 'done': {
            const { id, done } = action;
            const target = draft.find((d) => d.id === id);
            target.done = done;
            break;
            // return todos.map(todo => {
            //     if(todo.id === id) {
            //         return { ...todo, done }
            //     }

            //     return todo;
            // })
        }
        case 'reverse': {
            // return todos.toReversed();
            return draft.toReversed();
        }
        default: {
            throw Error('알 수 없는 액션 타입: ', action.type)
        }
    }
}