import './style.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { LectureIntro } from '../LectureIntro';
import lectureData from '../../data/home_lectureIntro.json';

export function LectureIntroWrapper() {
    return (
        <>
        <div className="lecIntroWrapper-wrapper">
            <h1 className="lecIntroWrapper-h1">강의 소개</h1>
            <Grid className="lecIntroWrapper-entire" container spacing={2}>
                {lectureData.map(lecture => (
                    <Grid item xs={3} className="lecIntroWrapper-each">
                        <Paper>
                        <LectureIntro {...lecture} />
                        </Paper>
                        
                    </Grid>
                ))}
            </Grid>
            
        </div>
        </>
    )
}