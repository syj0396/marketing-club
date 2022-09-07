import './style.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { LandingBox } from '../LandingBox';
import landingData from '../../data/home_landingBox.json';

export function LandingBoxWrapper() {
    return (
        <>
        <div className="landingBoxWrapper-wrapper">
            <Grid className="landingBoxWrapper-entire" container spacing={2}>
                {landingData.map(landing => (
                    <Grid item xs={4} className="landingBoxWrapper-each">
                        <LandingBox {...landing} />
                    </Grid>
                ))}
            </Grid>
            
        </div>
        </>
    )
}