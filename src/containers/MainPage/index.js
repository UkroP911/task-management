import React, {Component} from 'react';
import {connect} from 'react-redux';
import dateFns from "date-fns";

import rootAction from './../../actions';

import './../../assets/style/common.css'

import Task from './../../components/Task';
import Popup from './../../components/Popup';

const NoteTime = new Date;

class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            note: '',
            isOpen: false,
            noteId: null
        };
        this.checkCompletedTask = this.checkCompletedTask.bind(this)
        this.openPopup = this.openPopup.bind(this)
        this.onSubmitModal = this.onSubmitModal.bind(this)
        this.handleModalInput = this.handleModalInput.bind(this)

    }

    onSubmit(e){
        const { task } = this.state;

        if(task.length > 0){
            this.setState({
                task: '',
            });
            this.props.onAddTask(task,dateFns.format(NoteTime, 'HH:MM'));
        }
        e.preventDefault();
    }

    inputHandler(e){
        if (e.target.value.length > 0) {
            this.setState({
                task: e.target.value,
            })
        }
    }

    checkCompletedTask(id){
        return this.props.onCompletedTask(id,dateFns.format(NoteTime, 'HH:MM'));
    }

    openPopup(id){
        this.setState({
            isOpen: !this.state.isOpen,
            noteId: id
        })
    }

    onSubmitModal(e){
        const { note, noteId } = this.state;
        if(note.length > 0){
            this.setState({
                note: ''
            });
            this.props.onAddNote(note,noteId);
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
        e.preventDefault();
    }

    handleModalInput(e){
        if (e.target.value.length > 0) {
            this.setState({
                note: e.target.value,
            })
        }
    }

    render(){
        const {tasks} = this.props;
        const {isOpen, noteId} = this.state;
        return(
            <div className="main-container">
                <div className="form-wrap">
                    <form onClick={event => this.onSubmit(event)}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control"
                                   aria-label="Recipient's username" aria-describedby="button-addon2"
                                   value={this.state.task}
                                   onChange={event => this.inputHandler(event)}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit">Add Task</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="note-wrap">
                    {
                        tasks.map((item, id) => <Task
                            checkCompletedTask={this.checkCompletedTask}
                            openPopup={this.openPopup}
                            task={item.task}
                            note={item.note}
                            time={item.time}
                            id={item.id}
                            key={id}
                        />)
                    }
                </div>

                {isOpen &&
                    <Popup
                        onSubmitModal={this.onSubmitModal}
                        handleModalInput={this.handleModalInput}
                        openPopup={this.openPopup}
                        noteId={noteId}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (task) => dispatch(rootAction.AddTask(task)),
        onCompletedTask: (id) => dispatch(rootAction.CompletedTask(id)),
        onAddNote: (note, noteId) => dispatch(rootAction.AddNote(note, noteId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);