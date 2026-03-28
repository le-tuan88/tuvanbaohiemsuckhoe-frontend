'use client';

import { useState } from 'react';
import { updateCustomerStatus } from '@/lib/crm-services';

type KanbanCard = {
  id: number;
  title: string;
  phone: string;
};

type KanbanColumn = {
  id: string;
  title: string;
  cards: KanbanCard[];
};

export default function KanbanBoard({ initialData }: { initialData: KanbanColumn[] }) {
  const [columns, setColumns] = useState<KanbanColumn[]>(initialData);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (cardId: number, currentStatus: string, newStatus: string) => {
    if (currentStatus === newStatus) return;
    setIsUpdating(true);

    // Optimistic Update
    const newColumns = columns.map(col => {
      // Remove from old column
      if (col.id === currentStatus) {
        return { ...col, cards: col.cards.filter(c => c.id !== cardId) };
      }
      return col;
    });

    // Find card and add to new column
    const card = columns.find(c => c.id === currentStatus)?.cards.find(c => c.id === cardId);
    if (card) {
      const targetColIndex = newColumns.findIndex(c => c.id === newStatus);
      if (targetColIndex > -1) {
        newColumns[targetColIndex].cards.push(card);
      }
    }

    setColumns(newColumns);

    try {
      await updateCustomerStatus(cardId, newStatus);
    } catch (error) {
      console.error('Failed to update status', error);
      // Revert on error
      setColumns(initialData);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex overflow-x-auto gap-4 pb-4">
      {columns.map((column) => (
        <div key={column.id} className="min-w-[280px] bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm flex flex-col">
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-4 flex justify-between">
            {column.title}
            <span className="bg-gray-200 dark:bg-gray-700 text-xs py-1 px-2 rounded-full">{column.cards.length}</span>
          </h3>
          
          <div className="flex-1 space-y-3">
            {column.cards.map((card) => (
              <div key={card.id} className="bg-white dark:bg-gray-900 p-3 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="font-medium text-sm mb-1">{card.title}</p>
                <p className="text-xs text-gray-500 mb-3">{card.phone || 'Chưa cập nhật SĐT'}</p>
                
                <select 
                  className="w-full text-xs p-1.5 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
                  value={column.id}
                  onChange={(e) => handleStatusChange(card.id, column.id, e.target.value)}
                  disabled={isUpdating}
                >
                  {columns.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.title}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
