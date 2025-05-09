import Image from "next/image";
import TradingCompetition from "@/components/TradingCompetition";
import TrivReward from "@/components/TrivReward";
import Pendaftaran from "@/components/Pendaftaran";
import Leaderboard from "@/components/Leaderboard";
import Peraturan from "@/components/Peraturan";

export default function Home() {
  return (
    <div>
      <TradingCompetition/>
      <TrivReward/>
      <Pendaftaran/>
      <Leaderboard/>
      <Peraturan/>
    </div>
  );
}
