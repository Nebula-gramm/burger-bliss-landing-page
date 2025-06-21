
import { Button } from '../ui/button';

const Header = () => {
    return (
        <div className='w-full flex justify-between items-center h-16 font-primary px-4'>
            <h1 className='text-2xl font-bold font-primary'>Burger Bliss</h1>
            <Button>Order Now</Button>
        </div>
    );
};

export default Header;