/**
 * 홈 페이지 (/)
 * 메인 선택 UI를 표시합니다.
 */
import CenterStage from '@/components/layout/CenterStage';
import HomeActions from '@/components/sections/HomeActions';
import ParticlesBackground from '@/components/background/ParticlesBackground';

export default function Home() {
  // 이 페이지에서 호출할 API: 없음 (정적 페이지)
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <CenterStage>
        <HomeActions />
      </CenterStage>
    </div>
  );
}
