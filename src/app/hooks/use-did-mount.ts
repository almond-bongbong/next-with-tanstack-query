'use client';

import React, { useEffect, useState } from 'react';

function useDidMount() {
  const [isDidMount, setIsDidMount] = useState(false);

  useEffect(() => {
    setIsDidMount(true);
  }, []);

  return isDidMount;
}

export default useDidMount;
