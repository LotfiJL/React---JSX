import React from "react";
import "./App.css";
import Na from "./component/Name";
import Prix from "./component/price";
import Desc from "./component/description";
import Link from "./component/url";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nom from "./component/last";

function App() {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Link variant="top" />
        <Card.Body>
          <Card.Title>
            {" "}
            <Na /> <Prix />
          </Card.Title>
          <Card.Text>
            <Desc />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Nom firstName={"Lotfi"} />
    </div>
  );
}

export default App;
