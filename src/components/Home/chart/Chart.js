import React from 'react'
import SongView from '../songview/SongView'
import './chart.css'

function Chart(props){

    const display = props.data.map((item, index) => {
        return(
            <SongView item={item} key={index} />
        )
    })

    return(
        <div className="chart">
            <h1>USA's Top 100 Charts</h1>
            {display}
        </div>
    )
}

export default Chart