import { Link } from "react-router-dom"
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
    return (
        <div className="landingBox-wrapper">
            <h1 className="landingBox-h1">{props.header}</h1>
            <div className="landingBox-box shadow-sm" style={{background: props.backgroundColor}}>
                <div className="landingBox-modifier">{props.modifier}</div>
                <div className="landingBox-title">{props.title}</div>
                <div className="landingBox-content">{props.content}</div>
                <Link to={props.link}><button className="landingBox-button shadow-sm">{props.title} 보러가기</button></Link>
            </div>
        </div>
    )
}