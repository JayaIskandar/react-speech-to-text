import React from 'react';
import Text from './components/Text'; // Make sure to adjust the path if necessary
import Rev from './components/Rev';

const metadata = {
  title: "Live Speech To text",
  description: "🎙️ > 📝",
};

export default function Home() {
    // Use React.lazy for the dynamic import
    const RevComponent = React.lazy(() => import('./components/Rev'));

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:gap-48 gap-5 lg:flex-row-reverse">
        <img
          src="https://rynhan.github.io/DEMI-AI-widget/D3.png"
          className="h-80 rounded-lg lg:shadow-2xl w-80"
        />
        <Text />
        <React.Suspense fallback={<div>Loading...</div>}>
          <RevComponent />
        </React.Suspense>
      </div>
    </div>
  );
}

export { metadata };
