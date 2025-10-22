// src/app/dashboard/page.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { motion } from 'framer-motion';
import DashboardHeader from '../../components/dashboardHeader'
import { tournaments as initial } from '../../data/tournaments';

export default function DashboardPage() {
    const [list, setList] = useState(initial);
    const [open, setOpen] = useState(false);
    const [target, setTarget] = useState<number | null>(null);
    const [selected, setSelected] = useState<any>(null);

    function handleDeleteClick(id: number) {
        const t = list.find((x) => x.id === id);
        setSelected(t);
        setTarget(id);
        setOpen(true);
    }

    function confirmDelete() {
        if (target == null) return;
        setList((s) => s.filter((x) => x.id !== target));
        setOpen(false);
        setTarget(null);
    }

    function handleClose() {
        setOpen(false);
        setTarget(null);
    }

    return (
        <div className="min-h-screen p-8 bg-[#0d0f14] text-white"> <div className="max-w-5xl mx-auto"> <DashboardHeader />
            <div className="mt-6 rounded-lg bg-gradient-to-r from-red-400/20 via-transparent to-transparent p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">Bienvenu John Doe</h2>
                        <p className="text-sm text-gray-300">
                            Retrouvez et suivez vos compétitions créées.
                        </p>
                    </div>
                    <div className="flex gap-4 bg-amber-700">
                        <div className="bg-white/10 px-4 py-2 rounded text-center">
                            <div className="text-sm">5</div>
                            <div className="text-xs text-gray-300">TOTAL TOURNOIS</div>
                        </div>
                        <div className="bg-amber-50 px-4 py-2 rounded-lg text-center text-black">
                            <div className="text-sm">160</div>
                            <div className="text-xs text-black">TOTAL PARTICIPANTS</div>
                        </div>
                        <div className="bg-white/10 px-4 py-2 rounded text-center">
                            <div className="text-sm">3/5</div>
                            <div className="text-xs text-gray-300">TOURNOIS ACTIFS</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Mes Tournois</h3>
                <Button variant="contained" color="error" size="small">
                    Nouveau
                </Button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((t) => (
                    <motion.div
                        key={t.id}
                        whileHover={{ scale: 1.03 }}
                        className="rounded-lg overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-md"
                    >
                        <div className="relative h-40 w-full">
                            <Image src={t.image} alt={t.title} fill className="object-cover opacity-90" />
                        </div>
                        <div className="p-4">
                            <h4 className="text-lg font-semibold mb-2">{t.title}</h4>
                            <p className="text-xs text-gray-300 mb-1">Date: {t.date}</p>
                            <p className="text-xs text-gray-300 mb-1">Lieu: {t.location}</p>
                            <p className="text-xs text-gray-300 mb-3">
                                Nombre de joueurs: {t.players}
                            </p>
                            <div className="flex justify-between items-center">
                                <Button variant="contained" size="small">
                                    CONTINUER
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    size="small"
                                    onClick={() => handleDeleteClick(t.id)}
                                >
                                    Supprimer
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Voulez-vous supprimer ce tournoi ?</DialogTitle>
                <DialogContent>
                    <p className="text-gray-700">{selected?.title}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Non, Annuler</Button>
                    <Button color="error" variant="contained" onClick={confirmDelete}>
                        Oui, Supprimer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        </div>

);
}
