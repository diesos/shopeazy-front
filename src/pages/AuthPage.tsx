import React, { useState } from 'react';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  Grid,
} from '@mui/material';

const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
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
            />
            <TextField
              fullWidth
              label="Mot de Passe"
              type="password"
              margin="normal"
              variant="outlined"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
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
            />
            <TextField
              fullWidth
              label="Prénom"
              type="text"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Adresse Email"
              type="email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Mot de Passe"
              type="password"
              margin="normal"
              variant="outlined"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
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