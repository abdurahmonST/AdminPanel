import Sidebar from '../Sidebar'

const MainLayout = (props) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='pl-90 w-screen'>
        {props.children}
      </div>
    </div>
  )
}

export default MainLayout
