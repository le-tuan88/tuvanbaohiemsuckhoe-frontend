import { getKanbanData } from '@/lib/crm-services';
import KanbanBoard from '@/components/crm/KanbanBoard';

export const revalidate = 0; // Dynamic, no cache

export default async function KanbanPage() {
  let kanbanData = [];
  try {
    kanbanData = await getKanbanData();
  } catch (error) {
    console.error('Failed to load kanban data', error);
  }

  return (
    <div className="h-full flex flex-col space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight">Kanban Khách Hàng</h2>
        <p className="text-gray-500 mt-1">Quản lý phễu và theo dõi tiến độ tư vấn hợp đồng bảo hiểm.</p>
      </div>

      <div className="flex-1 overflow-hidden">
        {kanbanData.length > 0 ? (
          <KanbanBoard initialData={kanbanData} />
        ) : (
          <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg">
            Hệ thống chưa tải được dữ liệu bảng Kanban hoặc chưa có khách hàng.
          </div>
        )}
      </div>
    </div>
  );
}
