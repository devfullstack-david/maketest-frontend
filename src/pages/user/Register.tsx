import '../../styles/register.css';

export const Register = () => {
    return (
        <div className="container">
            <div className="register-container">
                <div className="register">
                    <span className="register-title">Create user</span>
                    <br />
                    <br />

                    <form>
                        <div className="input-group">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome" 
                            />
                            <span className="input-group-text" id="basic-addon2">
                                <i className="bi bi-person-add"></i>
                            </span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};