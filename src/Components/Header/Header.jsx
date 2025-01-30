
import profile from '../../assets/profile.png'
function Header() {
    return (
        <>
        <nav className='flex justify-between items-center p-7 m-4 border-b-1'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile}></img>
        </nav>
        </>
    );
}

export default Header;