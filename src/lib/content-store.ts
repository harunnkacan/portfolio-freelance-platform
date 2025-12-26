import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { makaleler, urunler, kategorilerSidebar, Makale, Urun, SidebarCategory } from './content';
import { v4 as uuidv4 } from 'uuid';
interface ContentState {
  posts: Makale[];
  products: Urun[];
  categories: SidebarCategory[];
  addPost: (post: Omit<Makale, 'id' | 'tarih' | 'okunma'>) => void;
  updatePost: (id: string, post: Partial<Makale>) => void;
  deletePost: (id: string) => void;
  addProduct: (product: Omit<Urun, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Urun>) => void;
  deleteProduct: (id: string) => void;
  addCategory: (category: SidebarCategory) => void;
  updateCategory: (ad: string, category: Partial<SidebarCategory>) => void;
  deleteCategory: (ad: string) => void;
}
export const useContentStore = create<ContentState>()(
  persist(
    (set) => ({
      posts: makaleler,
      products: urunler,
      categories: kategorilerSidebar,
      addPost: (post) => set((state) => {
        const slug = post.slug || post.baslik.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        return {
          posts: [
            {
              ...post,
              id: uuidv4(),
              tarih: new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: 'numeric' }),
              okunma: '0',
              slug,
              metaTitle: post.metaTitle || post.baslik,
              metaDescription: post.metaDescription || post.ozet
            },
            ...state.posts
          ]
        };
      }),
      updatePost: (id, updatedPost) => set((state) => ({
        posts: state.posts.map((p) => (p.id === id ? { ...p, ...updatedPost } : p))
      })),
      deletePost: (id) => set((state) => ({
        posts: state.posts.filter((p) => p.id !== id)
      })),
      addProduct: (product) => set((state) => {
        const slug = product.slug || product.ad.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        return {
          products: [
            { 
              ...product, 
              id: uuidv4(),
              slug,
              metaTitle: product.metaTitle || product.ad,
              metaDescription: product.metaDescription || product.aciklama
            },
            ...state.products
          ]
        };
      }),
      updateProduct: (id, updatedProduct) => set((state) => ({
        products: state.products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
      })),
      deleteProduct: (id) => set((state) => ({
        products: state.products.filter((p) => p.id !== id)
      })),
      addCategory: (category) => set((state) => ({
        categories: [...state.categories, category]
      })),
      updateCategory: (ad, updatedCat) => set((state) => ({
        categories: state.categories.map((c) => (c.ad === ad ? { ...c, ...updatedCat } : c))
      })),
      deleteCategory: (ad) => set((state) => ({
        categories: state.categories.filter((c) => c.ad !== ad)
      })),
    }),
    {
      name: 'lumina-content-storage',
    }
  )
);