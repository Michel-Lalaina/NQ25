'use client';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simulation d’un appel API (mock)
    await new Promise((r) => setTimeout(r, 1000));

    setMessage(`✅ Compte créé pour ${username} (${email})`);
    setLoading(false);
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a103d]">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-2">NQ25</h1>
        <h2 className="text-2xl font-semibold mb-2 text-black">Bienvenu !</h2>
        <p className="text-sm text-gray-600 mb-6">
          Créez votre compte afin de pouvoir conserver vos données et travailler en équipe
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          <TextField
            label="Email"
            variant="standard"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Nom d'utilisateur"
            variant="standard"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            label="Mot de passe"
            type="password"
            variant="standard"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              bgcolor: '#e53935',
              borderRadius: '9999px',
              py: 1.2,
              fontWeight: 'bold',
              '&:hover': { bgcolor: '#c62828' },
            }}
          >
            {loading ? 'Création...' : 'CRÉER VOTRE COMPTE'}
          </Button>
        </form>

        {message && <p className="mt-4 text-green-600">{message}</p>}

        <p className="text-sm text-gray-600 mt-6">
          Vous avez déjà un compte ?{' '}
          <Link href="/login" className="text-red-600 hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
