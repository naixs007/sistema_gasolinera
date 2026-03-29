import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fuel, ShoppingCart, Gauge, AlertTriangle, Users, BarChart2, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const kpis = [
        { label: 'Ventas del día', value: 'Bs. 0.00', icon: <ShoppingCart size={22} color="#1a73e8" /> },
        { label: 'Nivel de tanques', value: '0%', icon: <Fuel size={22} color="#16a34a" /> },
        { label: 'Surtidores activos', value: '0 / 0', icon: <Gauge size={22} color="#d97706" /> },
        { label: 'Alertas activas', value: '0', icon: <AlertTriangle size={22} color="#dc2626" /> },
    ];

    const modulos = [
        { label: 'Ventas y POS', icon: <ShoppingCart size={28} color="#1a73e8" />, ruta: '/ventas' },
        { label: 'Surtidores', icon: <Gauge size={28} color="#d97706" />, ruta: '/surtidores' },
        { label: 'Inventario', icon: <Fuel size={28} color="#16a34a" />, ruta: '/inventario' },
        { label: 'IA y Analítica', icon: <BarChart2 size={28} color="#7c3aed" />, ruta: '/analitica' },
        { label: 'Administración', icon: <Users size={28} color="#0f172a" />, ruta: '/administracion' },
        { label: 'Configuración', icon: <Settings size={28} color="#6b7280" />, ruta: '/configuracion' },
    ];

    return (
        <div style={styles.container}>

            {/* Navbar */}
            <div style={styles.navbar}>
                <div style={styles.navBrand}>
                    <Fuel size={20} color="#fff" />
                    <span style={styles.navTitle}>Sistema Gasolinera</span>
                </div>
                <div style={styles.navUser}>
                    <span style={styles.navUserName}>Administrador</span>
                    <button onClick={handleLogout} style={styles.logoutBtn}>
                        <LogOut size={16} />
                        Cerrar sesión
                    </button>
                </div>
            </div>

            <div style={styles.content}>

                <h2 style={styles.sectionTitle}>Resumen del día</h2>

                {/* KPIs */}
                <div style={styles.kpiGrid}>
                    {kpis.map((kpi, i) => (
                        <div key={i} style={styles.kpiCard}>
                            <div style={styles.kpiIcon}>{kpi.icon}</div>
                            <div>
                                <div style={styles.kpiValue}>{kpi.value}</div>
                                <div style={styles.kpiLabel}>{kpi.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 style={{...styles.sectionTitle, marginTop: '2rem'}}>Módulos del sistema</h2>

                {/* Módulos */}
                <div style={styles.modulosGrid}>
                    {modulos.map((mod, i) => (
                        <div key={i} style={styles.moduloCard} onClick={() => navigate(mod.ruta)}>
                            <div style={styles.moduloIcon}>{mod.icon}</div>
                            <div style={styles.moduloLabel}>{mod.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

const styles = {
    container: { minHeight: '100vh', backgroundColor: '#f0f4f8' },
    navbar: {
        backgroundColor: '#0f172a',
        padding: '0.9rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navBrand: { display: 'flex', alignItems: 'center', gap: '10px' },
    navTitle: { color: '#fff', fontWeight: '600', fontSize: '1rem' },
    navUser: { display: 'flex', alignItems: 'center', gap: '1rem' },
    navUserName: { color: '#94a3b8', fontSize: '0.85rem' },
    logoutBtn: {
        display: 'flex', alignItems: 'center', gap: '6px',
        backgroundColor: 'transparent', border: '1px solid #334155',
        color: '#94a3b8', borderRadius: '6px', padding: '0.4rem 0.8rem',
        cursor: 'pointer', fontSize: '0.82rem',
    },
    content: { padding: '2rem' },
    sectionTitle: { fontSize: '1rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem' },
    kpiGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
    },
    kpiCard: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
    },
    kpiIcon: {
        backgroundColor: '#f1f5f9',
        borderRadius: '10px',
        padding: '0.6rem',
        display: 'flex',
    },
    kpiValue: { fontSize: '1.2rem', fontWeight: '700', color: '#0f172a' },
    kpiLabel: { fontSize: '0.78rem', color: '#6b7280', marginTop: '2px' },
    modulosGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem',
    },
    moduloCard: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        cursor: 'pointer',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        transition: 'transform 0.15s',
    },
    moduloLabel: { fontSize: '0.85rem', fontWeight: '500', color: '#0f172a', textAlign: 'center' },
};

export default Dashboard;