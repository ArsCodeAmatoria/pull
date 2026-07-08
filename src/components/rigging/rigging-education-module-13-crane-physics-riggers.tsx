import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";
import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";

import type { Locale } from "@/i18n/config";


/** Module 13 — Crane physics for riggers (forces, vectors, moment, deflection, ground pressure). */
export function RiggingEducationModule13CranePhysicsRiggers({locale}: {readonly locale: Locale}) {
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
        <li>ASME B30 crane-related standards</li>
        <li>ASME B30.5 — Mobile &amp; Locomotive Cranes</li>
        <li>ASME B30.3 — Tower Cranes</li>
        <li>ASME B30.9 — Slings</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer load charts and engineering data</li>
        <li>Engineered lift planning procedures</li>
      </ul>
      <p>
        Crane physics principles must always be applied in conjunction with manufacturer specifications, engineered lift plans, regulatory requirements,
        and approved operational procedures.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Crane and rigging operations are governed by the principles of:</p>
      <ul>
        <li>Force</li>
        <li>Gravity</li>
        <li>Geometry</li>
        <li>Motion</li>
        <li>Stability</li>
        <li>Load transfer</li>
      </ul>
      <p>Understanding basic crane physics helps rigging personnel recognize how loads behave during lifting operations and how forces affect:</p>
      <ul>
        <li>Slings</li>
        <li>Hardware</li>
        <li>Crane structures</li>
        <li>Attachment points</li>
        <li>Suspended loads</li>
        <li>Ground conditions</li>
      </ul>
      <p>Even routine lifts involve constantly changing forces caused by:</p>
      <ul>
        <li>Sling angles</li>
        <li>Radius changes</li>
        <li>Dynamic movement</li>
        <li>Environmental conditions</li>
        <li>Structural flexing</li>
      </ul>
      <p>Improper understanding of force behavior may result in:</p>
      <ul>
        <li>Crane overload</li>
        <li>Rigging failure</li>
        <li>Structural instability</li>
        <li>Uncontrolled movement</li>
        <li>Shock loading</li>
        <li>Serious injury or fatal incidents</li>
      </ul>
      <p>This section explores the physical principles commonly associated with crane and rigging operations.</p>
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
          M11
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m12} className="font-medium text-primary hover:underline">
          M12 — BTH
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

      <h2 id="gravity">Gravity</h2>
      <p>Gravity is the force that pulls all objects toward the earth.</p>
      <p>During lifting operations:</p>
      <ul>
        <li>Gravity constantly acts on the load</li>
        <li>Rigging systems resist gravitational force</li>
        <li>Crane structures transfer these forces into the ground</li>
      </ul>
      <p>The heavier the load:</p>
      <ul>
        <li>The greater the gravitational force</li>
        <li>The greater the force transferred into the lifting system</li>
      </ul>

      <h2 id="force-transfer">Force transfer</h2>
      <p>Loads transfer force through:</p>
      <ul>
        <li>Slings</li>
        <li>Hooks</li>
        <li>Shackles</li>
        <li>Lifting beams</li>
        <li>Crane booms</li>
        <li>Crane structures</li>
        <li>Outriggers or foundations</li>
        <li>Ground surfaces</li>
      </ul>
      <p>Every lifting component becomes part of the force transfer system.</p>

      <h2 id="load-paths">Load paths</h2>
      <p>A load path is the route forces travel through the lifting system.</p>
      <p>Force travels from:</p>
      <ul>
        <li>The load</li>
        <li>Into the rigging system</li>
        <li>Into the crane</li>
        <li>Into the supporting structure or ground</li>
      </ul>
      <p>Improper load paths may create:</p>
      <ul>
        <li>Side loading</li>
        <li>Structural overload</li>
        <li>Uneven force distribution</li>
        <li>Instability</li>
      </ul>

      <h2 id="static-loads">Static loads</h2>
      <p>A static load is:</p>
      <ul>
        <li>Stable</li>
        <li>Motionless</li>
        <li>Supported without movement</li>
      </ul>
      <p>Static loads generally create predictable force conditions.</p>
      <p>Most rigging calculations begin using static load assumptions.</p>

      <h2 id="dynamic-loads">Dynamic loads</h2>
      <p>Dynamic loads involve:</p>
      <ul>
        <li>Movement</li>
        <li>Acceleration</li>
        <li>Swinging</li>
        <li>Rotation</li>
        <li>Sudden force changes</li>
      </ul>
      <p>Dynamic loading may greatly increase forces beyond static load weight.</p>

      <h2 id="dynamic-loading-sources">Dynamic loading sources</h2>
      <p>Dynamic loading may result from:</p>
      <ul>
        <li>Sudden starts</li>
        <li>Sudden stops</li>
        <li>Swinging</li>
        <li>Wind</li>
        <li>Snagged loads</li>
        <li>Shock loading</li>
        <li>Crane movement</li>
        <li>Structural movement</li>
      </ul>
      <p>Even relatively small loads may generate extremely large dynamic forces.</p>

      <h2 id="shock-loading">Shock loading</h2>
      <p>Shock loading occurs when force is applied suddenly instead of gradually.</p>
      <p>Examples include:</p>
      <ul>
        <li>Jerking a load</li>
        <li>Sudden release of a snagged load</li>
        <li>Rapid crane movement</li>
        <li>Dropped slack in rigging</li>
        <li>Sudden stopping</li>
      </ul>
      <p>Shock loading may:</p>
      <ul>
        <li>Multiply sling tension</li>
        <li>Damage crane structures</li>
        <li>Distort hardware</li>
        <li>Cause catastrophic failure</li>
      </ul>

      <h2 id="force-vectors">Force vectors</h2>
      <p>Forces acting on rigging systems have:</p>
      <ul>
        <li>Magnitude</li>
        <li>Direction</li>
      </ul>
      <p>Vector analysis helps explain:</p>
      <ul>
        <li>Sling tension</li>
        <li>Horizontal loading</li>
        <li>Compression forces</li>
        <li>Resultant force direction</li>
      </ul>

      <h2 id="horizontal-vertical-components">Horizontal &amp; vertical force components</h2>
      <p>A force may be separated into horizontal and vertical components when <KaTeXInline tex="\theta" /> is the angle of the force vector measured from the horizontal:</p>
      <KaTeXBlock tex={"\\begin{aligned} F_x &= F\\cos\\theta \\\\ F_y &= F\\sin\\theta \\end{aligned}"} />
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex="F_x" /> = horizontal force component
        </li>
        <li>
          <KaTeXInline tex="F_y" /> = vertical force component
        </li>
        <li>
          <KaTeXInline tex="F" /> = total force magnitude
        </li>
        <li>
          <KaTeXInline tex="\theta" /> = angle of the force from horizontal
        </li>
      </ul>

      <h2 id="sling-angle-physics">Sling angle physics</h2>
      <p>As sling angle decreases (legs closer to horizontal):</p>
      <ul>
        <li>Sling tension increases</li>
        <li>Horizontal compression increases</li>
        <li>Load stability may decrease</li>
      </ul>
      <p>Low sling angles can create extremely high forces within rigging systems.</p>

      <h2 id="sling-angle-formula">Sling angle formula</h2>
      <p>For a symmetric two-leg bridle supporting total weight <KaTeXInline tex="W" />, with each leg at angle <KaTeXInline tex="\theta" /> measured from the horizontal, tension <KaTeXInline tex="T" /> in each leg is:</p>
      <KaTeXBlock tex="T = \frac{W}{2\sin\theta}" />
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex="T" /> = sling tension (per leg, equal sharing)
        </li>
        <li>
          <KaTeXInline tex="W" /> = load weight
        </li>
        <li>
          <KaTeXInline tex="\theta" /> = sling angle from horizontal
        </li>
      </ul>
      <p>Site procedures, manufacturer tables, and engineered plans define which angle convention and hitch model apply.</p>

      <h2 id="compression-forces">Compression forces</h2>
      <p>Compression forces occur when structural members are pushed inward by force.</p>
      <p>Compression may affect:</p>
      <ul>
        <li>Spreader bars</li>
        <li>Structural steel</li>
        <li>Load edges</li>
        <li>Lifting beams</li>
        <li>Rigging assemblies</li>
      </ul>
      <p>Compression overload may cause:</p>
      <ul>
        <li>Buckling</li>
        <li>Structural deformation</li>
        <li>Equipment failure</li>
      </ul>

      <h2 id="tension-forces">Tension forces</h2>
      <p>Tension forces pull components apart.</p>
      <p>Tension affects:</p>
      <ul>
        <li>Slings</li>
        <li>Wire rope</li>
        <li>Chains</li>
        <li>Hooks</li>
        <li>Rigging hardware</li>
      </ul>
      <p>Excessive tension may result in:</p>
      <ul>
        <li>Stretching</li>
        <li>Failure</li>
        <li>Fatigue damage</li>
        <li>Shock loading effects</li>
      </ul>

      <h2 id="shear-forces">Shear forces</h2>
      <p>Shear forces occur when forces act across a material or connection point.</p>
      <p>Shear loading may affect:</p>
      <ul>
        <li>Pins</li>
        <li>Bolts</li>
        <li>Shackles</li>
        <li>Connection plates</li>
        <li>Structural joints</li>
      </ul>
      <p>Improper shear loading may damage:</p>
      <ul>
        <li>Hardware</li>
        <li>Structural components</li>
        <li>Attachment systems</li>
      </ul>

      <h2 id="bending-forces">Bending forces</h2>
      <p>Bending occurs when a component is loaded unevenly.</p>
      <p>Bending may affect:</p>
      <ul>
        <li>Lifting beams</li>
        <li>Hooks</li>
        <li>Structural members</li>
        <li>Spreader bars</li>
        <li>Crane booms</li>
      </ul>
      <p>Improper loading geometry may greatly increase bending stress.</p>

      <h2 id="torsion-twisting">Torsion &amp; twisting forces</h2>
      <p>Torsion occurs when force creates rotational stress.</p>
      <p>Twisting forces may develop in:</p>
      <ul>
        <li>Wire rope</li>
        <li>Long suspended loads</li>
        <li>Structural assemblies</li>
        <li>Multi-leg sling systems</li>
      </ul>
      <p>Excessive torsion may:</p>
      <ul>
        <li>Destabilize loads</li>
        <li>Damage rigging</li>
        <li>Create unequal loading</li>
      </ul>

      <h2 id="center-of-gravity-crane-physics">Center of gravity</h2>
      <p>The center of gravity is the balanced point of the load.</p>
      <p>Loads naturally rotate until the center of gravity aligns beneath the hook.</p>
      <p>Improper center of gravity evaluation may result in:</p>
      <ul>
        <li>Sudden rotation</li>
        <li>Sling overload</li>
        <li>Load instability</li>
        <li>Dynamic movement</li>
      </ul>

      <h2 id="center-of-gravity-formula">Center of gravity formula</h2>
      <p>For discrete point masses along one axis, the horizontal coordinate of the center of gravity from a reference is:</p>
      <KaTeXBlock tex="x_{\mathrm{cg}} = \frac{\sum_i m_i x_i}{\sum_i m_i}" />
      <p>
        Where <KaTeXInline tex="m_i" /> is mass <KaTeXInline tex="i" /> and <KaTeXInline tex="x_i" /> is its distance from the reference. Full three-dimensional or irregular-body COG may require additional engineering analysis, drawings, or weighing.
      </p>

      <h2 id="equilibrium">Equilibrium</h2>
      <p>A load is in equilibrium when:</p>
      <ul>
        <li>Forces are balanced</li>
        <li>Movement is controlled</li>
        <li>Rotation is minimized</li>
      </ul>
      <p>Suspended loads constantly seek equilibrium beneath the hook.</p>
      <p>Changes in:</p>
      <ul>
        <li>Sling geometry</li>
        <li>Wind</li>
        <li>Crane movement</li>
        <li>Center of gravity</li>
      </ul>
      <p>may disturb equilibrium.</p>

      <h2 id="pendulum-effect">Pendulum effect</h2>
      <p>Suspended loads naturally behave like pendulums.</p>
      <p>Pendulum motion increases with:</p>
      <ul>
        <li>Sudden crane movement</li>
        <li>Wind</li>
        <li>Uneven hoisting</li>
        <li>Rapid stopping</li>
      </ul>
      <p>Pendulum forces may:</p>
      <ul>
        <li>Increase sling tension</li>
        <li>Create impact hazards</li>
        <li>Destabilize loads</li>
      </ul>

      <h2 id="load-moment">Load moment</h2>
      <p>Crane loading depends heavily on load moment.</p>
      <p>Load moment combines:</p>
      <ul>
        <li>Load force</li>
        <li>Radius distance</li>
      </ul>
      <p>As radius increases:</p>
      <ul>
        <li>Load moment increases</li>
        <li>Crane capacity decreases</li>
        <li>Structural loading increases</li>
      </ul>

      <h2 id="load-moment-formula">Load moment formula</h2>
      <KaTeXBlock tex="M = F \times d" />
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex="M" /> = load moment
        </li>
        <li>
          <KaTeXInline tex="F" /> = load force (often weight or effective load)
        </li>
        <li>
          <KaTeXInline tex="d" /> = radius distance (per load chart definitions)
        </li>
      </ul>

      <h2 id="boom-deflection">Boom deflection</h2>
      <p>Crane booms naturally flex under load.</p>
      <p>Boom deflection may affect:</p>
      <ul>
        <li>Load positioning</li>
        <li>Radius</li>
        <li>Force distribution</li>
        <li>Load drift</li>
      </ul>
      <p>Deflection increases as:</p>
      <ul>
        <li>Load weight increases</li>
        <li>Radius increases</li>
        <li>Boom length increases</li>
      </ul>

      <h2 id="ground-bearing-pressure">Ground bearing pressure</h2>
      <p>Crane forces eventually transfer into the supporting ground.</p>
      <p>Ground pressure depends on:</p>
      <ul>
        <li>Crane weight</li>
        <li>Load weight</li>
        <li>Outrigger area</li>
        <li>Soil conditions</li>
        <li>Crane configuration</li>
      </ul>
      <p>Inadequate ground support may lead to:</p>
      <ul>
        <li>Settlement</li>
        <li>Crane instability</li>
        <li>Outrigger penetration</li>
        <li>Structural collapse</li>
      </ul>

      <h2 id="environmental-physics">Environmental physics</h2>
      <p>Environmental conditions may significantly affect lifting forces.</p>
      <p>Examples include:</p>
      <ul>
        <li>Wind loading</li>
        <li>Ice accumulation</li>
        <li>Water retention</li>
        <li>Temperature effects</li>
      </ul>
      <p>Wind may create:</p>
      <ul>
        <li>Horizontal loading</li>
        <li>Rotation</li>
        <li>Dynamic instability</li>
        <li>Increased structural stress</li>
      </ul>

      <h2 id="human-factors-judgment-physics">Human factors &amp; applied judgment</h2>
      <p>Physics calculations help explain load behavior, but safe lifting also depends on:</p>
      <ul>
        <li>Situational awareness</li>
        <li>Communication</li>
        <li>Inspection</li>
        <li>Controlled movement</li>
        <li>Environmental evaluation</li>
        <li>Operational discipline</li>
      </ul>
      <p>Rigging personnel must combine:</p>
      <ul>
        <li>Technical understanding</li>
        <li>Practical observation</li>
        <li>Safe operational judgment</li>
      </ul>
      <p>throughout all lifting activities.</p>

      <h2 id="situational-awareness-forces">Situational awareness &amp; force behavior</h2>
      <p>Personnel involved in lifting operations should continuously observe:</p>
      <ul>
        <li>Sling tension</li>
        <li>Load balance</li>
        <li>Rotation</li>
        <li>Dynamic movement</li>
        <li>Crane movement</li>
        <li>Environmental changes</li>
        <li>Structural response</li>
        <li>Ground conditions</li>
      </ul>
      <p>Forces within lifting systems constantly change during crane operations.</p>
      <p>
        Understanding crane physics helps workers recognize these changes and respond safely during lifting activities—always together with manufacturer
        data, engineered plans, regulations, and site-approved procedures.
      </p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m12} className="font-medium text-primary hover:underline">
          ← Module 12 — Specialty lifting devices &amp; attachments
        </a>
        <a href={m14} className="font-medium text-primary hover:underline">
          Module 14 — Environmental &amp; site hazards →
        </a>
        <a href={m15} className="font-medium text-primary hover:underline">
          Module 15 — Lift planning &amp; critical lifts →
        </a>
        <a href={m16} className="font-medium text-primary hover:underline">
          Module 16 — Practical rigging &amp; field operations →
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
