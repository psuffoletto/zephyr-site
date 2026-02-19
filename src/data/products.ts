export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  desc: string;
}

export interface ProblemCard {
  title: string;
  desc: string;
}

export interface SpecTableRow {
  label: string;
  value: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  name: string;
  slug: string;
  modelNumber: string;
  category: string;
  tagline: string;
  description: string;
  accentLabel?: string;
  keySpecs: ProductSpec[];
  problems?: ProblemCard[];
  features: ProductFeature[];
  specTable?: SpecTableRow[];
  applications: string[];
  faqs?: FAQ[];
  heroImage?: string;
  productImage?: string;
  sketchfabId?: string;
  galleryImages?: string[];
}

export interface Category {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  num: string;
}

// ─── CATEGORIES ───

export const categories: Category[] = [
  {
    name: 'Unload',
    slug: 'unload',
    tagline: 'Receiving & Material Introduction',
    description: 'Dry bulk material unloading systems and equipment designed, engineered, and manufactured to bring customized solutions to dry material processing operations.',
    num: '01',
  },
  {
    name: 'Fill',
    slug: 'fill',
    tagline: 'Packaging & Dispensing',
    description: 'Filling and dispensing systems for containers, bulk bags, and automated bedding distribution in life science and industrial applications.',
    num: '02',
  },
  {
    name: 'Store',
    slug: 'store',
    tagline: 'Bulk Storage Solutions',
    description: 'Modular storage silos and intermediate containers engineered for additional system capacity with flexible inlet, outlet, and discharge configurations.',
    num: '03',
  },
  {
    name: 'Filter',
    slug: 'filter',
    tagline: 'Material Separation & Filtration',
    description: 'Material filter receivers designed to handle fine bulk materials in vacuum pneumatic conveying systems with automatic pulse filter cleaning.',
    num: '04',
  },
  {
    name: 'Convey',
    slug: 'convey',
    tagline: 'Pneumatic Conveying Systems',
    description: 'Packaged pneumatic conveyors and integrated conveying systems for transporting dry bulk materials over short and long distances.',
    num: '05',
  },
  {
    name: 'Clean',
    slug: 'clean',
    tagline: 'Dust Collection & Containment',
    description: 'Dust collection and containment solutions integrated into unloading, filling, and dispensing equipment for a safer, cleaner working environment.',
    num: '06',
  },
  {
    name: 'Automate',
    slug: 'automate',
    tagline: 'Controls & Automation',
    description: 'Non-proprietary PLC-based controls packages to automate and control all process functions associated with pneumatic conveying systems.',
    num: '07',
  },
  {
    name: 'Power',
    slug: 'power',
    tagline: 'Vacuum Power Units',
    description: 'Vacuum power units and blower packages that drive pneumatic conveying systems. Contact us to discuss power solutions for your application.',
    num: '08',
  },
];

// ─── PRODUCTS ───

