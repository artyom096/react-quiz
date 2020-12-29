import React from 'react'
import { Component } from 'react/cjs/react.development'
import classes from './Drawer.module.css'
import Backdrop from './../../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

const links = [
        {to: '/', exact: 'true', label: 'Список'},
        {to: '/auth', exact: 'false', label: 'Авторизация'},
        {to: '/create-quiz', exact: 'false', label: 'Создать тест'},
]

class Drawer extends Component {
    
    renderLinks(){
        return links.map((link, index) => {
            return (
            <NavLink 
            onClick={this.props.onClick} 
            exact={link.exact} 
            to={link.to} 
            
            className={classes.Link}
            key={index} >{link.label}</NavLink>
            )
        })
    }


    render(){
        const cls = [classes.Drawer]

        if(!this.props.isOpen){
            cls.push(classes.close)
        }

        return (
            < >
            
            <nav className={cls.join(' ')}>
                <ul >
                    {this.renderLinks()}
                </ul>
            </nav>
            {this.props.isOpen ? <Backdrop onClick={this.props.onClick} /> : null}
            </>
        )
    }
}

export default Drawer