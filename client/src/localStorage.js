export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }   catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    console.log('this is state in saveState: ', state)
    try {
        const serializedState = JSON.stringify(state);
        console.log('serializedState: ',serializedState)
        localStorage.setItem(serializedState);
        console.log(`localStorage.setItem(serializedState):  `, localStorage.setItem(serializedState))
    }   catch (err) {
        console.log('error in saveState function: ',err)
    }
}