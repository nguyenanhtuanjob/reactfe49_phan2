import React, { Component } from "react";
import { Button } from "antd"
import { PoweroffOutlined } from '@ant-design/icons';

export default class Contact extends Component {

  state = {
    loadings: [],
  };

  enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };
  render() {
    const { loadings } = this.state;
    return <div>
      <Button type="danger" size="large">Primary Button</Button>
      <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
    </div>;
  }
}
