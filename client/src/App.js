import react, {Component} from 'react';
import style from './App.module.css';
import Customer from './components/Customer';
import Navbar from './components/Navbar'
import TableHead from './components/TableHead'

class App extends Component{
  constructor(prop) {
    super(prop);
    this.state = {
      customers:"",
      open: false,
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
  }
  
  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  }

  clickOpenModal = () => {
    this.setState({open: true});
  }
  closeModal = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div className={style.app}>
        <div className={style.Navbox}>
          <Navbar openModal={this.clickOpenModal}/>
        </div>
        <div className={style.blank}></div>
        <div className={style.Customerbox}>
          <table className={style.table}>
            <TableHead/>
            {this.state.customers ? <Customer customers={this.state.customers}/> : ""}
          </table>
        </div>
        <div className={style.blank2}></div>
        <div className={style.footer}></div>
      </div>
    );
  }
}

export default App;
