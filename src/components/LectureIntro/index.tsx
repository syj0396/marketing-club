import './style.css';
import lectureData from '../../data/home_lectureIntro.json';

type LectureIntroPRops = {
    id: number
    title : string
    content: string
    imgUrl: string
}

export function LectureIntro(props: LectureIntroPRops) {
    return (
        <>
        <div className="lecIntro-wrapper">
            <img className="lecIntro-img" src={props.imgUrl}>
            </img>
            <h1 className="lecIntro-title">{props.title}</h1>
            <p className="lecIntro-content">{props.content}</p>
        </div>
        </>
    )
}