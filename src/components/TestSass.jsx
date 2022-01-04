import TestClasses from './Welcome.module.scss';
import { isServer, isClient } from '@shopify/hydrogen/client';

const TestSassClient = () => {
  return (
    <>
      <div className={TestClasses.Test1}>
        From Shared Component, isClient: {isClient().toString()}, isServer: {isServer().toString()}
      </div>
    </>
  );
};

export default TestSassClient;
