import React, { useState } from 'react';
import api from '../api/axios';
import { Mail, Lock, Fuel } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await api.post('login/', { email, password });
            console.log("Respuesta del servidor:", response.data);
            localStorage.setItem('token', response.data.access);
            navigate('/dashboard');
        } catch (err) {
            setError("Credenciales incorrectas o servidor caído");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>

                <div style={styles.iconWrapper}>
                    <Fuel size={32} color="#fff" />
                </div>

                <h2 style={styles.title}>Sistema Gasolinera</h2>
                <p style={styles.subtitle}>Ingresa tus credenciales para continuar</p>

                {error && <div style={styles.errorBox}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div style={styles.fieldLabel}>Correo electrónico</div>
                    <div style={styles.inputWrapper}>
                        <Mail size={16} color="#888" style={styles.icon} />
                        <input
                            type="email"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={{...styles.fieldLabel, marginTop: '1rem'}}>Contraseña</div>
                    <div style={styles.inputWrapper}>
                        <Lock size={16} color="#888" style={styles.icon} />
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{...styles.button, opacity: loading ? 0.7 : 1}}
                    >
                        {loading ? 'Ingresando...' : 'Ingresar'}
                    </button>
                </form>

                <p style={styles.footer}>Estación de Servicio · v1.0</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        backgroundImage: 'radial-gradient(ellipse at 60% 50%, #1e3a5f 0%, #0f172a 70%)',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '2.5rem 2rem',
        borderRadius: '16px',
        width: '380px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        textAlign: 'center',
    },
    iconWrapper: {
        width: '64px',
        height: '64px',
        borderRadius: '16px',
        backgroundColor: '#1a73e8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.2rem',
    },
    title: {
        fontSize: '1.4rem',
        fontWeight: '700',
        color: '#0f172a',
        margin: '0 0 0.3rem',
    },
    subtitle: {
        fontSize: '0.85rem',
        color: '#888',
        marginBottom: '1.5rem',
    },
    errorBox: {
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        color: '#dc2626',
        borderRadius: '8px',
        padding: '0.6rem 1rem',
        fontSize: '0.82rem',
        marginBottom: '1rem',
    },
    fieldLabel: {
        textAlign: 'left',
        fontSize: '0.8rem',
        fontWeight: '600',
        color: '#374151',
        marginBottom: '0.4rem',
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '0.6rem 0.8rem',
        backgroundColor: '#f9fafb',
    },
    icon: {
        marginRight: '8px',
        flexShrink: 0,
    },
    input: {
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        fontSize: '0.9rem',
        color: '#0f172a',
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#1a73e8',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '0.95rem',
        marginTop: '1.5rem',
        transition: 'background 0.2s',
    },
    footer: {
        marginTop: '1.5rem',
        fontSize: '0.75rem',
        color: '#bbb',
    },
};

export default Login;