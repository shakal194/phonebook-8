import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import { getCurrentUser } from '../redux/auth/auth-operations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
const HomeView = lazy(() => import('./view/HomeView/HomeView'));
const ViewContact = lazy(() => import('./view/ViewContact/ViewContact'));
const AddContact = lazy(() => import('./view/AddContact/AddContact'));
const RegisterView = lazy(() => import('./view/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./view/LoginView/LoginView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback="Loading...">
          <Routes>
            <Route exact path="/" element={<HomeView />} />
            <Route element={<PrivateRoute />}>
              <Route element={<ViewContact />} path="/viewcontact" />
              <Route element={<AddContact />} path="/addcontact" />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterView />} />
              <Route path="/login" element={<LoginView />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
