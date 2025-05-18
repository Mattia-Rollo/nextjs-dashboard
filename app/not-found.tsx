import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-blue-600">404</h1>
                <p className="mt-4 text-2xl font-semibold text-gray-800">Pagina non trovata</p>
                <p className="mt-2 text-gray-600">
                    La pagina che cerchi non esiste o è stata rimossa.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-white hover:bg-blue-400 transition-colors"
                >
                    <ArrowLeftIcon className="w-5" />
                    Torna alla Home
                </Link>
            </div>
        </main>
    );
}
