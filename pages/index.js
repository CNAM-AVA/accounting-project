import React from 'react'
import Dashboard from '../components/Dashboard'
import MainLayout from '../components/MainLayout'

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: "yes"
        };
    }

    render() {
        return(
            <MainLayout>
                <Dashboard/>
            </MainLayout>
        );
    }
}
