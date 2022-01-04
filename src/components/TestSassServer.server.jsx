import { isServer, isClient } from '@shopify/hydrogen/client';
import TestClasses from './Welcome.module.scss';


const TestSassServer = () => {
  return (
    <>
      <div className={TestClasses.Test1}>
        From Server component, isClient: {isClient().toString()}, isServer: {isServer().toString()}
      </div>
    </>
  );
};

export default TestSassServer;
