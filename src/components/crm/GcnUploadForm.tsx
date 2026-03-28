'use client';

import { useState } from 'react';
import { uploadMedia } from '@/lib/crm-services';

export default function GcnUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const optimizeImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      // Basic check
      if (!file.type.startsWith('image/')) {
        resolve(file); // Return untouched if not an image (e.g. PDF)
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          let width = img.width;
          let height = img.height;

          // Resize logic
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob((blob) => {
            if (blob) {
              const optFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              resolve(optFile);
            } else {
              reject(new Error('Canvas to Blob failed'));
            }
          }, 'image/jpeg', 0.8); // 80% quality
        };
        img.onerror = () => reject(new Error('Image processing failed'));
      };
      reader.onerror = () => reject(new Error('File reading failed'));
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Vui lòng chọn file GCN/CCCD.');
      return;
    }

    setIsUploading(true);
    setError('');
    setSuccess('');

    try {
      // Step 1: Optimize if image
      const optimizedFile = await optimizeImage(file);
      
      // Step 2: Upload logic via service
      const response = await uploadMedia(optimizedFile);

      setSuccess(`Upload thành công! Media ID: ${response.id}`);
      setFile(null); // Reset
    } catch (err: any) {
      setError(err.message || 'Lỗi hệ thống khi upload file.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm w-full max-w-md border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-4">Tải lên GCN / CCCD</h3>
      
      {error && <div className="mb-4 bg-red-50 text-red-600 p-3 rounded text-sm">{error}</div>}
      {success && <div className="mb-4 bg-green-50 text-green-700 p-3 rounded text-sm">{success}</div>}
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Chọn File (Ảnh/PDF, hệ thống tự tối ưu dung lượng)
        </label>
        <input 
          type="file" 
          accept="image/*,.pdf" 
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-200"
        />
      </div>

      <button 
        type="submit" 
        disabled={isUploading || !file}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isUploading ? 'Đang tải lên...' : 'Tải lên Hệ Thống'}
      </button>

      <p className="mt-4 text-xs text-gray-500">
        * File ảnh sẽ được tự động resize {"<"} 1200px để tiết kiệm dung lượng CMS.
      </p>
    </form>
  );
}
