import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from "../components/MainLayout";
import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, TextField, TableRow, Table, TableHead, TableCell, TableBody } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1
	},
	formControl: {
		margin: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit,
	},
	group: {
		margin: `${theme.spacing.unit}px 0`,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: `${theme.spacing.unit}px 0`,
		marginTop: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2,
	},
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24),
	createData('Ice cream sandwich', 237, 9.0, 37),
	createData('Eclair', 262, 16.0, 24),
	createData('Cupcake', 305, 3.7, 67),
	createData('Gingerbread', 356, 16.0, 49),
];

class Ammortissements extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			msg: "yes",
			value: "lineaire",
			lifetime: '',
		};
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	

	render() {
		const { classes } = this.props;

		return(
			<MainLayout>
				<FormControl component="fieldset" className={classes.formControl}>
					<FormLabel>Type d'ammortissement</FormLabel>
					<RadioGroup
						aria-label="type"
						name="type"
						className={classes.group}
						value={this.state.value}
						onChange={this.handleChange}
					>
						<FormControlLabel value="lineaire" control={<Radio />} label="Linéaire"></FormControlLabel>
						<FormControlLabel value="variable" control={<Radio />} label="Variable"></FormControlLabel>
						<FormControlLabel value="degressif" control={<Radio />} label="Dégressif"></FormControlLabel>
					</RadioGroup>
				</FormControl>
				<form className={classes.container} noValidate autoComplete="off">
					<FormControl component="fieldset" className={classes.formControl}>

						<FormLabel>Calcul</FormLabel>
						<TextField
							id="outlined-number"
							label="Durée de vie du bien"
							value={this.state.lifetime}
							onChange={this.handleChange}
							type="number"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							margin="normal"
							variant="outlined"
						/>
					</FormControl>
				</form>
				<FormControl component="fieldset" className={classes.formControl}>
					<FormLabel component="legend">Tableau d'ammortissement</FormLabel>
					<Table className={classes.table}>
						<TableHead>
						<TableRow>
							<TableCell>Date de début</TableCell>
							<TableCell align="right">Date de fin</TableCell>
							<TableCell align="right">Calcul de l’amortissement</TableCell>
							<TableCell align="right">Montant de l’amortissement</TableCell>
						</TableRow>
						</TableHead>
						<TableBody>
						{rows.map(row => {
							return (
							<TableRow key={row.id}>
								<TableCell component="th" scope="row">
								{row.name}
								</TableCell>
								<TableCell align="right">{row.calories}</TableCell>
								<TableCell align="right">{row.fat}</TableCell>
								<TableCell align="right">{row.carbs}</TableCell>
							</TableRow>
							);
						})}
						</TableBody>
					</Table>
				</FormControl>
			</MainLayout>
		);
	}
}

Ammortissements.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ammortissements);