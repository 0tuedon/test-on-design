import { FlexProperty } from "@/interface/common";
import React from "react";

const Flex = ({ className = "", children, ...props }: FlexProperty) => {
  return (
    <div className={`flex ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Flex;
