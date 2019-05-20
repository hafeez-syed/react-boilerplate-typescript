import * as React from 'react';
import PTypes from 'prop-types';
import { HTMLAttributes } from 'enzyme';

const lazy = (React as any).lazy;
const Warning = lazy(() => import('./Warning'));

interface IProps {
  title: string;
  count: number;
  increment: React.MouseEvent;
  decrement: React.MouseEvent;
}

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  clickHandler: React.MouseEvent;
  buttonLabel: string;
}

const Button: React.SFC<ButtonProps> = ({ clickHandler, buttonLabel }) => (
  <button onClick={clickHandler}>{buttonLabel}</button>
);

const Main: React.SFC<IProps> = ({ title, count, increment, decrement }) => (
  <main role="main">
    <h1>{title}</h1>
    <h2 className={count > 10 ? 'warning' : null}>{count}</h2>
    <Button clickHandler={increment} buttonLabel="Add ++" />
    <Button clickHandler={decrement} buttonLabel="Sub --" />
    {count > 10 ? (
      <React.Suspense fallback={null}>
        <Warning />
      </React.Suspense>
    ) : null}
  </main>
);

export default Main;
