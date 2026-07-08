import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";
type Locale = "en";


/** Module 12 — Specialty lifting devices & attachments (BTH, spreaders, magnets, vacuum, buckets). */
export function RiggingEducationModule12SpecialtyLiftingDevices({locale}: {readonly locale: Locale}) {
  const edu = `/lessons`;
  const m1 = `/lessons/module-1`;
  const m2 = `/lessons/module-2`;
  const m3 = `/lessons/module-3`;
  const m4 = `/lessons/module-4`;
  const m5 = `/lessons/module-5`;
  const m6 = `/lessons/module-6`;
  const m7 = `/lessons/module-7`;
  const m8 = `/lessons/module-8`;
  const m9 = `/lessons/module-9`;
  const m10 = `/lessons/module-10`;
  const m11 = `/lessons/module-11`;
  const m13 = `/lessons/module-13`;
  const m14 = `/lessons/module-14`;
  const m15 = `/lessons/module-15`;
  const m16 = `/lessons/module-16`;
  const m17 = `/lessons/module-17`;
  const m18 = `/lessons/module-18`;
  const m19 = `/lessons/module-19`;
  const m20 = `/lessons/module-20`;
  const m21 = `/lessons/module-21`;
  const m22 = `/lessons/module-22`;
  const m23 = `/lessons/module-23`;
  const m24 = `/lessons/module-24`;
  const m25 = `/lessons/module-25`;
  const appendixA = `/lessons/appendix-a`;
  const appendixB = `/lessons/appendix-b`;
  const appendixC = `/lessons/appendix-c`;
  const appendixD = `/lessons/appendix-d`;
  const appendixE = `/lessons/appendix-e`;
  return (
    <div className={riggingEducationArticleClass}>
      <h2 id="regulatory-references">Regulatory &amp; standards references</h2>
      <p>This section references concepts commonly associated with:</p>
      <ul>
        <li>WorkSafeBC OHSR Part 14 — Material Handling</li>
        <li>WorkSafeBC OHSR Part 15 — Rigging</li>
        <li>ASME B30.20 — Below-the-Hook Lifting Devices</li>
        <li>ASME B30.5 — Mobile &amp; Locomotive Cranes</li>
        <li>ASME B30.3 — Tower Cranes</li>
        <li>ASME B30.9 — Slings</li>
        <li>ASME B30.26 — Rigging Hardware</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer operating manuals and specifications</li>
        <li>Engineered lifting procedures</li>
        <li>Site-specific lifting requirements</li>
      </ul>
      <p>
        Specialty lifting devices must always be used according to manufacturer instructions, engineered lift plans, and applicable regulations.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Specialty lifting devices are engineered tools and attachments designed to safely lift specific load types, shapes, or materials.</p>
      <p>These devices are commonly used when:</p>
      <ul>
        <li>Standard slings are unsuitable</li>
        <li>Loads require controlled support</li>
        <li>Specialized attachment points are necessary</li>
        <li>Surface damage must be minimized</li>
        <li>Load geometry creates instability concerns</li>
        <li>Precision handling is required</li>
      </ul>
      <p>Specialty devices may improve:</p>
      <ul>
        <li>Load stability</li>
        <li>Force distribution</li>
        <li>Lift efficiency</li>
        <li>Worker safety</li>
        <li>Precision control</li>
      </ul>
      <p>However, improper use may create:</p>
      <ul>
        <li>Device overload</li>
        <li>Load instability</li>
        <li>Sudden release</li>
        <li>Structural failure</li>
        <li>Uneven loading</li>
        <li>Severe crushing or impact hazards</li>
      </ul>
      <p>This section explores common specialty lifting devices, operational principles, and associated hazards.</p>
      <p className={riggingEducationNavStripClass}>
        <a href={edu} className="font-medium text-primary hover:underline">
          ← Education overview
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m1} className="font-medium text-primary hover:underline">
          M1
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m2} className="font-medium text-primary hover:underline">
          M2
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m3} className="font-medium text-primary hover:underline">
          M3
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m4} className="font-medium text-primary hover:underline">
          M4
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m5} className="font-medium text-primary hover:underline">
          M5
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m6} className="font-medium text-primary hover:underline">
          M6
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m7} className="font-medium text-primary hover:underline">
          M7
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m8} className="font-medium text-primary hover:underline">
          M8
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m9} className="font-medium text-primary hover:underline">
          M9
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m10} className="font-medium text-primary hover:underline">
          M10
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m11} className="font-medium text-primary hover:underline">
          M11 — Tandem
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m13} className="font-medium text-primary hover:underline">
          M13 — Crane physics
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m14} className="font-medium text-primary hover:underline">
          M14 — Environment
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m15} className="font-medium text-primary hover:underline">
          M15 — Planning
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m16} className="font-medium text-primary hover:underline">
          M16 — Field
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m17} className="font-medium text-primary hover:underline">
          M17
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m18} className="font-medium text-primary hover:underline">
          M18
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m19} className="font-medium text-primary hover:underline">
          M19
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m20} className="font-medium text-primary hover:underline">
          M20
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m21} className="font-medium text-primary hover:underline">
          M21 — Rope
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m22} className="font-medium text-primary hover:underline">
          M22 — Block
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m23} className="font-medium text-primary hover:underline">
          M23 — Heavy
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m24} className="font-medium text-primary hover:underline">
          M24 — Tower
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m25} className="font-medium text-primary hover:underline">
          M25 — Incidents
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={appendixA} className="font-medium text-primary hover:underline">
          App A — Signals
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={appendixB} className="font-medium text-primary hover:underline">
          App B — Math
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={appendixC} className="font-medium text-primary hover:underline">
          App C — Hardware
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={appendixD} className="font-medium text-primary hover:underline">
          App D — Cranes
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={appendixE} className="font-medium text-primary hover:underline">
          App E — BC
        </a>
      </p>

      <h2 id="bth-lifting-devices">Below-the-hook lifting devices</h2>
      <p>Below-the-hook devices are positioned between:</p>
      <ul>
        <li>The crane hook</li>
        <li>The suspended load</li>
      </ul>
      <p>These devices are often engineered for specific lifting applications and may include:</p>
      <ul>
        <li>Spreader bars</li>
        <li>Lifting beams</li>
        <li>Plate clamps</li>
        <li>Magnets</li>
        <li>Concrete buckets</li>
        <li>Clamshell buckets</li>
        <li>Vacuum lifting systems</li>
        <li>Custom engineered attachments</li>
      </ul>

      <h2 id="engineered-devices-specialty">Engineered devices</h2>
      <p>Many specialty lifting devices are engineered specifically for:</p>
      <ul>
        <li>Particular loads</li>
        <li>Defined capacities</li>
        <li>Specific force directions</li>
        <li>Environmental conditions</li>
      </ul>
      <p>These devices often require:</p>
      <ul>
        <li>Identification markings</li>
        <li>Capacity labeling</li>
        <li>Inspection procedures</li>
        <li>Certification records</li>
        <li>Engineered documentation</li>
      </ul>
      <p>Unauthorized modifications may invalidate device ratings.</p>

      <h2 id="spreader-bars-bth">Spreader bars</h2>
      <p>Spreader bars distribute lifting forces across multiple lifting points while reducing sling angle tension.</p>
      <p>They are commonly used for:</p>
      <ul>
        <li>Long loads</li>
        <li>Fragile loads</li>
        <li>Structural steel</li>
        <li>Modular assemblies</li>
        <li>Wide lifting configurations</li>
      </ul>

      <h2 id="spreader-bar-force-behavior">Spreader bar force behavior</h2>
      <p>Spreader bars primarily experience:</p>
      <ul>
        <li>Compression loading</li>
      </ul>
      <p>They help:</p>
      <ul>
        <li>Reduce sling tension</li>
        <li>Reduce horizontal compression forces on the load</li>
        <li>Improve load stability</li>
      </ul>

      <h2 id="spreader-bar-hazards-bth">Spreader bar hazards</h2>
      <p>Improper spreader bar use may create:</p>
      <ul>
        <li>Compression failure</li>
        <li>Buckling</li>
        <li>Uneven loading</li>
        <li>End fitting overload</li>
        <li>Structural instability</li>
      </ul>
      <p>Incorrect sling geometry may overload the spreader even when the suspended load appears relatively light.</p>

      <h2 id="lifting-beams-bth">Lifting beams</h2>
      <p>Lifting beams support loads directly beneath the beam structure.</p>
      <p>Unlike spreader bars, lifting beams primarily experience:</p>
      <ul>
        <li>Bending forces</li>
      </ul>
      <p>Lifting beams are commonly used when:</p>
      <ul>
        <li>Headroom is limited</li>
        <li>Precise support is required</li>
        <li>Sling angle reduction is necessary</li>
      </ul>

      <h2 id="lifting-beam-hazards-bth">Lifting beam hazards</h2>
      <p>Potential hazards include:</p>
      <ul>
        <li>Beam overload</li>
        <li>Uneven loading</li>
        <li>Structural bending</li>
        <li>Attachment point failure</li>
        <li>Load instability</li>
      </ul>
      <p>Lifting beams must only be used within engineered design limitations.</p>

      <h2 id="plate-clamps">Plate clamps</h2>
      <p>Plate clamps are specialized devices used to lift:</p>
      <ul>
        <li>Steel plate</li>
        <li>Structural components</li>
        <li>Fabricated assemblies</li>
      </ul>
      <p>They may use:</p>
      <ul>
        <li>Friction grip</li>
        <li>Mechanical locking systems</li>
        <li>Cam-style engagement</li>
      </ul>

      <h2 id="plate-clamp-hazards">Plate clamp hazards</h2>
      <p>Plate clamp failures may result from:</p>
      <ul>
        <li>Improper engagement</li>
        <li>Surface contamination</li>
        <li>Side loading</li>
        <li>Excessive plate flexing</li>
        <li>Incorrect clamp orientation</li>
        <li>Insufficient material thickness</li>
      </ul>
      <p>Improper clamp selection may result in sudden load release.</p>

      <h2 id="plate-clamp-operational">Plate clamp operational considerations</h2>
      <p>Important considerations include:</p>
      <ul>
        <li>Plate thickness</li>
        <li>Surface condition</li>
        <li>Material type</li>
        <li>Clamp orientation</li>
        <li>Loading direction</li>
        <li>Center of gravity</li>
      </ul>
      <p>Many clamps are designed for very specific loading conditions only.</p>

      <h2 id="lifting-magnets">Lifting magnets</h2>
      <p>Lifting magnets are used to move:</p>
      <ul>
        <li>Steel plate</li>
        <li>Structural steel</li>
        <li>Fabricated components</li>
        <li>Scrap materials</li>
      </ul>
      <p>Magnets may be:</p>
      <ul>
        <li>Permanent magnets</li>
        <li>Electromagnets</li>
        <li>Battery-assisted systems</li>
      </ul>

      <h2 id="magnet-lifting-hazards">Magnet lifting hazards</h2>
      <p>Magnetic lifting systems may lose holding force because of:</p>
      <ul>
        <li>Power loss</li>
        <li>Surface contamination</li>
        <li>Air gaps</li>
        <li>Thin materials</li>
        <li>Improper contact</li>
        <li>Load shifting</li>
      </ul>
      <p>Sudden load release is one of the primary hazards associated with lifting magnets.</p>

      <h2 id="magnet-surface-conditions">Magnet surface conditions</h2>
      <p>Magnet effectiveness depends heavily on:</p>
      <ul>
        <li>Surface cleanliness</li>
        <li>Material thickness</li>
        <li>Surface flatness</li>
        <li>Contact area</li>
        <li>Material composition</li>
      </ul>
      <p>Rust, paint, scale, or debris may reduce holding strength significantly.</p>

      <h2 id="vacuum-lifting-devices">Vacuum lifting devices</h2>
      <p>Vacuum lifting systems use suction force to handle:</p>
      <ul>
        <li>Glass panels</li>
        <li>Smooth sheet materials</li>
        <li>Architectural components</li>
        <li>Prefabricated assemblies</li>
      </ul>

      <h2 id="vacuum-lifting-hazards">Vacuum lifting hazards</h2>
      <p>Potential hazards include:</p>
      <ul>
        <li>Vacuum loss</li>
        <li>Seal failure</li>
        <li>Surface contamination</li>
        <li>Power failure</li>
        <li>Load release</li>
        <li>Uneven load distribution</li>
      </ul>
      <p>Vacuum systems often require:</p>
      <ul>
        <li>Backup systems</li>
        <li>Alarm systems</li>
        <li>Pressure monitoring</li>
      </ul>

      <h2 id="concrete-buckets">Concrete buckets</h2>
      <p>Concrete buckets are commonly used in:</p>
      <ul>
        <li>Tower crane operations</li>
        <li>High-rise construction</li>
        <li>Structural concrete placement</li>
      </ul>
      <p>Concrete buckets may involve:</p>
      <ul>
        <li>Suspended concrete loads</li>
        <li>Dynamic movement</li>
        <li>Gate control systems</li>
        <li>High center of gravity conditions</li>
      </ul>

      <h2 id="concrete-bucket-hazards">Concrete bucket hazards</h2>
      <p>Potential hazards include:</p>
      <ul>
        <li>Gate failure</li>
        <li>Sudden concrete discharge</li>
        <li>Dynamic loading</li>
        <li>Load shift</li>
        <li>Swinging</li>
        <li>Worker exposure beneath the bucket</li>
      </ul>
      <p>Concrete movement inside the bucket may affect stability during lifting operations.</p>

      <h2 id="clamshell-buckets">Clamshell buckets</h2>
      <p>Clamshell buckets are commonly used for:</p>
      <ul>
        <li>Excavation</li>
        <li>Marine operations</li>
        <li>Bulk material handling</li>
        <li>Aggregate movement</li>
      </ul>
      <p>These devices involve:</p>
      <ul>
        <li>Opening and closing mechanisms</li>
        <li>Dynamic suspended loads</li>
        <li>Variable load centers</li>
      </ul>

      <h2 id="clamshell-hazards">Clamshell hazards</h2>
      <p>Potential hazards include:</p>
      <ul>
        <li>Unexpected opening</li>
        <li>Material release</li>
        <li>Dynamic movement</li>
        <li>Swing hazards</li>
        <li>Uneven loading</li>
        <li>Structural contact</li>
      </ul>

      <h2 id="personnel-lifting-devices">Personnel lifting devices</h2>
      <p>Some engineered systems are designed for lifting personnel.</p>
      <p>Personnel lifting devices require:</p>
      <ul>
        <li>Special operational procedures</li>
        <li>Enhanced safety systems</li>
        <li>Strict regulatory compliance</li>
        <li>Controlled movement</li>
        <li>Fall protection integration</li>
      </ul>
      <p>Personnel lifting operations typically involve much stricter controls than material lifting operations.</p>

      <h2 id="custom-engineered-attachments">Custom engineered attachments</h2>
      <p>Complex lifting operations may require:</p>
      <ul>
        <li>Custom lifting lugs</li>
        <li>Engineered frames</li>
        <li>Modular lifting systems</li>
        <li>Equalizing beams</li>
        <li>Rotational control devices</li>
        <li>Specialized lifting assemblies</li>
      </ul>
      <p>Custom systems must generally be:</p>
      <ul>
        <li>Engineered</li>
        <li>Rated</li>
        <li>Inspected</li>
        <li>Used according to engineered procedures</li>
      </ul>

      <h2 id="load-attachment-points-specialty">Load attachment points</h2>
      <p>Specialty lifting devices rely heavily on:</p>
      <ul>
        <li>Proper attachment point design</li>
        <li>Structural adequacy</li>
        <li>Correct load direction</li>
        <li>Proper force distribution</li>
      </ul>
      <p>Improper attachment points may fail even when lifting devices remain within rated capacity.</p>

      <h2 id="inspection-requirements-specialty">Inspection requirements</h2>
      <p>Specialty lifting devices should be inspected for:</p>
      <ul>
        <li>Cracks</li>
        <li>Structural deformation</li>
        <li>Excessive wear</li>
        <li>Corrosion</li>
        <li>Missing identification</li>
        <li>Loose components</li>
        <li>Mechanical malfunction</li>
        <li>Damaged welds</li>
      </ul>
      <p>Inspection requirements may vary depending on:</p>
      <ul>
        <li>Device type</li>
        <li>Frequency of use</li>
        <li>Environmental conditions</li>
        <li>Manufacturer requirements</li>
      </ul>

      <h2 id="capacity-verification-bth">Capacity verification</h2>
      <p>Before use, personnel should verify:</p>
      <ul>
        <li>Device capacity</li>
        <li>Load weight</li>
        <li>Loading orientation</li>
        <li>Environmental limitations</li>
        <li>Compatibility with rigging geometry</li>
      </ul>
      <p>Capacity markings must remain legible and visible.</p>

      <h2 id="environmental-specialty-lifts">Environmental considerations</h2>
      <p>Environmental conditions affecting specialty lifting devices may include:</p>
      <ul>
        <li>Wind</li>
        <li>Moisture</li>
        <li>Ice</li>
        <li>Temperature extremes</li>
        <li>Corrosive exposure</li>
        <li>Dust and contamination</li>
      </ul>
      <p>Environmental effects may alter:</p>
      <ul>
        <li>Device performance</li>
        <li>Load stability</li>
        <li>Surface grip</li>
        <li>Structural integrity</li>
      </ul>

      <h2 id="communication-coordination-specialty">Communication &amp; coordination</h2>
      <p>Many specialty lifting devices require:</p>
      <ul>
        <li>Controlled movement</li>
        <li>Coordinated positioning</li>
        <li>Careful communication</li>
        <li>Slow operational speeds</li>
      </ul>
      <p>Communication failures may increase the risk of:</p>
      <ul>
        <li>Collision</li>
        <li>Load instability</li>
        <li>Improper engagement</li>
        <li>Sudden release</li>
      </ul>

      <h2 id="human-factors-specialty-lifts">Human factors &amp; operational discipline</h2>
      <p>Specialty lifting operations require:</p>
      <ul>
        <li>Attention to detail</li>
        <li>Controlled movement</li>
        <li>Situational awareness</li>
        <li>Proper setup</li>
        <li>Communication discipline</li>
      </ul>
      <p>Human factors contributing to incidents may include:</p>
      <ul>
        <li>Improper assumptions</li>
        <li>Inadequate inspection</li>
        <li>Rushing</li>
        <li>Improvised rigging</li>
        <li>Incorrect device selection</li>
      </ul>
      <p>Operational discipline is essential during specialty lifting operations.</p>

      <h2 id="situational-awareness-specialty-lifts">Situational awareness during specialty lifts</h2>
      <p>Personnel involved in specialty lifting operations must continuously monitor:</p>
      <ul>
        <li>Device engagement</li>
        <li>Load behavior</li>
        <li>Rigging alignment</li>
        <li>Environmental conditions</li>
        <li>Structural movement</li>
        <li>Communication effectiveness</li>
        <li>Personnel positioning</li>
        <li>Equipment condition</li>
      </ul>
      <p>
        Specialty lifting operations often involve unique hazards requiring continuous evaluation and controlled operational decision-making.
      </p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m11} className="font-medium text-primary hover:underline">
          ← Module 11 — Multiple crane &amp; tandem lifts
        </a>
        <a href={m13} className="font-medium text-primary hover:underline">
          Module 13 — Crane physics for riggers →
        </a>
        <a href={m14} className="font-medium text-primary hover:underline">
          Module 14 — Environmental &amp; site →
        </a>
        <a href={m15} className="font-medium text-primary hover:underline">
          Module 15 — Lift planning &amp; critical lifts →
        </a>
        <a href={m16} className="font-medium text-primary hover:underline">
          Module 16 — Practical rigging &amp; field →
        </a>
        <a href={m17} className="font-medium text-primary hover:underline">
          M17 — Safety culture →
        </a>
        <a href={m18} className="font-medium text-primary hover:underline">
          M18 — Reference tables →
        </a>
        <a href={m19} className="font-medium text-primary hover:underline">
          M19 — Glossary →
        </a>
        <a href={m20} className="font-medium text-primary hover:underline">
          M20 — Integration →
        </a>
        <a href={m21} className="font-medium text-primary hover:underline">
          M21 — Knots &amp; rope →
        </a>
        <a href={m22} className="font-medium text-primary hover:underline">
          M22 — Block &amp; tackle →
        </a>
        <a href={m23} className="font-medium text-primary hover:underline">
          M23 — Heavy lift →
        </a>
        <a href={m24} className="font-medium text-primary hover:underline">
          M24 — Tower crane →
        </a>
        <a href={m25} className="font-medium text-primary hover:underline">
          M25 — Incidents →
        </a>
        <a href={appendixA} className="font-medium text-primary hover:underline">
          Appendix A — Standard hand signals →
        </a>
        <a href={appendixB} className="font-medium text-primary hover:underline">
          Appendix B — Basic rigging math &amp; formulas →
        </a>
        <a href={appendixC} className="font-medium text-primary hover:underline">
          Appendix C — Rigging equipment identification &amp; hardware reference →
        </a>
        <a href={appendixD} className="font-medium text-primary hover:underline">
          Appendix D — Crane types &amp; operational characteristics →
        </a>
        <a href={appendixE} className="font-medium text-primary hover:underline">
          Appendix E — BC regulations &amp; compliance quick reference →
        </a>




      </div>
    </div>
  );
}
