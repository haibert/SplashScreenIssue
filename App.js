import React, { useEffect, useCallback, useState } from 'react'
import { Text, View } from 'react-native'

import 'expo-dev-client'

//fonts
import {
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

const App = () => {
    //zustand
    //-------------------------------------------------------------------------LOAD FONTS AND AUTH STATUS-------------------------------------------------------------------------
    const [appIsReady, setAppIsReady] = useState(false)

    const loadFonts = useCallback(async () => {
        try {
            await SplashScreen.preventAutoHideAsync()
            await Font.loadAsync({
                Poppins_300Light,
                Poppins_400Regular,
                Poppins_600SemiBold,
            })
            setAppIsReady(true)
        } catch (err) {
            console.log(err)
        }
    }, [])
    useEffect(() => {
        loadFonts()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync()
        }
    }, [appIsReady])
    //-------------------------------------------------------------------------LOAD FONTS AND AUTH STATUS-------------------------------------------------------------------------
    if (!appIsReady) {
        return null
    }

    return (
        <View
            onLayout={onLayoutRootView}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Test</Text>
        </View>
    )
}

export default App
