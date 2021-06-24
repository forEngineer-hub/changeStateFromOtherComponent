import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {
  robotGallery: any[];
  onChangeFn:(event)=>void;
}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target ", e.target)
    console.log("e.currentTarget ", e.currentTarget)
    if((e.target as HTMLElement).nodeName === "SPAN"){
      console.log('called ', this.state);
      this.setState({ isOpen: !this.state.isOpen }, ()=>{ console.log('in callback',this.state)});
      console.log(this.state);
    }
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <input type="text" name="name" onChange={this.props.onChangeFn} />
        <button
          className={styles.button}
          onClick={this.handleClick}
        >
          <FiShoppingCart />
          <span>购物车 2 (件)</span> 
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
