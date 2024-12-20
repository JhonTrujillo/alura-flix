import './header.css'
function Header(){
    return <div className="header">
                <h1 className='header-title'>ALURAFLIX</h1>
                <div className='header-botones'>
                    <button className='botones-home'>Home</button>
                    <button className='botones-video'>Nuevo video</button>
                </div>
            </div>
}
export default Header