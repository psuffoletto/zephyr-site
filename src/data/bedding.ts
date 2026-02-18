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
    heroImage: '/images/hero/homepage-hero2.png',
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
    name: '506 Rainfall Bedding Dispenser',
    slug: '506-series',
    modelNumber: '506',
    category: 'dispensing',
    productImage: '/images/506-product.png',
    accentLabel: 'Bedding Dispensing',
    tagline: 'Automatic, conveyorized bedding dispenser for uniform cage filling in vivarium operations',
    description: 'The Series 506 In-line Bedding Dispenser is an automatic, conveyorized unit designed to fill clean or fresh bedding into animal cages as they are conveyed through the dispensing zone. The dispenser allows for the efficient and uniform filling of cages with a wide variety of free-flowing beddings, including paper products and wood chips commonly used in the life science industry. The microprocessor controller with color touch screen interface allows for quick adjustability to the dispensed bedding volume, conveyor speed, and system settings.',
    keySpecs: [
      { value: 'Rainfall', label: 'Dispense Method' },
      { value: '10 Cu.Ft.', label: 'Storage Volume' },
      { value: '304 SS', label: 'Construction' },
      { value: '5 Ft.', label: 'Roller Table' },
    ],
    features: [
      { title: 'Rainfall Dispensing', desc: 'A photoelectric sensor detects cages in the dispensing zone and triggers a continuous, uniform curtain of bedding across the conveyor — filling each cage evenly as it passes under.' },
      { title: 'Vacuum Fill System', desc: 'Fill the refill hopper by emptying bags directly or use the vacuum refill wand to transfer bedding from a tote. Bedding is conveyed to the dispensing hopper by vacuum.' },
      { title: 'Zero Waste Design', desc: 'Bedding not deposited in a cage is contained below the rollers in the refill hopper and returned for later use, eliminating material waste.' },
      { title: '304 Stainless Steel Construction', desc: '#4 finished 304 stainless steel hoppers and panels for easy cleaning and full compliance with life science facility hygiene standards.' },
      { title: 'Microprocessor Controls', desc: 'Color touch screen interface provides quick adjustability to dispensed bedding volume, conveyor speed, and system settings with full diagnostics.' },
      { title: 'Vibratory Flow Promotion', desc: 'Integrated vibratory flow promotion system ensures consistent material flow for all bedding types — cob, chip, pellet, and paper products.' },
      { title: 'Level Sensors', desc: 'Level sensors in both dispensing and refill hoppers provide real-time monitoring and automated refill alerts to prevent interruptions.' },
      { title: 'Central Supply Ready', desc: 'Ready to integrate into a central bulk bedding supply system for continuous, hands-free material delivery in high-volume facilities.' },
    ],
    specTable: [
      { label: 'Construction', value: '304 Stainless Steel, #4 Finish' },
      { label: 'Storage Volume', value: '10 Cubic Feet' },
      { label: 'Roller Table', value: '5 ft. Powered Stainless Steel' },
      { label: 'Roller Width', value: '43" (approx. 6" wider than belt)' },
      { label: 'Roller Height', value: '28" – 32" (adjustable)' },
      { label: 'Overall Length', value: '60"' },
      { label: 'Overall Width', value: '50"' },
      { label: 'Overall Height', value: '93"' },
      { label: 'Hopper Opening', value: '12"' },
      { label: 'Electrical (Option 1)', value: '30 AMP, 120V, 1 Phase, 60 Hz' },
      { label: 'Electrical (Option 2)', value: '10 AMP, 460V, 3 Phase, 60 Hz' },
      { label: 'Compressed Air', value: '½" NPTF, Clean & Dry, 4–6 CFM @ 90 PSI' },
      { label: 'Compatible Beddings', value: 'Cob, Chip, Pellet, Paper' },
      { label: 'Controls', value: 'Microprocessor with Color Touch Screen' },
      { label: 'Sensors', value: 'Cage Present, End of Conveyor, Level (Dispensing & Refill)' },
    ],
    faqs: [
      { question: 'What types of bedding can the 506 dispense?', answer: 'The 506 handles a wide variety of free-flowing beddings including corncob, wood chips, cellulose pellets, and paper products commonly used in life science facilities.' },
      { question: 'How is bedding volume adjusted?', answer: 'The dispensed bedding volume, conveyor speed, and system settings are all adjustable through the color touch screen interface located on the front of the dispenser.' },
      { question: 'How is the dispenser refilled?', answer: 'The refill hopper can be filled by manually emptying bags of bedding or by using the vacuum refill wand to transfer material from a tote. It can also integrate into a central bulk bedding supply system for continuous automated filling.' },
      { question: 'What happens to bedding that misses the cage?', answer: 'Bedding not deposited in a cage is contained below the rollers in the refill hopper and automatically returned for later use — eliminating waste.' },
      { question: 'What utility connections are required?', answer: 'The 506 requires either a 30 AMP / 120V single-phase or 10 AMP / 460V three-phase electrical connection, plus a ½" NPTF compressed air supply providing clean, dry air at 4–6 CFM @ 90 PSI.' },
      { question: 'What options are available?', answer: 'Options include an allergen dust collector, HEPA filter exhaust, ergonomic remote filling station, central bulk bedding supply integration, extended flow promotion systems, integral air compressor, heavy duty casters, and seismic tie-down.' },
      { question: 'Can the 506 integrate with a cage washer?', answer: 'Yes — the auto stop unload sensor with washer interlock allows the dispenser to coordinate with downstream cage washing equipment for a fully integrated workflow.' },
    ],
    applications: [
      'Vivarium Operations', 'Laboratory Animal Facilities',
      'Pharmaceutical Research', 'University Research', 'Contract Research Organizations',
    ],
  },

  // ── DISPOSAL ──
  {
    name: 'VF-Series Waste Bedding Disposal',
    slug: 'vf-series',
    modelNumber: 'VF',
    category: 'disposal',
    productImage: '/images/products/renders/vf-render.png',
    accentLabel: 'Waste Handling',
    tagline: 'Vacuum-fed waste bedding disposal with up to 1,000 ft. conveying distance',
    description: 'The VF-Series Waste Bedding Delivery System is designed for vacuum-fed waste bedding disposal applications supporting convey distances up to 1,000 feet. Designed for use with vacuum-rated roll-off type dumpsters, the system can accommodate multiple dump stations and dumpsters ranging from small totes up to 12 cubic yard dumpsters.',
    keySpecs: [
      { value: '1,000 Ft.', label: 'Convey Distance' },
      { value: '10–30 Cu.Yd.', label: 'Dumpster Sizes' },
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
  {
    name: '19 Series Bedding Dump Station',
    slug: '19-series',
    modelNumber: '19',
    category: 'disposal',
    accentLabel: 'Cage Wash Disposal',
    tagline: 'Stainless steel bedding dump station with integral metering screw for cage wash operations',
    description: 'The 19 Series Bedding Dump Station is designed for life science research cage wash operations as a means to accept soiled bedding material that is manually deposited before further processing of cages. Equipped with an integral metering screw feeder to break up clumps of waste bedding, feed, or enrichment, the variable speed drive allows for precise control of material injection into the downstream conveying system. Integral downdraft hoods provide allergen control when used with a vacuum bedding system or separate dust collection system.',
    keySpecs: [
      { value: '304 SS', label: 'Construction' },
      { value: 'VFD', label: 'Speed Control' },
      { value: 'Integral', label: 'Allergen Control' },
      { value: 'Mobile', label: 'Caster Pack' },
    ],
    features: [
      { title: 'Metering Screw Feeder', desc: 'Integral stainless steel metering screw breaks up clumps of waste bedding, feed, and enrichment for consistent material flow into the downstream conveying system.' },
      { title: 'Variable Speed Drive', desc: 'Variable frequency drive package with manual forward/reversing switch allows precise control of material injection rate into the conveying system.' },
      { title: 'Allergen Control Hoods', desc: 'Integral downdraft exhaust hoods provide allergen control when connected to a vacuum bedding system or separate dust collection system.' },
      { title: '304 Stainless Construction', desc: 'Full 304 stainless steel construction with #4 finish and heavy duty tubular framework. Lift-off enclosure panels for easy cleaning and maintenance access.' },
      { title: 'Safety Grate System', desc: 'Removable stainless steel grating over the hopper with safety switch prevents the inadvertent dropping of cages or cage card holders into the system.' },
      { title: 'Mobile Design', desc: 'Locking swivel caster pack allows the unit to be easily repositioned within the cage wash area. Acrylic splash guards protect operators during washdown.' },
    ],
    specTable: [
      { label: 'Construction', value: '304 Stainless Steel, #4 Finish' },
      { label: 'Framework', value: 'Heavy Duty 304 SS Tubular' },
      { label: 'Panels', value: 'Lift-Off Stainless Steel Enclosure' },
      { label: 'Grate', value: 'SS Lift-Off w/ Safety Switch' },
      { label: 'Feeder', value: 'SS Metering Screw Feeder' },
      { label: 'Exhaust', value: 'Integral Allergen Control Dust Hoods' },
      { label: 'Guards', value: 'Acrylic Splash Guards' },
      { label: 'Mobility', value: 'Locking Swivel Caster Pack' },
      { label: 'Outlet', value: '2.5" Flow Through Vacuum Pick-Up' },
      { label: 'Drive', value: 'Variable Frequency Drive Package' },
      { label: 'Controls', value: 'Manual Forward/Reversing Switch' },
      { label: 'Dimensions (L×W×H)', value: '46" × 30" × 43"' },
      { label: 'Hopper Opening', value: '39" × 26"' },
      { label: 'Electrical (1Ph)', value: '15 AMP @ 120V, 60 Hz' },
      { label: 'Electrical (3Ph)', value: '5 AMP @ 460V, 60 Hz' },
      { label: 'Air', value: '1 CFM @ 90 PSI (Intermittent)' },
    ],
    applications: [
      'Cage Wash Operations', 'Vivarium Facilities', 'Life Science Research',
      'Laboratory Animal Facilities', 'Pharmaceutical Research', 'University Research',
    ],
    faqs: [
      { question: 'What options are available for the 19 Series?', answer: 'Options include an integral air compressor, washdown wand attachment, vacuum cleaning kit, allergen dust collection system, HEPA filtered air intake, banger bar, scrapper module, rubberized coating, integration to tunnel washer, flow promotion vibrator, leveling feet, seismic anchoring package, and special voltage requirements.' },
      { question: 'Can the 19 Series integrate with tunnel washers?', answer: 'Yes, the 19 Series can be configured for integration with tunnel washers as an optional design feature, allowing it to fit seamlessly into automated cage wash workflows.' },
      { question: 'How is allergen control handled?', answer: 'The unit features integral downdraft exhaust hoods that provide allergen control when connected to a vacuum bedding disposal system or a separate dust collection system. An optional allergen dust collection system and HEPA filtered air intake are also available.' },
    ],
  },
  {
    name: '207 Series Vacuum Waste Container',
    slug: '207-series',
    modelNumber: '207',
    category: 'disposal',
    accentLabel: 'Waste Collection',
    tagline: 'Vacuum-rated sealed container for waste bedding collection in 12, 20, and 30 cubic yard capacities',
    description: 'The 207 Series Vacuum Rated Container is used as a primary settling chamber for conveyed materials being disposed of as waste. Typically located on a loading dock inline between one or more dump stations and the vacuum producing equipment, the sealed container offers a variety of sizing options to meet the storage demands of each installation. Designed to withstand the high vacuum levels associated with conveying waste materials, the full opening rear door provides easy and complete clean out of the container.',
    keySpecs: [
      { value: '12–30', label: 'Cu. Yd. Capacity' },
      { value: '24.5" Hg', label: 'Vacuum Rating' },
      { value: '¼" Plate', label: 'Construction' },
      { value: '3 Models', label: 'Size Options' },
    ],
    features: [
      { title: 'High Vacuum Rating', desc: 'Structurally rated to 24½" Hg and water tested, the 207 Series is engineered to withstand the high vacuum levels associated with pneumatic waste conveying systems.' },
      { title: 'Full Opening Rear Door', desc: 'Fully gasketed rear door with adjustable latches and manual ratcheting hinge provides easy and complete clean out. Hook latches ensure uniform compression of the door gasket for a full seal.' },
      { title: 'Level Monitoring', desc: 'Up to three point or continuous level transmitters can be installed to monitor remaining capacity. Standard configuration includes dual top-mounted level sensor ports and a high level capacitance probe.' },
      { title: 'Heavy Plate Construction', desc: 'Quarter-inch plate construction on floor, sides, roof, and door with 7-gauge formed channel stakes and 6" × 2" × ¼" tubing long stills for maximum structural integrity.' },
      { title: 'Cam Lock Connections', desc: 'Male cam lock inlet with deflector plate and male cam lock outlet allow fast, secure hose connections to and from the container for integration with vacuum conveying systems.' },
      { title: 'Multiple Size Options', desc: 'Available in 12, 20, and 30 cubic yard configurations to match the waste volume demands of any facility, from small vivarium operations to large research campuses.' },
    ],
    specTable: [
      { label: 'Construction', value: '¼" Plate — Floor, Sides, Roof & Door' },
      { label: 'Frame Stakes', value: '7 Gauge Formed Channel (Sides & Roof)' },
      { label: 'Long Stills', value: '6" × 2" × ¼" Tubing' },
      { label: 'Vacuum Rating', value: '24½" Hg (Water Tested)' },
      { label: 'Finish', value: 'Painted Blue Gray' },
      { label: 'Rollers', value: '6⅝" O.D. Front & Rear' },
      { label: 'Inlet', value: '3" NPT Female w/ Quick Coupling' },
      { label: 'Outlet', value: 'Male Cam Lock' },
      { label: 'Drain', value: '4" NPT Capped Outlet (Bottom of Door)' },
      { label: 'Level Sensors', value: 'Dual Ports + High Level Capacitance Probe' },
      { label: 'Manway', value: '25" Top Mounted' },
      { label: 'Door', value: 'Fully Gasketed w/ Adjustable Latches & Hinge' },
      { label: 'Electrical', value: '1 AMP @ 120V, 1 Phase, 60 Hz' },
      { label: '207-10 (12 Cu.Yd.)', value: '144" L × 99" W × 75" H' },
      { label: '207-20 (20 Cu.Yd.)', value: '192" L × 99" W × 75" H' },
      { label: '207-30 (30 Cu.Yd.)', value: '266" L × 99" W × 96" H' },
    ],
    applications: [
      'Vivarium Waste Collection', 'Life Science Research', 'Laboratory Animal Facilities',
      'Cage Wash Operations', 'Loading Dock Waste Staging', 'Pharmaceutical Research',
    ],
    faqs: [
      { question: 'What size options are available?', answer: 'The 207 Series is available in three sizes: the 207-10 (12 cubic yards), 207-20 (20 cubic yards), and 207-30 (30 cubic yards). All models are 99" wide, with lengths ranging from 144" to 266".' },
      { question: 'What options are available for the 207 Series?', answer: 'Options include a continuous level transmitter, heavy duty casters, sprinkler taps, sight glass viewing window, differential pressure switch, custom color paint, and non-marking rollers.' },
      { question: 'How is the container cleaned out?', answer: 'The full opening rear door with adjustable latches and ratcheting hinge swings fully open for complete access to the interior. A 4" NPT capped drain outlet at the bottom of the door allows liquid drainage, and a 25" top-mounted manway provides inspection access.' },
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
