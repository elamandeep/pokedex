import { ReactNode } from "react";

let GroupDefaultProps = {
  justify: "justify-center",
  items: "items-center",
  others: "",
};
type GroupProps = {
  justify?: string;
  items?: string;
  others?: string;
  children: ReactNode;
} & typeof GroupDefaultProps;

export const Group = (props: GroupProps) => {
  return (
    <>
      <div className={`flex ${props.justify} ${props.items} ${props.others} `}>
        {props.children}
      </div>
    </>
  );
};
Group.defaultProps = GroupDefaultProps;

let StackDefaultProps = {
  justify: "justify-center",
  items: "items-center",
  others: "",
};

type StackProps = {
  justify?: string;
  items?: string;
  others?: string;
  children: ReactNode;
} & typeof StackDefaultProps;

export const Stack = (props: StackProps) => {
  return (
    <>
      <div className={`flex flex-col ${props.justify} ${props.items} ${props.others}`}>
        {props.children}
      </div>
    </>
  );
};

Stack.defaultProps = StackDefaultProps;
