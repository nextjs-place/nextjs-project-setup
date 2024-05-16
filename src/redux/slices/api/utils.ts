import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

function handleApiError(error: FetchBaseQueryError) {
  console.error('Api Error: ', {...error});
}

async function getAccessToken(): Promise<string> {
  return 'token';
}

export {handleApiError, getAccessToken};
