'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

function ClientOnlyComponent() {
  const { data } = useQuery({
    queryKey: ['list'],
    // queryFn: () => fetch('/api/error').then((res) => res.json()),
    queryFn: () => fetch('/api/hello').then((res) => res.json()),
    // staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  console.log(data);

  return (
    <div style={{ marginTop: 50, textAlign: 'center' }}>
      <h2>Client Only Component</h2>
      <br />
      <div>
        <b>data:</b> {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default ClientOnlyComponent;
