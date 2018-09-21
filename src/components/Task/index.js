import React from 'react';

export default (props) =>
    <div className="card">
        <div className="card-header">
            <div className="card-header__completed">
                <div className="input-group">
                    <div className="input-group">
                        <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"
                                   onChange={() => props.checkCompletedTask(props.id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-header__button">
                <button type="button" className="btn btn-primary"
                        onClick={() => props.openPopup(props.id)}
                >Add Notes</button>
            </div>
        </div>

        <div className="card-body">
            <h5 className="card-title">{props.task}</h5>
            <p className="card-text">{props.note}</p>
        </div>

    </div>