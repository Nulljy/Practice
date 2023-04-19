import React, {Component} from 'react';
import style from './Navbar.module.css';

class Navbar extends Component {

    render() {
        const nbList = ['추가하기', '삭제하기', '편집하기']
        return (
            <div className={style.nbContainer}>
                <div className={style.nbList}>
                    {nbList.map((item, i) => {
                        return <div key={item.toString()} className={style.nbItem}>{item}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default Navbar;