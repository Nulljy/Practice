import React, {Component} from 'react';
import style from './Modal.module.css';
import axios from 'axios';


class Modal extends Component {

    constructor(props) {
        super(props);
        const {isEdit, item} = this.props;
        this.state = {
            editing: isEdit,
            file: null,
            fileName:'',
            userName: isEdit ? item.name : '',
            birthday: isEdit ? item.birthday : '',
            gender: isEdit ? item.gender : '',
            job: isEdit ? item.job : '',
        }
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        this.actCustomer()
            .then(res => {
                console.log(res.data);
            });
        this.setState({
            file: null,
            fileName:'',
            userName: '',
            birthday: '',
            gender: '',
            job: '',
        });
        window.location.reload();
    }

    actCustomer = () => {
        let formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('userName', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        if(this.state.editing) {
            formData.append('id', this.props.item.id);
        }
        const url = this.state.editing ? "/api/editCustomer" : "/api/customers";
        const config = {
            headers: {"Content-Type": "multipart/form-data"},
        }
        return this.state.editing ? axios.patch(url, formData, config) : axios.post(url, formData, config);
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    render() {
        return (
            <div className={style.container}>
                <form className={style.modalContent} onSubmit={this.handleSubmit}>
                    <label>
                        {this.state.editing ? '회원 수정하기' : '회원 추가하기'}
                    </label>
                    <input type='file'
                        file={this.state.file}
                        accept='image/jpg, image/png, image/jpeg, image/gif'
                        name="file"
                        value={this.state.fileName}
                        onChange={this.handleFileChange}
                    ></input>
                    <input type='text' placeholder='이름' value={this.state.userName} name='userName' onChange={this.handleChange}>
                    </input>
                    <input type='text' placeholder='생일' value={this.state.birthday} name='birthday' onChange={this.handleChange}>
                    </input>
                    <input type='text' placeholder='성별' value={this.state.gender} name='gender' onChange={this.handleChange}>
                    </input>
                    <input type='text' placeholder='직업' value={this.state.job} name='job' onChange={this.handleChange}>
                    </input>
                    <button className={style.add} type='submit'>
                        {this.state.editing ? '편집하기' : '추가하기'}
                    </button>
                    {this.state.editing ? 
                        <button className={style.close} onClick={this.props.closeEdit}>
                        편집취소
                    </button> 
                    : 
                    <button className={style.close} onClick={this.props.closeModal}>
                        닫기
                    </button>}
                </form>
            </div>
        )
    }
}

export default Modal;