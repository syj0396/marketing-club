import { useState } from 'react'
import { Link } from "react-router-dom"
import { LandingModal } from '../LandingModal'
import './style.css';

type LandingBoxProps = {
    id: number
    header : string
    modifier : string
    title : string
    content: string
    column : string
    backgroundColor: string
    link: string
}

export function LandingBox(props:
    LandingBoxProps) {
    const [classOpen, setClassOpen] = useState(false);

    const openClass = () => {
        setClassOpen(true);
    }
    const closeClass = () => {
        setClassOpen(false);
    }
    
    return (
        <div className="landingBox-wrapper">
            {/* <h1 className="landingBox-h1">{props.header}</h1> */}
            <div className="landingBox-box shadow-sm" style={{background: props.backgroundColor}}>
                <div className="landingBox-modifier">{props.modifier}</div>
                <div className="landingBox-title">{props.title}</div>
                <div className="landingBox-content">{props.content}</div>
                {/* <Link to={props.link}><button className="landingBox-button shadow-sm">{props.title} 보러가기</button></Link> */}
                <button onClick={openClass} className="landingBox-button shadow-sm">{props.title} 보러가기</button>
                <LandingModal open={classOpen} close={closeClass} header={props.title} />
            </div>
        </div>
    )
}