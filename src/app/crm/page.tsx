import { getAnalytics, getRenewalAlerts } from '@/lib/crm-services';
import RenewalAlerts from '@/components/crm/RenewalAlerts';

// Revalidate dashboard every hour
export const revalidate = 3600;

export default async function CrmDashboard() {
  // Graceful fallback during dev if API isn't ready
  let analytics = { contracts_won: 0, revenue: 0, est_commission: 0 };
  let alerts = [];

  try {
    const [analyticsData, alertsData] = await Promise.all([
      getAnalytics(),
      getRenewalAlerts(),
    ]);
    analytics = analyticsData;
    alerts = alertsData;
  } catch (error) {
    console.error('Failed to fetch CRM data. Using fallback.', error);
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight">Tổng Quan Trạng Thái</h2>
        <p className="text-gray-500 mt-1">Hello Agent, chúc bạn một ngày chốt sale thành công!</p>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg shadow-blue-500/30">
          <p className="text-blue-100 text-sm font-medium mb-1">Hợp đồng đã chốt (Tháng)</p>
          <div className="text-4xl font-bold">{analytics.contracts_won}</div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg shadow-purple-500/30">
          <p className="text-indigo-100 text-sm font-medium mb-1">Doanh số Ghi nhận</p>
          <div className="text-4xl font-bold">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(analytics.revenue)}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white shadow-lg shadow-emerald-500/30">
          <p className="text-emerald-100 text-sm font-medium mb-1">Hoa hồng Dự kiến</p>
          <div className="text-4xl font-bold">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(analytics.est_commission)}
          </div>
        </div>
      </div>

      {/* Renewal Alerts Table Component */}
      <RenewalAlerts alerts={alerts} />

    </div>
  );
}
