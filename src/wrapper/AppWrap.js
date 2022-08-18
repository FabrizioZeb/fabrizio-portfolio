import React from 'react';
import { NavigationDots, SocialMedia} from '../components';

const AppWrap = (Component, idName, classNames) =>  function HOC() {
  return (
    <div id={idName} style={{backgroundColor: '#141414'}} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
            <Component />

            <div className="copyright">
                <p className="p-text" style={{color: '#FFFF'}}>@2022 Fabrizio</p>
                <p className="p-text" style={{color: '#FFFF'}}>All right deserved</p>
            </div>
        </div>

        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap