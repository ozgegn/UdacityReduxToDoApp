//Library Code

function createStore(reducer) {
  // The store should have four parts
  // 1. The state
  // 2. Get the state.
  // 3. Listen to changes on the state.
  // 4. Update the state

  let state; //1
  let listeners = [];

  const getState = () => state; //2

  //3
  const subscribe = listener => {
    listener.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  //4
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  return { getState, subscribe, dispatch };
}

//App Code
function todos(state = [], action) {
  if (action.type === "ADD_TODO") {
    return state.concat([action.todo]);
  }
  return state;
}
