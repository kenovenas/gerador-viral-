
import React from 'react';
import { BookOpenIcon } from './Icons';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 shadow-lg border-b-4 border-amber-500">
            <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-center">
                <BookOpenIcon className="h-10 w-10 text-amber-400 mr-4"/>
                <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-wider">
                    Gerador de Histórias Bíblicas e Orações
                </h1>
            </div>
        </header>
    );
};

export default Header;
