module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Or the correct path where Tailwind classes are used
    './public/index.html',         // If you're using any Tailwind classes directly in your HTML
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // Table classes
    'min-h-screen', 'bg-gray-50', 'py-8', 'px-4',
    'max-w-5xl', 'mx-auto', 'bg-white', 'p-6', 'rounded-lg', 'shadow',
    'text-2xl', 'font-bold', 'text-gray-700', 'mb-6', // Todo list heading classes
    'mb-4', 'bg-blue-500', 'text-white', 'rounded', 'hover:bg-blue-600', // Button classes
    'overflow-x-auto', 'min-w-full', 'border', 'rounded-lg', 'overflow-hidden', // Table container and row classes
    'text-left', 'text-sm', 'px-4', 'py-2', 'text-gray-600', // Table header classes
    'bg-blue-100', 'text-gray-700', 'border-b', 'hover:bg-gray-100', 'transition', // Table body row classes
    'ml-2', 'text-blue-600', 'text-red-600', 'hover:underline', // Action button classes (Edit, Delete)
    'fixed', 'inset-0', 'bg-black', 'bg-opacity-30', 'flex', 'justify-center', 'items-center', 'z-50', // Modal container
    'bg-white', 'p-6', 'shadow-lg', 'w-96', 'text-xl', 'font-bold', 'text-gray-700', // Modal styling
    'w-full', 'border', 'rounded', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-300', 'mb-4', // Input, select, textarea classes
    'block', 'text-gray-600', 'mb-2', 'text-gray-600', 'flex', 'items-center', // Input/label classes
    'mr-2', 'text-gray-600', 'hover:bg-gray-300', 'bg-gray-200', // Cancel button styles
    'px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded', 'hover:bg-blue-600', // Add/Update button styles
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}
