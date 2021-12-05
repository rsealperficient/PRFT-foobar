import { HeartIcon } from '@heroicons/react/solid'

export default function Footer() {
    return (
    <footer className="flex justify-center py-8 text-gray-600 text-sm">
      <div>
        Made with{' '} <HeartIcon className="inline h-5 w-5 text-red-400" />
        {' '}by Andy Merhaut 
      </div>
    </footer>
    )
}