export const products: Product[] = [
  // ── UNLOAD ──
  {
    name: '14v Direct From Bag Unloader',
    slug: '14v-direct-bag-unloader',
    modelNumber: '14v',
    category: 'unload',
    heroImage: '/images/products/heroes/14v-hero.png',
    productImage: '/images/14v-product2.png',
    accentLabel: 'Bag Unloading',
    tagline: 'Automated bulk bag and drum unloading in a compact footprint',
    description: 'The 14v Series takes the heavy lifting out of emptying drums or bulk bags. Designed to handle free-flowing granules, pellets, or powders, this unique design draws the material from the top of the bag automatically. During the unloading operation, the carriage stretches the bag, forcing the material to the center, promoting continuous and complete discharge.',
    keySpecs: [
      { value: 'Bulk Bags', label: 'or Drums/Totes' },
      { value: '96" Tall', label: 'Low Headroom' },
      { value: '60"', label: 'Max Bag Height' },
      { value: '100%', label: 'Empty' },
    ],
    features: [
      { title: 'Automatic Top-Draw Design', desc: 'Unique wand system draws material from the top of the bag automatically, eliminating manual lifting and promoting continuous, complete discharge.' },
      { title: 'Compact Footprint', desc: 'Center mast with 16" x 16" base plate allows the unloader to be utilized in tight spaces or low headroom applications where other systems won\'t fit.' },
      { title: 'Inflation Collar & Dust Containment', desc: 'Manual inflation collar seals the bag snout or drum liner, containing dust during the unloading process for a cleaner work environment.' },
      { title: 'Simple Touch Screen Control', desc: 'Intuitive touch screen interface for easy changeover operation and adjustment to system settings without specialized training.' },
      { title: 'UHMW Wear-Resistant Guides', desc: 'Nylon centering rollers and UHMW wear-resistant guides ensure smooth bag handling and long service life with minimal maintenance.' },
      { title: 'Compressed Air Operation', desc: 'Compressed air driven wand and carriage actuator with precision regulator for reliable, consistent performance in any facility.' },
    ],
    specTable: [
      { label: 'Electrical', value: '5 AMP at 120 VAC, 1 Phase, 60 Hertz' },
      { label: 'Compressed Air', value: '10 CFM at 90 PSI (Intermittent Duty), Clean & Dry' },
      { label: 'Materials Handled', value: 'Free-flowing granules, pellets, powders' },
      { label: 'Base Plate', value: '16" x 16" secured to floor' },
      { label: 'Construction', value: 'Heavy duty structural tube, textured powder coat finish' },
      { label: 'Controls', value: 'Touch screen with adjustable system settings' },
      { label: 'Guides', value: 'UHMW wear-resistant with nylon centering rollers' },
      { label: 'Bag Handling', value: 'Flexible bag snout arms with adjustable wand bag guard' },
    ],
    applications: [
      'Chemical Processing', 'Food & Beverage', 'Pharmaceutical', 'Plastics & Pellets',
      'Mineral Processing', 'Life Sciences', 'Dairy',
    ],
    galleryImages: ['/images/unload-hero.png', '/images/hero/homepage-hero2.jpg', '/images/14v-install-3.png', '/images/14v-install-4.png', '/images/14v-install-5.png'],
    faqs: [
      { question: 'What types of bags can the 14v handle?', answer: 'The 14v is designed to handle standard bulk bags (FIBCs) and drums containing free-flowing granules, pellets, or powders. The flexible bag snout arms and adjustable wand bag guard accommodate a wide range of bag sizes and configurations.' },
      { question: 'How much headroom is needed?', answer: 'The 14v is specifically designed for tight spaces and low headroom applications. The compact center mast design with a 16" x 16" base plate requires significantly less overhead clearance than traditional fork-style or hoist-based unloaders.' },
      { question: 'How is dust controlled during unloading?', answer: 'The inflation collar seals the bag snout or drum liner during the unloading operation, containing dust at the source. The system can also be integrated with downstream dust collection equipment for additional containment.' },
    ],
  },
  {
    name: '16-02 Hoist & Trolley Bulk Bag Unloader',
    slug: '16-02-bulk-bag-unloader',
    modelNumber: '16-02',
    category: 'unload',
    accentLabel: 'Bulk Bag Unloading',
    tagline: 'Low headroom bulk bag unloading with hoist and trolley system',
    description: 'The 16-02 Series is designed for low headroom or stacked bulk bag unloading applications where lifting access is limited. Through the use of either self-supporting or ceiling mounted carriageways, the hoist and trolley system is capable of handling large bulk bags and high density materials with ease. Carriageways with multiple trolleys can be configured to accommodate space restrictions and maximize storage capacities.',
    keySpecs: [
      { value: '15 AMP', label: '460 VAC 3-Phase' },
      { value: '1-2 CFM', label: 'Air @ 90 PSI' },
      { value: 'Low', label: 'Headroom Design' },
      { value: 'Multi', label: 'Trolley Config' },
    ],
    features: [
      { title: 'Low Headroom Design', desc: 'Purpose-built for applications where overhead clearance is limited. Self-supporting A-frame or ceiling mounted carriageways eliminate the need for tall structures.' },
      { title: 'Electric Hoist & Trolley', desc: 'Trolley-mounted electric hoist with bag support frame on a dedicated overhead carriageway handles large bulk bags and high density materials with ease.' },
      { title: 'Multi-Trolley Configurations', desc: 'Carriageways with multiple trolleys can be configured to accommodate space restrictions and maximize storage capacities for high-throughput operations.' },
      { title: 'Dust Containment', desc: 'Manual inflation collar seals the bag snout, containing dust during unloading. Optional dust collection integration available for sensitive environments.' },
      { title: 'Touch Screen Control', desc: 'Simple touch screen interface for intuitive operation and system adjustment without specialized training or programming.' },
      { title: 'Stainless Steel Options', desc: 'Available in stainless steel construction for food-grade, pharmaceutical, and washdown applications requiring corrosion resistance.' },
    ],
    specTable: [
      { label: 'Electrical', value: '15 AMP at 460 VAC, 3 Phase, 60 Hertz' },
      { label: 'Compressed Air', value: '1-2 CFM at 90 PSI (Intermittent Duty)' },
      { label: 'Carriageway', value: 'A-Frame Self Supporting or Ceiling Mounted' },
      { label: 'Construction', value: 'Carbon Steel standard, Stainless Steel optional' },
      { label: 'Controls', value: 'Touch screen with system monitoring' },
      { label: 'Options', value: 'Bag massager arms, automatic flow cut-off, dust collection integration' },
    ],
    applications: [
      'Chemical Processing', 'Food & Beverage', 'Pharmaceutical', 'Plastics',
      'Agriculture', 'Mining & Minerals', 'Life Sciences', 'Meat Processing',
    ],
  },
  {
    name: '10-00 Vacuum Wands',
    slug: '10-00-vacuum-wands',
    modelNumber: '10-00',
    category: 'unload',
    accentLabel: 'Material Pickup',
    tagline: 'Vacuum wands for picking up dry materials from drums, containers, and boxes',
    description: 'Vacuum wands are used to pick up dry materials from drums, containers, gaylord boxes, or bulk bag boxes in vacuum dilute phase pneumatic conveying systems. Each wand is specifically designed with a particular material in mind, with options for tubular bleed, adjustable bleed, and inert gas purge configurations.',
    keySpecs: [
      { value: '3 Types', label: 'Wand Styles' },
      { value: 'SS / CS / AL', label: 'Materials' },
      { value: 'SCH 40', label: 'Wall Thickness' },
      { value: 'Custom', label: 'Configurations' },
    ],
    features: [
      { title: 'Tubular Bleed Wands (Lances)', desc: 'Non-adjustable air intake design commonly used with free-flow materials. Simple, reliable construction for consistent material pickup.' },
      { title: 'Adjustable Bleed Wands', desc: 'Features an outer collar used to vary the intake air for optimal system performance. Fine-tune pickup rate for different material characteristics.' },
      { title: 'Inert Gas Purge Wands', desc: 'Equipped with a ball valve for connection to an inert motive gas source. Designed for applications requiring oxygen-free or explosion-proof material handling.' },
      { title: 'Multiple Construction Options', desc: 'Available in Carbon Steel, Stainless Steel, or Aluminum with wall thickness ranging from 16 gauge through Schedule 40 to match your application requirements.' },
    ],
    specTable: [
      { label: 'Types', value: 'Tubular Bleed (Lance), Adjustable Bleed, Inert Gas Purge' },
      { label: 'Construction', value: 'Carbon Steel, Stainless Steel, or Aluminum' },
      { label: 'Wall Thickness', value: '16 Ga. through SCH 40' },
      { label: 'Application', value: 'Vacuum dilute phase pneumatic conveying systems' },
      { label: 'Source Containers', value: 'Drums, containers, gaylord boxes, bulk bag boxes' },
    ],
    applications: [
      'Chemical Processing', 'Pharmaceutical', 'Food & Beverage', 'Plastics',
      'Mineral Processing', 'Agriculture',
    ],
  },
  {
    name: 'VFB-2060 Feedbin',
    slug: 'vfb-2060-feedbin',
    modelNumber: 'VFB-2060',
    category: 'unload',
    accentLabel: 'Material Conditioning',
    tagline: 'Stainless steel feed bin with casters and grate for vacuum conveying preconditioning',
    description: 'Feed bins precondition material for vacuum conveying prior to entering the air stream and are most commonly used under bulk bag unloading stations or other process machinery to buffer surge material. The 2 cu. ft. feed bin body is equipped with a dust hood and removable grate module, making it ideal for emptying bags in a dust-free manner.',
    keySpecs: [
      { value: '1.8–5.3', label: 'Cu. Ft. Volume' },
      { value: '304 SS', label: 'Construction' },
      { value: '1.5"–3"', label: 'Vacuum Outlets' },
      { value: '32"', label: 'Work Surface' },
    ],
    features: [
      { title: 'Stainless Steel Construction', desc: 'Full 304 stainless steel construction for easy cleaning and corrosion resistance. Crack and crevice-free welds, ground smooth for sanitary applications.' },
      { title: 'Modular Design', desc: 'Modular structure allows quick changeover of lid or cover. Universal mounting flange adapts to various discharge devices for flexible integration.' },
      { title: 'Removable Bag Grate', desc: 'Removable grate module for standard 25 kg (55 lb) bags enables dust-free emptying directly into the feed bin.' },
      { title: 'Multiple Vacuum Outlets', desc: '1 to 4 vacuum outlets with PVS Vacuum Pick-Up Adapters in standard wand sizes from 1.5" to 3" for flexible conveying configurations.' },
      { title: 'Dust Shroud Integration', desc: 'Dust shroud (hood) vent for adaptation to central dust collection systems, maintaining a clean working environment.' },
      { title: 'Easy Access Design', desc: 'Easy-opening hatch with split cover design and leg pack providing a 32" work surface height for ergonomic operation.' },
    ],
    specTable: [
      { label: 'Working Volume', value: '1.8 to 5.3 cubic feet' },
      { label: 'Construction', value: '304 Stainless Steel' },
      { label: 'Welds', value: 'Crack and crevice-free, ground smooth' },
      { label: 'Vacuum Outlets', value: '1 to 4 outlets, 1.5" to 3" wand sizes' },
      { label: 'Work Surface', value: '32" height with leg pack' },
      { label: 'Bag Grate', value: 'Removable, for 25 kg (55 lb) standard bags' },
      { label: 'Options', value: 'Caster packs, aeration pads, vibrators, level probes, dust shrouds' },
    ],
    applications: [
      'Chemical Processing', 'Pharmaceutical', 'Food & Beverage',
      'Life Sciences', 'Dairy', 'Plastics',
    ],
  },
  {
    name: '13-02 Bag Dump Station',
    slug: '13-02-bag-dump-station',
    modelNumber: '13-02',
    category: 'unload',
    heroImage: '/images/13-02-hero.png',
    productImage: '/images/13-02-product.png',
    accentLabel: 'Manual Unloading',
    tagline: 'Controlled unloading of small bags and containers with integrated dust collection',
    description: 'The 13-02 Bag Dump Station is used for the controlled unloading of small volume bags, boxes, or other containers utilized in powder handling applications. Dust created from the unloading is contained through the use of an integrated downdraft hood with dust collector, providing a safer, cleaner working environment for operators.',
    keySpecs: [
      { value: '15 AMP', label: '120 VAC Power' },
      { value: '2-4 CFM', label: 'Air @ 90 PSI' },
      { value: 'Integral', label: 'Dust Collection' },
      { value: 'Safety', label: 'Interlocked' },
    ],
    features: [
      { title: 'Integrated Dust Collection', desc: 'Built-in downdraft dust control hood contains airborne particles during the unloading process, providing a safer and cleaner working environment for operators.' },
      { title: 'Safety Interlocks', desc: 'Lift-off grate with integral safety switch and hinged lid with integral safety switch ensure safe operation. System cannot operate with guards removed.' },
      { title: 'Ergonomic Design', desc: 'Built-in staging platform at ergonomic unloading height reduces operator fatigue and injury risk during repetitive bag dumping operations.' },
      { title: 'Discharge Valves', desc: 'Discharge valves enable batch staging and metered dispensing for precise material introduction into downstream processes.' },
      { title: 'Removable Grating', desc: 'Removable steel grating over the hopper prevents non-process materials from entering the system while allowing easy cleaning access.' },
      { title: 'Rugged Construction', desc: 'Painted carbon steel construction with lift-off enclosure panels for easy maintenance access and long service life in demanding environments.' },
    ],
    specTable: [
      { label: 'Electrical', value: '15 AMP at 120 Volts, 1 Phase, 60 Hertz' },
      { label: 'Compressed Air', value: '2-4 CFM at 90 PSI (Intermittent Duty), Clean & Dry' },
      { label: 'Construction', value: 'Painted Carbon Steel' },
      { label: 'Safety', value: 'Lift-off grate and hinged lid with integral safety switches' },
      { label: 'Dust Control', value: 'Integrated downdraft hood with dust collector' },
      { label: 'Discharge', value: 'Flanged outlet connection with batch staging valves' },
      { label: 'Air Intake', value: 'Bleed valve for system air balance' },
    ],
    applications: [
      'Chemical Processing', 'Pharmaceutical', 'Food & Beverage',
      'Life Sciences', 'Plastics', 'Agriculture',
    ],
  },

  // ── FILL ──
  {
    name: '504 Four Chute Bedding Dispenser',
    slug: '504-bedding-dispenser',
    modelNumber: '504',
    category: 'fill',
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
    name: '501 Bulk Bag Fill Frame',
    slug: '501-bulk-bag-fill-frame',
    modelNumber: '501',
    category: 'fill',
    accentLabel: 'Bulk Bag Filling',
    tagline: '"X" Frame bulk bag filler with 360-degree strap access',
    description: 'The 501 Series "X" Frame Bulk Bag Filler features an innovative design that allows for access to bag straps from any side. Square tubular construction coupled with an "X" frame design provides heavy-duty performance with a versatile, operator-friendly configuration for efficient bulk bag filling operations.',
    keySpecs: [
      { value: '360°', label: 'Strap Access' },
      { value: '24-240V', label: 'Universal Power' },
      { value: '2 CFM', label: 'Air @ 90 PSI' },
      { value: 'Optional', label: 'Weigh System' },
    ],
    features: [
      { title: '"X" Frame 360° Access', desc: 'Innovative "X" frame design allows access to bag straps from any side, eliminating the need to rotate bags and speeding up the filling process.' },
      { title: 'Telescoping Stainless Legs', desc: 'Heavy duty tubular steel construction with stainless steel telescoping legs for infinite adjustability, ease of installation, and fit-up to existing equipment.' },
      { title: 'Dust-Free Filling', desc: 'Combination inner/outer feed snout with inflation collar eliminates dust leakage and product loss during the filling operation.' },
      { title: 'Automatic Level Detection', desc: 'Level controller detects when bags are full and signals the feed system to stop, preventing overfill and ensuring consistent bag weights.' },
      { title: 'Bag Inflation Port', desc: 'Bag loading spout with bag inflation port and exhaust port with filter ensures bags are properly shaped before filling begins.' },
      { title: 'Optional Weigh Frame', desc: 'Available weigh frame with four load cells and summing box for precise batch weight control. Bag tensioning straps and densification table also available.' },
    ],
    specTable: [
      { label: 'Electrical', value: '24-240 VAC or VDC Universal Power Supply' },
      { label: 'Compressed Air', value: '2 CFM at 90 PSI (Intermittent Duty), Clean & Dry' },
      { label: 'Construction', value: 'Heavy duty tubular steel with SS telescoping legs' },
      { label: 'Fill Snout', value: 'Combination inner/outer with inflation collar' },
      { label: 'Level Control', value: 'Automatic full-bag detection with feed system signal' },
      { label: 'Options', value: 'Weigh frame (4 load cells), bag tensioning, densification table, roller conveyor' },
    ],
    applications: [
      'Chemical Processing', 'Food & Beverage', 'Agriculture',
      'Plastics & Pellets', 'Mineral Processing', 'Pharmaceutical',
    ],
  },

  // ── STORE ──
  {
    name: '206 Modular Storage Silo',
    slug: '206-modular-silo',
    modelNumber: '206',
    category: 'store',
    accentLabel: 'Bulk Storage',
    tagline: 'Modular intermediate storage with flexible inlet, outlet, and discharge configurations',
    description: 'The Series 206 Modular Storage Silo is intended to be utilized as an intermediate storage container for additional system capacity. Typically located near the material loading point, this line of storage silos can accommodate a number of filling methods, inlet and outlet sizes. The 206 Series utilizes modular construction for ease of installation, maintenance, and reconfiguration as system throughput needs change.',
    keySpecs: [
      { value: 'Modular', label: 'Construction' },
      { value: 'Flexible', label: 'Inlet/Outlet' },
      { value: 'Pneumatic', label: '& Gravity Fill' },
      { value: 'Multiple', label: 'Discharge Types' },
    ],
    features: [
      { title: 'Modular Construction', desc: 'Modular design enables ease of installation, maintenance, and reconfiguration as system throughput needs change. Sections can be added or removed without replacing the entire unit.' },
      { title: 'Flexible Filling Methods', desc: 'Upper sections accommodate both pneumatic and gravity filling applications, adapting to your existing material handling infrastructure.' },
      { title: 'Multiple Discharge Options', desc: 'Lower sections can be fitted or refitted with funnels, bin activators, screw feeders, and pickup adapters to match downstream process requirements.' },
      { title: 'Adjustable Support Legs', desc: 'Adjustable support leg package allows for precise leveling and height adjustment during installation to integrate with existing equipment.' },
      { title: 'Flow Promotion System', desc: 'Aeration-type flow promotion system with vibrator mount prevents bridging and ensures reliable material discharge, even with challenging materials.' },
      { title: 'Level Sensing', desc: 'High and low level sensors provide automated inventory management and can trigger filling or discharge cycles through the control system.' },
    ],
    specTable: [
      { label: 'Construction', value: 'Carbon Steel with painted coating' },
      { label: 'Filling Methods', value: 'Pneumatic and gravity filling' },
      { label: 'Discharge Options', value: 'Funnels, bin activators, screw feeders, pickup adapters' },
      { label: 'Support', value: 'Adjustable leg package' },
      { label: 'Flow Promotion', value: 'Aeration system with vibrator mount' },
      { label: 'Level Control', value: 'High and low level sensors' },
      { label: 'Air Control', value: 'Inlet and outlet air-flow control valves' },
      { label: 'Pickup', value: 'Adjustable bleed pick-up adapter' },
      { label: 'Mounting', value: 'Universal mounting flange' },
    ],
    applications: [
      'Chemical Processing', 'Food & Beverage', 'Pharmaceutical',
      'Plastics', 'Agriculture', 'Mineral Processing',
    ],
  },

  // ── FILTER ──
  {
    name: '103 Material Filter Receiver',
    slug: '103-material-filter-receiver',
    modelNumber: '103',
    category: 'filter',
    accentLabel: 'Filtration',
    tagline: 'Modular filter receiver for vacuum pneumatic conveying systems',
    description: 'The 103 Series Material Filter Receiver is designed to handle fine bulk materials in a vacuum type pneumatic conveying system. Typically utilized when the primary separator does not have filtration (such as a cyclone or settling chamber), the modular design allows flexibility in selection of construction material, power, filtration, receiver inlet size, outlet size, and type of discharge.',
    keySpecs: [
      { value: 'PTFE', label: 'Coated Filters' },
      { value: 'Auto', label: 'Pulse Cleaning' },
      { value: 'Modular', label: 'Design' },
      { value: 'CS / SS', label: 'Construction' },
    ],
    features: [
      { title: 'Automatic Pulse Cleaning', desc: 'Automatic pulse filter cleaning system maintains consistent airflow in conditions where manual cleaning would not be practical, reducing maintenance requirements.' },
      { title: 'PTFE Coated Filters', desc: 'PTFE coated polyester filter cartridges provide excellent filtration efficiency and easy cake release for a wide range of fine bulk materials.' },
      { title: 'Modular Design', desc: 'Configurable construction materials, filter cartridges, inlet/outlet sizes, and discharge types allow the receiver to be specified for current and future application requirements.' },
      { title: 'Configurable Tube Sheet', desc: 'Configurable tube sheet accommodates a variety of filter cartridge or bag combinations to match your specific material and airflow requirements.' },
      { title: 'Multiple Discharge Types', desc: 'Selection of discharge valve types allows integration with gravity, slide plate, and butterfly valve configurations for downstream process compatibility.' },
      { title: 'Flexible Construction', desc: 'Available in Carbon Steel or Stainless Steel construction to match your application requirements for corrosion resistance and sanitary standards.' },
    ],
    specTable: [
      { label: 'Application', value: 'Vacuum type pneumatic conveying systems' },
      { label: 'Filter Media', value: 'PTFE coated polyester cartridges' },
      { label: 'Cleaning', value: 'Automatic pulse filter cleaning' },
      { label: 'Construction', value: 'Carbon Steel or Stainless Steel' },
      { label: 'Tube Sheet', value: 'Configurable for various cartridge/bag combinations' },
      { label: 'Discharge', value: 'Gravity, slide plate, or butterfly valve' },
      { label: 'Design', value: 'Modular for current and future requirements' },
    ],
    applications: [
      'Chemical Processing', 'Pharmaceutical', 'Food & Beverage',
      'Plastics', 'Mineral Processing', 'Life Sciences',
    ],
  },

  // ── CONVEY ──
  {
    name: 'PPC-1201 Packaged Pneumatic Conveyor',
    slug: 'ppc-1201-pneumatic-conveyor',
    modelNumber: 'PPC-1201',
    category: 'convey',
    accentLabel: 'Pneumatic Conveying',
    tagline: '12" packaged conveyor with integrated vacuum power unit',
    description: 'The PPC-1201 is designed to handle fine bulk materials under vacuum over short distances into a filter receiver with integrated vacuum power unit. Available in two versions for either general conveying or keep full/refill applications, the configurable design allows for a high degree of customization to match your specific process requirements.',
    keySpecs: [
      { value: '12"', label: 'Receiver Size' },
      { value: '2 Modes', label: 'Operating Modes' },
      { value: 'Integral', label: 'Vacuum Power' },
      { value: 'PTFE', label: 'Filters' },
    ],
    features: [
      { title: 'General Conveying Mode', desc: 'Vacuum power unit draws material into the receiver until a timed cycle expires, then material is discharged into the process below. Ideal for batch operations.' },
      { title: 'Keep Full / Refill Mode', desc: 'Vacuum power unit draws material into the receiver until full, discharges complete contents upon signal from equipment to be filled, then repeats automatically.' },
      { title: 'Integrated Vacuum Power', desc: 'Integral vacuum power unit eliminates the need for separate blower packages and simplifies installation and commissioning.' },
      { title: 'Pulse Filter Cleaning', desc: 'Microprocessor-controlled pulse filter cleaning with continuous, on-demand, or downtime cleaning modes for operational flexibility.' },
      { title: 'Configurable Discharge', desc: 'Selection of discharge valve types including gravity, slide plate, and butterfly options to match your downstream process requirements.' },
      { title: 'High Customization', desc: 'Configurable design allows for a high degree of customization in construction, filtration, inlet/outlet sizing, and operating parameters.' },
    ],
    specTable: [
      { label: 'Receiver Size', value: '12 inches' },
      { label: 'Construction', value: 'Carbon Steel standard' },
      { label: 'Filter Media', value: 'PTFE coated polyester' },
      { label: 'Controls', value: 'Microprocessor controlled operation' },
      { label: 'Cleaning', value: 'Pulse filter — continuous, on-demand, or downtime modes' },
      { label: 'Discharge', value: 'Gravity, slide plate, or butterfly valve' },
      { label: 'Operating Modes', value: 'General conveying (timed) or Keep Full/Refill (level-based)' },
      { label: 'Power', value: 'Integrated vacuum power unit' },
    ],
    applications: [
      'Chemical Processing', 'Pharmaceutical', 'Food & Beverage',
      'Plastics', 'Life Sciences', 'Agriculture',
    ],
  },
  {
    name: 'Bedding Handling System',
    slug: 'bedding-handling-system',
    modelNumber: 'BHS',
    category: 'convey',
    accentLabel: 'Vivarium Systems',
    tagline: 'Complete unloading, conveying, and dispensing systems for vivarium facilities',
    description: 'Custom-designed bedding handling systems specializing in the design, development, and manufacturing of complete filling systems with conveying distances up to 100 feet. Complete unloading, conveying, and dispensing systems with dosing-type dispensers and integrated dust collection. Completely enclosed convey lines ensure no leaks or plugs.',
    keySpecs: [
      { value: '100 Ft.', label: 'Convey Distance' },
      { value: 'Enclosed', label: 'Convey Lines' },
      { value: 'Integrated', label: 'Dust Collection' },
      { value: 'Custom', label: 'Engineered' },
    ],
    features: [
      { title: 'Complete System Integration', desc: 'Full unloading, conveying, and dispensing system designed as a single integrated package for streamlined installation and operation.' },
      { title: 'Extended Conveying Distance', desc: 'Capable of conveying bedding materials up to 100 feet from the unloading point to the dispensing station through fully enclosed lines.' },
      { title: 'Enclosed Convey Lines', desc: 'Completely enclosed pneumatic convey lines ensure no leaks, plugs, or contamination between the unloading and dispensing points.' },
      { title: 'Integrated Dust Collection', desc: 'Built-in dust collection at dispensing points protects operators and maintains air quality in sensitive vivarium environments.' },
      { title: 'Dosing Dispensers', desc: 'Precision dosing-type dispensers deliver consistent, measured amounts of bedding material for uniform cage filling.' },
      { title: 'Custom Engineering', desc: 'Each system is custom designed to match your facility layout, throughput requirements, and bedding material characteristics.' },
    ],
    applications: [
      'Vivarium Operations', 'Life Sciences', 'Laboratory Animal Facilities',
      'Pharmaceutical Research', 'University Research',
    ],
  },
  {
    name: 'GF-Series Waste Bedding Delivery',
    slug: 'gf-series-waste-bedding',
    modelNumber: 'GF',
    category: 'convey',
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
  {
    name: 'VF-Series Waste Bedding Delivery',
    slug: 'vf-series-waste-bedding',
    modelNumber: 'VF',
    category: 'convey',
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
    applications: [
      'Vivarium Operations', 'Life Sciences', 'Laboratory Animal Facilities',
      'Pharmaceutical Research', 'University Research',
    ],
  },

  // ── AUTOMATE ──
  {
    name: '803 Convey System Controller',
    slug: '803-convey-system-controller',
    modelNumber: '803',
    category: 'automate',
    accentLabel: 'System Controls',
    tagline: 'Non-proprietary PLC-based automation for pneumatic conveying systems',
    description: 'The 803 Series Convey System Controller is a non-proprietary PLC-based system-wide controls package used to automate and control all process functions associated with vacuum pneumatic conveying systems. Incorporating both digital and analog control with power recovery program load function, the system provides precise control of operating parameters.',
    keySpecs: [
      { value: 'PLC', label: 'Based Control' },
      { value: '8" HMI', label: 'Color Touch' },
      { value: 'VFD', label: 'Blower Control' },
      { value: 'Ethernet', label: 'Connectivity' },
    ],
    features: [
      { title: 'Non-Proprietary PLC', desc: 'Non-proprietary PLC-based controller means you\'re not locked into a single vendor for maintenance, programming, or future expansion of your control system.' },
      { title: 'Master Control Panel (803-01)', desc: 'NEMA 4/12 free-standing enclosure with PLC controller, variable frequency drive, 8" color HMI, analog VFD control, pressure transducer feedback, and ethernet switch.' },
      { title: 'Remote Control Panel (803-02)', desc: 'NEMA 4/12 wall-mounted enclosure with 6" color HMI, remote I/O controller, compressed air preparation, and pressure regulator for distributed control points.' },
      { title: 'Color Touch Screen Interface', desc: 'Large color touch screens for adjusting system parameters, monitoring set points, and viewing alarm conditions with intuitive operator interface.' },
      { title: 'Remote Connectivity', desc: 'Capable of accepting remote connections from optional cellular or ethernet networks for software maintenance, upgrades, and fault diagnostics from anywhere.' },
      { title: 'Field Bus Integration', desc: 'Remote control points connected through common field bus and network protocols for seamless integration with existing facility control systems.' },
    ],
    specTable: [
      { label: 'Master Panel (803-01)', value: 'NEMA 4/12 free-standing, ANSI 61 gray finish' },
      { label: 'Remote Panel (803-02)', value: 'NEMA 4/12 wall-mounted' },
      { label: 'Controller', value: 'Non-proprietary PLC with digital and analog control' },
      { label: 'Master HMI', value: '8" color operator interface' },
      { label: 'Remote HMI', value: '6" color operator interface' },
      { label: 'Drive', value: 'Variable frequency drive with analog PLC control' },
      { label: 'Feedback', value: 'Analog pressure transducer' },
      { label: 'Networking', value: 'Ethernet switch, field bus, cellular/ethernet remote access' },
      { label: 'Features', value: 'Power recovery program load, maintenance screens, user access control' },
    ],
    applications: [
      'Chemical Processing', 'Pharmaceutical', 'Food & Beverage',
      'Life Sciences', 'Plastics', 'Agriculture', 'Mineral Processing',
    ],
  },
];

// ─── HELPERS ───

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category === categorySlug);
}

export function getRelatedProducts(product: Product, limit = 5): Product[] {
  return products
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}

export function getOtherCategories(currentSlug: string): Category[] {
  return categories.filter(c => c.slug !== currentSlug);
}
