import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import assign from 'lodash/assign';
import {login} from '../../redux/Modules/Login';

const mapStateToProps = state => ({});

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: localStorage.getItem('loggedIn'),
            userInfo: {
                email: 'anonymous',
                password: '123'
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterPress = this.handleEnterPress.bind(this);
    }

    handleChange(name, event) {
        this.setState({
            userInfo: assign(
                {},
                this.state.userInfo,
                {
                    [name]: event.target.value
                }
            )
        })
    }

    handleSubmit() {
        if(this.state.userInfo.email && this.state.userInfo.password) {
            localStorage.setItem('loggedIn', true);
            this.props.history.push('/home');
        }
    }

    handleEnterPress() {
        //
    }

    render() {
        let userInfo = this.state.userInfo;

        if (this.state.isLogin && this.props.location.pathname === '/login') {
            return (
                <Redirect to='/home' />
            )
        }

        return (
            <div className='login-wrap'>
                <h2>登 录</h2>
                <div className='field-box'>
                  <label className='control-label'>用户名：</label>
                  <input type='text' name='email' value={userInfo.email} onChange={this.handleChange.bind(this, 'email')} placeholder='输入账号' />
                </div>
                <div className='field-box'>
                  <label className='control-label'>密  码：</label>
                  <input type='password' name='password' value={userInfo.password} onChange={this.handleChange.bind(this, 'password')} placeholder='输入密码' />
                </div>
                <div className='field-box'>
                  <label className='control-label'></label>
                  <button type='button' onClick={this.handleSubmit}>登 录</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Login);
