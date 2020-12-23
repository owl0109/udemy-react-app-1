import React,{Component} from 'react'
import {connect}from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'


import{readEvents} from '../actions'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';



class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event=>(
      <TableRow key = {event.id}>
        <TableCell component="th" scope="row">{event.id}</TableCell>
        <TableCell>
          <Link to={'/events/'+event.id} >
            {event.title}
          </Link>
        </TableCell>
        <TableCell>{event.body}</TableCell>
      </TableRow>
    ))
  }

  render(){ 
    const style = {
      position: "fixed",
      right:12,
      bottom:10
    }
    return (
      <React.Fragment>
        <TableContainer component = {Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderEvents()}
            </TableBody>
          </Table>
        </TableContainer>
        <Fab style = {style} color="primary" aria-label="add" href = "/event/new"> 
          +  
        </Fab>
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({readEvents})

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex);

