import Hero from '@/components/Hero';
import PlatformList from '@/components/PlatformList';
import UploadTips from '@/components/UploadTips';

export default function Page() {
  return (
    <>
      <Hero />
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 120px' }}>
        <PlatformList />
        <UploadTips />
      </main>
    </>
  );
}
