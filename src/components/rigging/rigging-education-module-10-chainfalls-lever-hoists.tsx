import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";
type Locale = "en";


/** Module 10 — Chainfalls, lever hoists & tensioning devices (manual hoists, stored energy, anchoring). */
export function RiggingEducationModule10ChainfallsLeverHoists({locale}: {readonly locale: Locale}) {
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
        <li>ASME B30.16 — Overhead Hoists (Underhung)</li>
        <li>ASME B30.21 — Lever Hoists</li>
        <li>ASME B30.26 — Rigging Hardware</li>
        <li>ASME B30.9 — Slings</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer operating manuals and inspection requirements</li>
        <li>Engineered lift procedures</li>
        <li>Site-specific rigging and tensioning procedures</li>
      </ul>
      <p>
        Chainfalls, lever hoists, and tensioning systems must always be used according to manufacturer specifications, engineered procedures, and
        applicable regulations.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Chainfalls, lever hoists, and tensioning devices are commonly used during:</p>
      <ul>
        <li>Load positioning</li>
        <li>Structural alignment</li>
        <li>Equipment installation</li>
        <li>Rigging adjustments</li>
        <li>Controlled pulling operations</li>
        <li>Stabilization activities</li>
        <li>Lift preparation</li>
        <li>Maintenance work</li>
      </ul>
      <p>These devices allow workers to:</p>
      <ul>
        <li>Lift loads manually</li>
        <li>Apply controlled tension</li>
        <li>Pull loads horizontally</li>
        <li>Adjust rigging geometry</li>
        <li>Fine-tune positioning</li>
      </ul>
      <p>Although these tools may appear simple, improper use can create:</p>
      <ul>
        <li>Extreme stored energy</li>
        <li>Sudden load release</li>
        <li>Equipment failure</li>
        <li>Side loading hazards</li>
        <li>Structural instability</li>
        <li>Serious injury or fatal incidents</li>
      </ul>
      <p>
        This section explores operational principles, inspection awareness, load control considerations, and hazards associated with chainfalls,
        lever hoists, and tensioning systems.
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
          M9 — Load control
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m11} className="font-medium text-primary hover:underline">
          M11 — Tandem lifts
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

      <h2 id="chainfalls">Chainfalls</h2>
      <p>A chainfall is a manually operated hoisting device that uses:</p>
      <ul>
        <li>Load chain</li>
        <li>Hand chain</li>
        <li>Internal gearing</li>
        <li>Brake systems</li>
        <li>Mechanical advantage</li>
      </ul>
      <p>Chainfalls are commonly used for:</p>
      <ul>
        <li>Vertical lifting</li>
        <li>Positioning loads</li>
        <li>Suspended equipment adjustment</li>
        <li>Structural alignment</li>
        <li>Maintenance operations</li>
      </ul>

      <h2 id="chainfall-components">Chainfall components</h2>
      <p>Common chainfall components include:</p>
      <ul>
        <li>Load hook</li>
        <li>Suspension hook</li>
        <li>Load chain</li>
        <li>Hand chain</li>
        <li>Gear housing</li>
        <li>Brake assembly</li>
        <li>Mechanical reduction system</li>
      </ul>
      <p>Each component contributes to safe operation and load control.</p>

      <h2 id="chainfall-operation-principles">Chainfall operation principles</h2>
      <p>Chainfalls multiply lifting force through:</p>
      <ul>
        <li>Gear reduction</li>
        <li>Mechanical advantage</li>
        <li>Controlled manual input</li>
      </ul>
      <p>This allows workers to lift loads heavier than could otherwise be moved manually.</p>
      <p>However, mechanical advantage does not eliminate:</p>
      <ul>
        <li>Load hazards</li>
        <li>Structural loading</li>
        <li>Rigging forces</li>
        <li>Overload potential</li>
      </ul>

      <h2 id="chainfall-hazards">Chainfall hazards</h2>
      <p>Improper chainfall use may create:</p>
      <ul>
        <li>Overloading</li>
        <li>Side loading</li>
        <li>Brake failure</li>
        <li>Chain damage</li>
        <li>Shock loading</li>
        <li>Uncontrolled descent</li>
        <li>Suspended load hazards</li>
      </ul>
      <p>Loads suspended by chainfalls must remain properly supported and controlled at all times.</p>

      <h2 id="chainfall-side-loading">Side loading hazards</h2>
      <p>Chainfalls are generally designed for:</p>
      <ul>
        <li>Straight-line loading</li>
        <li>Vertical lifting</li>
      </ul>
      <p>Side loading may:</p>
      <ul>
        <li>Twist components</li>
        <li>Damage gears</li>
        <li>Distort hooks</li>
        <li>Reduce capacity</li>
        <li>Cause catastrophic failure</li>
      </ul>
      <p>Chainfalls should remain aligned with the intended load direction.</p>

      <h2 id="lever-hoists">Lever hoists / come-alongs</h2>
      <p>Lever hoists, often called come-alongs, are manually operated devices used to:</p>
      <ul>
        <li>Pull loads</li>
        <li>Tension systems</li>
        <li>Align components</li>
        <li>Position structures</li>
        <li>Adjust rigging</li>
      </ul>
      <p>Unlike chainfalls, lever hoists are frequently used for:</p>
      <ul>
        <li>Horizontal pulling</li>
        <li>Angled pulling</li>
        <li>Controlled tensioning</li>
      </ul>

      <h2 id="lever-hoist-components">Lever hoist components</h2>
      <p>Common components include:</p>
      <ul>
        <li>Lever handle</li>
        <li>Ratcheting mechanism</li>
        <li>Load chain</li>
        <li>Brake system</li>
        <li>Hooks</li>
        <li>Direction selector</li>
      </ul>
      <p>Lever movement controls chain advancement and load movement.</p>

      <h2 id="lever-hoist-hazards">Lever hoist hazards</h2>
      <p>Improper use may create:</p>
      <ul>
        <li>Overloading</li>
        <li>Shock loading</li>
        <li>Sudden release</li>
        <li>Structural instability</li>
        <li>Hook distortion</li>
        <li>Chain failure</li>
        <li>Handle kickback</li>
      </ul>
      <p>Improper alignment may introduce dangerous side loading forces.</p>

      <h2 id="tensioning-operations">Tensioning operations</h2>
      <p>Tensioning systems apply force into:</p>
      <ul>
        <li>Structural systems</li>
        <li>Rigging assemblies</li>
        <li>Stabilization systems</li>
        <li>Guying systems</li>
        <li>Alignment operations</li>
      </ul>
      <p>Tension creates stored energy within the system.</p>
      <p>Stored energy may release suddenly if:</p>
      <ul>
        <li>Components fail</li>
        <li>Connections slip</li>
        <li>Anchors move</li>
        <li>Loads shift unexpectedly</li>
      </ul>

      <h2 id="stored-energy-hazards">Stored energy hazards</h2>
      <p>Stored energy is one of the most serious hazards associated with tensioning operations.</p>
      <p>Stored energy may exist in:</p>
      <ul>
        <li>Chains</li>
        <li>Slings</li>
        <li>Wire rope</li>
        <li>Structural members</li>
        <li>Tensioned rigging systems</li>
        <li>Loaded mechanical devices</li>
      </ul>
      <p>Sudden release of stored energy may create:</p>
      <ul>
        <li>Snap-back hazards</li>
        <li>Flying components</li>
        <li>Violent load movement</li>
        <li>Structural collapse</li>
      </ul>

      <h2 id="snap-back-zones">Snap-back zones</h2>
      <p>When tensioned systems fail, components may recoil violently.</p>
      <p>Potential snap-back hazards include:</p>
      <ul>
        <li>Wire rope recoil</li>
        <li>Chain release</li>
        <li>Sling release</li>
        <li>Hook movement</li>
        <li>Structural spring-back</li>
      </ul>
      <p>Personnel should avoid standing within potential recoil paths during tensioning operations.</p>

      <h2 id="anchoring-considerations">Anchoring considerations</h2>
      <p>Chainfalls and lever hoists require secure anchoring points.</p>
      <p>Anchors must:</p>
      <ul>
        <li>Support expected forces</li>
        <li>Resist movement</li>
        <li>Be structurally adequate</li>
        <li>Be compatible with loading direction</li>
      </ul>
      <p>Improper anchoring may result in:</p>
      <ul>
        <li>Structural failure</li>
        <li>Sudden release</li>
        <li>Load instability</li>
      </ul>

      <h2 id="structural-loading-awareness">Structural loading awareness</h2>
      <p>Tensioning systems may introduce forces into:</p>
      <ul>
        <li>Structural steel</li>
        <li>Temporary supports</li>
        <li>Concrete elements</li>
        <li>Rigging hardware</li>
        <li>Lifting points</li>
      </ul>
      <p>These forces may exceed:</p>
      <ul>
        <li>Static load weight</li>
        <li>Expected design conditions</li>
        <li>Structural limitations</li>
      </ul>
      <p>Structural loading must be evaluated carefully during tensioning operations.</p>

      <h2 id="shock-loading-tensioning">Shock loading during tensioning</h2>
      <p>Shock loading may occur when:</p>
      <ul>
        <li>Slack suddenly tightens</li>
        <li>Components shift unexpectedly</li>
        <li>Loads release suddenly</li>
        <li>Workers apply excessive force</li>
        <li>Structural movement occurs</li>
      </ul>
      <p>Shock loading may generate forces far exceeding normal working loads.</p>

      <h2 id="hook-inspection-loading">Hook inspection &amp; loading</h2>
      <p>Hooks used with chainfalls and lever hoists should be inspected for:</p>
      <ul>
        <li>Cracks</li>
        <li>Twisting</li>
        <li>Throat opening</li>
        <li>Latch damage</li>
        <li>Wear</li>
        <li>Deformation</li>
      </ul>
      <p>Hooks should be loaded within the saddle area only.</p>
      <p>Point loading or side loading may severely reduce hook strength.</p>

      <h2 id="chain-inspection">Chain inspection</h2>
      <p>Load chains should be inspected for:</p>
      <ul>
        <li>Stretching</li>
        <li>Cracks</li>
        <li>Twisting</li>
        <li>Wear</li>
        <li>Corrosion</li>
        <li>Heat damage</li>
        <li>Improper repairs</li>
      </ul>
      <p>Damaged chains must be removed from service.</p>

      <h2 id="brake-systems">Brake systems</h2>
      <p>Chainfalls and lever hoists commonly rely on braking systems to:</p>
      <ul>
        <li>Hold suspended loads</li>
        <li>Prevent uncontrolled movement</li>
        <li>Control descent</li>
      </ul>
      <p>Brake system failure may result in:</p>
      <ul>
        <li>Sudden load drop</li>
        <li>Loss of load control</li>
        <li>Severe injury hazards</li>
      </ul>
      <p>Functional testing is critical before use.</p>

      <h2 id="environmental-conditions-hoists">Environmental conditions</h2>
      <p>Environmental conditions may affect:</p>
      <ul>
        <li>Chain lubrication</li>
        <li>Corrosion rates</li>
        <li>Brake performance</li>
        <li>Worker footing</li>
        <li>Visibility</li>
        <li>Manual control</li>
      </ul>
      <p>Conditions requiring additional caution may include:</p>
      <ul>
        <li>Rain</li>
        <li>Ice</li>
        <li>Mud</li>
        <li>Extreme temperatures</li>
        <li>Chemical exposure</li>
      </ul>

      <h2 id="communication-tensioning">Communication during tensioning operations</h2>
      <p>Tensioning activities often involve:</p>
      <ul>
        <li>Multiple workers</li>
        <li>Structural movement</li>
        <li>Limited visibility</li>
        <li>Restricted spaces</li>
      </ul>
      <p>Communication systems should remain:</p>
      <ul>
        <li>Clear</li>
        <li>Controlled</li>
        <li>Consistent</li>
      </ul>
      <p>Workers must coordinate:</p>
      <ul>
        <li>Force application</li>
        <li>Positioning</li>
        <li>Adjustment sequencing</li>
        <li>Emergency response actions</li>
      </ul>

      <h2 id="temporary-stabilization-systems">Temporary stabilization systems</h2>
      <p>Chainfalls and tensioning systems are frequently used for:</p>
      <ul>
        <li>Temporary bracing</li>
        <li>Structural stabilization</li>
        <li>Controlled positioning</li>
        <li>Alignment support</li>
      </ul>
      <p>Temporary systems must still be:</p>
      <ul>
        <li>Properly engineered where required</li>
        <li>Adequately supported</li>
        <li>Monitored continuously</li>
      </ul>
      <p>Temporary does not mean low risk.</p>

      <h2 id="human-factors-tensioning">Human factors &amp; operational discipline</h2>
      <p>Manual hoisting and tensioning operations require:</p>
      <ul>
        <li>Patience</li>
        <li>Controlled movement</li>
        <li>Situational awareness</li>
        <li>Communication</li>
        <li>Proper positioning</li>
      </ul>
      <p>Human factors contributing to incidents may include:</p>
      <ul>
        <li>Overexertion</li>
        <li>Improvised rigging</li>
        <li>Rushing</li>
        <li>Inexperience</li>
        <li>Improper assumptions</li>
        <li>Poor alignment</li>
      </ul>
      <p>Operational discipline is essential during tensioning activities.</p>

      <h2 id="situational-awareness-tensioning">Situational awareness during tensioning operations</h2>
      <p>Personnel must continuously monitor:</p>
      <ul>
        <li>Structural movement</li>
        <li>Load shift</li>
        <li>Chain alignment</li>
        <li>Tension buildup</li>
        <li>Anchor condition</li>
        <li>Personnel positioning</li>
        <li>Equipment condition</li>
        <li>Communication effectiveness</li>
      </ul>
      <p>Conditions may change rapidly during tensioning operations.</p>
      <p>Continuous observation and controlled movement are essential for maintaining safe operations.</p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m9} className="font-medium text-primary hover:underline">
          ← Module 9 — Advanced load control
        </a>
        <a href={m11} className="font-medium text-primary hover:underline">
          Module 11 — Multiple crane &amp; tandem lifts →
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
