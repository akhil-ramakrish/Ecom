import React from 'react'

export default function Heading(props) {
    return (
        <div className="row">
            <div className="col text-center mb-4">
              <h1 className="display-3">{props.title}</h1>
            </div>
        </div>
    )
}
