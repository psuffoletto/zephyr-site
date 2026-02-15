import type { Product, Category } from './products';

// ─── BEDDING CATEGORIES ───

export const beddingCategories: Category[] = [
  {
    name: 'Delivery',
    slug: 'delivery',
    tagline: 'Bedding Delivery Systems',
    description: 'Pneumatic and mechanical bedding delivery systems designed to transport clean bedding material from bulk storage to vivarium dispensing stations over short and long distances.',
    num: '01',
  },
  {
    name: 'Dispensing',
    slug: 'dispensing',
    tagline: 'Cage Bedding Dispensers',
    description: 'Semi-automatic and automatic bedding dispensing systems for filling rodent cages with precise, consistent amounts of bedding material in vivarium and life science facilities.',
    num: '02',
  },
  {
    name: 'Disposal',
    slug: 'disposal',
    tagline: 'Waste Bedding Removal',
    description: 'Vacuum-fed and gravity-fed waste bedding disposal systems for clean, efficient removal of soiled bedding from cage changing operations in vivarium facilities.',
    num: '03',
  },
];

// ─── BEDDING PRODUCTS ───

export const beddingProducts: Product[] = [
  // ── DELIVERY ──
  {
    name: 'LX Series Bedding Delivery',
    slug: 'lx-series',
    modelNumber: 'LX',
    category: 'delivery',
    heroImage: '/images/products/heroes/lx-hero.png',
    productImage: '/images/products/renders/lx-render.png',
    accentLabel: 'Light Duty Delivery',
    tagline: 'Compact pneumatic bedding delivery for small to mid-size vivarium facilities',
    description: 'The LX Series is a compact pneumatic bedding delivery system designed for smaller vivarium facilities with shorter conveying distances. Engineered for reliable, low-maintenance operation, the LX delivers clean bedding from a bulk source to one or more dispensing stations with minimal dust generation.',
    keySpecs: [
      { value: '150 Ft.', label: 'Max Distance' },
      { value: 'Compact', label: 'Footprint' },
      { value: 'Low', label: 'Maintenance' },
      { value: 'Enclosed', label: 'Convey Lines' },
    ],
    features: [
      { title: 'Compact Design', desc: 'Space-efficient footprint ideal for smaller facilities or retrofit installations where floor space is at a premium.' },
      { title: 'Enclosed Conveying', desc: 'Fully enclosed pneumatic convey lines prevent contamination and contain dust throughout the delivery process.' },
      { title: 'Low Maintenance Operation', desc: 'Simplified mechanical design with fewer moving parts reduces maintenance requirements and downtime.' },
      { title: 'Single or Multi-Station Delivery', desc: 'Configurable to deliver bedding to one or more dispensing stations based on facility layout and throughput needs.' },
      { title: 'Quiet Operation', desc: 'Engineered for reduced noise levels suitable for vivarium environments where animal welfare is a priority.' },
      { title: 'Easy Integration', desc: 'Designed to integrate with existing Zephyr dispensing equipment and facility infrastructure.' },
    ],
    applications: [
      'Vivarium Operations', 'Life Sciences', 'Laboratory Animal Facilities',
      'Pharmaceutical Research', 'University Research',
    ],
  },
  {
    name: 'MX Series Bedding Delivery',
    slug: 'mx-series',
    modelNumber: 'MX',
    category: 'delivery',
    heroImage: '/images/products/heroes/mx-hero.jpg',
    productImage: '/images/products/renders/mx-render.png',
    accentLabel: 'Medium Duty Delivery',
    tagline: 'Mid-range pneumatic bedding delivery with extended conveying distance',
    description: 'The MX Series is a mid-range pneumatic bedding delivery system built for medium-size vivarium facilities requiring conveying distances up to 300 feet. With higher throughput capacity than the LX Series, the MX handles multiple dispensing stations and a variety of bedding materials including corn cob, paper, and wood chip products.',
    keySpecs: [
      { value: '300 Ft.', label: 'Max Distance' },
      { value: 'Multi', label: 'Station Support' },
      { value: 'All Types', label: 'Bedding Compatible' },
      { value: 'PLC', label: 'Controlled' },
    ],
    features: [
      { title: 'Extended Conveying Range', desc: 'Supports conveying distances up to 300 feet, covering mid-size facilities with centralized bedding storage.' },
      { title: 'Multi-Station Support', desc: 'Delivers bedding to multiple dispensing stations simultaneously or sequentially based on demand signals.' },
      { title: 'PLC-Based Controls', desc: 'Programmable logic controller provides automated operation, diagnostics, and integration with facility management systems.' },
      { title: 'Versatile Material Handling', desc: 'Handles all common bedding types including corn cob, paper-based, and wood chip products without adjustment.' },
      { title: 'Integrated Dust Collection', desc: 'Built-in dust collection at key transfer points maintains air quality and facility cleanliness.' },
      { title: 'Modular Construction', desc: 'Modular design allows for future expansion as facility needs grow.' },
    ],
    applications: [
      'Vivarium Operations', 'Life Sciences', 'Laboratory Animal Facilities',
      'Pharmaceutical Research', 'University Research', 'Contract Research Organizations',
    ],
  },
  {
    name: 'VX Series Bedding Delivery',
    slug: 'vx-series',
    modelNumber: 'VX',
    category: 'delivery',
    heroImage: '/images/products/heroes/vx-hero.png',
    productImage: '/images/products/renders/vx-render.png',
    accentLabel: 'Heavy Duty Delivery',
    tagline: 'High-capacity bedding delivery system for large-scale vivarium operations',
    description: 'The VX Series is a high-capacity pneumatic bedding delivery system engineered for large vivarium facilities with conveying distances up to 500 feet and high daily throughput requirements. Designed for continuous operation, the VX features redundant systems, advanced PLC controls, and comprehensive monitoring for mission-critical bedding supply.',
    keySpecs: [
      { value: '500 Ft.', label: 'Max Distance' },
      { value: 'High', label: 'Throughput' },
      { value: 'Redundant', label: 'Systems' },
      { value: 'Continuous', label: 'Operation' },
    ],
    features: [
      { title: 'Long Distance Conveying', desc: 'Engineered for conveying distances up to 500 feet, serving large-scale facilities with centralized or distributed bedding storage.' },
      { title: 'High Throughput Capacity', desc: 'Designed for facilities with high daily cage change volumes requiring continuous, reliable bedding supply.' },
      { title: 'Redundant Systems', desc: 'Built-in redundancy in critical components ensures uninterrupted operation even during maintenance or component failure.' },
      { title: 'Advanced Monitoring', desc: 'Comprehensive system monitoring with alarm notifications, performance trending, and remote diagnostic capability.' },
      { title: 'Custom Engineered', desc: 'Each VX system is custom designed to match your specific facility layout, throughput requirements, and bedding material characteristics.' },
      { title: 'Full System Integration', desc: 'Integrates with building management systems, facility scheduling software, and Zephyr dispensing and disposal equipment.' },
    ],
    applications: [
      'Vivarium Operations', 'Life Sciences', 'Laboratory Animal Facilities',
      'Pharmaceutical Research', 'University Research', 'Government Research Facilities',
    ],
  },

  // ── DISPENSING ──
  {
    name: '504 Four Chute Bedding Dispenser',
    slug: '504-series',
    modelNumber: '504',
    category: 'dispensing',
    heroImage: '/images/products/heroes/504-hero.jpg',
    productImage: '/images/products/renders/504-render.png',
    accentLabel: 'Bedding Dispensing',
    tagline: 'Semi-automatic four-cage bedding dispenser for life science facilities',
    description: 'The 504 Series is a semi-automatic unit designed to dispense bedding into four standard rodent cages simultaneously or individually when placed into position within the filling area. Capable of handling most beddings including corn cob, paper, and wood chip based products commonly used in the life science industry, with microprocessor control and color touch screen interface.',
    keySpecs: [
      { value: '4', label: 'Dispense Chutes' },
      { value: '12 Cu.Ft.', label: 'Storage Volume' },
      { value: '304 SS', label: 'Construction' },
      { value: 'Pulse', label: 'Filter Clean' },
    ],
    features: [
      { title: 'Four Simultaneous Dispensing', desc: 'Four dispensing valves with cage-present photoelectric sensors fill four standard rodent cages simultaneously or individually, maximizing throughput in vivarium operations.' },
      { title: '304 Stainless Steel Construction', desc: '#4 finished panels and hoppers with matte finish framework and internal components for easy cleaning and compliance with life science facility standards.' },
      { title: 'Allergen Dust Collector', desc: 'Integrated allergen dust collector with pulse filter cleaning system protects operators and maintains air quality during the dispensing process.' },
      { title: 'Vacuum Transfer Capability', desc: 'Can be filled by emptying bags through the dispensing grate or via pneumatic conveying from bulk bags for higher volume applications.' },
      { title: 'Vibratory Flow Promotion', desc: 'Vibratory flow promotion system ensures consistent material flow and prevents bridging, even with fibrous or irregularly shaped bedding materials.' },
      { title: 'Zero-Waste Spillage Recovery', desc: 'Spillage passes through the dispense grate and is contained in the refill hopper, eliminating waste and keeping the work area clean.' },
    ],
    specTable: [
      { label: 'Dispensing', value: '4 chutes with cage-present photoelectric sensors' },
      { label: 'Storage Volume', value: '12 cubic feet' },
      { label: 'Construction', value: '304 S.S. #4 Finished Panels, Matte Finish Framework' },
      { label: 'Dust Collection', value: 'Allergen dust collector with pulse filter clean system' },
      { label: 'Controls', value: 'Microprocessor with color touch screen interface' },
      { label: 'Material Filling', value: 'Manual bag dump or pneumatic conveying from bulk bags' },
      { label: 'Flow Promotion', value: 'Vibratory system' },
      { label: 'Materials Handled', value: 'Corn cob, paper, wood chip beddings' },
      { label: 'Options', value: 'Integral air compressor, HEPA filter exhaust, dust collection system' },
    ],
    applications: [
      'Life Sciences', 'Vivarium Operations', 'Laboratory Animal Facilities',
      'Pharmaceutical Research', 'University Research',
    ],
  },
  {
    name: '506 Six Chute Bedding Dispenser',
    slug: '506-series',
    modelNumber: '506',
    category: 'dispensing',
    accentLabel: 'Bedding Dispensing',
    tagline: 'High-throughput six-cage bedding dispenser for large vivarium operations',
    description: 'The 506 Series is a high-throughput bedding dispensing unit designed to fill six standard rodent cages simultaneously. Built for larger vivarium facilities with high daily cage change volumes, the 506 features expanded storage capacity, advanced PLC controls, and the same proven dispensing technology as the 504 Series with increased productivity.',
    keySpecs: [
      { value: '6', label: 'Dispense Chutes' },
      { value: '18 Cu.Ft.', label: 'Storage Volume' },
      { value: '304 SS', label: 'Construction' },
      { value: 'PLC', label: 'Controlled' },
    ],
    features: [
      { title: 'Six Simultaneous Dispensing', desc: 'Six dispensing chutes with cage-present sensors fill six standard rodent cages at once, increasing throughput by 50% over four-chute models.' },
      { title: 'Expanded Storage', desc: '18 cubic foot storage hopper reduces refill frequency, keeping operators focused on cage changing rather than material loading.' },
      { title: '304 Stainless Steel Construction', desc: '#4 finished panels and hoppers with matte finish framework for easy cleaning and full compliance with life science facility standards.' },
      { title: 'PLC-Based Controls', desc: 'Advanced PLC controls with color touch screen interface provide precise dispense volume control, diagnostics, and data logging capability.' },
      { title: 'Integrated Dust Collection', desc: 'High-efficiency allergen dust collection system with automatic pulse filter cleaning protects operators and maintains facility air quality.' },
      { title: 'Pneumatic Fill Compatible', desc: 'Designed for pneumatic conveying fill from bulk storage for continuous, hands-free bedding supply in high-volume facilities.' },
    ],
    applications: [
      'Life Sciences', 'Vivarium Operations', 'Laboratory Animal Facilities',
      'Pharmaceutical Research', 'University Research', 'Contract Research Organizations',
    ],
  },

  // ── DISPOSAL ──
  {
    name: 'VF-Series Waste Bedding Disposal',
    slug: 'vf-series',
    modelNumber: 'VF',
    category: 'disposal',
    accentLabel: 'Waste Handling',
    tagline: 'Vacuum-fed waste bedding disposal with up to 1,000 ft. conveying distance',
    description: 'The VF-Series Waste Bedding Delivery System is designed for vacuum-fed waste bedding disposal applications supporting convey distances up to 1,000 feet. Designed for use with vacuum-rated roll-off type dumpsters, the system can accommodate multiple dump stations and dumpsters ranging from small totes up to 12 cubic yard dumpsters.',
    keySpecs: [
      { value: '1,000 Ft.', label: 'Convey Distance' },
      { value: '12 Cu.Yd.', label: 'Max Dumpster' },
      { value: 'Multi', label: 'Dump Stations' },
      { value: 'Vacuum', label: 'Fed System' },
    ],
    features: [
      { title: 'Long Distance Conveying', desc: 'Vacuum-fed design supports conveying distances up to 1,000 feet, allowing centralized waste collection from multiple points across large facilities.' },
      { title: 'Flexible Dumpster Sizes', desc: 'Accommodates a range of waste containers from small totes up to 12 cubic yard roll-off type dumpsters for facilities of any size.' },
      { title: 'Multiple Dump Stations', desc: 'System can accommodate multiple dump stations throughout the facility, providing convenient waste disposal access for cage changing operations.' },
      { title: 'Vacuum-Rated Containers', desc: 'Designed for use with vacuum-rated roll-off type dumpsters that contain waste securely during the conveying process.' },
    ],
    specTable: [
      { label: 'Conveying Distance', value: 'Up to 1,000 feet' },
      { label: 'Dumpster Capacity', value: 'Small totes to 12 cubic yard roll-off' },
      { label: 'Dump Stations', value: 'Multiple stations supported' },
      { label: 'Conveying Method', value: 'Vacuum-fed pneumatic' },
      { label: 'Container Type', value: 'Vacuum-rated roll-off type dumpsters' },
    ],
    applications: [
      'Vivarium Operations', 'Life Sciences', 'Laboratory Animal Facilities',
      'Pharmaceutical Research', 'University Research',
    ],
  },
  {
    name: 'GF-Series Waste Bedding Disposal',
    slug: 'gf-series',
    modelNumber: 'GF',
    category: 'disposal',
    heroImage: '/images/products/heroes/gf-series-hero.png',
    productImage: '/images/products/renders/gf-render.png',
    accentLabel: 'Waste Handling',
    tagline: 'Gravity-fed waste bedding disposal system for vivarium facilities',
    description: 'The GF-Series Waste Bedding Delivery System is designed for gravity-fed waste bedding disposal applications in vivarium and laboratory animal facilities. The system provides a clean, efficient method for disposing of soiled bedding material from cage changing operations.',
    keySpecs: [
      { value: 'Gravity', label: 'Fed System' },
      { value: 'Enclosed', label: 'Disposal Path' },
      { value: 'Clean', label: 'Operation' },
      { value: 'Vivarium', label: 'Designed' },
    ],
    features: [
      { title: 'Gravity-Fed Design', desc: 'Simple gravity-fed operation minimizes mechanical complexity and maintenance requirements while providing reliable waste bedding disposal.' },
      { title: 'Enclosed Disposal Path', desc: 'Fully enclosed waste handling path prevents contamination and odors from spreading through the facility during disposal operations.' },
      { title: 'Vivarium Optimized', desc: 'Designed specifically for vivarium and laboratory animal facility workflows, integrating seamlessly with cage changing operations.' },
      { title: 'Clean Operation', desc: 'Contained system keeps the work environment clean and sanitary, supporting facility hygiene standards and worker safety.' },
    ],
    applications: [
      'Vivarium Operations', 'Life Sciences', 'Laboratory Animal Facilities',
      'Pharmaceutical Research', 'University Research',
    ],
  },
];

// ─── HELPERS ───

export function getBeddingCategoryBySlug(slug: string): Category | undefined {
  return beddingCategories.find(c => c.slug === slug);
}

export function getBeddingProductBySlug(slug: string): Product | undefined {
  return beddingProducts.find(p => p.slug === slug);
}

export function getBeddingProductsByCategory(categorySlug: string): Product[] {
  return beddingProducts.filter(p => p.category === categorySlug);
}

export function getRelatedBeddingProducts(product: Product, limit = 5): Product[] {
  return beddingProducts
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}

export function getOtherBeddingCategories(currentSlug: string): Category[] {
  return beddingCategories.filter(c => c.slug !== currentSlug);
}
