import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducer'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'


export default function configureState(initialState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    return createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(reduxImmutableStateInvariant())))
}