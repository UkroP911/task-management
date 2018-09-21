import React from 'react';

export default (props) =>
    <div className="modal d-block">
        <form action="" onSubmit={event => props.onSubmitModal(event)}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Note</h5>
                    </div>
                    <div className="modal-body">
                        <div className="input-group">

                        <textarea className="form-control" aria-label="With textarea"
                                  onChange={event => props.handleModalInput(event)}
                        >
                        </textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                onClick={() => props.openPopup()}
                        >Close</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </form>
    </div>