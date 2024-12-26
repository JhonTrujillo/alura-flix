import './header.css'
function Header(){
    return <div className="header">
                <h1 className='header-title'>ALURAFLIX</h1>
                <div className='header-botones'>
                    <a href="./home"  className='botones-home'>Home</a>
                    <a href="./nuevovideo"  className='botones-video'>Nuevo Video</a>
                </div>
            </div>
}
export default Header