import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return(
            <Grid container className={classes.root} justify="center" alignItems="center">
                <Grid item md={4}><p>Bienvenue sur le site de la comptabilité, comptable</p></Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Dashboard);