//Action = Javascriptのオブジェクトのこと
//typeキーとそれに対応する値を持つ
//typeキーの値はユニークである必要がある
//actionを返す関数=>ActionCreater

//component側で使用するのでexport
import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1/'
const QUERYSTRING = '?token=token123'
//https://udemy-utils.herokuapp.com/api/v1/events?token=token123

export const readEvents = () => async dispatch =>{
   // const response = axios.get('${ROOT_URL}/events${QUERYSTRING}')
   const response = await axios.get(ROOT_URL+"events"+QUERYSTRING)   
   //reducersに渡す
   dispatch({type: READ_EVENTS,response})

}

export const postEvent = values => async dispatch =>{
   const response = await axios.post(ROOT_URL+"events"+QUERYSTRING,values)   
   dispatch({type: CREATE_EVENT,response})
   
}

export const deleteEvent = id => async dispatch =>{
   await axios.delete(ROOT_URL+"events/"+id+QUERYSTRING)   
   dispatch({type: DELETE_EVENT,id})
   
}

