import React, { Component } from 'react';

import './styles.css';
//import logo from '../../assets/logo.svg';
import api from '../../services/api'

export default class Main extends Component {
    state = {
        newBox: '',
    };
    handleSubmit = async e => {
        e.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox,
        });
        console.log(response.data);
    };

    handleInputChange = e => {
        this.setState({ newBox: e.target.value  });
    };

    render() {
        return (
            <div id="main-content">
                <form onSubmit={this.handleSubmit} action="">
                    <input placeholder="Criar um box" value={this.state.newBox}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}
