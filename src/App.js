import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Headers from './Shared/Headers/Headers';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Review from './Pages/Review/Review';
import ContuctUs from './Pages/ContuctUs/ContuctUs';
import Footer from './Shared/Footer/Footer';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AllUsers from './Pages/Dashboard/Users/AllUsers';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';
function App() {
  return (
    <div >
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/appointment' element={<RequireAuth><Appointment /></RequireAuth>} />

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<AllUsers></AllUsers>}></Route>
          <Route path='addDoctor' element={<AddDoctor></AddDoctor>}></Route>
          <Route path='manageDoctor' element={<ManageDoctors></ManageDoctors>}></Route>
        </Route>

        <Route path='/review' element={<Review />} />
        <Route path='/contuct' element={<ContuctUs />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
