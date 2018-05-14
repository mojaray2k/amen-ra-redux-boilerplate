{
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false
  }
}
{
  type: 'REMOVE_TODO',
    id: 0
}
{
  type: 'TOGGLE_TODO',
    id: 0
}

{
  type: 'ADD_GOAL',
  gaol: {
    id: 0,
    name: 'Run A Marathon'
  }
}

{
  type: 'REMOVE_GOAL',
    id: 0
}

function createStore () {
  // The store should have four parts
  // 1. The state
  // 2. Get the state. (getState)
  // 3. Listen to changes on the state. (subscribe)
  // 4. Update the state (dispatch)

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  return {
    getState,
    subscribe
  }
}
