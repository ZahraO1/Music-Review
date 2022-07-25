import { useState } from 'react' 
import UpdateComment from './UpdateComment'

function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'textAlign': 'center',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '25vw',
        'height': '40vh',
        'text-align': 'center',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'blue'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h2>{props.item.song_name} - {props.item.rating}</h2>
            </div>
        )
    }

    const detailView = () => {
        console.log(`props: ${props.item.id}`)
        return (
            <div style={detailStyle}>
                <h2>{props.item.song_name}</h2>
                <h3>{props.item.rating}</h3>
                <h4>{props.item.name}</h4>
                <h4>{props.item.comment}</h4>
                <h4>{props.item.date}</h4>
                <UpdateComment commentID={props.item.id}/>
            </div>
        )
    }

    return (
        <div onDoubleClick={() =>setView(!view)} style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem