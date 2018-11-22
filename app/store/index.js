import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import reducer from './reducer'
import chat from './chat'
const configureStore = () => {
    const middleware = [thunk]
    return createStore(chat, applyMiddleware(...middleware))
}

export { configureStore }
