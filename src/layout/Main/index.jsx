import Sidebar from "../Sidebar";

const MainLayout = (props) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="pl-90 w-screen h-full">{props.children}</div>
    </div>
  );
};

export default MainLayout;
