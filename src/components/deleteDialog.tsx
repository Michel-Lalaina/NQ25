// src/components/DeleteDialog.tsx
'use client';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';


interface Props {
open: boolean;
name?: string;
onClose: () => void;
onConfirm: () => void;
}


export default function DeleteDialog({ open, name, onClose, onConfirm }: Props) {
return (
<Dialog open={open} onClose={onClose}>
<div className="p-6 rounded-lg">
<DialogTitle className="text-center">Voulez-vous supprimer ce tournoi ?</DialogTitle>
<div className="px-6 text-center text-sm text-gray-400">Cette action est irréversible</div>
<div className="px-6 pt-4 text-center font-medium">{name}</div>
<DialogActions className="px-6 pt-4 pb-6">
<Button variant="outlined" onClick={onClose}>Non, Annuler</Button>
<Button variant="contained" color="error" onClick={onConfirm}>Oui, Supprimer</Button>
</DialogActions>
</div>
</Dialog>
);
}