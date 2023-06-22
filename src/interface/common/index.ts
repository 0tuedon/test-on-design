import { NextPage } from "next";
import { HtmlHTMLAttributes } from "react";

export interface FlexProperty extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

type GetLayoutFunc = (page: React.ReactElement) => React.ReactElement;

export type NextPageWithLayout = NextPage & {
  getLayout?: GetLayoutFunc;
  requireAuth?: boolean;
};

export interface Layouts extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
  childClassName?: string;
  feeAdvance?: boolean;
  getLayout?: GetLayoutFunc;
  requireAuth?: boolean;
}

export interface ICustomerRoute {
  name: string;
  icon: React.JSX.Element;
  activeIcon: React.JSX.Element;
  path: string;
}
