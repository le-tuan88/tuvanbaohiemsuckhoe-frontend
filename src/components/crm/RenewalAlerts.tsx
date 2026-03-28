'use client';

type RenewalAlert = {
  id: number;
  title: string;
  expiry_date: string;
  days_left: number;
  customer_id: string;
};

export default function RenewalAlerts({ alerts }: { alerts: RenewalAlert[] }) {
  if (!alerts || alerts.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-2">Cảnh báo Tái tục</h3>
        <p className="text-gray-500 text-sm">Không có khách hàng nào sắp hết hạn GCN trong 30 ngày tới.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-400">🚨 Cảnh báo Tái tục (30 ngày)</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400">
            <tr>
              <th className="py-3 px-4 font-medium rounded-tl-lg">Khách hàng / GCN</th>
              <th className="py-3 px-4 font-medium">Ngày hết hạn</th>
              <th className="py-3 px-4 font-medium rounded-tr-lg">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
            {alerts.map((alert) => {
              const urgencyColor = alert.days_left <= 3 
                ? 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400' 
                : alert.days_left <= 15
                  ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400'
                  : 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400';

              return (
                <tr key={alert.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="py-3 px-4 font-medium">{alert.title}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                    {new Date(alert.expiry_date).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${urgencyColor}`}>
                      Còn {alert.days_left} ngày
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
