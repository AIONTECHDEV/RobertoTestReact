import React from 'react'
import {StyleSheet, css} from 'aphrodite';
import {
    caracteresEspeciales, history,
    obtenerPass,
    obtenerUsuario,
    strongRegex
} from "../General/FuncionesGenerales";

export class login extends React.Component {

    constructor(props: any) {
        super(props);

    }
    componentDidMount(): void {
        localStorage.setItem('pass','Roberto951!');
        localStorage.setItem('user','usuarioprueba');
        localStorage.setItem('history', JSON.stringify(history));
    }

    state = {
        usuario: '',
        password: '',
        errors: {},
        boton: true,
    };

    validacionUsuario() {
        let errors = {};
        if (!this.state.usuario) {
            // @ts-ignore
            errors['usuario'] = 'el usuario es requerido';
        } else if (!(this.state.usuario.length >= 8 && this.state.usuario.length <= 20)) {
            // @ts-ignore
            errors['usuario'] = 'el usuario debe ser mayor a 8 digitos y menor a 20';
        } else if (!caracteresEspeciales(this.state.usuario.toLowerCase())) {
            // @ts-ignore
            errors['usuario'] = "el usuario contiene caracteres invalidos"
        }
        setTimeout(() => {
            // @ts-ignore
            if (errors['usuario']) {
                this.setState({boton: true})
            } else {
                this.setState({boton: false})
            }
            this.setState({errors: errors});

        }, 1000);
    }

    errorUsuario(): string {
        // @ts-ignore
        return this.state.errors['usuario'];
    }

    errorPassword(): string {
        // @ts-ignore
        return this.state.errors['password'];
    }

    validacionPassword() {
        const errors = {};
        if (!this.state.password) {
            // @ts-ignore
            errors['password'] = 'password requerido';
        } else if (!(this.state.password.length >= 8 && this.state.password.length <= 20)) {
            // @ts-ignore
            errors['password'] = 'el password debe ser mayor a 8 digitos y menor a 20';
        } else if (!strongRegex.test(this.state.password)) {
            // @ts-ignore
            errors['password'] = 'el password debe contener, mayusculas, minusculas, numeros y un caracter especial';
        }
        setTimeout(() => {
            // @ts-ignore
            if (errors['password']) {
                this.setState({boton: true})
            } else {
                this.setState({boton: false})
            }
            this.setState({errors: errors});

        }, 1000);
    }

    verificarUsuarioPassword() {
        console.log(obtenerPass())
        console.log(obtenerUsuario())
        console.log(this.state.password)
        console.log(this.state.usuario)
        if (obtenerPass() === this.state.password && obtenerUsuario() === this.state.usuario){
            // @ts-ignore
            this.props.history.push('/home');
        }else {
            alert('credenciales invalidas')

        }
    }

    render() {
        // @ts-ignore
        return (
            <div className={css(style.centrado)}>
                <h1>Login</h1>
                <div style={{marginTop: 100}}>
                    <input className={css(style.input)} placeholder="Usuario" value={this.state.usuario}
                           onChange={(usuario) => this.setState({usuario: usuario.target.value})}
                           onBlur={() => this.validacionUsuario()}/>
                </div>
                <span style={{color: "red"}}>{this.errorUsuario()}</span>
                <div style={{marginTop: 40}}>
                    <input className={css(style.input)} placeholder="Password" value={this.state.password}
                           type={"password"}
                           onChange={(password) => this.setState({password: password.target.value})}
                           onBlur={() => this.validacionPassword()}/>
                </div>
                <div>
                    <span style={{color: "red"}}>{this.errorPassword()}</span>
                </div>

                <button style={{marginTop: 40, borderRadius: 4}} onClick={()=> this.verificarUsuarioPassword()}
                        disabled={this.state.boton}>Entrar
                </button>
            </div>
        )
    }
}

const style = StyleSheet.create({
    centrado: {
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: 50,
    },
    input: {
        width: 500,
        borderRadius: 5,
    }
});