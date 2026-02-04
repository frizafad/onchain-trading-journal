import WalletConnect from '@/components/WalletConnect'

export default function Home() {
  return (
    <main style={{ padding: '24px' }}>
      <h1>Onchain Trading Journal</h1>
      <WalletConnect />
    </main>
  )
}
