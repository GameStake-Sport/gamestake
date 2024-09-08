import { NextPage } from 'next';
import SportLinks from '../components/SportsLinks';
import CryptoBenefits from '../components/CryptoBenefits';
import JoinTribe from '@/components/JoinTribe';
import BetInput from '@/components/BetInput';
import Bets from '@/components/Bets';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {/* <SportLinks /> */}
        <CryptoBenefits />
        <Bets />
        <JoinTribe />
      </div>
    </main>
  );
};