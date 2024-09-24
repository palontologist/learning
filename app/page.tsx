// pages/index.tsx
import VideoEmbed from '../components/VideoEmbed';

const videos = [
  "https://rickimalla17.vids.io/videos/ea90d6b01b1de7c763/1-introduction",
  "https://rickimalla17.vids.io/videos/4490d6b01e18e2cccd/2-pro-trading-mindset",
  "https://rickimalla17.vids.io/videos/ea90d6b01e18e1c163/3-price-action-masterclass",
  "https://rickimalla17.vids.io/videos/d390d6b01e18e6c35a/4-advanced-candlesticks",
  "https://rickimalla17.vids.io/videos/4d90d6b01e18e4c7c4/5-in-depth-market-structure",
  "https://rickimalla17.vids.io/videos/1190d6b01e1be4c898/6-smart-structural-entry-points",
  "https://rickimalla17.vids.io/videos/ac90d6b01e1be7c225/7-high-prob-market-patterns",
  "https://rickimalla17.vids.io/videos/a790d6b01e1be7c52e/8-support-resistance",
  "https://rickimalla17.vids.io/videos/ea90d6b8111be4c063/9-bullish-trade-entry-criteria",
  "https://rickimalla17.vids.io/videos/ea90d6b8111be2c663/10-bearish-trade-entry-criteria",
  "https://rickimalla17.vids.io/videos/ac90d6b8111be0c225/11-low-probability-trading-conditions",
  "https://rickimalla17.vids.io/videos/ac90d6b8111beecc25/12-risk-management",
  "https://rickimalla17.vids.io/videos/1190d6b81119e3ca98/13-exact-trading-playbook",
  "https://rickimalla17.vids.io/videos/4490d6b81116eacdcd/14-live-backtesting-session",
  "https://rickimalla17.vids.io/videos/ac90d6b81116e8c725/15-backtest-analytics",
  "https://rickimalla17.vids.io/videos/7990d6b81116e2ccf0/16-journaling",
  "https://rickimalla17.vids.io/videos/4d90d6b81117ebc0c4/17-seasonal-trading",
  "https://rickimalla17.vids.io/videos/1190d6b81117e8cf98/18-the-ultimate-winning-formula",
  "https://rickimalla17.vids.io/videos/0690d6b8101fe2c78f/19-the-prop-trading-success-blueprint",
  "https://rickimalla17.vids.io/videos/7090d6b8101ee0c2f9/20-psychology-mastery",
  "https://rickimalla17.vids.io/videos/4d90d6b8101ee4c7c4/21-strategy-faqs",
  "https://rickimalla17.vids.io/videos/4d90d6b8101ae0c7c4/22-closing-remarks",
  "https://rickimalla17.vids.io/videos/7090d6b81018e7c3f9/23-what-next",
  "https://rickimalla17.vids.io/videos/d390d6b8101de3c55a/24-live-trade-before-vs-after-episode-1",
  "https://rickimalla17.vids.io/videos/0691d2b61e13efc38f/1-introduction",
  "https://rickimalla17.vids.io/videos/ac91d2b61e13e2cc25/2-p-action-htf-to-ltf-analysis",
  "https://rickimalla17.vids.io/videos/d391d2b61e13e2cf5a/3-what-a-working-model-looks-like",
  "https://rickimalla17.vids.io/videos/a791d2b61e13e2cb2e/4-identifying-market-direction-bias",
  "https://rickimalla17.vids.io/videos/ea91d2b61e13e2ca63/5-entry-levels-confirmations",
  "https://rickimalla17.vids.io/videos/d391d2b61f1be2c65a/6-setting-sl-tp-be",
  "https://rickimalla17.vids.io/videos/4d91d2b61f1be2c0c4/7-factoring-in-risk-to-reward",
  "https://rickimalla17.vids.io/videos/a791d2b61f1be2c22e/8-factoring-in-sessions-timings",
  "https://rickimalla17.vids.io/videos/ea91d2b61f1be2c363/9-factoring-in-fundamentals",
  "https://rickimalla17.vids.io/videos/7991d2b61f1be3c5f0/10-the-right-way-to-backtest",
  "https://rickimalla17.vids.io/videos/ac91d2b61f1be3c425/11-selecting-pairs-instruments",
  "https://rickimalla17.vids.io/videos/d391d2b61f1be3c75a/12-creating-a-checklist",
  "https://rickimalla17.vids.io/videos/0691d2b61f1be3c68f/13-applying-your-edge-correctly",
  "https://rickimalla17.vids.io/videos/ea91d2b61f19e2c163/14-conclusion",
];

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Trading Course Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((url, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <VideoEmbed url={url} />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white">Video {index + 1}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;