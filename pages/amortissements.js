import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from "../components/MainLayout";
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Grid, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, TextField, TableRow, Table, TableHead, TableCell, TableBody, Button } from '@material-ui/core';

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

moment.locale('fr');

let id = 0;
function createData(dateDebut, dateFin, calcul, montant) {
  id += 1;
  return { id, dateDebut, dateFin, calcul, montant };
}


// const rows = [
// 	createData('23/07/2018', '31/12/2018', '10 000 x (158/360) x 20%', '877,78 €'),
// 	createData('01/01/2019', '31/12/2019', '10 000 x 20%', '2 000,00 €'),
// 	createData('01/01/2020', '31/12/2020', '10 000 x 20%', '2 000,00 €'),
// 	createData('01/01/2021', '31/12/2021', '10 000 x 20%', '2 000,00 €'),
// 	createData('01/01/2022', '31/12/2022', '10 000 x 20%', '2 000,00 €'),
// 	createData('01/01/2023', '22/07/2023', '10 000 x (202/360) x 20%', '2 000,00 €'),
// 	createData('Total', '', '', '10 000,00 €'),
	
// ];

class Amortissements extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			type: 'lineaire',
			dateDebut: moment().format('YYYY-MM-DD'),
			dateFin: moment().format('YYYY-MM-DD'),
			montant: '',
			rows: [],
			// duree: '',
		};
		this.handleDateDebut = this.handleDateDebut.bind(this);
		this.handleDateFin = this.handleDateFin.bind(this);
		this.handleMontant = this.handleMontant.bind(this);

	}

	handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			formControls: {
				[name]: value
			}
		});
		console.log(this.state.formControls);
		// console.log('date fin: '+ this.state.formControls.dateFin.value);
	};

	handleSubmit = event => {
		event.preventDefault();
		console.log(event);

		var dateDebut = moment(this.state.dateDebut);
		var dateFin = moment(this.state.dateFin);
		let montant = this.state.montant;
		let duree = dateFin.diff(dateDebut, 'years') + 1;
		let lastDay = moment().date(31).month(11).year(dateDebut.year());
		let calcul = montant * dateDebut.subtract() * ((100 / duree / 100);
		let rows = [];
		for(let i = 0; i < duree; i++){
			dateDebut = (i !== 0) ? lastDay.add(1, 'd') : dateDebut;
			lastDay = (i === duree - 1) ? dateFin : moment().date(31).month(11).year(dateDebut.year());
			rows.push(createData(dateDebut.format('DD/MM/YYYY'), lastDay.format('DD/MM/YYYY'), 'test', montant));
		}
		this.setState({ rows: rows });
		console.log(this.state.dateDebut);
		console.log(this.state.dateFin);

		console.log(this.state.rows);
		console.log(duree);

	};

	handleDateDebut(e) {
		let value = e.target.value;
		this.setState({ dateDebut : value });
	}

	handleDateFin(e) {
		let value = e.target.value;
		this.setState({ dateFin : value });
	}

	handleMontant(e) {
		let value = e.target.value;
		this.setState({ montant : value });
	}

	render() {
		const { classes } = this.props;
		// const rows = this.state.rows;

		return(
			<MainLayout>
				<FormControl component="fieldset" className={classes.formControl}>
					<FormLabel className={classes.formLabel}>Type d'amortissement</FormLabel>
					<RadioGroup
						aria-label="type"
						name="type"
						className={classes.group}
						value={this.state.type}
						onChange={this.handleChange}
					>
						<FormControlLabel value="lineaire" control={<Radio color="primary"/>} label="Linéaire"></FormControlLabel>
						<FormControlLabel value="variable" control={<Radio color="primary"/>} label="Variable"></FormControlLabel>
						<FormControlLabel value="degressif" control={<Radio color="primary"/>} label="Dégressif"></FormControlLabel>
					</RadioGroup>
				</FormControl>
				<form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
					<FormControl component="fieldset" className={classes.formControl}>

						<FormLabel className={classes.formLabel}>Calcul</FormLabel>
						<TextField
							id="dateDebut"
							label="Date de début d'amortissement"
							name="dateDebut"
							value={this.state.dateDebut}
							onChange={this.handleDateDebut}
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
							label="Date de fin d'amortissement"
							name="dateFin"
							value={this.state.dateFin}
							onChange={this.handleDateFin}
							type="date"
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
							name="montant"
							value={this.state.montant}
							onChange={this.handleMontant}
							type="number"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							margin="normal"
							variant="outlined"
						/>
						<Button type="submit" variant="outlined" color="primary">
							Générer le tableau d'amortissement
						</Button>
					</FormControl>
				</form>
				<FormControl component="fieldset" className={classes.formControl}>
					<FormLabel  className={classes.formLabel}>Tableau d'amortissement</FormLabel>
					<Table>
						<TableHead>
						<TableRow>
							<TableCell>Date de début</TableCell>
							<TableCell align="right">Date de fin</TableCell>
							<TableCell align="right">Calcul de l’amortissement</TableCell>
							<TableCell align="right">Montant de l’amortissement</TableCell>
						</TableRow>
						</TableHead>
						<TableBody>
						{this.state.rows.map(row => {
							return (
							<TableRow key={row.id}>
								<TableCell component="th" scope="row">
								{ row.dateDebut }
								</TableCell>

								<TableCell align="right">{ row.dateFin }</TableCell>
								<TableCell align="right">{ row.calcul }</TableCell>
								<TableCell align="right">{ row.montant }</TableCell>
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