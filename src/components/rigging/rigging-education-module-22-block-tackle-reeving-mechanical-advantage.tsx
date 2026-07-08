import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";
import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";

import type { Locale } from "@/i18n/config";


const rk = String.raw;

/** Module 22 — Block & tackle, reeving & mechanical advantage systems (educational reference). */
export function RiggingEducationModule22BlockTackleReevingMechanicalAdvantage({locale}: {readonly locale: Locale}) {
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
  const appendixD = `/lessons/appendix-d`;
  const appendixE = `/lessons/appendix-e`;
  return (
    <div className={riggingEducationArticleClass}>
      <h2 id="regulatory-references">Regulatory &amp; standards references</h2>
      <p>This section references concepts commonly associated with:</p>
      <ul>
        <li>WorkSafeBC OHSR Part 14 — Material Handling</li>
        <li>WorkSafeBC OHSR Part 15 — Rigging</li>
        <li>ASME B30 rigging-related standards</li>
        <li>ASME B30.5 — Mobile &amp; Locomotive Cranes</li>
        <li>ASME B30.26 — Rigging Hardware</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer reeving and hoisting specifications</li>
        <li>Engineered rigging procedures</li>
        <li>Site-specific lifting and tensioning requirements</li>
      </ul>
      <p>
        Mechanical advantage systems and reeving configurations must always follow applicable regulations, manufacturer requirements, engineered procedures, and
        approved site practices.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Block and tackle systems use:</p>
      <ul>
        <li>Sheaves</li>
        <li>Wire rope</li>
        <li>Fibre rope</li>
        <li>Pulleys</li>
        <li>Mechanical advantage principles</li>
      </ul>
      <p>to reduce the effort required to move or control loads.</p>
      <p>These systems are commonly used in:</p>
      <ul>
        <li>Heavy rigging</li>
        <li>Structural movement</li>
        <li>Tower crane erection</li>
        <li>Machinery moving</li>
        <li>Industrial maintenance</li>
        <li>Rescue systems</li>
        <li>Tensioning operations</li>
        <li>Controlled lifting applications</li>
      </ul>
      <p>Although mechanical advantage reduces the input force required, the system still transfers substantial forces into:</p>
      <ul>
        <li>Anchors</li>
        <li>Rigging hardware</li>
        <li>Structural members</li>
        <li>Rope systems</li>
      </ul>
      <p>Improper reeving or mechanical advantage setup may create:</p>
      <ul>
        <li>Overloading</li>
        <li>Shock loading</li>
        <li>Side loading</li>
        <li>Rope damage</li>
        <li>Structural instability</li>
        <li>Snap-back hazards</li>
      </ul>
      <p>
        This section explores the principles of reeving, mechanical advantage, sheave systems, and operational awareness associated with block and tackle systems.
      </p>
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
        <a href={m23} className="font-medium text-primary hover:underline">
          M23 — Heavy lift
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

      <h2 id="mechanical-advantage">Mechanical advantage</h2>
      <p>Mechanical advantage allows workers to move larger loads using reduced input force.</p>
      <p>Mechanical advantage is created through:</p>
      <ul>
        <li>Multiple sheaves</li>
        <li>Rope routing</li>
        <li>Force distribution</li>
        <li>Pulley systems</li>
      </ul>

      <h3 id="ideal-mechanical-advantage-formula">Ideal mechanical advantage formula</h3>
      <KaTeXBlock tex={rk`\mathrm{IMA}=\frac{\mathrm{Load}}{\mathrm{Effort}}`} />
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`\mathrm{IMA}`} /> = Ideal mechanical advantage
        </li>
        <li>Load = Load force</li>
        <li>Effort = Input force</li>
      </ul>

      <h3 id="actual-mechanical-advantage">Actual mechanical advantage</h3>
      <p>Real systems experience:</p>
      <ul>
        <li>Friction</li>
        <li>Sheave resistance</li>
        <li>Rope bending resistance</li>
        <li>Alignment losses</li>
      </ul>
      <p>Actual mechanical advantage is therefore lower than ideal theoretical values.</p>

      <h2 id="sheaves">Sheaves</h2>
      <p>A sheave is a grooved wheel designed to guide rope or wire rope through a reeving system.</p>
      <p>Sheaves help:</p>
      <ul>
        <li>Redirect force</li>
        <li>Reduce friction</li>
        <li>Distribute load movement</li>
      </ul>
      <p>Improper sheave sizing or alignment may damage rope systems.</p>

      <h3 id="sheave-diameter-awareness">Sheave diameter awareness</h3>
      <p>Sheave diameter affects:</p>
      <ul>
        <li>Rope bending stress</li>
        <li>Rope fatigue</li>
        <li>Wire rope lifespan</li>
        <li>Operational efficiency</li>
      </ul>
      <p>Small sheaves may increase:</p>
      <ul>
        <li>Rope wear</li>
        <li>Internal wire fatigue</li>
        <li>Crushing forces</li>
      </ul>
      <p>Manufacturer specifications determine acceptable sheave-to-rope ratios.</p>

      <h2 id="blocks">Blocks</h2>
      <p>Blocks are assemblies containing one or more sheaves.</p>
      <p>Common types include:</p>
      <ul>
        <li>Snatch blocks</li>
        <li>Single-sheave blocks</li>
        <li>Multi-sheave blocks</li>
        <li>Hook blocks</li>
      </ul>
      <p>Blocks help create:</p>
      <ul>
        <li>Mechanical advantage</li>
        <li>Directional control</li>
        <li>Load distribution</li>
      </ul>

      <h3 id="snatch-blocks">Snatch blocks</h3>
      <p>Snatch blocks are hinged pulley blocks that allow rope installation without threading the rope through the block.</p>
      <p>Common uses include:</p>
      <ul>
        <li>Redirecting pulling force</li>
        <li>Tensioning systems</li>
        <li>Winching operations</li>
        <li>Temporary reeving systems</li>
      </ul>

      <h3 id="snatch-block-hazards">Snatch block hazards</h3>
      <p>Improper use may create:</p>
      <ul>
        <li>Side loading</li>
        <li>Shock loading</li>
        <li>Rope damage</li>
        <li>Structural overload</li>
        <li>Anchor failure</li>
      </ul>
      <p>Snatch blocks must:</p>
      <ul>
        <li>Match rope size</li>
        <li>Be properly rated</li>
        <li>Be correctly aligned</li>
      </ul>

      <h2 id="reeving">Reeving</h2>
      <p>Reeving refers to how rope passes through:</p>
      <ul>
        <li>Sheaves</li>
        <li>Blocks</li>
        <li>Drums</li>
        <li>Hook systems</li>
      </ul>
      <p>Proper reeving is essential for:</p>
      <ul>
        <li>Equal force distribution</li>
        <li>Rope protection</li>
        <li>Operational efficiency</li>
        <li>Load stability</li>
      </ul>

      <h3 id="improper-reeving-hazards">Improper reeving hazards</h3>
      <p>Improper reeving may create:</p>
      <ul>
        <li>Uneven loading</li>
        <li>Rope twisting</li>
        <li>Crushing</li>
        <li>Accelerated wear</li>
        <li>Side loading</li>
        <li>Reduced mechanical efficiency</li>
      </ul>
      <p>Complex reeving systems should follow engineered or manufacturer-approved configurations.</p>

      <h2 id="single-part-line">Single-part line</h2>
      <p>A single-part line uses one rope section directly supporting the load.</p>
      <p>Characteristics include:</p>
      <ul>
        <li>Simplicity</li>
        <li>Faster movement</li>
        <li>Higher line pull requirements</li>
        <li>Lower mechanical advantage</li>
      </ul>

      <h2 id="multi-part-line">Multi-part line</h2>
      <p>Multi-part line systems divide force between multiple rope sections.</p>
      <p>Advantages may include:</p>
      <ul>
        <li>Reduced line pull</li>
        <li>Increased lifting capability</li>
        <li>Improved force distribution</li>
      </ul>
      <p>However:</p>
      <ul>
        <li>Rope length requirements increase</li>
        <li>Reeving complexity increases</li>
        <li>Friction losses increase</li>
      </ul>

      <h2 id="reeving-efficiency">Reeving efficiency</h2>
      <p>Every sheave introduces:</p>
      <ul>
        <li>Friction</li>
        <li>Mechanical loss</li>
        <li>Heat generation</li>
        <li>Rope wear</li>
      </ul>
      <p>As reeving complexity increases:</p>
      <ul>
        <li>Efficiency decreases</li>
        <li>Friction losses increase</li>
      </ul>
      <p>Operational force calculations must consider reeving efficiency losses.</p>

      <h2 id="directional-force-changes">Directional force changes</h2>
      <p>Blocks and sheaves may redirect force horizontally, vertically, or at angles.</p>
      <p>Directional changes affect:</p>
      <ul>
        <li>Anchor loading</li>
        <li>Structural loading</li>
        <li>Side loading risk</li>
        <li>Rope alignment</li>
      </ul>
      <p>Improper directional loading may overload anchor systems unexpectedly.</p>

      <h2 id="fleet-angle">Fleet angle</h2>
      <p>Fleet angle refers to the angle between the rope, the drum centerline, and the sheave system.</p>
      <p>Improper fleet angles may cause:</p>
      <ul>
        <li>Rope spooling problems</li>
        <li>Crushing</li>
        <li>Uneven wear</li>
        <li>Drum damage</li>
        <li>Rope crossover</li>
      </ul>

      <h3 id="fleet-angle-awareness">Fleet angle awareness</h3>
      <p>Excessive fleet angle may result in:</p>
      <ul>
        <li>Rope piling</li>
        <li>Drum flange damage</li>
        <li>Rope twist</li>
        <li>Accelerated wear</li>
      </ul>
      <p>Proper drum alignment and sheave positioning help reduce fleet angle problems.</p>

      <h2 id="rope-tension-systems">Rope tension systems</h2>
      <p>Mechanical advantage systems are often used for:</p>
      <ul>
        <li>Structural positioning</li>
        <li>Alignment</li>
        <li>Pulling operations</li>
        <li>Temporary stabilization</li>
        <li>Heavy equipment movement</li>
      </ul>
      <p>These systems create stored energy that must be carefully controlled.</p>

      <h2 id="stored-energy-hazards-mechanical-advantage">Stored energy hazards</h2>
      <p>Mechanical advantage systems may store large amounts of energy within:</p>
      <ul>
        <li>Rope systems</li>
        <li>Wire rope</li>
        <li>Structural members</li>
        <li>Tensioned rigging</li>
      </ul>
      <p>Sudden release may create:</p>
      <ul>
        <li>Snap-back</li>
        <li>Flying components</li>
        <li>Violent load movement</li>
        <li>Structural collapse</li>
      </ul>

      <h2 id="snap-back-zones-block-tackle">Snap-back zones</h2>
      <p>Personnel should avoid positioning themselves:</p>
      <ul>
        <li>In line with tensioned rope</li>
        <li>Near loaded anchors</li>
        <li>Within potential recoil paths</li>
      </ul>
      <p>Snap-back incidents may result in severe injury or fatality.</p>

      <h2 id="gin-poles-derrick-concepts">Gin poles &amp; derrick concepts</h2>
      <p>Mechanical advantage principles are commonly used in:</p>
      <ul>
        <li>Gin poles</li>
        <li>Derrick systems</li>
        <li>Tower erection systems</li>
        <li>Temporary lifting structures</li>
      </ul>
      <p>These systems rely heavily on:</p>
      <ul>
        <li>Proper anchoring</li>
        <li>Stable geometry</li>
        <li>Controlled loading</li>
        <li>Engineered setup</li>
      </ul>

      <h2 id="highline-redirect-systems">Highline &amp; redirect systems</h2>
      <p>Highline systems use tensioned rope systems to transfer loads across distances.</p>
      <p>Redirect systems change load direction through:</p>
      <ul>
        <li>Sheaves</li>
        <li>Snatch blocks</li>
        <li>Anchors</li>
      </ul>
      <p>These systems may introduce:</p>
      <ul>
        <li>Large anchor forces</li>
        <li>High tension loading</li>
        <li>Complex force vectors</li>
      </ul>
      <p>Engineered review may be required for complex systems.</p>

      <h2 id="wire-rope-reeving-awareness">Wire rope reeving awareness</h2>
      <p>Wire rope reeving systems must account for:</p>
      <ul>
        <li>Rope lay direction</li>
        <li>Drum spooling</li>
        <li>Rotation tendencies</li>
        <li>Sheave alignment</li>
        <li>Rope bending fatigue</li>
      </ul>
      <p>Improper reeving may rapidly damage wire rope.</p>

      <h2 id="side-loading-hazards-blocks">Side loading hazards</h2>
      <p>Blocks and sheaves are generally designed for in-plane loading.</p>
      <p>Side loading may:</p>
      <ul>
        <li>Distort sheaves</li>
        <li>Damage bearings</li>
        <li>Twist rope</li>
        <li>Reduce capacity</li>
        <li>Cause catastrophic failure</li>
      </ul>
      <p>Proper alignment is critical during reeving operations.</p>

      <h2 id="inspection-requirements-mechanical-advantage">Inspection requirements</h2>
      <p>Mechanical advantage systems should be inspected for:</p>
      <ul>
        <li>Sheave wear</li>
        <li>Cracks</li>
        <li>Rope damage</li>
        <li>Bearing condition</li>
        <li>Alignment</li>
        <li>Structural distortion</li>
        <li>Hardware integrity</li>
        <li>Lubrication condition</li>
      </ul>
      <p>Damaged equipment should be removed from service.</p>

      <h2 id="human-factors-reeving-operations">Human factors in reeving operations</h2>
      <p>Incidents involving reeving systems may result from:</p>
      <ul>
        <li>Improper setup</li>
        <li>Inadequate inspection</li>
        <li>Poor communication</li>
        <li>Improvised rigging</li>
        <li>Overloading</li>
        <li>Inexperience</li>
      </ul>
      <p>Complex reeving systems require careful planning and operational discipline.</p>

      <h2 id="situational-awareness-reeving-operations">Situational awareness during reeving operations</h2>
      <p>Personnel involved in reeving and mechanical advantage systems should continuously monitor:</p>
      <ul>
        <li>Rope alignment</li>
        <li>Tension buildup</li>
        <li>Sheave movement</li>
        <li>Anchor stability</li>
        <li>Structural movement</li>
        <li>Personnel positioning</li>
        <li>Load behavior</li>
        <li>Communication effectiveness</li>
      </ul>
      <p>Conditions may change rapidly during tensioning and reeving operations.</p>
      <p>
        Continuous observation and controlled force application are essential for maintaining safe mechanical advantage operations—together with applicable
        regulations, manufacturer reeving data, engineered plans, and site-approved procedures.
      </p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m21} className="font-medium text-primary hover:underline">
          ← Module 21 — Knots, hitches &amp; rope applications
        </a>
        <a href={m23} className="font-medium text-primary hover:underline">
          Module 23 — Heavy lift engineering &amp; advanced rigging →
        </a>
        <a href={m24} className="font-medium text-primary hover:underline">
          Module 24 — Tower crane rigging →
        </a>
        <a href={m25} className="font-medium text-primary hover:underline">
          Module 25 — Incident case studies →
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
