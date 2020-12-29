import React, {Component} from 'react'
import classes from './Layout.module.css'
import MenuToggle from './../../components/ActiveQuiz/Navigation/MenuToggle/MenuToggle'
import Drawer from './../../components/ActiveQuiz/Navigation/MenuToggle/Drawer/Drawer'

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render(){
        return(
            <div className={classes.Layout}>

                <Drawer 
                isOpen={this.state.menu}
                onClick={this.menuCloseHandler}
                />

                <MenuToggle 
                onToggle={this.toggleMenuHandler}
                isOpen={this.state.menu}
                />

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout