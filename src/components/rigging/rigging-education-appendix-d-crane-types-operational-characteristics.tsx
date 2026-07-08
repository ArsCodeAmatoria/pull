import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";
import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";

type Locale = "en";


const rk = String.raw;

/** Appendix D — Crane types & operational characteristics (educational reference). */
export function RiggingEducationAppendixDCraneTypesOperationalCharacteristics({locale}: {readonly locale: Locale}) {
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
  const m12 = `/lessons/module-12`;
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
  const appendixE = `/lessons/appendix-e`;
  return (
    <div className={riggingEducationArticleClass}>
      <h2 id="regulatory-references-appendix-d">Regulatory &amp; standards references</h2>
      <p>This appendix references concepts commonly associated with:</p>
      <ul>
        <li>WorkSafeBC OHSR crane and hoisting requirements</li>
        <li>WorkSafeBC OHSR Part 14 — Material Handling</li>
        <li>WorkSafeBC OHSR Part 15 — Rigging</li>
        <li>ASME B30 crane-related standards</li>
        <li>ASME B30.3 — Tower Cranes</li>
        <li>ASME B30.5 — Mobile &amp; Locomotive Cranes</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer operating manuals and load charts</li>
        <li>Engineered lift planning procedures</li>
      </ul>
      <p>Crane operations must always follow applicable regulations, manufacturer specifications, engineered procedures, and approved site requirements.</p>

      <h2 id="introduction-appendix-d">Introduction</h2>
      <p>Different crane types behave differently under load because of variations in:</p>
      <ul>
        <li>Structural design</li>
        <li>Stability systems</li>
        <li>Boom configuration</li>
        <li>Mobility</li>
        <li>Radius control</li>
        <li>Counterweight systems</li>
        <li>Operational environment</li>
      </ul>
      <p>Rigging personnel should understand the operational characteristics and limitations of different crane types because crane behavior directly affects:</p>
      <ul>
        <li>Load control</li>
        <li>Lift planning</li>
        <li>Stability</li>
        <li>Communication</li>
        <li>Environmental exposure</li>
        <li>Dynamic movement</li>
        <li>Personnel safety</li>
      </ul>
      <p>This appendix provides operational awareness information related to common crane types used in construction and industrial environments.</p>
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
          M6 — Math
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
          M11
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m12} className="font-medium text-primary hover:underline">
          M12
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m13} className="font-medium text-primary hover:underline">
          M13
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m14} className="font-medium text-primary hover:underline">
          M14
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m15} className="font-medium text-primary hover:underline">
          M15 — Planning
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m16} className="font-medium text-primary hover:underline">
          M16 — Field ops
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m17} className="font-medium text-primary hover:underline">
          M17 — Culture
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m18} className="font-medium text-primary hover:underline">
          M18 — Reference
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m19} className="font-medium text-primary hover:underline">
          M19 — Glossary
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m20} className="font-medium text-primary hover:underline">
          M20 — Integration
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
        <a href={appendixE} className="font-medium text-primary hover:underline">
          App E — BC
        </a>
      </p>

      <h2 id="tower-cranes">Tower cranes</h2>
      <p>Tower cranes are commonly used in:</p>
      <ul>
        <li>High-rise construction</li>
        <li>Urban projects</li>
        <li>Long-term construction sites</li>
      </ul>
      <p>Characteristics include:</p>
      <ul>
        <li>High lifting heights</li>
        <li>Large working radius</li>
        <li>Continuous material handling capability</li>
        <li>Fixed installation</li>
      </ul>
      <p>Tower cranes rely heavily on:</p>
      <ul>
        <li>Structural anchoring</li>
        <li>Mast stability</li>
        <li>Counter-jib systems</li>
        <li>Radius management</li>
      </ul>

      <h3 id="tower-crane-operational-characteristics">Tower crane operational characteristics</h3>
      <p>Tower crane hazards may include:</p>
      <ul>
        <li>Blind lifts</li>
        <li>Wind exposure</li>
        <li>Long load travel paths</li>
        <li>Urban congestion</li>
        <li>Overlapping crane zones</li>
        <li>Dynamic swinging</li>
        <li>Public exposure</li>
      </ul>
      <p>Tower crane loads often travel long distances horizontally, increasing:</p>
      <ul>
        <li>Swing potential</li>
        <li>Wind effects</li>
        <li>Communication complexity</li>
      </ul>

      <h3 id="hammerhead-tower-cranes">Hammerhead tower cranes</h3>
      <p>Hammerhead cranes use:</p>
      <ul>
        <li>Horizontal jibs</li>
        <li>Trolley systems</li>
        <li>Fixed boom geometry</li>
      </ul>
      <p>Advantages may include:</p>
      <ul>
        <li>Efficient material movement</li>
        <li>Long reach capability</li>
        <li>High productivity</li>
      </ul>
      <p>Operational concerns include:</p>
      <ul>
        <li>Swing clearance</li>
        <li>Trolley dynamics</li>
        <li>Wind exposure</li>
        <li>Blind lift conditions</li>
      </ul>

      <h3 id="luffing-jib-tower-cranes">Luffing jib tower cranes</h3>
      <p>Luffing cranes adjust radius by changing boom angle.</p>
      <p>Advantages may include:</p>
      <ul>
        <li>Reduced swing radius</li>
        <li>Better operation in dense urban environments</li>
        <li>Improved crane separation</li>
      </ul>
      <p>Operational concerns may include:</p>
      <ul>
        <li>Increased complexity</li>
        <li>Dynamic boom movement</li>
        <li>Radius changes during lifting</li>
        <li>More complex coordination</li>
      </ul>

      <h3 id="self-erecting-tower-cranes">Self-erecting tower cranes</h3>
      <p>Self-erectors are commonly used for:</p>
      <ul>
        <li>Residential projects</li>
        <li>Smaller construction sites</li>
        <li>Tight-access work areas</li>
      </ul>
      <p>Characteristics include:</p>
      <ul>
        <li>Rapid setup</li>
        <li>Compact transport</li>
        <li>Reduced height capability</li>
      </ul>
      <p>Operational hazards remain significant despite smaller crane size.</p>

      <h2 id="mobile-cranes">Mobile cranes</h2>
      <p>Mobile cranes are highly versatile cranes commonly used for:</p>
      <ul>
        <li>General construction</li>
        <li>Industrial lifting</li>
        <li>Structural erection</li>
        <li>Infrastructure work</li>
      </ul>
      <p>Mobile cranes may include:</p>
      <ul>
        <li>Hydraulic cranes</li>
        <li>Truck-mounted cranes</li>
        <li>All-terrain cranes</li>
        <li>Rough-terrain cranes</li>
      </ul>

      <h3 id="mobile-crane-operational-characteristics">Mobile crane operational characteristics</h3>
      <p>Mobile cranes rely heavily on:</p>
      <ul>
        <li>Outrigger systems</li>
        <li>Ground bearing capacity</li>
        <li>Proper setup</li>
        <li>Radius control</li>
      </ul>
      <p>Hazards may include:</p>
      <ul>
        <li>Ground failure</li>
        <li>Outrigger settlement</li>
        <li>Radius overload</li>
        <li>Dynamic movement during travel</li>
      </ul>

      <h3 id="hydraulic-truck-cranes">Hydraulic truck cranes</h3>
      <p>Truck-mounted hydraulic cranes combine:</p>
      <ul>
        <li>Road mobility</li>
        <li>Telescopic boom systems</li>
        <li>Rapid setup capability</li>
      </ul>
      <p>Advantages include:</p>
      <ul>
        <li>Fast deployment</li>
        <li>Transport flexibility</li>
        <li>General-purpose lifting</li>
      </ul>
      <p>Operational concerns include:</p>
      <ul>
        <li>Ground setup quality</li>
        <li>Boom deflection</li>
        <li>Radius sensitivity</li>
      </ul>

      <h3 id="all-terrain-cranes-at-cranes">All-terrain cranes (AT cranes)</h3>
      <p>AT cranes combine:</p>
      <ul>
        <li>Highway capability</li>
        <li>Off-road mobility</li>
        <li>Large lifting capacity</li>
      </ul>
      <p>Commonly used for:</p>
      <ul>
        <li>Large industrial projects</li>
        <li>Heavy lifting</li>
        <li>Infrastructure construction</li>
      </ul>
      <p>These cranes often involve:</p>
      <ul>
        <li>Complex counterweight systems</li>
        <li>Large outrigger loads</li>
        <li>Significant setup requirements</li>
      </ul>

      <h3 id="rough-terrain-cranes-rt-cranes">Rough-terrain cranes (RT cranes)</h3>
      <p>RT cranes are designed primarily for:</p>
      <ul>
        <li>Off-road construction environments</li>
        <li>Uneven terrain</li>
        <li>Restricted site access</li>
      </ul>
      <p>Characteristics include:</p>
      <ul>
        <li>Large tires</li>
        <li>Compact body design</li>
        <li>Single cab operation</li>
      </ul>
      <p>Operational hazards may include:</p>
      <ul>
        <li>Uneven terrain instability</li>
        <li>Ground loading</li>
        <li>Travel hazards</li>
      </ul>

      <h3 id="crawler-cranes">Crawler cranes</h3>
      <p>Crawler cranes use:</p>
      <ul>
        <li>Track systems</li>
        <li>Large lattice booms</li>
        <li>High lifting capacities</li>
      </ul>
      <p>Advantages may include:</p>
      <ul>
        <li>Excellent lifting capacity</li>
        <li>Reduced ground pressure</li>
        <li>Ability to move while loaded under some conditions</li>
      </ul>

      <h3 id="crawler-crane-operational-characteristics">Crawler crane operational characteristics</h3>
      <p>Crawler cranes may involve:</p>
      <ul>
        <li>Large assembly operations</li>
        <li>Extensive lift planning</li>
        <li>Significant ground preparation</li>
        <li>Long boom configurations</li>
      </ul>
      <p>Hazards may include:</p>
      <ul>
        <li>Ground instability</li>
        <li>Assembly hazards</li>
        <li>Wind exposure</li>
        <li>Boom structural loading</li>
      </ul>

      <h3 id="lattice-boom-cranes">Lattice boom cranes</h3>
      <p>Lattice boom cranes use:</p>
      <ul>
        <li>Structural lattice sections</li>
        <li>Pin-connected boom assemblies</li>
        <li>Multi-section boom systems</li>
      </ul>
      <p>Advantages may include:</p>
      <ul>
        <li>High strength-to-weight ratio</li>
        <li>Large lifting capacities</li>
        <li>Long boom lengths</li>
      </ul>
      <p>Operational concerns include:</p>
      <ul>
        <li>Assembly complexity</li>
        <li>Wind sensitivity</li>
        <li>Structural deflection</li>
      </ul>

      <h3 id="knuckle-boom-cranes">Knuckle boom cranes</h3>
      <p>Knuckle booms use articulated hydraulic boom sections.</p>
      <p>Common applications include:</p>
      <ul>
        <li>Material delivery</li>
        <li>Urban lifting</li>
        <li>Roofing work</li>
        <li>Tight-access lifting</li>
      </ul>
      <p>Advantages may include:</p>
      <ul>
        <li>Compact operation</li>
        <li>High maneuverability</li>
        <li>Precise placement capability</li>
      </ul>

      <h4 id="knuckle-boom-hazards">Knuckle boom hazards</h4>
      <p>Potential hazards include:</p>
      <ul>
        <li>Complex boom movement</li>
        <li>Stability changes</li>
        <li>Dynamic loading</li>
        <li>Side loading</li>
        <li>Ground instability</li>
      </ul>
      <p>Load movement may become unpredictable during articulated boom motion.</p>

      <h2 id="overhead-cranes">Overhead cranes</h2>
      <p>Overhead cranes operate on:</p>
      <ul>
        <li>Runway systems</li>
        <li>Structural beams</li>
        <li>Building-mounted systems</li>
      </ul>
      <p>Commonly used in:</p>
      <ul>
        <li>Manufacturing</li>
        <li>Warehouses</li>
        <li>Industrial facilities</li>
      </ul>

      <h3 id="overhead-crane-characteristics">Overhead crane characteristics</h3>
      <p>Operational concerns may include:</p>
      <ul>
        <li>Structural runway loading</li>
        <li>Side pulling hazards</li>
        <li>Hook travel limitations</li>
        <li>Building clearance restrictions</li>
      </ul>
      <p>Overhead cranes often operate continuously in production environments.</p>

      <h2 id="gantry-cranes">Gantry cranes</h2>
      <p>Gantry cranes are supported by legs moving along:</p>
      <ul>
        <li>Rails</li>
        <li>Ground systems</li>
        <li>Structural tracks</li>
      </ul>
      <p>Applications may include:</p>
      <ul>
        <li>Shipyards</li>
        <li>Industrial plants</li>
        <li>Precast yards</li>
        <li>Large fabrication facilities</li>
      </ul>

      <h3 id="gantry-crane-hazards">Gantry crane hazards</h3>
      <p>Potential hazards include:</p>
      <ul>
        <li>Rail alignment issues</li>
        <li>Wind exposure</li>
        <li>Structural loading</li>
        <li>Travel coordination</li>
      </ul>
      <p>Large gantries may experience substantial wind loading because of their size.</p>

      <h2 id="derrick-cranes">Derrick cranes</h2>
      <p>Derricks use:</p>
      <ul>
        <li>Guying systems</li>
        <li>Mast structures</li>
        <li>Boom assemblies</li>
      </ul>
      <p>Commonly used for:</p>
      <ul>
        <li>Tower erection</li>
        <li>Marine lifting</li>
        <li>Specialized industrial lifting</li>
      </ul>
      <p>Derricks require careful:</p>
      <ul>
        <li>Anchoring</li>
        <li>Tensioning</li>
        <li>Structural evaluation</li>
      </ul>

      <h2 id="floating-cranes-marine-cranes">Floating cranes &amp; marine cranes</h2>
      <p>Marine cranes operate from:</p>
      <ul>
        <li>Barges</li>
        <li>Ships</li>
        <li>Floating platforms</li>
      </ul>
      <p>Additional hazards may include:</p>
      <ul>
        <li>Vessel movement</li>
        <li>Tide variation</li>
        <li>Dynamic instability</li>
        <li>Ballast effects</li>
      </ul>
      <p>Marine lifting operations require specialized engineering and operational control.</p>

      <h2 id="crane-stability-systems">Crane stability systems</h2>
      <p>Different cranes maintain stability using:</p>
      <ul>
        <li>Counterweights</li>
        <li>Outriggers</li>
        <li>Structural anchoring</li>
        <li>Track systems</li>
        <li>Ballast systems</li>
      </ul>
      <p>Improper understanding of crane stability may result in:</p>
      <ul>
        <li>Overturning</li>
        <li>Structural overload</li>
        <li>Dynamic instability</li>
      </ul>

      <h2 id="radius-capacity-relationships">Radius &amp; capacity relationships</h2>
      <p>Most cranes lose lifting capacity as radius increases.</p>
      <h3 id="load-moment-formula-appendix-d">Load moment formula</h3>
      <KaTeXBlock tex={rk`M = F \times d`} />
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`M`} /> = Load moment
        </li>
        <li>
          <KaTeXInline tex={rk`F`} /> = Load force
        </li>
        <li>
          <KaTeXInline tex={rk`d`} /> = Radius distance
        </li>
      </ul>
      <p>Understanding radius behavior is critical for safe rigging operations.</p>

      <h2 id="crane-dynamic-behavior">Crane dynamic behavior</h2>
      <p>Different cranes respond differently to:</p>
      <ul>
        <li>Wind</li>
        <li>Swinging loads</li>
        <li>Boom deflection</li>
        <li>Radius changes</li>
        <li>Dynamic movement</li>
      </ul>
      <p>Long booms and large radii may amplify:</p>
      <ul>
        <li>Pendulum effects</li>
        <li>Structural flexing</li>
        <li>Dynamic loading</li>
      </ul>

      <h2 id="wind-sensitivity">Wind sensitivity</h2>
      <p>Crane sensitivity to wind depends on:</p>
      <ul>
        <li>Boom length</li>
        <li>Crane height</li>
        <li>Load surface area</li>
        <li>Structural flexibility</li>
      </ul>
      <p>Tower cranes and lattice boom cranes are especially sensitive to:</p>
      <ul>
        <li>Wind loading</li>
        <li>Gusting conditions</li>
        <li>Windsail effects</li>
      </ul>

      <h2 id="ground-bearing-awareness">Ground bearing awareness</h2>
      <p>Mobile and crawler cranes transfer significant forces into the supporting ground.</p>
      <p>Ground conditions may affect:</p>
      <ul>
        <li>Stability</li>
        <li>Outrigger loading</li>
        <li>Track loading</li>
        <li>Settlement behavior</li>
      </ul>
      <p>Ground instability remains a major cause of crane incidents.</p>

      <h2 id="human-factors-crane-operations">Human factors &amp; crane operations</h2>
      <p>Crane incidents may involve:</p>
      <ul>
        <li>Miscommunication</li>
        <li>Improper setup</li>
        <li>Radius misjudgment</li>
        <li>Environmental exposure</li>
        <li>Fatigue</li>
        <li>Congestion</li>
        <li>Production pressure</li>
      </ul>
      <p>Safe crane operations require:</p>
      <ul>
        <li>Communication</li>
        <li>Situational awareness</li>
        <li>Controlled movement</li>
        <li>Operational discipline</li>
      </ul>

      <h2 id="situational-awareness-different-crane-types">Situational awareness around different crane types</h2>
      <p>Personnel working around cranes should continuously monitor:</p>
      <ul>
        <li>Load movement</li>
        <li>Boom movement</li>
        <li>Radius changes</li>
        <li>Ground conditions</li>
        <li>Wind conditions</li>
        <li>Personnel exposure</li>
        <li>Crane travel paths</li>
        <li>Communication effectiveness</li>
      </ul>
      <p>Each crane type behaves differently under load.</p>
      <p>
        Understanding crane operational characteristics helps rigging personnel maintain safer lifting operations in dynamic field environments—together with
        manufacturer load charts, applicable regulations, engineered lift plans, and approved site procedures.
      </p>

      <div className={riggingEducationFooterRowClass}>
        <a href={appendixC} className="font-medium text-primary hover:underline">
          ← Appendix C — Rigging equipment identification &amp; hardware reference
        </a>
        <a href={m4} className="font-medium text-primary hover:underline">
          Module 4 — Crane awareness for riggers →
        </a>
        <a href={appendixB} className="font-medium text-primary hover:underline">
          Appendix B — Basic rigging math &amp; formulas →
        </a>
        <a href={appendixE} className="font-medium text-primary hover:underline">
          Appendix E — BC regulations &amp; compliance quick reference →
        </a>
      </div>
    </div>
  );
}
