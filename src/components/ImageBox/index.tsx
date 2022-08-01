import { Card } from "react-bootstrap"
import "./style.css"

type ImageBoxProps = {
    id: number
    imgUrl: string
    title: string
    content: string
}

export function ImageBox(props:
    ImageBoxProps) {
        return  (
            <Card className="imageBox_wrapper shadow-sm" style={{borderRadius: '30px'}}>
                <Card.Img 
                variant="top" 
                src={props.imgUrl}
                height="450px"
                style={{ objectFit: "cover", borderRadius: '30px' }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="imageBox-textBox">
                        <div className="imageBox-title">{props.title}</div>
                        <div className="imageBox-content">{props.content}</div>
                    </Card.Title>
                </Card.Body>
            </Card>
        )
}