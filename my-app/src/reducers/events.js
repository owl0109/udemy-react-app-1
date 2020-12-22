import {CREATE_EVENT, READ_EVENTS,DELETE_EVENT, READ_EVENT,UPDATE_EVENT} from '../actions'
import _ from 'lodash'

export default (events = {},action)=>{
    switch (action.type){
        case READ_EVENT:
        case UPDATE_EVENT:
        case CREATE_EVENT:
            console.log("通っている")
            const data = action.response.data
            return {...events, [data.id]: data}
        case READ_EVENTS:
            return _.mapKeys(action.response.data,'id')
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        
        default:
            return events
    }
}
