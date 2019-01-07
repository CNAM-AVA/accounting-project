import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from "../components/MainLayout";
import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, TextField, TableRow, Table, TableHead, TableCell, TableBody } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
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
		margin: theme.spacing.unit * 2,
	},
	formLabel: {
		marginBottom: theme.spacing.unit * 3,
	}
});

let id = 0;
function createData(dateDebut, dateFin, calcul, montant) {
  id += 1;
  return { id, dateDebut, dateFin, calcul, montant };
}

const rows = [
	createData('23/07/2018', '31/12/2018', '10 000 x (158/360) x 20%', '877,78 €'),
	createData('01/01/2019', '31/12/2019', '10 000 x 20%', '2 000,00 €'),
	createData('01/01/2020', '31/12/2020', '10 000 x 20%', '2 000,00 €'),
	createData('01/01/2021', '31/12/2021', '10 000 x 20%', '2 000,00 €'),
	createData('01/01/2022', '31/12/2022', '10 000 x 20%', '2 000,00 €'),
	createData('01/01/2023', '22/07/2023', '10 000 x (202/360) x 20%', '2 000,00 €'),
	createData('Total', '', '', '10 000,00 €'),
	
];

class Amortissements extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			msg: "yes",
			value: "lineaire",
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
					<FormLabel className={classes.formLabel}>Type d'amortissement</FormLabel>
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

						<FormLabel className={classes.formLabel}>Calcul</FormLabel>
						<TextField
							id="dateDebut"
							label="Date de début d'amortissement"
							value={this.state.dateDebut}
							onChange={this.handleChange}
							type="date"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							id="outlined-number"
							label="Durée de vie du bien"
							value={this.state.dureeVie}
							onChange={this.handleChange}
							type="number"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							id="outlined-montant"
							label="Montant du bien"
							value={this.state.montant}
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
					<FormLabel  className={classes.formLabel}>Tableau d'amortissement</FormLabel>
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
								{row.dateDebut}
								</TableCell>
								<TableCell align="right">{row.dateFin}</TableCell>
								<TableCell align="right">{row.calcul}</TableCell>
								<TableCell align="right">{row.montant}</TableCell>
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

Amortissements.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Amortissements);