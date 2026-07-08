import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";
type Locale = "en";


/** Module 11 — Multiple crane & tandem lifts (load sharing, coordination, engineered plans). */
export function RiggingEducationModule11MultipleCraneTandem({locale}: {readonly locale: Locale}) {
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
        <li>ASME B30 standards related to multiple-crane lifting operations</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer operating manuals</li>
        <li>Engineered lift planning procedures</li>
        <li>Site-specific critical lift procedures</li>
      </ul>
      <p>
        Multiple-crane lifting operations typically require engineered planning, enhanced communication systems, and increased operational controls.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>
        Multiple-crane lifts, often called tandem lifts or dual-crane lifts, involve two or more cranes supporting and controlling the same load
        simultaneously.
      </p>
      <p>These lifts are significantly more complex than standard lifting operations because they involve:</p>
      <ul>
        <li>Multiple lifting machines</li>
        <li>Shared load forces</li>
        <li>Dynamic load transfer</li>
        <li>Coordinated movement</li>
        <li>Complex communication systems</li>
        <li>Constant force redistribution</li>
      </ul>
      <p>Improperly planned tandem lifts may result in:</p>
      <ul>
        <li>Unequal load sharing</li>
        <li>Sudden force transfer</li>
        <li>Crane overload</li>
        <li>Load instability</li>
        <li>Structural failure</li>
        <li>Uncontrolled movement</li>
        <li>Serious injury or fatal incidents</li>
      </ul>
      <p>Because of their complexity, multiple-crane lifts are commonly classified as:</p>
      <ul>
        <li>Critical lifts</li>
        <li>Engineered lifts</li>
        <li>High-risk lifting operations</li>
      </ul>
      <p>
        This section explores the operational principles, hazards, and planning considerations associated with multiple-crane lifting operations.
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
          M9
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m10} className="font-medium text-primary hover:underline">
          M10 — Chainfalls
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m12} className="font-medium text-primary hover:underline">
          M12 — BTH devices
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

      <h2 id="why-multiple-cranes">Why multiple cranes are used</h2>
      <p>Multiple cranes may be required when:</p>
      <ul>
        <li>A single crane cannot safely handle the load</li>
        <li>Load length creates stability concerns</li>
        <li>Site access is restricted</li>
        <li>Load geometry requires multiple support points</li>
        <li>Rotational control is necessary</li>
        <li>Structural erection sequencing requires coordinated lifting</li>
      </ul>
      <p>Examples include:</p>
      <ul>
        <li>Long structural steel members</li>
        <li>Bridge components</li>
        <li>Large tanks</li>
        <li>Modular assemblies</li>
        <li>Heavy machinery</li>
        <li>Tilt-up operations</li>
        <li>Tower sections</li>
      </ul>

      <h2 id="tandem-complexity">Complexity of multiple-crane lifts</h2>
      <p>Unlike single-crane lifts, tandem lifts involve:</p>
      <ul>
        <li>Constantly changing load distribution</li>
        <li>Independent crane movement</li>
        <li>Multiple boom deflections</li>
        <li>Different crane capacities</li>
        <li>Varying radii</li>
        <li>Coordinated hoisting speeds</li>
      </ul>
      <p>Even small movement differences between cranes may create:</p>
      <ul>
        <li>Major force imbalance</li>
        <li>Dynamic loading</li>
        <li>Shock loading</li>
        <li>Sudden load transfer</li>
      </ul>

      <h2 id="load-sharing-fundamentals">Load sharing fundamentals</h2>
      <p>In a tandem lift, the load must be shared between cranes.</p>
      <p>However, load sharing is rarely perfectly equal.</p>
      <p>Force distribution depends on:</p>
      <ul>
        <li>Center of gravity location</li>
        <li>Crane positioning</li>
        <li>Sling geometry</li>
        <li>Boom deflection</li>
        <li>Hoisting speed</li>
        <li>Structural flexing</li>
        <li>Load movement</li>
      </ul>

      <h2 id="unequal-load-sharing">Unequal load sharing</h2>
      <p>One crane may unintentionally carry more load because of:</p>
      <ul>
        <li>Slight elevation differences</li>
        <li>Faster hoisting speed</li>
        <li>Boom flexing</li>
        <li>Radius differences</li>
        <li>Load rotation</li>
        <li>Structural deflection</li>
      </ul>
      <p>Even small changes in geometry may greatly alter force distribution.</p>

      <h2 id="dynamic-load-transfer-tandem">Dynamic load transfer</h2>
      <p>As the load moves:</p>
      <ul>
        <li>Forces constantly shift between cranes</li>
        <li>Load distribution changes dynamically</li>
        <li>Crane loading changes continuously</li>
      </ul>
      <p>Dynamic load transfer may occur during:</p>
      <ul>
        <li>Hoisting</li>
        <li>Lowering</li>
        <li>Swinging</li>
        <li>Rotating</li>
        <li>Traveling</li>
        <li>Tilting</li>
      </ul>
      <p>Uncontrolled load transfer may overload one crane unexpectedly.</p>

      <h2 id="cog-tandem-lifts">Center of gravity considerations</h2>
      <p>The center of gravity is critically important during tandem lifts.</p>
      <p>Improper center of gravity evaluation may result in:</p>
      <ul>
        <li>Uneven loading</li>
        <li>Sudden load shift</li>
        <li>Load rotation</li>
        <li>Instability</li>
        <li>Crane overload</li>
      </ul>
      <p>The center of gravity may also change during:</p>
      <ul>
        <li>Tilting operations</li>
        <li>Rotational movement</li>
        <li>Load assembly</li>
        <li>Fluid movement inside tanks or vessels</li>
      </ul>

      <h2 id="crane-capacity-awareness-tandem">Crane capacity awareness</h2>
      <p>Each crane must remain within:</p>
      <ul>
        <li>Rated capacity</li>
        <li>Radius limitations</li>
        <li>Structural limitations</li>
        <li>Configuration requirements</li>
      </ul>
      <p>Crane capacity may vary because of:</p>
      <ul>
        <li>Boom length</li>
        <li>Radius</li>
        <li>Counterweight configuration</li>
        <li>Ground conditions</li>
        <li>Crane orientation</li>
      </ul>
      <p>One crane reaching capacity before the other may destabilize the entire lift.</p>

      <h2 id="radius-effects-tandem-lifts">Radius effects during tandem lifts</h2>
      <p>As crane radius changes:</p>
      <ul>
        <li>Capacity changes</li>
        <li>Boom deflection changes</li>
        <li>Force distribution changes</li>
        <li>Load geometry changes</li>
      </ul>
      <p>Because multiple cranes may operate at different radii:</p>
      <ul>
        <li>Capacity margins may vary significantly</li>
        <li>Load sharing may become unpredictable</li>
      </ul>
      <p>Continuous monitoring is essential.</p>

      <h2 id="boom-deflection-tandem-lifts">Boom deflection awareness</h2>
      <p>Booms naturally flex under load.</p>
      <p>In tandem lifts:</p>
      <ul>
        <li>Different cranes may deflect differently</li>
        <li>Deflection changes load sharing</li>
        <li>Small geometry changes may greatly alter force distribution</li>
      </ul>
      <p>Boom deflection must be considered during lift planning.</p>

      <h2 id="hoisting-coordination-tandem">Hoisting coordination</h2>
      <p>Hoisting coordination is critical during tandem operations.</p>
      <p>Improper coordination may create:</p>
      <ul>
        <li>Shock loading</li>
        <li>Uneven load sharing</li>
        <li>Load twist</li>
        <li>Sudden load transfer</li>
        <li>Structural instability</li>
      </ul>
      <p>Crane movements should remain:</p>
      <ul>
        <li>Smooth</li>
        <li>Gradual</li>
        <li>Coordinated</li>
        <li>Controlled</li>
      </ul>

      <h2 id="communication-systems-tandem">Communication systems</h2>
      <p>Communication is one of the most critical safety systems during multiple-crane lifts.</p>
      <p>Communication failures may result in:</p>
      <ul>
        <li>Opposing crane movement</li>
        <li>Unequal hoisting</li>
        <li>Sudden load transfer</li>
        <li>Load instability</li>
      </ul>

      <h2 id="communication-requirements-tandem">Communication requirements</h2>
      <p>Tandem lifts commonly require:</p>
      <ul>
        <li>Dedicated signalers</li>
        <li>Defined communication hierarchy</li>
        <li>Radio communication systems</li>
        <li>Backup communication procedures</li>
        <li>Pre-lift coordination meetings</li>
      </ul>
      <p>All participants must clearly understand:</p>
      <ul>
        <li>Movement sequence</li>
        <li>Responsibilities</li>
        <li>Stop procedures</li>
        <li>Emergency actions</li>
      </ul>

      <h2 id="lift-director-role">Lift director role</h2>
      <p>Complex tandem lifts commonly involve a designated lift director.</p>
      <p>The lift director may coordinate:</p>
      <ul>
        <li>Crane movement sequencing</li>
        <li>Communication systems</li>
        <li>Load path management</li>
        <li>Personnel coordination</li>
        <li>Operational decision-making</li>
      </ul>
      <p>The lift director helps maintain overall operational control during complex lifting activities.</p>

      <h2 id="pre-lift-planning-tandem">Pre-lift planning</h2>
      <p>Tandem lifts generally require detailed pre-lift planning.</p>
      <p>Planning considerations may include:</p>
      <ul>
        <li>Load weight verification</li>
        <li>Center of gravity calculations</li>
        <li>Crane configuration</li>
        <li>Radius calculations</li>
        <li>Ground conditions</li>
        <li>Environmental conditions</li>
        <li>Communication systems</li>
        <li>Rigging geometry</li>
        <li>Exclusion zones</li>
        <li>Emergency procedures</li>
      </ul>
      <p>Many tandem lifts require engineered lift plans.</p>

      <h2 id="engineered-lift-plans-tandem">Engineered lift plans</h2>
      <p>Engineered lift plans may include:</p>
      <ul>
        <li>Force calculations</li>
        <li>Crane loading analysis</li>
        <li>Rigging drawings</li>
        <li>Ground bearing calculations</li>
        <li>Structural analysis</li>
        <li>Lift sequencing</li>
        <li>Communication procedures</li>
        <li>Contingency planning</li>
      </ul>
      <p>Complex tandem lifts often require professional engineering review.</p>

      <h2 id="environmental-tandem-lifts">Environmental conditions</h2>
      <p>Environmental conditions significantly affect tandem lifts.</p>
      <p>Factors may include:</p>
      <ul>
        <li>Wind</li>
        <li>Visibility</li>
        <li>Ground stability</li>
        <li>Rain</li>
        <li>Ice</li>
        <li>Temperature effects</li>
      </ul>
      <p>Large loads with significant surface area are especially sensitive to wind.</p>
      <p>Wind may:</p>
      <ul>
        <li>Rotate loads</li>
        <li>Shift force distribution</li>
        <li>Increase dynamic loading</li>
        <li>Destabilize cranes</li>
      </ul>

      <h2 id="swing-control-load-rotation-tandem">Swing control &amp; load rotation</h2>
      <p>Long loads and irregular loads may:</p>
      <ul>
        <li>Twist</li>
        <li>Drift</li>
        <li>Swing</li>
        <li>Rotate unpredictably</li>
      </ul>
      <p>Load rotation may:</p>
      <ul>
        <li>Shift force distribution</li>
        <li>Increase sling tension</li>
        <li>Create collision hazards</li>
        <li>Destabilize crane movement</li>
      </ul>
      <p>Controlled movement and proper tagline systems are essential.</p>

      <h2 id="exclusion-zones-tandem">Exclusion zones</h2>
      <p>Tandem lifts require carefully controlled work zones.</p>
      <p>Exclusion zones help reduce exposure to:</p>
      <ul>
        <li>Suspended loads</li>
        <li>Falling objects</li>
        <li>Crane movement</li>
        <li>Rigging failure</li>
        <li>Swing hazards</li>
      </ul>
      <p>Only essential personnel should remain within the lift zone.</p>

      <h2 id="human-factors-tandem-lifts">Human factors in tandem lifts</h2>
      <p>Human factors contributing to incidents may include:</p>
      <ul>
        <li>Miscommunication</li>
        <li>Assumptions</li>
        <li>Fatigue</li>
        <li>Distraction</li>
        <li>Rushing</li>
        <li>Inexperience</li>
        <li>Overconfidence</li>
      </ul>
      <p>Tandem lifts require high levels of:</p>
      <ul>
        <li>Coordination</li>
        <li>Focus</li>
        <li>Operational discipline</li>
        <li>Situational awareness</li>
      </ul>

      <h2 id="situational-awareness-multiple-crane">Situational awareness during multiple-crane operations</h2>
      <p>Personnel involved in tandem lifts must continuously monitor:</p>
      <ul>
        <li>Load behavior</li>
        <li>Crane movement</li>
        <li>Sling tension</li>
        <li>Boom deflection</li>
        <li>Environmental conditions</li>
        <li>Communication effectiveness</li>
        <li>Personnel positioning</li>
        <li>Ground conditions</li>
      </ul>
      <p>Conditions may change rapidly throughout the lift.</p>
      <p>
        Continuous evaluation and controlled movement are essential for maintaining stability and operational safety during multiple-crane lifting
        operations.
      </p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m10} className="font-medium text-primary hover:underline">
          ← Module 10 — Chainfalls, lever hoists &amp; tensioning devices
        </a>
        <a href={m12} className="font-medium text-primary hover:underline">
          Module 12 — Specialty lifting devices →
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
