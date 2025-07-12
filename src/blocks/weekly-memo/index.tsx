import { Weekly20250701 } from './weekly-2025-07-01';
import { Weekly20250714 } from './weekly-2025-07-14';
import { Header } from '@/components/header';

export const WeeklyMemo = () => {
  return (
    <div>
      <Header title="Weekly-memo" size="L" />
      <div className="space-y-8">
        <Weekly20250701 />
        <Weekly20250714 />
      </div>
    </div>
  );
};
