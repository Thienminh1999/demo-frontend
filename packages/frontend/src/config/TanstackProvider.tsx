import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';

export function TanstackProvider({ children }: Readonly<PropsWithChildren>) {
  const [client] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 3 * (60 * 1000),
      },
    },
  }));

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
