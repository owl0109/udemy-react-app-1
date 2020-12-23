import React,{Component} from 'react'
import {connect}from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import{postEvent} from '../actions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core'


class EventsNew extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
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

  async onSubmit(values){
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render(){ 
    const {handleSubmit,pristine,submitting} = this.props
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
        </Box>
      </form>
    )
  }
}

const mapDispatchToProps = ({postEvent})
const validate = values =>{
  const errors = {}

  if(! values.title) errors.title = "Enter a title. please"
  if(! values.body) errors.body = "Enter a body. please"

  return errors
}

export default connect(null,mapDispatchToProps)(
  reduxForm({validate, form: 'eventNewForm'})(EventsNew)
  );

