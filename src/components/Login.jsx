import {useNavigate} from "react-router-dom";

const Login=() => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/data');
    }
    return(
        <div className="centrado">
            <form onSubmit={handleSubmit} >
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" id="name" />
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" name="password" id="password" />
                    <button>Ingresar</button>
                </label>
            </form>
        </div>
    )

}

export default Login