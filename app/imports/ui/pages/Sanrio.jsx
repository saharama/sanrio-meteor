import React from 'react';
import FreeShipping from '../components/FreeShipping';
import Vanity from '../components/Vanity';
import SanrioJapangeles from '../components/SanrioJapangeles';
import StaffPicks from '../components/StaffPicks';
import BraceletAd from '../components/BraceletAd';
import LimitedEdition from '../components/LimitedEdition';
import SpotlightPochacco from '../components/SpotlightPochacco';

export default class Sanrio extends React.Component {
  render() {
    return (
        <div>
          <FreeShipping/>
          <Vanity/>
          <SanrioJapangeles/>
          <StaffPicks/>
          <BraceletAd/>
          <LimitedEdition/>
          <SpotlightPochacco/>
        </div>
    );
  }
}
