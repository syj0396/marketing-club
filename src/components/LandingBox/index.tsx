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
}

export function LandingBox({ id, header, modifier, title, content, column, backgroundColor }:
    LandingBoxProps) {
    return (
        <div className="landingBox-wrapper">
            <h1 className="landingBox-h1">{header}</h1>
            <div className="landingBox-box shadow-sm" style={{background: backgroundColor}}>
                <div className="landingBox-modifier">{modifier}</div>
                <div className="landingBox-title">{title}</div>
                <div className="landingBox-content">{content}</div>
                <button className="landingBox-button shadow-sm">{title} 보러가기</button>
            </div>
        </div>
    )
}