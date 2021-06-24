import React from "react";
import logo from "./assets/images/logo.svg";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any[];
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
          return response.json();
      })
      .then((data) => this.setState({ robotGallery: data }));
  }

  //https://www.codeproject.com/Tips/1215984/Update-State-of-a-Component-from-Another-in-React
  handleChange = (event : Event) =>{

    const keyword = (event.target as HTMLInputElement).value;

    const filteredRobots = this.state.robotGallery.filter(robot => robot.name.includes(keyword));
    
    this.setState({ robotGallery: filteredRobots });
    //过滤props
    //setState
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <ShoppingCart robotGallery= {this.state.robotGallery} onChangeFn= {this.handleChange}/>
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
