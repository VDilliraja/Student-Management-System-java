  //Make sure all the components are imported at the top
import './App.css'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';                         // configure the routing
import StudentComponent from './components/StudentComponent';
function App() {
  return (
    <div>
      <BrowserRouter>
          <HeaderComponent/>
          <Routes>
              {/* // http://localhost:3000 -> it is a base URL*/}
              <Route path='/' element={<ListStudentComponent />}></Route>
              {/* // http://localhost:3000/students */}
               <Route path='/students' element={<ListStudentComponent />}></Route>
               {/* // http://localhost:3000/addstudent */}
                <Route path='/addstudent' element={<StudentComponent />}></Route>
                {/* // http://localhost:3000/updatestudent/1  -> // pass the student rollno dynamically */}
                <Route path='/updatestudent/:rollno' element={<StudentComponent />}></Route>      
          </Routes>
          <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App; 