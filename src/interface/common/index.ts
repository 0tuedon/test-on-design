import { HtmlHTMLAttributes } from "react";

export interface FlexProperty extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
