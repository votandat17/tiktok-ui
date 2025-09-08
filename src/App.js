import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { publicRoutes } from '~/Routes/Routes';
import { DefaultLayout } from './Components/Layout/Layout.js';
function App() {
    return (
        // <Router>
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else {
                        Layout = <></>;
                    }
                    const Page = route.component;
                    return (
                        <Route
                            path={route.path}
                            key={index}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
        // </Router>
    );
}

export default App;
