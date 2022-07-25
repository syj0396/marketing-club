import { Card } from "react-bootstrap"
import "./style.css"

type ImageBoxProps = {
    id: number
    imgUrl: string
    title: string
    content: string
}

export function ImageBox({ id, imgUrl, title, content }:
    ImageBoxProps) {
        return  (
            <Card className="imageBox_wrapper">
                <Card.Img 
                variant="top" 
                src={imgUrl}
                height="600px"
                style={{ objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>
                        <div>{title}</div>
                    </Card.Title>
                </Card.Body>
            </Card>
        )
}