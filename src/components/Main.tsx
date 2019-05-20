import * as React from 'react';
import PTypes from 'prop-types';

const lazy = (React as any).lazy;
const Warning = lazy(() => import('./Warning'));

interface IProps {
  title: string;
  count: number;
  increment: number;
  decrement: number;
}

const Main: React.SFC<IProps> = ({ title, count, increment, decrement }) => (
  <main role="main">
    <h1>{title}</h1>
    <h2 className={count > 10 ? 'warning' : null}>{count}</h2>
    <button onClick={increment}>Add ++</button>
    <button onClick={decrement}>Sub --</button>
    {count > 10 ? (
      <React.Suspense fallback={null}>
        <Warning />
      </React.Suspense>
    ) : null}
  </main>
);

Main.propTypes = {
  title: PTypes.string.isRequired,
  count: PTypes.number.isRequired,
  increment: PTypes.func.isRequired,
  decrement: PTypes.func.isRequired
};

export default Main;