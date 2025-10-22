// src/components/DashboardHeader.tsx
'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


export default function DashboardHeader() {
    return (
        <Box className="w-full p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="text-red-400 font-bold text-xl">NQ25</div>
                <div className="rounded-full bg-gray-800 px-4 py-2 flex items-center gap-2">
                    <SearchIcon />
                    <InputBase placeholder="Rechercher" />
                </div>
            </div>


            <div className="flex items-center gap-4">
                <IconButton size="small" className="bg-gray-800">
                    +
                </IconButton>
                <div className="flex items-center gap-2">
                    <Avatar sx={{ width: 36, height: 36 }}>JD</Avatar>
                    <div className="text-sm">
                        <div>Michel Doe</div>
                        <div className="text-xs text-gray-400">Déconnexion</div>
                    </div>
                </div>
            </div>
        </Box>
    );
}