'use client';

import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { Add, CalendarToday, LocationOn, Image } from '@mui/icons-material';

export default function NewTournamentForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [game, setGame] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`✅ Tournoi créé : ${title} (${game})`);
  };

  return (
    <div className="min-h-screen bg-[#4c5a6b] flex items-center justify-center p-10">
      <div className="bg-[#696c75] p-8 rounded-xl shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white mb-8">Nouveau Tournoi</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <TextField
              label="Titre"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              InputProps={{ className: 'text-white' }}
              InputLabelProps={{ className: 'text-gray-400' }}
            />

            <TextField
              label="Date"
              variant="outlined"
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                className: 'text-white',
                endAdornment: <CalendarToday fontSize="small" className="text-gray-400" />,
              }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <TextField
              label="Lieu"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              InputProps={{
                className: 'text-white',
                endAdornment: <LocationOn fontSize="small" className="text-gray-400" />,
              }}
              InputLabelProps={{ className: 'text-gray-400' }}
            />

            <TextField
              label="Jeux"
              variant="outlined"
              fullWidth
              value={game}
              onChange={(e) => setGame(e.target.value)}
              InputProps={{
                className: 'text-white',
                endAdornment: (
                  <IconButton size="small">
                    <Add className="text-gray-400" />
                  </IconButton>
                ),
              }}
              InputLabelProps={{ className: 'text-gray-400' }}
            />
          </div>

          <div className="flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg h-60">
            <label className="text-gray-400 cursor-pointer text-center flex flex-col items-center">
              <Image fontSize="large" />
              <span className="text-sm mt-2">
                {image ? image.name : 'Drag & Drop ou Choisir un fichier'}
              </span>
              <input type="file" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>
        </form>

        <div className="text-center mt-8">
          <Button
            type="submit"
            variant="text"
            sx={{ color: '#e53935', fontWeight: 'bold', mt: 2 }}
            onClick={handleSubmit}
          >
            CRÉER TOURNOI
          </Button>
        </div>
      </div>
    </div>
  );
}
