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

                        <div className="input-group mt-2">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Sobrenome" 
                            />
                            <span className="input-group-text" id="basic-addon2">
                                <i className="bi bi-person-add"></i>
                            </span>
                        </div>

                        <div className="input-group mt-2">
                            <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email" 
                            />
                            <span className="input-group-text" id="basic-addon2">
                                @
                            </span>
                        </div>

                        <div className="input-group mt-2">
                            <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Celular/telefone" 
                            />
                            <span className="input-group-text" id="basic-addon2">
                                <i className="bi bi-telephone-plus"></i>
                            </span>
                        </div>

                        <div className="input-group mt-2">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Empresa" 
                            />
                            <span className="input-group-text" id="basic-addon2">
                                <i className="bi bi-bank"></i>
                            </span>
                        </div>

                        <div className="input-group mt-2">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="País ex: BR" 
                            />
                            <span className="input-group-text" id="basic-addon2">
                                <i className="bi bi-globe-americas"></i>
                            </span>
                        </div>

                        <div className="input-group mt-2">
                            <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Senha" 
                            />
                            <span className="input-group-text" id="basic-addon2">
                                <i className="bi bi-lock"></i>
                            </span>
                        </div>

                        <div className="input-group mt-2">
                            <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Confirmação de senha" 
                            />
                            <span className="input-group-text" id="basic-addon2">
                                <i className="bi bi-lock"></i>
                            </span>
                        </div>

                        <br />
                        <br />

                        <button className="btn btn-primary">Create</button>
                        <br />
                        <br />
                        <button className="btn btn-success">Clean</button>
                    </form>
                </div>
            </div>
        </div>
    );
};