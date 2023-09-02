/**
 * Asynchronously loads the component for AboutPage
 */

import React from 'react';
import loadable from '../../services/loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
