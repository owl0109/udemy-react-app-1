import React,{Component} from 'react'
import {connect}from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import{ getEvent, deleteEvent, putEvent } from '../actions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core'


class EventsShow extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount(){
    const {id} = this.props.match.params
    if(id) this.props.getEvent(id)
  }

  renderField(field){
    const { input,label,type,meta: {touched, error} } = field

    return (
      <TextField
        fullWidth = {true}
        placeholder = {label}
        {...input} placeholder = {label} 
        required = {true}
      />
    )
  }

  async onDeleteClick(){
    const {id} = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push("/")
  }

  async onSubmit(values){
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render(){ 
    const {handleSubmit,pristine,submitting,invalid} = this.props
    console.log(submitting)
    return (
      <form onSubmit = {handleSubmit(this.onSubmit)}>
        <Box p = {2}><Field label="Title" name = "title" type = "text" component = {this.renderField}/></Box>
        <Box p = {2}><Field label="Body" name = "body" type = "text" component = {this.renderField}/></Box>
        <Box p = {2}>
          <Button variant="contained" size = "small" type = "submit" value = "Submit" disabled = {pristine || submitting} >
            Submit
          </Button>
          <Button variant="contained" size = "small" href = "/">
            Cansel
          </Button>
          <Button variant="contained" size = "small" href = "/" onClick = {this.onDeleteClick}>
            Delete
          </Button>
        </Box>
      </form>
    )
  }
}


const validate = values =>{
  const errors = {}

  if(! values.title) errors.title = "Enter a title. please"
  if(! values.body) errors.body = "Enter a body. please"

  return errors
}

const mapDispatchToProps = ({deleteEvent,getEvent,putEvent})

const mapStateToProps = (state,ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, state }
}

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({validate, form: 'eventShowForm'})(EventsShow)
  );

