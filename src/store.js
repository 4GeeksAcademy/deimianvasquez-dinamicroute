export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    urlBaseRickAndMorty: "https://rickandmortyapi.com/api",
    rickCharacters: []
  }
}

/*
  action = {
    type:"ADD_CHARACTERS" --> la acción que se debe ejecutar,
    payload:data --> los 20 personajes de rick and morty
  }
*/

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case "ADD_CHARACTERS":
      return {
        ...store,
        rickCharacters: action.payload
      }
    default:
      throw Error('Unknown action.');
  }
}
