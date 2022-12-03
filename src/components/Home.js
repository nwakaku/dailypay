import React from "react";
import { Row, Col, Button } from "antd";
import logo from "../assets/home2.png";
import ReactRotatingText from "react-rotating-text";
import { useNavigate } from "react-router-dom";
import { APP_DESC, APP_NAME, CONNECT_PROMPT } from "../util/constants";
import { CheckCircleOutlined, CheckCircleTwoTone } from "@ant-design/icons";

const CHECKLIST_ITEMS = [
  "Every receipt is NFT .",
  "On the Go Mobile Bank",
  "With no minimum payments, you may make fast Transfer.",
  "Each page is handled by a separate smart contract.",
];

function Home({ account, login }) {
  const navigate = useNavigate();

  const goToCreate = () => {
    navigate("/create");
  };

  return (
    <div className="hero-section">
      <Row>
        <Col span={12}>
          <div className="hero-slogan-section">
            <div className="hero-slogan">
              <p>
                {APP_DESC} for&nbsp;
                <ReactRotatingText
                  style={{ color: "#ff6a00" }}
                  items={["BUSINESS", "TRANSPORT FARE", "RETAILS"]}
                />
                .
              </p>
            </div>
            {/* // "#eb2f96" */}
            {CHECKLIST_ITEMS.map((item, i) => {
              return (
                <p>
                  <CheckCircleTwoTone twoToneColor="#ff6a00" />
                  &nbsp;
                  {item}
                </p>
              );
            })}
            <br />

            {account ? (
              <Button
                type="primary"
                danger
                size="large"
                onClick={() => goToCreate()}
              >
                Launch App
              </Button>
            ) : (
              <Button
                type="primary"
                danger
                size="large"
                onClick={() => login(false)}
              >
                {CONNECT_PROMPT}
              </Button>
            )}
          </div>
        </Col>
        <Col span={12}>
          <div className="centered">
            <img src={logo} className="hero-image" />
            <p>
              <i>“Banking is necessary, Banks are Not.” ― Bill Gates</i>
              <br />
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

Home.propTypes = {};

export default Home;
