import React, { Component } from 'react';
import { logout } from "../services/authService"

class Logout extends Component {
    componentDidMount() {
        logout()
    }
    render() {
        return null
    }
}

export default Logout;