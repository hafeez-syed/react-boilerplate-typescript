import * as React from 'react';

const lazy = (React as any).lazy;
const Warning = lazy(() => import('../errors-warnings-messages/Warning'));

interface IProps {
  title: string;
  count: number;
  increment: (event: React.MouseEvent<HTMLButtonElement>) => void;
  decrement: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonProps {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonLabel: string;
}

const Button = ({ clickHandler, buttonLabel }: ButtonProps) => (
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
