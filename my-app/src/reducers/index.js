//アプリケーション内にあるReducerを統括する役割
import {combineReducers} from 'redux'
import { reducer as form} from 'redux-form'
import events from './events'

export default combineReducers({events,form})

//複数状態を管理したい場合はカンマ区切りで実装する
//export default combineReducers({count,count1,count2})
