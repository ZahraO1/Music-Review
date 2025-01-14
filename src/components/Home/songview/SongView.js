import React, { useState } from 'react'
import CreateReview from '../createreview/CreateReview'
import './songview.css'
import { Link } from 'react-router-dom'


function SongView(props){
    let [view, setView] = useState(false)

    const simpleView = () => {}

    const detailView = () => {
        return (
            <div className="detailview">
                <div className="songdetail">
                    <div>Artist: {props.item.artist.name}</div>
                    <div>Monthly Listeners: {props.item.listeners}</div>
                    <div>Playcount: {props.item.playcount}</div>
                </div>
                <CreateReview data={props.item.name}/>
                <Link to="/reviews">See all reviews</Link>
            </div>
        )
    }

    return(
        <div>
            <h3 onClick={() => setView(!view)}>{props.item.name}</h3>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default SongView