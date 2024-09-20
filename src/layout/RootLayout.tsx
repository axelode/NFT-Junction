import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div className='w-full min-h-screen bg-white font-mono'>
            <Outlet />
        </div>
    );
};

export default RootLayout;