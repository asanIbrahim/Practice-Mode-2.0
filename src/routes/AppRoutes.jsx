import {Routes,Route} from 'react-router-dom';
import {TableData} from '../components/usertable/TableData'
import TrafficSignal from '../components/trafficlight/TrafficSignal'
import Debounce from '../components/debounce/Debounce'

function AppRoutes(){
return(
    <>
    <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path='/table' element={<TableData/>}/>
    <Route path='/trafficlight' element={<TrafficSignal/>}/>
    <Route path="/debounce" element={<Debounce/>}/>
    </Routes>
    </>
)
}

export default AppRoutes