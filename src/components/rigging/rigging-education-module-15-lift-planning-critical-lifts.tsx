import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";
type Locale = "en";


/** Module 15 — Lift planning & critical lifts (pre-lift, engineered plans, lift director, documentation). */
export function RiggingEducationModule15LiftPlanningCriticalLifts({locale}: {readonly locale: Locale}) {
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
        <li>WorkSafeBC crane and hoisting requirements</li>
        <li>ASME B30 crane-related standards</li>
        <li>ASME B30.5 — Mobile &amp; Locomotive Cranes</li>
        <li>ASME B30.3 — Tower Cranes</li>
        <li>ASME B30.9 — Slings</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer load charts and operating manuals</li>
        <li>Engineered lift procedures</li>
        <li>Site-specific lift planning and critical lift policies</li>
      </ul>
      <p>
        Lift planning and critical lift procedures must always follow applicable regulations, manufacturer requirements, engineered instructions, and
        approved site procedures.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Lift planning is the process of organizing and evaluating lifting operations before work begins. Proper planning helps identify:</p>
      <ul>
        <li>Hazards</li>
        <li>Equipment requirements</li>
        <li>Load behavior concerns</li>
        <li>Environmental limitations</li>
        <li>Communication systems</li>
        <li>Operational sequencing</li>
        <li>Personnel responsibilities</li>
      </ul>
      <p>Lift planning is one of the most important methods for reducing lifting-related incidents.</p>
      <p>Even relatively routine lifts may involve:</p>
      <ul>
        <li>Dynamic loading</li>
        <li>Limited access</li>
        <li>Environmental hazards</li>
        <li>Blind lift conditions</li>
        <li>Load instability</li>
        <li>Communication complexity</li>
      </ul>
      <p>As lift complexity increases, planning requirements become more detailed and may require engineering review.</p>
      <p>This section explores lift planning principles, critical lift awareness, and operational coordination concepts commonly associated with crane and rigging operations.</p>
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
          M12
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m13} className="font-medium text-primary hover:underline">
          M13
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m14} className="font-medium text-primary hover:underline">
          M14 — Environment
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m16} className="font-medium text-primary hover:underline">
          M16 — Field ops
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

      <h2 id="purpose-lift-planning">Purpose of lift planning</h2>
      <p>Lift planning helps:</p>
      <ul>
        <li>Reduce operational uncertainty</li>
        <li>Improve coordination</li>
        <li>Identify hazards</li>
        <li>Verify equipment suitability</li>
        <li>Improve communication</li>
        <li>Protect workers and structures</li>
        <li>Support controlled lifting operations</li>
      </ul>
      <p>Effective planning improves both:</p>
      <ul>
        <li>Safety</li>
        <li>Operational efficiency</li>
      </ul>

      <h2 id="pre-lift-planning-fundamentals">Pre-lift planning fundamentals</h2>
      <p>Pre-lift planning begins before equipment arrives on site.</p>
      <p>Planning considerations commonly include:</p>
      <ul>
        <li>Load weight</li>
        <li>Load dimensions</li>
        <li>Center of gravity</li>
        <li>Crane capacity</li>
        <li>Radius</li>
        <li>Boom configuration</li>
        <li>Rigging requirements</li>
        <li>Ground conditions</li>
        <li>Environmental conditions</li>
        <li>Personnel coordination</li>
        <li>Site congestion</li>
        <li>Load path</li>
        <li>Landing area</li>
      </ul>
      <p>Improper planning may lead to:</p>
      <ul>
        <li>Crane overload</li>
        <li>Rigging failure</li>
        <li>Load instability</li>
        <li>Personnel exposure</li>
        <li>Structural contact</li>
      </ul>

      <h2 id="load-weight-verification">Load weight verification</h2>
      <p>Accurate load weight is essential.</p>
      <p>Weight information may come from:</p>
      <ul>
        <li>Engineering drawings</li>
        <li>Manufacturer specifications</li>
        <li>Shipping documents</li>
        <li>Structural calculations</li>
        <li>Certified markings</li>
      </ul>
      <p>Loads should never be casually estimated when accurate information is available.</p>
      <p>Additional weight considerations may include:</p>
      <ul>
        <li>Rigging gear</li>
        <li>Concrete residue</li>
        <li>Ice accumulation</li>
        <li>Fluids inside equipment</li>
        <li>Temporary attachments</li>
      </ul>

      <h2 id="center-of-gravity-evaluation-planning">Center of gravity evaluation</h2>
      <p>The center of gravity affects:</p>
      <ul>
        <li>Load balance</li>
        <li>Sling tension</li>
        <li>Rotational behavior</li>
        <li>Crane loading</li>
      </ul>
      <p>Improper center of gravity evaluation may result in:</p>
      <ul>
        <li>Unequal loading</li>
        <li>Load rotation</li>
        <li>Dynamic movement</li>
        <li>Instability</li>
      </ul>
      <p>Complex loads may require engineered center of gravity calculations.</p>

      <h2 id="crane-configuration-planning">Crane configuration planning</h2>
      <p>Lift planning must consider:</p>
      <ul>
        <li>Crane type</li>
        <li>Boom length</li>
        <li>Counterweight configuration</li>
        <li>Outrigger setup</li>
        <li>Tower crane tie-ins</li>
        <li>Jib configuration</li>
        <li>Radius limitations</li>
        <li>Manufacturer restrictions</li>
      </ul>
      <p>Crane configuration directly affects:</p>
      <ul>
        <li>Capacity</li>
        <li>Stability</li>
        <li>Structural loading</li>
        <li>Operational limitations</li>
      </ul>

      <h2 id="radius-awareness-planning">Radius awareness</h2>
      <p>Crane capacity changes with radius.</p>
      <p>As radius increases:</p>
      <ul>
        <li>Capacity decreases</li>
        <li>Structural loading increases</li>
        <li>Boom deflection increases</li>
        <li>Stability margins may reduce</li>
      </ul>
      <p>Lift planning must verify that:</p>
      <ul>
        <li>The crane remains within rated capacity</li>
        <li>Radius changes are properly evaluated</li>
        <li>Dynamic conditions are considered</li>
      </ul>

      <h2 id="load-path-planning">Load path planning</h2>
      <p>The load path is the route the suspended load travels during the lift.</p>
      <p>Planning considerations include:</p>
      <ul>
        <li>Personnel exposure</li>
        <li>Structures</li>
        <li>Utilities</li>
        <li>Public access</li>
        <li>Equipment interference</li>
        <li>Powerlines</li>
        <li>Restricted areas</li>
      </ul>
      <p>Loads should avoid traveling over:</p>
      <ul>
        <li>Workers</li>
        <li>Occupied spaces</li>
        <li>Public areas whenever possible</li>
      </ul>

      <h2 id="landing-area-planning">Landing area planning</h2>
      <p>Landing areas should:</p>
      <ul>
        <li>Support load weight</li>
        <li>Remain clear of personnel</li>
        <li>Allow safe rigging removal</li>
        <li>Provide adequate access</li>
        <li>Remain stable throughout operations</li>
      </ul>
      <p>Improper landing conditions may create:</p>
      <ul>
        <li>Load shift</li>
        <li>Rigging instability</li>
        <li>Personnel hazards</li>
      </ul>

      <h2 id="ground-condition-evaluation-planning">Ground condition evaluation</h2>
      <p>Ground conditions are critical to crane stability.</p>
      <p>Planning considerations may include:</p>
      <ul>
        <li>Soil bearing capacity</li>
        <li>Underground utilities</li>
        <li>Excavations</li>
        <li>Water saturation</li>
        <li>Frost conditions</li>
        <li>Recently backfilled areas</li>
      </ul>
      <p>Ground instability may lead to:</p>
      <ul>
        <li>Crane settlement</li>
        <li>Outrigger penetration</li>
        <li>Crane overturning</li>
        <li>Structural failure</li>
      </ul>

      <h2 id="environmental-planning-lifts">Environmental planning</h2>
      <p>Environmental conditions affecting lift planning may include:</p>
      <ul>
        <li>Wind</li>
        <li>Rain</li>
        <li>Snow</li>
        <li>Ice</li>
        <li>Visibility</li>
        <li>Temperature</li>
        <li>Lightning risk</li>
      </ul>
      <p>Environmental limitations may affect:</p>
      <ul>
        <li>Crane capacity</li>
        <li>Load stability</li>
        <li>Communication systems</li>
        <li>Worker movement</li>
        <li>Ground conditions</li>
      </ul>
      <p>Large surface-area loads require additional wind evaluation.</p>

      <h2 id="rigging-selection-planning">Rigging selection</h2>
      <p>Lift planning must verify:</p>
      <ul>
        <li>Sling capacity</li>
        <li>Hardware compatibility</li>
        <li>Sling angles</li>
        <li>Attachment point adequacy</li>
        <li>Below-the-hook device suitability</li>
      </ul>
      <p>Rigging systems must support:</p>
      <ul>
        <li>Static loading</li>
        <li>Dynamic loading</li>
        <li>Environmental exposure</li>
        <li>Operational movement</li>
      </ul>

      <h2 id="communication-planning-lifts">Communication planning</h2>
      <p>Communication systems should be established before lifting begins.</p>
      <p>Planning may include:</p>
      <ul>
        <li>Signaler assignments</li>
        <li>Radio channels</li>
        <li>Communication hierarchy</li>
        <li>Backup communication methods</li>
        <li>Emergency stop procedures</li>
      </ul>
      <p>Communication becomes increasingly important during:</p>
      <ul>
        <li>Blind lifts</li>
        <li>Tandem lifts</li>
        <li>Congested site operations</li>
        <li>Precision placement activities</li>
      </ul>

      <h2 id="exclusion-zones-personnel-control">Exclusion zones &amp; personnel control</h2>
      <p>Lift plans should establish:</p>
      <ul>
        <li>Restricted work zones</li>
        <li>Personnel exclusion areas</li>
        <li>Traffic control measures</li>
        <li>Public protection systems</li>
      </ul>
      <p>Only essential personnel should enter lifting areas during operations.</p>

      <h2 id="pre-lift-meetings">Pre-lift meetings</h2>
      <p>Pre-lift meetings help ensure all personnel understand:</p>
      <ul>
        <li>Lift sequence</li>
        <li>Responsibilities</li>
        <li>Hazards</li>
        <li>Communication systems</li>
        <li>Emergency procedures</li>
        <li>Environmental concerns</li>
        <li>Operational limitations</li>
      </ul>
      <p>Pre-lift coordination improves consistency and situational awareness.</p>

      <h2 id="critical-lifts-overview">Critical lifts</h2>
      <p>Critical lifts involve increased complexity, elevated risk, or reduced operational tolerance.</p>
      <p>Critical lifts often require:</p>
      <ul>
        <li>Additional planning</li>
        <li>Engineering review</li>
        <li>Increased supervision</li>
        <li>Enhanced communication systems</li>
        <li>Formal lift procedures</li>
      </ul>

      <h2 id="examples-critical-lifts">Examples of critical lifts</h2>
      <p>Critical lifts may include:</p>
      <ul>
        <li>Tandem crane lifts</li>
        <li>Lifts near crane capacity</li>
        <li>Lifts over occupied areas</li>
        <li>Powerline proximity operations</li>
        <li>Restricted access lifts</li>
        <li>Engineered lifting systems</li>
        <li>Unstable or irregular loads</li>
        <li>High-risk environmental conditions</li>
        <li>Complex structural erection</li>
        <li>Blind lifts with limited tolerance</li>
      </ul>
      <p>Site-specific policies may define additional critical lift conditions.</p>

      <h2 id="engineered-lift-plans">Engineered lift plans</h2>
      <p>Complex or critical lifts may require engineered lift plans.</p>
      <p>Engineered plans may include:</p>
      <ul>
        <li>Crane loading analysis</li>
        <li>Rigging calculations</li>
        <li>Structural review</li>
        <li>Ground bearing analysis</li>
        <li>Wind analysis</li>
        <li>Lift sequencing</li>
        <li>Force distribution analysis</li>
        <li>Communication procedures</li>
        <li>Contingency planning</li>
      </ul>
      <p>Engineering review helps reduce uncertainty in complex lifting operations.</p>

      <h2 id="lift-director-role">Lift director role</h2>
      <p>Critical lifts commonly involve a designated lift director.</p>
      <p>The lift director may coordinate:</p>
      <ul>
        <li>Lift sequencing</li>
        <li>Communication systems</li>
        <li>Personnel coordination</li>
        <li>Operational control</li>
        <li>Hazard management</li>
        <li>Decision-making authority</li>
      </ul>
      <p>Clear authority structure improves operational coordination.</p>

      <h2 id="contingency-planning-lifts">Contingency planning</h2>
      <p>Lift planning should consider:</p>
      <ul>
        <li>Equipment malfunction</li>
        <li>Communication failure</li>
        <li>Environmental changes</li>
        <li>Unexpected load behavior</li>
        <li>Personnel emergencies</li>
        <li>Structural interference</li>
      </ul>
      <p>Contingency planning helps crews respond safely to changing conditions.</p>

      <h2 id="dynamic-loading-considerations-planning">Dynamic loading considerations</h2>
      <p>Lift plans should account for:</p>
      <ul>
        <li>Swinging</li>
        <li>Wind</li>
        <li>Sudden movement</li>
        <li>Snagged loads</li>
        <li>Rotational instability</li>
        <li>Shock loading</li>
      </ul>
      <p>Dynamic loading may greatly increase force within:</p>
      <ul>
        <li>Rigging systems</li>
        <li>Crane structures</li>
        <li>Load attachment points</li>
      </ul>

      <h2 id="human-factors-lift-planning">Human factors in lift planning</h2>
      <p>Human factors affecting lift safety may include:</p>
      <ul>
        <li>Fatigue</li>
        <li>Miscommunication</li>
        <li>Assumptions</li>
        <li>Inexperience</li>
        <li>Rushing</li>
        <li>Complacency</li>
        <li>Distraction</li>
      </ul>
      <p>Proper planning helps reduce operational errors caused by human factors.</p>

      <h2 id="documentation-operational-records">Documentation &amp; operational records</h2>
      <p>Lift planning documentation may include:</p>
      <ul>
        <li>Lift plans</li>
        <li>Engineering drawings</li>
        <li>Crane configuration data</li>
        <li>Inspection records</li>
        <li>Rigging certifications</li>
        <li>Communication procedures</li>
        <li>Ground condition assessments</li>
        <li>Pre-lift meeting records</li>
      </ul>
      <p>Documentation supports:</p>
      <ul>
        <li>Operational coordination</li>
        <li>Regulatory compliance</li>
        <li>Hazard management</li>
        <li>Incident prevention</li>
      </ul>

      <h2 id="situational-awareness-lift-operations">Situational awareness during lift operations</h2>
      <p>Even with detailed planning, conditions may change during lifting operations.</p>
      <p>Personnel should continuously monitor:</p>
      <ul>
        <li>Load behavior</li>
        <li>Crane movement</li>
        <li>Environmental conditions</li>
        <li>Ground stability</li>
        <li>Communication effectiveness</li>
        <li>Personnel positioning</li>
        <li>Rigging alignment</li>
        <li>Structural response</li>
      </ul>
      <p>Lift planning is not a single event performed before the lift begins.</p>
      <p>
        Safe lifting operations require continuous evaluation and operational awareness throughout every phase of the lift—together with applicable
        regulations, manufacturer data, engineered instructions, and site-approved procedures.
      </p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m14} className="font-medium text-primary hover:underline">
          ← Module 14 — Environmental &amp; site hazards
        </a>
        <a href={m16} className="font-medium text-primary hover:underline">
          Module 16 — Practical rigging &amp; field operations →
        </a>
        <a href={m17} className="font-medium text-primary hover:underline">
          Module 17 — Safety culture &amp; human factors →
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