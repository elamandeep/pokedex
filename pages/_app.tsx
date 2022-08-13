import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Layout } from '../components/style/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const queryclient = new QueryClient()
  return (
    <QueryClientProvider client={queryclient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
