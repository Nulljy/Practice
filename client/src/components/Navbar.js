import React, {Component} from 'react';
import style from './Navbar.module.css';

class Navbar extends Component {

    render() {
        const nbList = ['추가하기', '삭제하기', '편집하기']
        return (
            <div className={style.nbContainer}>
                <div className={style.nbList}>
                    <div onClick={this.props.openModal} className={style.nbItem}>'추가하기'</div>
                    <div className={style.nbItem}>'삭제하기'</div>
                    <div className={style.nbItem}>'편집하기'</div>
                </div>
            </div>
        )
    }
}

export default Navbar;