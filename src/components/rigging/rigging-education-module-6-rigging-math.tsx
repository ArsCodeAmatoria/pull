import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";
import {RiggingDiagram} from "@/components/rigging-diagrams";
import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";

import type { Locale } from "@/i18n/config";


const rk = String.raw;

/** Module 6 — Rigging math & load calculations (COG, sling angle, moments, vectors). */
export function RiggingEducationModule6RiggingMath({locale}: {readonly locale: Locale}) {
  const edu = `/lessons`;
  const m1 = `/lessons/module-1`;
  const m2 = `/lessons/module-2`;
  const m3 = `/lessons/module-3`;
  const m4 = `/lessons/module-4`;
  const m5 = `/lessons/module-5`;
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
  const appendixD = `/lessons/appendix-d`;
  const appendixE = `/lessons/appendix-e`;
  return (
    <div className={riggingEducationArticleClass}>
      <h2 id="regulatory-references">Regulatory &amp; standards references</h2>
      <p>This section references concepts commonly associated with:</p>
      <ul>
        <li>WorkSafeBC OHSR Part 14 — Material Handling</li>
        <li>WorkSafeBC OHSR Part 15 — Rigging</li>
        <li>ASME B30.5 — Mobile &amp; Locomotive Cranes</li>
        <li>ASME B30.3 — Tower Cranes</li>
        <li>ASME B30.9 — Slings</li>
        <li>ASME B30.26 — Rigging Hardware</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer load charts and rigging data</li>
        <li>Engineered lift planning procedures</li>
      </ul>
      <p>
        Rigging calculations must always follow applicable regulations, manufacturer specifications, engineered lift plans, and approved site
        procedures.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>
        Rigging operations involve force transfer, load distribution, leverage, geometry, and dynamic movement. Rigging math helps determine
        whether lifting systems are capable of safely supporting and controlling loads during lifting operations.
      </p>
      <p>Even relatively simple lifts may involve:</p>
      <ul>
        <li>Sling angle force amplification</li>
        <li>Unequal load sharing</li>
        <li>Offset centers of gravity</li>
        <li>Dynamic loading effects</li>
        <li>Radius-related crane capacity changes</li>
      </ul>
      <p>Improper calculations may result in:</p>
      <ul>
        <li>Overloaded slings</li>
        <li>Crane overload conditions</li>
        <li>Load instability</li>
        <li>Structural damage</li>
        <li>Equipment failure</li>
        <li>Serious injury or fatal incidents</li>
      </ul>
      <p>This section explores the mathematical principles commonly associated with rigging and lifting operations.</p>
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
        <a href={m7} className="font-medium text-primary hover:underline">
          M7 — Communication
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m8} className="font-medium text-primary hover:underline">
          M8 — Advanced geometry
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m9} className="font-medium text-primary hover:underline">
          M9 — Load control
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m10} className="font-medium text-primary hover:underline">
          M10 — Chainfalls
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m11} className="font-medium text-primary hover:underline">
          M11 — Tandem
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m12} className="font-medium text-primary hover:underline">
          M12 — BTH
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

      <h2 id="basic-force-concepts">Basic force concepts</h2>
      <p>A suspended load transfers force through:</p>
      <ul>
        <li>Slings</li>
        <li>Hardware</li>
        <li>Connection points</li>
        <li>Below-the-hook devices</li>
        <li>Crane structures</li>
      </ul>
      <p>Rigging math helps estimate:</p>
      <ul>
        <li>Sling tension</li>
        <li>Load distribution</li>
        <li>Force amplification</li>
        <li>Load moments</li>
        <li>Stability conditions</li>
      </ul>

      <h2 id="units-measurement">Units of measurement</h2>
      <p>Rigging calculations may involve:</p>
      <ul>
        <li>Kilograms (kg)</li>
        <li>Pounds (lb)</li>
        <li>Tonnes</li>
        <li>Short tons</li>
        <li>Metric tons</li>
        <li>Newtons (N)</li>
        <li>Kilonewtons (kN)</li>
      </ul>
      <p>Consistency of units is critical during calculations.</p>

      <h2 id="weight-estimation">Weight estimation</h2>
      <p>Accurate load weight is essential before any lift begins.</p>
      <p>Loads should never be estimated casually.</p>
      <p>Weight information may come from:</p>
      <ul>
        <li>Engineering drawings</li>
        <li>Shipping documentation</li>
        <li>Manufacturer specifications</li>
        <li>Material calculations</li>
        <li>Structural information</li>
        <li>Certified weight markings</li>
      </ul>

      <h2 id="material-density">Material density awareness</h2>
      <p>Weight calculations may involve material density.</p>
      <p>Common examples include:</p>
      <ul>
        <li>Steel</li>
        <li>Concrete</li>
        <li>Aluminum</li>
        <li>Wood</li>
        <li>Water</li>
        <li>Soil</li>
        <li>Machinery assemblies</li>
      </ul>
      <p>
        Load modifications such as moisture, added materials, concrete residue, or ice accumulation may significantly affect actual load weight.
      </p>

      <h2 id="center-of-gravity">Center of gravity</h2>
      <p>The center of gravity is the point where the load&apos;s weight is balanced.</p>
      <p>If lifting points are not positioned correctly relative to the center of gravity:</p>
      <ul>
        <li>Loads may rotate</li>
        <li>Sling forces may become unequal</li>
        <li>Load instability may occur</li>
        <li>Shock loading may develop</li>
      </ul>

      <h2 id="cog-formula">Center of gravity formula</h2>
      <p>For discrete parts along one axis, the centroid of mass locates the combined center of gravity:</p>
      <div className="not-prose">
        <KaTeXBlock tex={rk`x_{\mathrm{cg}}=\frac{\sum_i m_i x_i}{\sum_i m_i}`} />
      </div>
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`x_{\mathrm{cg}}`} /> = Center of gravity location (along the reference axis)
        </li>
        <li>
          <KaTeXInline tex={rk`m_i`} /> = Individual mass
        </li>
        <li>
          <KaTeXInline tex={rk`x_i`} /> = Distance of each mass from the reference point
        </li>
      </ul>

      <h2 id="load-balance">Load balance</h2>
      <p>Balanced loads distribute forces more evenly through the rigging system.</p>
      <p>Unbalanced loads may:</p>
      <ul>
        <li>Swing</li>
        <li>Rotate</li>
        <li>Shift suddenly</li>
        <li>Overload sling legs</li>
        <li>Destabilize the crane</li>
      </ul>
      <p>Test lifts are commonly used to verify load balance before full hoisting.</p>

      <h2 id="sling-angle-effects">Sling angle effects</h2>
      <p>Sling angle is one of the most important rigging calculations.</p>
      <p>As sling angle decreases:</p>
      <ul>
        <li>Sling tension increases rapidly</li>
        <li>Compression forces increase</li>
        <li>Hardware loading increases</li>
      </ul>
      <p>Low sling angles can create extremely high forces even on relatively light loads.</p>

      <h2 id="sling-angle-formula">Sling angle formula</h2>
      <div className="not-prose">
        <KaTeXBlock tex={rk`T=\frac{W}{2\sin\theta}`} />
      </div>
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`T`} /> = Sling tension (symmetric two-leg model)
        </li>
        <li>
          <KaTeXInline tex={rk`W`} /> = Load weight
        </li>
        <li>
          <KaTeXInline tex={rk`\theta`} /> = Sling angle from horizontal (match your procedure, chart, and calculator convention)
        </li>
      </ul>

      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        <RiggingDiagram id="sling-bridle-30" caption="30° — each leg can equal full load weight" />
        <RiggingDiagram id="sling-bridle-90" caption="90° — lowest tension per leg in this model" />
      </div>

      <h2 id="sling-angle-awareness">Sling angle awareness</h2>
      <p>Higher sling angles generally reduce sling tension.</p>
      <p>Lower sling angles increase force dramatically.</p>
      <p>Common operational concerns include:</p>
      <ul>
        <li>Excessive sling loading</li>
        <li>Compression damage to loads</li>
        <li>Hardware overload</li>
        <li>Structural instability</li>
      </ul>
      <p>Very low sling angles should generally be avoided unless specifically engineered.</p>

      <h2 id="multi-leg-loading">Multi-leg sling loading</h2>
      <p>Multi-leg sling systems do not always distribute force equally.</p>
      <p>Unequal loading may occur because of:</p>
      <ul>
        <li>Unequal sling lengths</li>
        <li>Offset center of gravity</li>
        <li>Uneven lifting points</li>
        <li>Load geometry</li>
        <li>Sling stretch differences</li>
      </ul>
      <p>In many lifts:</p>
      <ul>
        <li>Two sling legs may carry most of the load</li>
        <li>One sling leg may become overloaded</li>
        <li>Dynamic movement may shift forces unexpectedly</li>
      </ul>

      <h2 id="load-sharing">Load sharing</h2>
      <p>Load sharing calculations help determine force distribution between sling legs or lifting points.</p>
      <p>Improper load sharing assumptions may create:</p>
      <ul>
        <li>Sling overload</li>
        <li>Hardware failure</li>
        <li>Load instability</li>
        <li>Structural damage</li>
      </ul>
      <p>Engineered lifts may require detailed force analysis.</p>

      <h2 id="dynamic-loading-math">Dynamic loading</h2>
      <p>Loads rarely remain perfectly static during lifting operations.</p>
      <p>Dynamic loading may result from:</p>
      <ul>
        <li>Sudden starts or stops</li>
        <li>Swinging</li>
        <li>Wind</li>
        <li>Snagged loads</li>
        <li>Rapid hoisting</li>
        <li>Sudden release of tension</li>
      </ul>
      <p>Dynamic loading may significantly increase forces beyond static load weight.</p>

      <h2 id="shock-loading-math">Shock loading</h2>
      <p>Shock loading occurs when force is applied suddenly rather than gradually.</p>
      <p>Examples include:</p>
      <ul>
        <li>Jerking a load</li>
        <li>Dropped slack</li>
        <li>Snagged loads releasing suddenly</li>
        <li>Sudden crane acceleration</li>
      </ul>
      <p>Shock loading may multiply forces dramatically and damage:</p>
      <ul>
        <li>Slings</li>
        <li>Hardware</li>
        <li>Crane structures</li>
        <li>Load attachment points</li>
      </ul>

      <h2 id="static-dynamic-loading">Static vs dynamic loading</h2>
      <h3>Static load</h3>
      <p>A stable load with little or no movement.</p>
      <h3>Dynamic load</h3>
      <p>A moving or changing load producing additional forces.</p>
      <p>Dynamic forces may greatly exceed static load weight depending on:</p>
      <ul>
        <li>Speed</li>
        <li>Direction change</li>
        <li>Swing motion</li>
        <li>Sudden stopping</li>
        <li>Environmental effects</li>
      </ul>

      <h2 id="force-vectors">Force vectors</h2>
      <p>Loads transfer force in multiple directions during lifting operations.</p>
      <p>Force vectors help explain:</p>
      <ul>
        <li>Sling tension</li>
        <li>Compression forces</li>
        <li>Horizontal loading</li>
        <li>Resultant force direction</li>
      </ul>

      <h2 id="force-components">Horizontal &amp; vertical force components</h2>
      <div className="not-prose space-y-4">
        <KaTeXBlock tex={rk`F_x = F\cos\theta`} />
        <KaTeXBlock tex={rk`F_y = F\sin\theta`} />
      </div>
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`F_x`} /> = Horizontal force component
        </li>
        <li>
          <KaTeXInline tex={rk`F_y`} /> = Vertical force component
        </li>
        <li>
          <KaTeXInline tex={rk`F`} /> = Total force
        </li>
        <li>
          <KaTeXInline tex={rk`\theta`} /> = Force angle (consistent with the model you are using)
        </li>
      </ul>

      <h2 id="load-moment-concept">Load moment concept</h2>
      <p>Crane loading depends heavily on load moment.</p>
      <p>Load moment combines:</p>
      <ul>
        <li>Load weight</li>
        <li>Radius distance</li>
      </ul>
      <p>As radius increases:</p>
      <ul>
        <li>Load moment increases</li>
        <li>Crane structural loading increases</li>
        <li>Crane capacity generally decreases</li>
      </ul>

      <h2 id="load-moment-formula">Load moment formula</h2>
      <div className="not-prose">
        <KaTeXBlock tex={rk`M = F \cdot d`} />
      </div>
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`M`} /> = Load moment
        </li>
        <li>
          <KaTeXInline tex={rk`F`} /> = Load force
        </li>
        <li>
          <KaTeXInline tex={rk`d`} /> = Radius distance (horizontal moment arm in the basic teaching model)
        </li>
      </ul>

      <h2 id="radius-awareness-math">Radius awareness</h2>
      <p>Crane capacity changes with:</p>
      <ul>
        <li>Radius</li>
        <li>Boom length</li>
        <li>Configuration</li>
        <li>Counterweight setup</li>
        <li>Crane orientation</li>
      </ul>
      <p>Moving a load farther away from the crane may dramatically reduce available capacity.</p>

      <h2 id="load-chart-awareness-rigging">Crane load chart awareness</h2>
      <p>Riggers should understand that crane load charts:</p>
      <ul>
        <li>Define operational limits</li>
        <li>Depend on crane configuration</li>
        <li>Change with radius</li>
        <li>Include structural limitations</li>
        <li>Require proper interpretation</li>
      </ul>
      <p>
        Crane operators and qualified personnel typically manage detailed chart interpretation, but riggers should understand the operational
        impact of radius and load changes.
      </p>

      <h2 id="rigging-weight">Rigging weight</h2>
      <p>Rigging equipment itself adds weight to the lift.</p>
      <p>Additional weight may include:</p>
      <ul>
        <li>Slings</li>
        <li>Shackles</li>
        <li>Spreader bars</li>
        <li>Lifting beams</li>
        <li>Hooks</li>
        <li>Specialized attachments</li>
      </ul>
      <p>Rigging weight must be included in total load calculations.</p>

      <h2 id="safety-factors">Safety factors</h2>
      <p>Rigging equipment is designed using engineering safety factors.</p>
      <p>Safety factors help account for:</p>
      <ul>
        <li>Dynamic loading</li>
        <li>Material imperfections</li>
        <li>Wear</li>
        <li>Fatigue</li>
        <li>Operational uncertainty</li>
      </ul>
      <p>Safety factors are not intended to justify overloading equipment.</p>

      <h2 id="unit-conversions">Unit conversions</h2>
      <p>Rigging calculations may require conversion between:</p>
      <ul>
        <li>Imperial and metric units</li>
        <li>Weight systems</li>
        <li>Force systems</li>
        <li>Length measurements</li>
      </ul>
      <p>Calculation errors caused by incorrect unit conversion may create severe lifting hazards.</p>

      <h2 id="environmental-calculations">Environmental effects on calculations</h2>
      <p>Environmental conditions may affect:</p>
      <ul>
        <li>Load weight</li>
        <li>Load behavior</li>
        <li>Sling tension</li>
        <li>Crane capacity</li>
        <li>Wind loading</li>
      </ul>
      <p>Examples include:</p>
      <ul>
        <li>Ice accumulation</li>
        <li>Water retention</li>
        <li>Windsail effects</li>
        <li>Mud or debris buildup</li>
      </ul>
      <p>Environmental effects must be considered during lift planning.</p>

      <h2 id="engineering-review">Engineering review &amp; complex calculations</h2>
      <p>Some lifts require advanced engineering calculations including:</p>
      <ul>
        <li>Multi-crane force analysis</li>
        <li>Structural analysis</li>
        <li>Specialized rigging geometry</li>
        <li>Dynamic load modeling</li>
        <li>Wind analysis</li>
        <li>Stability calculations</li>
      </ul>
      <p>Complex or critical lifts may require engineered lift plans and professional review.</p>

      <h2 id="calculation-verification">Calculation verification</h2>
      <p>Rigging calculations should always be:</p>
      <ul>
        <li>Verified</li>
        <li>Reviewed</li>
        <li>Cross-checked</li>
        <li>Communicated clearly</li>
      </ul>
      <p>Calculation mistakes may not become obvious until lifting forces are already applied.</p>
      <p>Verification procedures help reduce risk and improve lifting safety.</p>

      <h2 id="situational-awareness-math">Situational awareness &amp; applied judgment</h2>
      <p>Rigging math supports operational decision-making, but calculations alone do not guarantee safe lifting operations.</p>
      <p>Safe lifting also depends on:</p>
      <ul>
        <li>Situational awareness</li>
        <li>Communication</li>
        <li>Proper inspections</li>
        <li>Environmental evaluation</li>
        <li>Load control</li>
        <li>Worker competency</li>
        <li>Operational judgment</li>
      </ul>
      <p>Mathematical calculations must always be combined with practical field awareness and safe lifting practices.</p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m5} className="font-medium text-primary hover:underline">
          ← Module 5
        </a>
        <a href={m7} className="font-medium text-primary hover:underline">
          Module 7 — Communication →
        </a>
        <a href={m8} className="font-medium text-primary hover:underline">
          Module 8 — Advanced sling geometry →
        </a>
        <a href={m9} className="font-medium text-primary hover:underline">
          Module 9 — Advanced load control →
        </a>
        <a href={m10} className="font-medium text-primary hover:underline">
          Module 10 — Chainfalls &amp; lever hoists →
        </a>
        <a href={m11} className="font-medium text-primary hover:underline">
          Module 11 — Tandem &amp; multi-crane →
        </a>
        <a href={m12} className="font-medium text-primary hover:underline">
          Module 12 — Specialty BTH →
        </a>
        <a href={m13} className="font-medium text-primary hover:underline">
          Module 13 — Crane physics →
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
