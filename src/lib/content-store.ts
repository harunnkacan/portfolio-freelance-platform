import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { makaleler, urunler, Makale, Urun } from './content';
import { v4 as uuidv4 } from 'uuid';
interface ContentState {
  posts: Makale[];
  products: Urun[];
  addPost: (post: Omit<Makale, 'id' | 'tarih' | 'okunma'>) => void;
  updatePost: (id: string, post: Partial<Makale>) => void;
  deletePost: (id: string) => void;
  addProduct: (product: Omit<Urun, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Urun>) => void;
  deleteProduct: (id: string) => void;
}
export const useContentStore = create<ContentState>()(
  persist(
    (set) => ({
      posts: makaleler,
      products: urunler,
      addPost: (post) => set((state) => ({
        posts: [
          {
            ...post,
            id: uuidv4(),
            tarih: new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: 'numeric' }),
            okunma: '0'
          },
          ...state.posts
        ]
      })),
      updatePost: (id, updatedPost) => set((state) => ({
        posts: state.posts.map((p) => (p.id === id ? { ...p, ...updatedPost } : p))
      })),
      deletePost: (id) => set((state) => ({
        posts: state.posts.filter((p) => p.id !== id)
      })),
      addProduct: (product) => set((state) => ({
        products: [
          { ...product, id: uuidv4() },
          ...state.products
        ]
      })),
      updateProduct: (id, updatedProduct) => set((state) => ({
        products: state.products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
      })),
      deleteProduct: (id) => set((state) => ({
        products: state.products.filter((p) => p.id !== id)
      })),
    }),
    {
      name: 'lumina-content-storage',
    }
  )
);