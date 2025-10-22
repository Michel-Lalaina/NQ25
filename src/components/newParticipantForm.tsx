'use client';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function NewParticipantForm() {
  const [name, setName] = useState('');
  const [cin, setCin] = useState('');
  const [pseudo, setPseudo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`✅ Participant ajouté : ${name} (${pseudo})`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c2c2c] to-[#1c0a0a] flex items-center justify-center p-10">
      <div className="bg-[#4b5055] p-8 rounded-xl shadow-lg w-full max-w-2xl text-white">
        <h2 className="text-3xl font-semibold mb-8">Nouveau Participant</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <TextField
            label="Nom"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{ className: 'text-white' }}
            InputLabelProps={{ className: 'text-gray-400' }}
          />

          <TextField
            label="No. CIN"
            variant="outlined"
            fullWidth
            value={cin}
            onChange={(e) => setCin(e.target.value)}
            InputProps={{ className: 'text-white' }}
            InputLabelProps={{ className: 'text-gray-400' }}
          />

          <TextField
            label="Pseudo"
            variant="outlined"
            fullWidth
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            InputProps={{ className: 'text-white' }}
            InputLabelProps={{ className: 'text-gray-400' }}
          />

          <Button
            type="submit"
            variant="text"
            sx={{ color: '#e53935', fontWeight: 'bold', mt: 2 }}
          >
            AJOUTER NOUVEAU PARTICIPANT
          </Button>
        </form>
      </div>
    </div>
  );
}
