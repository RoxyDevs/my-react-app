import React from 'react';
import TikTokLogin from './components/TikTokLogin';
import PerformanceStats from '/components/PerformanceStats';
import BuyFollowers from './components/BuyFollowers';
import BuyViews from './components/BuyViews';
import BuyLikes from './components/BuyLikes';
import BuyShares from './components/BuyShares';
import BoostStreamer from '-/components/BoostStreamer';

const App= () => {
    //NOTE - Obtén ID del usuario de tu sistema de autenticación 
    const userId ='ID_DEL_USUARIO';

    return (
        <div>
          <h1>Agencia de Tiktok</h1>
          <TikTokLogin />
          <PerformanceStats userId={userId} />
          <BuyFollowers userId={userId} />
          <BuyViews userId={userId} />
          <BuyLikes userId={userId} />
          <BuyShares userId={userId} />
          <BoostStreamer userId={userId} />
        </div>
    );
};

export default App;
