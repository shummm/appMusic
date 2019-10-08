import React from 'react';
import { AppstoreServiceConsumer } from '../appstore-service-context';

const withAppstoreService = () => (Wrapped) => {

  return (props) => {

    return (
      <AppstoreServiceConsumer>
        {
          (appstoreService) => {
            return (
            <Wrapped {...props} appstoreService={appstoreService} />
            )}
        }
      </AppstoreServiceConsumer>
    );
  }
};

export default withAppstoreService;