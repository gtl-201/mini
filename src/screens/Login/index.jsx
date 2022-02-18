import React from 'react'
import Cookie from 'js-cookie';
import axios from 'axios';


class Login extends React.Component {


    componentDidMount() {

        const jwt = Cookie.get('token');
        if (jwt !== undefined) {
            window.location.href = '/'
        }
        console.log(jwt);

    }


    login = () => {

        axios({
            baseURL: 'https://gateway.bangchamcong.vn',
            method: 'post',
            url: '/api/authenticate',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
            },
            data: {
                "username": document.getElementById('account').value,
                "password": document.getElementById('password').value,
                "rememberMe": true
            }
        }).then((e) => { 
            Cookie.set('token', e.data.id_token) 
            window.location.href = '/'
        })
            .catch(e => console.error(e));
    }

    render() {
        return (
            <section className="vh-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">

                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                            <div className="w-100 d-flex justify-content-start align-items-center mb-4">
                                <h1 className='text-center w-100 text-white'>Hello</h1>
                            </div>
                            <div className="form-outline mb-4">
                            <label className="form-label text-white" for="account">Email</label>

                                <input type="email" id="account" className="text-white form-control form-control-lg bg-secondary" />
                            </div>
                            <div className="form-outline mb-4">
                            <label className="form-label text-white" for="password">Password</label>

                                <input type="password" id="password" className="text-white form-control form-control-lg bg-secondary" />
                            </div>

                            <div className="d-flex justify-content-start align-items-center mb-4">
                                <div className="form-check">
                                    <input
                                        className="form-check-input bg-secondary"
                                        type="checkbox"
                                        value=""
                                        id="form1Example3"
                                    />
                                    <label className="form-check-label" for="form1Example3"> Remember me </label>
                                </div>
                            </div>

                            <div className="row">
                                <button className="btn btn-primary btn-lg btn-block" onClick={this.login}>Sign in</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;
