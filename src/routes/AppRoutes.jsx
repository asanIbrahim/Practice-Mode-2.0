import {Routes,Route} from 'react-router-dom';
import {TableData} from '../components/usertable/TableData'

function AppRoutes(){
return(
    <>
    <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path='/table' element={<TableData/>}/>
    </Routes>
    </>
)
}

export default AppRoutes