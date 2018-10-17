import React, {ReactNode, StatelessComponent} from 'react';

export interface MyComponentProps {
  title: string;
  children: ReactNode;
}

const MyComponent: StatelessComponent<MyComponentProps> = ({
  title,
  children
}) => (
  <div>
    <h1>{title}</h1>
    <hr />
    {children}
  </div>
);

export default MyComponent;
