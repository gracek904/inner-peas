import React from "react";
import CreateUser from "../auth/CreateUser";

export default class Setting extends CreateUser {
  render() {
    return <CreateUser setting={true} />;
  }
}
