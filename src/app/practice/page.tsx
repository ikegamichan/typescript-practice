import { Card } from '@/components/card';
import { Header } from '@/components/header';
import { titleCards } from '@/const/card';

export default function Page() {
  return (
    <div>
      <Header title="勉強中のもの" size="L" />
      <div className="grid grid-cols-3 gap-4">
        {titleCards.map((titleCard) => {
          return (
            <Card
              key={titleCard.title}
              title={titleCard.title}
              href={titleCard.path}
              size={titleCard.size}
              isDisabled={false}
            />
          );
        })}
      </div>
    </div>
  );
}
