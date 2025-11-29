import Emoticon from './components/Emoticon/Emoticon'
import Configurator from './components/Configurator/Configurator';
import { SettingContext } from './components/context/setting-context';
import { useState } from 'react';


interface SettingsData {
  eyes: number,
  mouth: number,
  color: number,
}

const App = () => {

  const [settings, setSetting] = useState<SettingsData>({
    eyes: 1,
    mouth: 2,
    color: 3,
  })

  const setEyes = (newEyes: number) => {
    setSetting({
      ...settings,
      eyes: newEyes,
    })
  }

  const setMouth = (newMouth: number) => {
    setSetting({
      ...settings,
      mouth: newMouth,
    })
  }

  const setColor = (newColor: number) => {
    setSetting({
      ...settings,
      color: newColor,
    })
  }

  return (
    <div className="container">
      <header>
        <h1>Vytvoř si vlastní emotikon</h1>
      </header>
      <main>

        <SettingContext.Provider value={{
          ...settings,
          setEyes,
          setMouth,
          setColor,
        }}>

          <Emoticon />
          <Configurator />

        </SettingContext.Provider>
      </main>
    </div>
  )
}

export default App
