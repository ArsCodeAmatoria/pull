import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";
import {RiggingDiagram} from "@/components/rigging-diagrams";
import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";

import type { Locale } from "@/i18n/config";


/** Module 8 — Advanced sling geometry & load behavior (angles, COG, dynamics, engineered systems). */
export function RiggingEducationModule8AdvancedSlingGeometry({locale}: {readonly locale: Locale}) {
  const edu = `/lessons`;
  const m1 = `/lessons/module-1`;
  const m2 = `/lessons/module-2`;
  const m3 = `/lessons/module-3`;
  const m4 = `/lessons/module-4`;
  const m5 = `/lessons/module-5`;
  const m6 = `/lessons/module-6`;
  const m7 = `/lessons/module-7`;
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
        <li>Manufacturer rigging specifications</li>
        <li>Engineered lift planning procedures</li>
      </ul>
      <p>
        Advanced rigging operations must always follow applicable regulations, engineered lift plans, manufacturer requirements, and approved site
        procedures.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Advanced sling geometry involves the interaction between:</p>
      <ul>
        <li>Sling angles</li>
        <li>Load shape</li>
        <li>Load balance</li>
        <li>Center of gravity</li>
        <li>Load movement</li>
        <li>Dynamic forces</li>
        <li>Multi-leg rigging systems</li>
      </ul>
      <p>As lifting operations become more complex, sling forces rarely remain equal or perfectly predictable.</p>
      <p>Advanced rigging situations may involve:</p>
      <ul>
        <li>Unequal sling loading</li>
        <li>Offset centers of gravity</li>
        <li>Rotational instability</li>
        <li>Dynamic movement</li>
        <li>Complex load geometry</li>
        <li>Engineered rigging assemblies</li>
      </ul>
      <p>Improper understanding of sling geometry and load behavior may result in:</p>
      <ul>
        <li>Sling overload</li>
        <li>Load shift</li>
        <li>Load rotation</li>
        <li>Shock loading</li>
        <li>Crane overload conditions</li>
        <li>Structural damage</li>
        <li>Equipment failure</li>
      </ul>
      <p>This section explores advanced force behavior and load stability concepts commonly encountered in complex lifting operations.</p>
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
          M7 — Communication
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

      <h2 id="sling-geometry-fundamentals">Sling geometry fundamentals</h2>
      <p>Sling geometry refers to:</p>
      <ul>
        <li>Sling length relationships</li>
        <li>Sling angles</li>
        <li>Connection point locations</li>
        <li>Force direction</li>
        <li>Load distribution patterns</li>
      </ul>
      <p>Changes in geometry directly affect:</p>
      <ul>
        <li>Sling tension</li>
        <li>Hardware loading</li>
        <li>Load stability</li>
        <li>Compression forces</li>
        <li>Crane loading conditions</li>
      </ul>

      <h2 id="force-distribution">Force distribution</h2>
      <p>Loads do not always distribute force equally through sling systems.</p>
      <p>Unequal loading may occur because of:</p>
      <ul>
        <li>Different sling lengths</li>
        <li>Uneven attachment points</li>
        <li>Offset center of gravity</li>
        <li>Structural deflection</li>
        <li>Sling stretch differences</li>
        <li>Dynamic movement</li>
      </ul>
      <p>Even small geometric differences may create major force variations.</p>

      <h2 id="sling-angle-amplification">Sling angle force amplification</h2>
      <p>As sling angles decrease:</p>
      <ul>
        <li>Sling tension increases rapidly</li>
        <li>Horizontal compression forces increase</li>
        <li>Hardware loading increases</li>
      </ul>
      <p>Low sling angles may create extremely high forces even on moderate loads.</p>

      <h2 id="sling-angle-formula">Sling angle formula</h2>
      <p>
        For a symmetric two-leg bridle with equal legs, a common form relates total load weight <KaTeXInline tex="W" />, sling tension{" "}
        <KaTeXInline tex="T" />, and sling angle <KaTeXInline tex="\theta" /> measured from horizontal:
      </p>
      <KaTeXBlock tex="T = \frac{W}{2\sin\theta}" />
      <div className="not-prose my-8 grid gap-6 lg:grid-cols-2">
        <RiggingDiagram id="sling-bridle-45" caption="Symmetric bridle — θ measured from horizontal at the load" />
        <RiggingDiagram id="leg-included-angle" caption="Leg angle vs included angle between legs" />
      </div>
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex="T" /> = sling tension (per leg, when legs share load symmetrically under the stated assumptions)
        </li>
        <li>
          <KaTeXInline tex="W" /> = load weight
        </li>
        <li>
          <KaTeXInline tex="\theta" /> = sling angle from horizontal
        </li>
      </ul>
      <p>Real lifts may require engineering analysis when geometry, leg count, or load sharing is not symmetric.</p>

      <h2 id="horizontal-compression-forces">Horizontal compression forces</h2>
      <p>Low sling angles create horizontal compression forces against:</p>
      <ul>
        <li>Load edges</li>
        <li>Spreader bars</li>
        <li>Structural members</li>
        <li>Attachment points</li>
      </ul>
      <p>These forces may:</p>
      <ul>
        <li>Damage loads</li>
        <li>Bend structural members</li>
        <li>Distort lifting points</li>
        <li>Create instability</li>
      </ul>
      <p>Compression forces are often overlooked during rigging operations.</p>
      <RiggingDiagram id="horizontal-compression" caption="Shallow angles push inward on the load" />

      <h2 id="multi-leg-sling-systems">Multi-leg sling systems</h2>
      <p>Multi-leg sling systems may include:</p>
      <ul>
        <li>Two-leg bridles</li>
        <li>Three-leg bridles</li>
        <li>Four-leg bridles</li>
        <li>Engineered sling assemblies</li>
      </ul>
      <p>In practice, load sharing is rarely perfectly equal.</p>

      <h2 id="unequal-sling-loading">Unequal sling loading</h2>
      <p>Unequal loading may result from:</p>
      <ul>
        <li>Unequal sling lengths</li>
        <li>Offset center of gravity</li>
        <li>Uneven lifting point elevation</li>
        <li>Structural flexing</li>
        <li>Manufacturing tolerances</li>
        <li>Sling stretch differences</li>
      </ul>
      <p>One sling leg may carry significantly more force than the others.</p>

      <h2 id="center-of-gravity-stability">Center of gravity &amp; load stability</h2>
      <p>The center of gravity determines how a load behaves when lifted.</p>
      <p>If lifting points are not aligned properly:</p>
      <ul>
        <li>The load may rotate</li>
        <li>Sling tension may shift</li>
        <li>Dynamic movement may develop</li>
        <li>Load instability may increase</li>
      </ul>
      <p>Loads naturally seek equilibrium beneath the hook.</p>
      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        <RiggingDiagram id="cog-centered" caption="Hook above center of gravity" />
        <RiggingDiagram id="cog-offset" caption="Offset COG — adjust leg lengths" />
      </div>

      <h2 id="offset-center-of-gravity">Offset center of gravity</h2>
      <p>An offset center of gravity occurs when the load’s weight is unevenly distributed.</p>
      <p>Examples include:</p>
      <ul>
        <li>Machinery</li>
        <li>Mechanical units</li>
        <li>Structural assemblies</li>
        <li>Prefabricated modules</li>
        <li>Concrete components</li>
        <li>Loads with internal moving parts</li>
      </ul>
      <p>Offset loads may:</p>
      <ul>
        <li>Rotate unexpectedly</li>
        <li>Shift during lifting</li>
        <li>Overload sling legs</li>
        <li>Create dynamic instability</li>
      </ul>

      <h2 id="test-lifts">Test lifts</h2>
      <p>Test lifts are commonly used to:</p>
      <ul>
        <li>Verify load balance</li>
        <li>Confirm rigging geometry</li>
        <li>Observe sling tension</li>
        <li>Detect instability</li>
        <li>Evaluate load behavior</li>
      </ul>
      <p>During a test lift:</p>
      <ul>
        <li>The load is raised slightly</li>
        <li>Load behavior is observed carefully</li>
        <li>Adjustments are made if required</li>
      </ul>
      <p>Test lifts help reduce unexpected movement during full lifting operations.</p>

      <h2 id="load-rotation">Load rotation</h2>
      <p>Loads may rotate because of:</p>
      <ul>
        <li>Offset center of gravity</li>
        <li>Unequal sling tension</li>
        <li>Wind</li>
        <li>Attachment point geometry</li>
        <li>Dynamic movement</li>
        <li>Structural imbalance</li>
      </ul>
      <p>Rotating loads may:</p>
      <ul>
        <li>Strike nearby objects</li>
        <li>Twist rigging</li>
        <li>Create shock loading</li>
        <li>Endanger workers</li>
      </ul>

      <h2 id="rotational-stability">Rotational stability</h2>
      <p>Rotational stability depends on:</p>
      <ul>
        <li>Proper lifting point placement</li>
        <li>Symmetrical rigging geometry</li>
        <li>Balanced loading</li>
        <li>Controlled movement</li>
        <li>Environmental conditions</li>
      </ul>
      <p>Some loads require engineered rigging systems specifically designed to control rotation.</p>

      <h2 id="dynamic-load-behavior">Dynamic load behavior</h2>
      <p>Loads rarely remain perfectly static during lifting operations.</p>
      <p>Dynamic behavior may result from:</p>
      <ul>
        <li>Swinging</li>
        <li>Sudden acceleration</li>
        <li>Sudden stopping</li>
        <li>Wind</li>
        <li>Load shifting</li>
        <li>Structural flexing</li>
        <li>Crane movement</li>
      </ul>
      <p>Dynamic loading may significantly increase forces throughout the lifting system.</p>

      <h2 id="pendulum-effect">Pendulum effect</h2>
      <p>Suspended loads naturally behave like pendulums.</p>
      <p>Pendulum motion may increase because of:</p>
      <ul>
        <li>Sudden crane movement</li>
        <li>Wind</li>
        <li>Improper load control</li>
        <li>Uneven terrain</li>
        <li>Rapid stopping</li>
      </ul>
      <p>Pendulum movement may create:</p>
      <ul>
        <li>Increased sling loading</li>
        <li>Worker exposure hazards</li>
        <li>Collision risk</li>
        <li>Instability</li>
      </ul>

      <h2 id="load-drift">Load drift</h2>
      <p>Load drift occurs when a suspended load moves horizontally during lifting.</p>
      <p>Causes may include:</p>
      <ul>
        <li>Wind</li>
        <li>Crane boom deflection</li>
        <li>Uneven hoisting</li>
        <li>Load imbalance</li>
        <li>Dynamic motion</li>
      </ul>
      <p>Drift increases the difficulty of maintaining load control.</p>

      <h2 id="sling-twist-torque">Sling twist &amp; torque</h2>
      <p>Twisting forces may develop in:</p>
      <ul>
        <li>Wire rope slings</li>
        <li>Rotation-resistant rope</li>
        <li>Multi-leg sling systems</li>
        <li>Long suspended loads</li>
      </ul>
      <p>Excessive twisting may:</p>
      <ul>
        <li>Damage slings</li>
        <li>Create instability</li>
        <li>Introduce uneven loading</li>
        <li>Reduce capacity</li>
      </ul>
      <p>Rigging systems should minimize unintended torsional loading.</p>

      <h2 id="structural-flexing">Structural flexing</h2>
      <p>Large loads and lifting beams may flex under load.</p>
      <p>Flexing may:</p>
      <ul>
        <li>Shift load distribution</li>
        <li>Alter sling angles</li>
        <li>Create uneven loading</li>
        <li>Change center of gravity relationships</li>
      </ul>
      <p>Engineered lifts often account for expected structural deflection.</p>

      <h2 id="spreader-bars-lifting-beams">Spreader bars &amp; lifting beams</h2>
      <p>Spreader bars and lifting beams help control sling geometry by:</p>
      <ul>
        <li>Reducing sling angle forces</li>
        <li>Improving load distribution</li>
        <li>Controlling compression forces</li>
        <li>Stabilizing lifting configurations</li>
      </ul>
      <p>Improper spreader configurations may introduce unintended loading conditions.</p>

      <h2 id="compression-buckling-hazards">Compression &amp; buckling hazards</h2>
      <p>Compression forces may affect:</p>
      <ul>
        <li>Structural members</li>
        <li>Spreader bars</li>
        <li>Load edges</li>
        <li>Attachment points</li>
      </ul>
      <p>Long slender components may buckle under compression if improperly supported.</p>
      <p>Compression effects must be considered during engineered lifting operations.</p>

      <h2 id="environmental-effects-load-behavior">Environmental effects on load behavior</h2>
      <p>Environmental conditions may greatly affect load stability.</p>
      <p>Factors include:</p>
      <ul>
        <li>Wind</li>
        <li>Ice accumulation</li>
        <li>Rain</li>
        <li>Uneven ground</li>
        <li>Visibility limitations</li>
        <li>Temperature effects</li>
      </ul>
      <p>Large surface-area loads are especially vulnerable to environmental instability.</p>

      <h2 id="engineered-rigging-systems">Engineered rigging systems</h2>
      <p>Complex lifts may require:</p>
      <ul>
        <li>Engineered rigging drawings</li>
        <li>Specialized lifting beams</li>
        <li>Equalizing systems</li>
        <li>Custom lifting lugs</li>
        <li>Multi-crane coordination</li>
        <li>Structural analysis</li>
      </ul>
      <p>Engineered systems help manage advanced force distribution and stability concerns.</p>

      <h2 id="human-factors-judgment">Human factors &amp; operational judgment</h2>
      <p>Advanced rigging operations require:</p>
      <ul>
        <li>Situational awareness</li>
        <li>Experience</li>
        <li>Communication</li>
        <li>Controlled movement</li>
        <li>Careful observation</li>
        <li>Operational discipline</li>
      </ul>
      <p>Even properly calculated lifting systems may become hazardous if:</p>
      <ul>
        <li>Conditions change</li>
        <li>Communication fails</li>
        <li>Loads shift unexpectedly</li>
        <li>Environmental conditions deteriorate</li>
      </ul>
      <p>Operational judgment remains critical throughout advanced lifting operations.</p>

      <h2 id="situational-awareness-advanced">Situational awareness during advanced lifts</h2>
      <p>Personnel involved in advanced rigging operations must continuously monitor:</p>
      <ul>
        <li>Sling tension</li>
        <li>Load balance</li>
        <li>Rotation</li>
        <li>Crane movement</li>
        <li>Environmental changes</li>
        <li>Personnel exposure</li>
        <li>Communication effectiveness</li>
        <li>Rigging alignment</li>
      </ul>
      <p>Advanced rigging requires continuous evaluation and adaptation throughout every phase of the lift.</p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m7} className="font-medium text-primary hover:underline">
          ← Module 7 — Communication &amp; signaling
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