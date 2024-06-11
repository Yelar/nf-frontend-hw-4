import React, { useState } from 'react';
import { uploadFile } from '../hooks/postProducts';
interface ProductModalProps {
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle product creation logic here

    // Create form data object to send to the server
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }
    }

    // Perform the file upload to the server (this is a placeholder URL)
    // axiosInstance.post('/products', formData).then(response => {
    //   console.log('Product created:', response.data);
    //   onClose();
    // }).catch(error => {
    //   console.error('Error creating product:', error);
    // });

    // Close the modal after submitting
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
              Images
            </label>
            <input
              id="images"
              type="file"
              multiple
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <button className='"bg-white-500 hover:bg-blue-70 rounded focus:outline-none focus:shadow-outline' onClick={uploadFile}>Add image</button>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
