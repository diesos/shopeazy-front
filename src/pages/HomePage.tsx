import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "../style/HomePage.css";
const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container
            maxWidth="md"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                marginTop: '100px',
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                Bienvenue sur <span style={{ color: '#1976d2' }}>ShopEazy</span>
            </Typography>
            <Typography variant="h6" color="textSecondary">
                Gérez facilement vos listes de courses, partagez-les et restez organisé.<br /> Connectez-vous pour commencer !
            </Typography>
            <Box mt={4}>
                
                <Button
                    variant="contained"
                    color='primary'
                    size="large"
                    onClick={() => navigate('/auth')}
                >
                    Connexion / Inscription
                </Button>
                
            </Box>
            <div className="features">
                <div className="feature-item">
                    <h2>Ajouter des articles</h2>
                    <p>Ajoutez vos articles rapidement et facilement.</p>
                </div>
                <div className="feature-item">
                    <h2>Partager avec des amis</h2>
                    <p>Partagez votre liste de courses avec vos proches.</p>
                </div>
                <div className="feature-item">
                    <h2>Suivre vos achats</h2>
                    <p>Gardez une trace de vos achats et de ce qui reste à acheter.</p>
                </div>
            </div>
        </Container>
    );
};

export default HomePage;