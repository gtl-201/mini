import jsCookie from "js-cookie";
import { route } from "../../App";

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Funny</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <div class="navbar-nav">
                        {
                            route.filter(e=>e.name !== 'Login').map(e=>(
                                <a class="nav-link active" aria-current="page" href={e.path}>{e.name}</a>
                            ))
                        }
                    </div>
                </div>
                <button className='btn border-none hover-shadow text-white' onClick={() => {
                jsCookie.remove('token');
                window.location.reload();
            }}>Logout</button>
            </div>
        </nav>
    )
};

export default Nav;
