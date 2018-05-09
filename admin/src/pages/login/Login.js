import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import assign from 'lodash/assign';
import {login} from '../../redux/Modules/Login';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.less';

const FormItem = Form.Item;

const mapStateToProps = state => ({});

class NormalLoginForm extends React.Component {

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

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

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
        const { getFieldDecorator } = this.props.form;

        if (this.state.isLogin && this.props.location.pathname === '/login') {
            return (
                <Redirect to='/home' />
            )
        }

        return (
            <div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('email', {rules: [{ required: true, message: 'Please input your Email!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" className="login-form-input" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" className="login-form-input" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked', initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                        Or <a href="">register now!</a>
                    </FormItem>

                    <FormItem>
                        <div className='field-box'>
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
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const Login = Form.create()(NormalLoginForm);

export default connect(mapStateToProps)(Login);
