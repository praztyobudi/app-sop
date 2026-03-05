import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../globals.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="id">
      <body className="min-h-screen">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="bg-gray-100 lg:block w-64">
            <Sidebar />
          </div>
          {/* Content Area */}
          <div className="bg-gray-100 flex-1 flex flex-col">
            {/* <div className="hidden lg:block w-full px-12 py-6 pt-27"></div> */}
            <Navbar />
            <main className=" flex-1 pt-16">
              <div className="pt-8 lg:ml-8 min-h-screen">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
