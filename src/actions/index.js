const appsLoaded = (apps) => {
  return {
    type: 'APPS_LOADED',
    payload: apps
  }
};

export {
  appsLoaded
};
