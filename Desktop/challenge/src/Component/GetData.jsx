import React, { Component } from 'react'

import axios from 'axios'




export default class GetData extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            email: 'null',
            userName: '',
            location: '',
            img:'',
            repo:''
        }
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/white-knight666?client_id=160187a774beac71f974&client_secret=f9179b684955162c52ede920d1071d91e0efd86d&sort=created')
            .then((response) => {
                this.setState({
                    fullName: response.data.name,
                    email: response.data.email,
                    userName: response.data.login,
                    location: response.data.location,
                    img:response.data.avatar_url,
                    repo:response.data.repos_url,
                    id: response.data.id,
                })
                
            })
            .catch( err => {
                console.log(err)
              })

    }
    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <img src={this.state.img} alt="Mo"></img>
                    </div>
                    <table className="table table-hover first">
                        <tbody>
                        <tr className="table-warning">
                            <td>
                                Fullname:</td>
                               <td> {this.state.fullName}
                            </td>
                            </tr>
                            <tr className="table-primary">
                                <td>Username:</td>
                                <td>{this.state.userName}</td>
                            </tr>
                            <tr className="table-success">
                                <td>Location:</td>
                                <td>{this.state.location}</td>
                            </tr>
                            <tr className="table-info">
                                <td>Email:</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}