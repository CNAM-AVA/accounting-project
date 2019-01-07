import React from 'react'
import MainLayout from "../components/MainLayout";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import fetch from 'isomorphic-unfetch'
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 20
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        position: 'fixed'
    },
    table: {
        marginTop: 50,
        marginBottom: 50
    }
});

class PlanComptable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchData: [],
            search: ''
        }
    }

    componentDidMount = async () => {
        const res = await fetch('./static/data.json');
        const json = await res.json();
        this.setState({data: json, searchData: json})
    };

     buildTable(props) {
        const { classes } = this.props;

        return(
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Numéro</TableCell>
                        <TableCell align="right">Compte</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.state.data.map(d => {
                            return(
                                <TableRow key={d.id}>
                                    <TableCell>{d.id}</TableCell>
                                    <TableCell align="right">{d.desc}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        )
    }

    search(event) {

         if (event.target.value.length < this.state.search.length) {
             this.setState({data: this.state.searchData, search: ""});
             return
         }

         if (event.target.value.trim().length === 0) {
             this.setState({data: this.state.searchData, search: ""});
             return
         }

         let res = this.state.data.filter(data => data.id.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(event.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) || data.desc.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(event.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
         this.setState({search: event.target.value, data: res});

    }

    render() {

        const { classes } = this.props;

        return(
            <MainLayout>
                <Grid container className={classes.root}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <h2>Classes Comptables</h2>
                                <TextField
                                    id="search"
                                    label="Rechercher"
                                    className={classes.textField}
                                    value={this.state.search}
                                    onChange={(e) => this.search(e)}
                                    margin={"normal"}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems={'center'} direction={'row'} justify={'center'}>
                            <Grid item xs={6}>
                                {this.buildTable(this.props)}
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </MainLayout>
        );
    }
}

export default withStyles(styles)(PlanComptable);