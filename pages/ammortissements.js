import React from 'react'
import MainLayout from "../components/MainLayout";
import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1
	}
});

class Ammortissements extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			msg: "yes"
		};
	}

	render() {
		const { classes } = this.props;

		return(
			<MainLayout>
				<Grid container className={classes.root} justify="center" alignItems="center">
					<Grid item md={4}>
						<FormControl component="fieldset" className={classes.formControl}>
							<FormLabel component="legend">Type d'ammortissement</FormLabel>
							<RadioGroup
								aria-label="type"
								name="type"
								className={classes.group}
								value={this.state.value}
								onChange={this.handleChange}
							></RadioGroup>
							<FormControlLabel value="1" control={<Radio/>} label="1"></FormControlLabel>
							<FormControlLabel value="1" control={<Radio/>} label="1"></FormControlLabel>
						</FormControl>
					</Grid>
				</Grid>
			</MainLayout>
		);
	}
}

export default withStyles(styles)(Ammortissements);