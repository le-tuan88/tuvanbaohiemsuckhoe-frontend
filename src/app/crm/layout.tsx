import Link from 'next/link';

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Agent CRM</h1>
          <p className="text-xs text-gray-400 mt-1">Version 1.0 (Headless)</p>
        </div>
        
        <nav className="px-4 pb-6 space-y-1">
          <Link href="/crm" className="block px-4 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors font-medium text-sm text-gray-700 dark:text-gray-300">
            📊 Tổng quan (Dashboard)
          </Link>
          <Link href="/crm/kanban" className="block px-4 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors font-medium text-sm text-gray-700 dark:text-gray-300">
            📋 Kanban Khách hàng
          </Link>
          <Link href="/crm/upload" className="block px-4 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors font-medium text-sm text-gray-700 dark:text-gray-300">
            📤 Tải lên Chứng Nhận
          </Link>
          
          <div className="pt-8 mb-2 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Cài đặt
          </div>
          <Link href="/" className="block px-4 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors font-medium text-sm text-gray-500 dark:text-gray-400">
            🔙 Về Trang chủ Website
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10 overflow-auto">
        {children}
      </main>
      
    </div>
  );
}
