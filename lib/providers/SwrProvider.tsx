'use client';

import React from 'react';
import { SWRConfig } from 'swr';

const SWRProvider = ({ children }: any) => {
  return <SWRConfig>{children}</SWRConfig>;
};

export default SWRProvider;
