// import { VscAccount } from "react-icons/vsc";
// import { FaTrash, FaChrome, FaPlus } from "react-icons/fa";
// import { Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "./styles/Button.styled";

export const Icons = () => {
  return (
    <>
      {/* <VscAccount color="red" size="50px" title="My Account" />
      <FaTrash />
      <FaChrome color="tomato" />
      <br />
      <button>
        <FaPlus /> Add
      </button> */}

      {/* <Button
        variant="success"
        style={{
          margin: 10,
          color: "red",
        }}
      >
        Bootstrap Button
      </Button>
      <button className="btn btn-success">Normal Button</button>

      <Alert variant="secondary">Warning</Alert> */}

      <Button variant="white" bgcolor="blue">
        Click
      </Button>
      <Button variant="red" bgcolor="white">
        Button 2
      </Button>
    </>
  );
};
