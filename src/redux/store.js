import { createStore } from "redux";
import rootReducer from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export default { store, persistor };

// const store = createStore(rootReducer);

// export default store;