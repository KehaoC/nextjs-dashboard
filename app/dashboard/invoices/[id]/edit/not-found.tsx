import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <main className="flex h-full felx-col items-center justify-center gap-2">
            <div>
                <FaceFrownIcon className="w-10 text-gray-400"/>
            </div>
            <div>
                <h2 className="text-xl font-semibold">404 Not Found</h2>
                <p>Could not find the requested invoice.</p>
            </div>
            <div>
            <Link
                href = "/dashboard/invoices" 
                className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
            >
                Go Back
            </Link>
            </div>
        </main>
    );
}