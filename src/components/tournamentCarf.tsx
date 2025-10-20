//src/components/TournamentCard.tsx
'use client';
import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Tournament } from '../data/tournaments';


interface Props {
t: Tournament;
onDelete: (id: number) => void;
}


export default function TournamentCard({ t, onDelete }: Props) {
return (
<div className="card-glow bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden">
<div className="relative h-40">
<img src={t.image} alt={t.title} className="w-full h-full object-cover brightness-75" />
<div className="absolute left-4 top-4 bg-black/50 px-3 py-1 rounded text-xs">{t.location}</div>
</div>


<div className="p-4">
<div className="flex items-start justify-between">
<div>
<div className="text-lg font-semibold">{t.title}</div>
<div className="text-xs text-gray-400">{t.date} • {t.players} joueurs</div>
</div>
<div className="flex flex-col items-end gap-2">
<Button variant="contained" size="small" endIcon={<PlayArrowIcon />}>
CONTINUER
</Button>
<Button variant="outlined" color="error" size="small" onClick={() => onDelete(t.id)} startIcon={<DeleteIcon />}>
</Button>
</div>
</div>
</div>
</div>
);
}