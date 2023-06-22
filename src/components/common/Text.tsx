import { FlexProperty } from "@/interface/common";
import React from "react";

const Text = (props: FlexProperty) => {
  return <p className={`${props.className}`}>{props.children}</p>;
};

export default Text;
