import React from 'react'
import MainLayout from "../components/MainLayout";

export default class PlanComptable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: "yes"
        };
    }

    render() {
        return(
            <MainLayout>
                <p>Ok</p>
            </MainLayout>
        );
    }
}