import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";
import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";

import type { Locale } from "@/i18n/config";


const rk = String.raw;

/** Module 5 — Basic rigging practices (hitches, COG, taglines, landing, communication). */
export function RiggingEducationModule5BasicPractices({locale}: {readonly locale: Locale}) {
  const edu = `/lessons`;
  const m1 = `/lessons/module-1`;
  const m2 = `/lessons/module-2`;
  const m3 = `/lessons/module-3`;
  const m4 = `/lessons/module-4`;
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
  const appendixD = `/lessons/appendix-d`;
  const appendixE = `/lessons/appendix-e`;
  return (
    <div className={riggingEducationArticleClass}>
      <h2 id="regulatory-references">Regulatory &amp; standards references</h2>
      <p>This section references concepts commonly associated with:</p>
      <ul>
        <li>WorkSafeBC OHSR Part 14 — Material Handling</li>
        <li>WorkSafeBC OHSR Part 15 — Rigging</li>
        <li>ASME B30.9 — Slings</li>
        <li>ASME B30.26 — Rigging Hardware</li>
        <li>ASME B30 crane-related standards</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer rigging requirements</li>
        <li>Engineered lifting procedures</li>
        <li>Site-specific lifting and rigging policies</li>
      </ul>
      <p>
        Rigging practices must always follow applicable regulations, manufacturer specifications, engineered instructions, and employer procedures.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Basic rigging practices form the foundation of safe lifting operations. Proper rigging techniques help maintain:</p>
      <ul>
        <li>Load stability</li>
        <li>Equipment integrity</li>
        <li>Controlled load movement</li>
        <li>Worker safety</li>
        <li>Communication efficiency</li>
      </ul>
      <p>Even simple lifts involve force transfer, load balance, sling tension, and dynamic movement. Improper rigging practices may result in:</p>
      <ul>
        <li>Load shift</li>
        <li>Sling failure</li>
        <li>Equipment damage</li>
        <li>Shock loading</li>
        <li>Uncontrolled movement</li>
        <li>Serious injury or fatal incidents</li>
      </ul>
      <p>This section explores the core principles associated with basic rigging operations and safe load handling practices.</p>
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
          M15
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m16} className="font-medium text-primary hover:underline">
          M16
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

      <h2 id="system-fundamentals">Rigging system fundamentals</h2>
      <p>A rigging system transfers load forces from the load to the crane through:</p>
      <ul>
        <li>Slings</li>
        <li>Hardware</li>
        <li>Connection points</li>
        <li>Below-the-hook devices</li>
        <li>Crane hook systems</li>
      </ul>
      <p>Each component must:</p>
      <ul>
        <li>Be properly selected</li>
        <li>Be compatible</li>
        <li>Be inspected</li>
        <li>Have adequate capacity</li>
        <li>Be correctly configured</li>
      </ul>
      <p>The lifting system is only as strong as its weakest component.</p>

      <h2 id="pre-lift">Pre-lift considerations</h2>
      <p>Before rigging a load, personnel should evaluate:</p>
      <ul>
        <li>Load weight</li>
        <li>Center of gravity</li>
        <li>Load dimensions</li>
        <li>Rigging capacity</li>
        <li>Sling angles</li>
        <li>Environmental conditions</li>
        <li>Load path</li>
        <li>Landing area</li>
        <li>Communication systems</li>
        <li>Nearby hazards</li>
      </ul>
      <p>Improper planning increases the likelihood of load instability and uncontrolled movement.</p>

      <h2 id="wll">Working load limit (WLL)</h2>
      <p>Rigging equipment must never be loaded beyond its Working Load Limit (WLL).</p>
      <p>Capacity may change depending on:</p>
      <ul>
        <li>Sling angle</li>
        <li>Hitch type</li>
        <li>Load distribution</li>
        <li>Environmental conditions</li>
        <li>Dynamic loading</li>
        <li>Connection geometry</li>
      </ul>
      <p>All rigging components must have sufficient capacity for the intended lift.</p>

      <h2 id="hitch-configurations">Hitch configurations</h2>
      <p>The hitch configuration directly affects:</p>
      <ul>
        <li>Sling tension</li>
        <li>Load stability</li>
        <li>Capacity</li>
        <li>Load control</li>
      </ul>
      <p>Improper hitch selection may significantly increase sling forces.</p>

      <h3 id="vertical-hitch">Vertical hitch</h3>
      <p>A vertical hitch supports the load directly from a single vertical sling leg.</p>
      <p>
        <strong>Characteristics</strong>
      </p>
      <ul>
        <li>Simplest hitch configuration</li>
        <li>Full rated sling capacity typically applies</li>
        <li>Limited load control</li>
        <li>No load choking action</li>
      </ul>
      <p>
        <strong>Considerations</strong>
      </p>
      <ul>
        <li>Load balance is critical</li>
        <li>Load may rotate if center of gravity is offset</li>
        <li>Load attachment points must be adequate</li>
      </ul>

      <h3 id="basket-hitch">Basket hitch</h3>
      <p>A basket hitch wraps under the load and supports it from both sides.</p>
      <p>
        <strong>Characteristics</strong>
      </p>
      <ul>
        <li>Increased load distribution</li>
        <li>Improved load balance</li>
        <li>Higher capacity compared to vertical hitch under ideal conditions</li>
      </ul>
      <p>
        <strong>Hazards</strong>
      </p>
      <ul>
        <li>Unequal loading if load is unbalanced</li>
        <li>Sling slippage</li>
        <li>Crushing forces on sling</li>
        <li>Reduced capacity at low sling angles</li>
      </ul>
      <p>Basket hitches require adequate load control and balanced loading conditions.</p>

      <h3 id="choker-hitch">Choker hitch</h3>
      <p>A choker hitch tightens around the load during lifting.</p>
      <p>
        <strong>Characteristics</strong>
      </p>
      <ul>
        <li>Provides load gripping action</li>
        <li>Useful for irregular loads</li>
        <li>Helps control certain load types</li>
      </ul>
      <p>
        <strong>Hazards</strong>
      </p>
      <ul>
        <li>Reduced sling capacity</li>
        <li>Increased sling stress</li>
        <li>Potential load damage</li>
        <li>Sling deformation at choke point</li>
      </ul>
      <p>Choker hitches generally reduce sling efficiency and capacity.</p>

      <h2 id="multi-leg">Multi-leg hitch configurations</h2>
      <p>Multi-leg sling systems distribute load forces across multiple sling legs.</p>
      <p>
        <strong>Common configurations</strong>
      </p>
      <ul>
        <li>Two-leg bridles</li>
        <li>Three-leg bridles</li>
        <li>Four-leg bridles</li>
      </ul>
      <h3>Multi-leg rigging considerations</h3>
      <p>Load distribution is often unequal in multi-leg systems due to:</p>
      <ul>
        <li>Unequal sling lengths</li>
        <li>Offset center of gravity</li>
        <li>Load shape</li>
        <li>Sling angle differences</li>
      </ul>
      <p>In many situations, not all sling legs carry equal force.</p>

      <h2 id="sling-angle-effects">Sling angle effects</h2>
      <p>As sling angle decreases, sling tension increases.</p>
      <p>Low sling angles may create extremely high forces even on relatively light loads.</p>

      <h2 id="sling-angle-formula">Sling angle formula</h2>
      <div className="not-prose">
        <KaTeXBlock tex={rk`T = \frac{W}{2\sin\theta}`} />
      </div>
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`T`} /> = Sling tension
        </li>
        <li>
          <KaTeXInline tex={rk`W`} /> = Load weight
        </li>
        <li>
          <KaTeXInline tex={rk`\theta`} /> = Sling angle measured from horizontal (symmetric two-leg model; always match the angle convention used on your chart, plan, and calculator)
        </li>
      </ul>

      <h2 id="center-of-gravity">Center of gravity</h2>
      <p>The center of gravity is the point where the load&apos;s weight is balanced.</p>
      <p>If the center of gravity is not properly identified:</p>
      <ul>
        <li>Loads may rotate</li>
        <li>Sling forces may become unequal</li>
        <li>Load instability may occur</li>
        <li>Shock loading may develop</li>
      </ul>

      <h2 id="cog-awareness">Center of gravity awareness</h2>
      <p>Irregular loads may have hidden or shifting centers of gravity.</p>
      <p>Examples include:</p>
      <ul>
        <li>Machinery</li>
        <li>Prefabricated assemblies</li>
        <li>Concrete panels</li>
        <li>Uneven structural steel</li>
        <li>Modular systems</li>
      </ul>
      <p>Test lifts are commonly used to verify load balance before full hoisting operations.</p>

      <h2 id="load-balance">Load balance</h2>
      <p>Balanced loads are easier to:</p>
      <ul>
        <li>Control</li>
        <li>Land</li>
        <li>Rotate</li>
        <li>Stabilize</li>
      </ul>
      <p>Unbalanced loads may:</p>
      <ul>
        <li>Swing unexpectedly</li>
        <li>Rotate</li>
        <li>Shift suddenly</li>
        <li>Overload rigging components</li>
      </ul>
      <p>Proper load balance is essential for safe lifting operations.</p>

      <h2 id="edge-protection">Edge protection</h2>
      <p>Sharp edges may damage:</p>
      <ul>
        <li>Synthetic slings</li>
        <li>Wire rope slings</li>
        <li>Synthetic rope systems</li>
      </ul>
      <p>Edge protection methods may include:</p>
      <ul>
        <li>Corner protectors</li>
        <li>Wear pads</li>
        <li>Softeners</li>
        <li>Protective sleeves</li>
      </ul>
      <p>Sharp edge contact can rapidly weaken sling materials.</p>

      <h2 id="sling-protection">Sling protection</h2>
      <p>Sling protection helps reduce:</p>
      <ul>
        <li>Abrasion</li>
        <li>Crushing</li>
        <li>Cutting</li>
        <li>Heat exposure</li>
        <li>Surface damage</li>
      </ul>
      <p>Protection methods should be compatible with:</p>
      <ul>
        <li>Load type</li>
        <li>Sling material</li>
        <li>Environmental conditions</li>
      </ul>

      <h2 id="taglines">Taglines</h2>
      <p>Taglines are ropes used to help control suspended loads during lifting operations.</p>
      <h3>Tagline functions</h3>
      <ul>
        <li>Reduce load rotation</li>
        <li>Control drift</li>
        <li>Assist positioning</li>
        <li>Improve worker distance from load</li>
      </ul>
      <h3>Tagline hazards</h3>
      <p>Improper tagline use may create:</p>
      <ul>
        <li>Entanglement hazards</li>
        <li>Pinch points</li>
        <li>Trip hazards</li>
        <li>Loss of load control</li>
      </ul>
      <p>Taglines should never be wrapped around hands or body parts.</p>

      <h2 id="load-path-planning">Load path planning</h2>
      <p>The load path is the route the suspended load travels during the lift.</p>
      <p>Safe load path planning considers:</p>
      <ul>
        <li>Personnel exposure</li>
        <li>Structural obstructions</li>
        <li>Equipment interference</li>
        <li>Public access</li>
        <li>Energized systems</li>
        <li>Traffic routes</li>
      </ul>
      <p>Loads should avoid traveling over workers whenever possible.</p>

      <h2 id="control-zones">Control zones &amp; exclusion areas</h2>
      <p>Controlled lifting areas help reduce exposure to:</p>
      <ul>
        <li>Suspended loads</li>
        <li>Falling objects</li>
        <li>Swing hazards</li>
        <li>Crane movement</li>
        <li>Rigging failure zones</li>
      </ul>
      <p>Only essential personnel should enter lifting zones during operations.</p>

      <h2 id="landing-loads">Landing loads</h2>
      <p>Loads should be landed:</p>
      <ul>
        <li>Slowly</li>
        <li>Evenly</li>
        <li>Under control</li>
        <li>On stable surfaces</li>
      </ul>
      <p>Landing areas should:</p>
      <ul>
        <li>Support load weight</li>
        <li>Remain clear of personnel</li>
        <li>Prevent load shift</li>
        <li>Allow safe rigging removal</li>
      </ul>

      <h2 id="unhooking">Unhooking procedures</h2>
      <p>Before removing rigging:</p>
      <ul>
        <li>Ensure load stability</li>
        <li>Verify load support</li>
        <li>Eliminate sling tension</li>
        <li>Maintain communication</li>
      </ul>
      <p>Premature unhooking may allow:</p>
      <ul>
        <li>Load movement</li>
        <li>Load collapse</li>
        <li>Sling snap-back</li>
        <li>Unexpected shifting</li>
      </ul>

      <h2 id="communication-lifts">Communication during lifts</h2>
      <p>Rigging operations depend heavily on communication between:</p>
      <ul>
        <li>Riggers</li>
        <li>Signalers</li>
        <li>Crane operators</li>
        <li>Supervisors</li>
        <li>Ground personnel</li>
      </ul>
      <p>Communication systems may include:</p>
      <ul>
        <li>Hand signals</li>
        <li>Radios</li>
        <li>Visual signals</li>
        <li>Pre-lift coordination</li>
      </ul>
      <p>Poor communication is a major contributor to lifting incidents.</p>

      <h2 id="dynamic-loading-practices">Dynamic loading awareness</h2>
      <p>Loads rarely remain perfectly static during lifting operations.</p>
      <p>Dynamic loading may result from:</p>
      <ul>
        <li>Sudden starts or stops</li>
        <li>Swinging</li>
        <li>Wind</li>
        <li>Snagged loads</li>
        <li>Rapid hoisting</li>
        <li>Sudden load release</li>
      </ul>
      <p>Dynamic movement may greatly increase forces within the rigging system.</p>

      <h2 id="shock-loading">Shock loading</h2>
      <p>Shock loading occurs when force is applied suddenly rather than gradually.</p>
      <p>Examples include:</p>
      <ul>
        <li>Jerking a load</li>
        <li>Snagged loads releasing suddenly</li>
        <li>Sudden crane movement</li>
        <li>Dropped slack in rigging</li>
      </ul>
      <p>Shock loading may generate forces far exceeding static load weight.</p>

      <h2 id="side-loading-rigging">Side loading hazards</h2>
      <p>Rigging systems are generally designed for vertical loading.</p>
      <p>Side loading may:</p>
      <ul>
        <li>Distort hardware</li>
        <li>Damage hooks</li>
        <li>Twist slings</li>
        <li>Reduce capacity</li>
        <li>Destabilize loads</li>
      </ul>
      <p>Loads should remain aligned with intended load paths whenever possible.</p>

      <h2 id="environmental-rigging">Environmental considerations</h2>
      <p>Environmental conditions affecting rigging operations may include:</p>
      <ul>
        <li>Wind</li>
        <li>Rain</li>
        <li>Ice</li>
        <li>Mud</li>
        <li>Temperature extremes</li>
        <li>Reduced visibility</li>
      </ul>
      <p>Environmental conditions may affect:</p>
      <ul>
        <li>Load stability</li>
        <li>Worker footing</li>
        <li>Communication</li>
        <li>Equipment performance</li>
      </ul>

      <h2 id="situational-awareness">Situational awareness</h2>
      <p>Safe rigging requires continuous observation of:</p>
      <ul>
        <li>Load behavior</li>
        <li>Sling tension</li>
        <li>Crane movement</li>
        <li>Personnel locations</li>
        <li>Environmental changes</li>
        <li>Equipment condition</li>
      </ul>
      <p>Situational awareness is one of the most important skills in lifting operations.</p>
      <p>Rigging personnel must constantly evaluate changing conditions throughout every phase of the lift.</p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m4} className="font-medium text-primary hover:underline">
          ← Module 4
        </a>
        <a href={m6} className="font-medium text-primary hover:underline">
          Module 6 — Rigging math →
        </a>
        <a href={m7} className="font-medium text-primary hover:underline">
          M7 — Communication →
        </a>
        <a href={m8} className="font-medium text-primary hover:underline">
          M8 — Advanced geometry →
        </a>
        <a href={m9} className="font-medium text-primary hover:underline">
          M9 — Load control →
        </a>
        <a href={m10} className="font-medium text-primary hover:underline">
          M10 — Chainfalls →
        </a>
        <a href={m11} className="font-medium text-primary hover:underline">
          M11 — Tandem lifts →
        </a>
        <a href={m12} className="font-medium text-primary hover:underline">
          M12 — BTH →
        </a>
        <a href={m13} className="font-medium text-primary hover:underline">
          M13 — Crane physics →
        </a>
        <a href={m14} className="font-medium text-primary hover:underline">
          M14 — Environment &amp; site →
        </a>
        <a href={m15} className="font-medium text-primary hover:underline">
          M15 — Lift planning →
        </a>
        <a href={m16} className="font-medium text-primary hover:underline">
          M16 — Field rigging →
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
