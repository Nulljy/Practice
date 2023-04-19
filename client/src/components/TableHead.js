import React, {Component} from 'react';
import style from './TableHead.module.css';

class TableHead extends Component {

    render() {
        const list = ['아이디', '프로필', '이름', '생년월일', '성별', '직업', '편집하기', '삭제하기'];
        return (
            <thead className={style.container}>
                <tr>
                    {list.map(item => {
                        return <th key={item.toString()} scope='col'>{item}</th>
                    })}
                </tr>
            </thead>
        )
    }
}

export default TableHead;