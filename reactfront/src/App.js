import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// Importar nuestros componentes
import ShowProduct from './components/showProduct'
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<ShowProduct />} />
                    <Route path='/create' element={ <CreateProduct/> } />
                    <Route path='/edit/:id' element={ <EditProduct/> } />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
