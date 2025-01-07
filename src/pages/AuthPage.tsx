import React, { useState } from 'react';
import {
    Container,
    Typography,
    Tabs,
    Tab,
    Box,
    TextField,
    Button,
    Alert,
} from '@mui/material';
import { login, register } from "../services/api.ts";
import { useNavigate } from 'react-router-dom';


const AuthPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
        setError('');
        setSuccess('');
    };

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            setSuccess('Connexion réussie');
            console.log('Utilisateur connecté :', response);

            localStorage.setItem('token', response.accessToken);
            setTimeout(() => { navigate('/home'); });
        } catch (err: any) {
            setError(err.response?.data?.message || 'Erreur lors de la connexion');
        }
    };

    const handleRegister = async () => {
        try {
            const response = await register(name, email, password);
            setSuccess("Inscription réussie, vous pouvez vous connecter !");
            console.log('Utilisateur enregistré :', response);
        } catch (err: any) {
            setError(err.response?.data?.message || "Erreur lors de l'inscription");
        }
    };



    return (
        <Container
            maxWidth="sm"
            style={{
                marginTop: '50px',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" gutterBottom>
                {activeTab === 0 ? 'Connexion' : 'Inscription'}
            </Typography>

            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                centered
                style={{ marginBottom: '20px' }}
            >
                <Tab label="Connexion" />
                <Tab label="Inscription" />
            </Tabs>

            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}

            <Box>
                {activeTab === 0 ? (
                    <Box>
                        {/* Login Form */}
                        <TextField
                            fullWidth
                            label="Adresse Email"
                            type="email"
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Mot de Passe"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '20px' }}
                            onClick={handleLogin}
                        >
                            Connexion
                        </Button>
                    </Box>
                ) : (
                    <Box>
                        {/* Register Form */}
                        <TextField
                            fullWidth
                            label="Nom"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Prénom"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Adresse Email"
                            type="email"
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Mot de Passe"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '20px' }}
                            onClick={handleRegister}
                        >
                            S'inscrire
                        </Button>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default AuthPage;