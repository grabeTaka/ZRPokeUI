/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/index'
import Header from './components/header/index'
import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
function App() {
    return (
        <Router>
            <ChakraProvider>
                <div style={{backgroundColor: '#E2E8F0', height: '100vh'}}>
                    <Header />
                    <Routes>
                        <Route path="/" Component={Home} />
                    </Routes>
                </div>
                
            </ChakraProvider>
        </Router>
    )
}

export default App
