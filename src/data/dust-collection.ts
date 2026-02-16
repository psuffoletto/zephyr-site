import type { Product, Category } from './products';

// ─── DUST COLLECTION CATEGORIES ───

export const dustCollectionCategories: Category[] = [
  {
    name: 'Cartridge Collectors',
    slug: 'cartridge-collectors',
    tagline: 'Cartridge Dust Collectors',
    description: 'High-efficiency cartridge dust collectors for fine particulate capture in industrial processing environments.',
    num: '01',
  },
  {
    name: 'Baghouse Filters',
    slug: 'baghouse-filters',
    tagline: 'Baghouse Filtration Systems',
    description: 'Heavy-duty baghouse filtration systems for high-volume dust collection in demanding applications.',
    num: '02',
  },
  {
    name: 'Ventilation Systems',
    slug: 'ventilation-systems',
    tagline: 'Industrial Ventilation',
    description: 'Custom-designed ventilation and ductwork solutions engineered for optimal airflow and dust capture.',
    num: '03',
  },
];

// ─── DUST COLLECTION PRODUCTS ───

export const dustCollectionProducts: Product[] = [
  // ── CARTRIDGE COLLECTORS ──
  {
    name: 'IR2-4 Cartridge Dust Collector',
    slug: 'ir2-4-cartridge-dust-collector',
    modelNumber: 'IR2-4',
    category: 'cartridge-collectors',
    productImage: '/images/dust-render.png',
    accentLabel: 'Cartridge Dust Collection',
    tagline: 'Compact cartridge dust collector for industrial ventilation and process air filtration',
    description: 'The IR2-4 is a compact, high-efficiency cartridge dust collector designed for industrial dust collection and process air filtration applications. Featuring a two-cartridge configuration, the IR2-4 delivers reliable particulate capture in a space-efficient footprint, with pulse-jet filter cleaning for continuous operation and low maintenance.',
    keySpecs: [
      { value: '2', label: 'Cartridges' },
      { value: 'Pulse Jet', label: 'Filter Clean' },
      { value: 'Compact', label: 'Footprint' },
      { value: 'Industrial', label: 'Rated' },
    ],
    features: [
      { title: 'High-Efficiency Cartridge Filtration', desc: 'Two pleated cartridge filters provide high surface area for efficient particulate capture across a wide range of industrial dust types.' },
      { title: 'Pulse-Jet Cleaning', desc: 'Automatic pulse-jet filter cleaning system maintains filter performance and extends cartridge life without shutting down the collector.' },
      { title: 'Compact Design', desc: 'Space-efficient footprint allows installation in areas where floor space is limited, without sacrificing filtration capacity.' },
      { title: 'Heavy-Duty Construction', desc: 'Welded steel construction with industrial-grade components designed for continuous operation in demanding environments.' },
      { title: 'Easy Cartridge Access', desc: 'Quick-change cartridge design allows fast filter replacement with minimal downtime and no special tools required.' },
      { title: 'Flexible Installation', desc: 'Configurable inlet and outlet positions accommodate a variety of ductwork layouts and facility configurations.' },
    ],
    applications: [
      'Industrial Manufacturing', 'Chemical Processing', 'Pharmaceutical', 'Food Processing',
      'Plastics', 'Woodworking', 'Metal Fabrication',
    ],
  },
];

// ─── HELPERS ───

export function getDustCollectionCategoryBySlug(slug: string): Category | undefined {
  return dustCollectionCategories.find(c => c.slug === slug);
}

export function getDustCollectionProductBySlug(slug: string): Product | undefined {
  return dustCollectionProducts.find(p => p.slug === slug);
}

export function getDustCollectionProductsByCategory(categorySlug: string): Product[] {
  return dustCollectionProducts.filter(p => p.category === categorySlug);
}

export function getRelatedDustCollectionProducts(product: Product, limit = 5): Product[] {
  return dustCollectionProducts
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}

export function getOtherDustCollectionCategories(currentSlug: string): Category[] {
  return dustCollectionCategories.filter(c => c.slug !== currentSlug);
}
