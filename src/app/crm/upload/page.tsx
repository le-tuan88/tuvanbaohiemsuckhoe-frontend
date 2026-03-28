import GcnUploadForm from '@/components/crm/GcnUploadForm';

export default function UploadPage() {
  return (
    <div className="h-full flex flex-col space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight">Tải lên Chứng nhận (GCN)</h2>
        <p className="text-gray-500 mt-1">Hệ thống hỗ trợ nén ảnh tự động để tối ưu dung lượng lưu trữ.</p>
      </div>

      <div className="flex-1 flex items-start justify-start pt-6">
        <GcnUploadForm />
      </div>
    </div>
  );
}

