import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";
import type { Locale } from "@/i18n/config";


/** Module 9 — Advanced load control (taglines, drift, tilt-up, wind, blind placement). */
export function RiggingEducationModule9AdvancedLoadControl({locale}: {readonly locale: Locale}) {
  const edu = `/lessons`;
  const m1 = `/lessons/module-1`;
  const m2 = `/lessons/module-2`;
  const m3 = `/lessons/module-3`;
  const m4 = `/lessons/module-4`;
  const m5 = `/lessons/module-5`;
  const m6 = `/lessons/module-6`;
  const m7 = `/lessons/module-7`;
  const m8 = `/lessons/module-8`;
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
        <li>ASME B30 crane-related standards</li>
        <li>ASME B30.5 — Mobile &amp; Locomotive Cranes</li>
        <li>ASME B30.3 — Tower Cranes</li>
        <li>ASME B30.9 — Slings</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer operating procedures</li>
        <li>Engineered lift planning procedures</li>
        <li>Site-specific lift control requirements</li>
      </ul>
      <p>
        Advanced load control operations must always follow applicable regulations, engineered lift plans, manufacturer requirements, and
        approved site procedures.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Advanced load control involves managing suspended loads during lifting operations where:</p>
      <ul>
        <li>Stability is difficult to maintain</li>
        <li>Dynamic movement exists</li>
        <li>Environmental conditions affect load behavior</li>
        <li>Precision positioning is required</li>
        <li>Complex rigging geometry is involved</li>
      </ul>
      <p>Load control becomes increasingly important during:</p>
      <ul>
        <li>Long-load handling</li>
        <li>Wind exposure</li>
        <li>Blind lifts</li>
        <li>Tandem lifts</li>
        <li>Precision placement</li>
        <li>Tilt-up operations</li>
        <li>Structural erection</li>
        <li>Modular assembly work</li>
      </ul>
      <p>Improper load control may result in:</p>
      <ul>
        <li>Uncontrolled swinging</li>
        <li>Rotation</li>
        <li>Structural impact</li>
        <li>Shock loading</li>
        <li>Personnel exposure</li>
        <li>Crane overload conditions</li>
        <li>Rigging failure</li>
      </ul>
      <p>This section explores advanced techniques and operational considerations used to control suspended loads safely and effectively.</p>
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
          M8 — Sling geometry
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

      <h2 id="load-control-fundamentals">Load control fundamentals</h2>
      <p>Suspended loads naturally seek equilibrium beneath the crane hook.</p>
      <p>However, many operational conditions may disturb stability, including:</p>
      <ul>
        <li>Wind</li>
        <li>Offset center of gravity</li>
        <li>Crane movement</li>
        <li>Dynamic motion</li>
        <li>Uneven rigging</li>
        <li>Structural flexing</li>
        <li>Environmental interference</li>
      </ul>
      <p>Load control techniques help:</p>
      <ul>
        <li>Stabilize suspended loads</li>
        <li>Reduce unwanted movement</li>
        <li>Improve positioning accuracy</li>
        <li>Protect workers and structures</li>
        <li>Minimize dynamic loading</li>
      </ul>

      <h2 id="controlled-movement-principles">Controlled movement principles</h2>
      <p>Safe lifting operations generally emphasize:</p>
      <ul>
        <li>Smooth crane movement</li>
        <li>Gradual acceleration</li>
        <li>Gradual stopping</li>
        <li>Controlled hoisting speeds</li>
        <li>Controlled swinging</li>
        <li>Coordinated communication</li>
      </ul>
      <p>Abrupt movement may generate:</p>
      <ul>
        <li>Shock loading</li>
        <li>Pendulum motion</li>
        <li>Sling force amplification</li>
        <li>Load instability</li>
      </ul>

      <h2 id="tilting-loads">Tilting loads</h2>
      <p>Tilting involves intentionally changing the orientation of a load during lifting operations.</p>
      <p>Examples include:</p>
      <ul>
        <li>Rotating structural components</li>
        <li>Upending columns</li>
        <li>Wall panel erection</li>
        <li>Machinery positioning</li>
        <li>Tilt-up construction</li>
      </ul>

      <h2 id="tilting-hazards">Tilting hazards</h2>
      <p>Tilting operations may create:</p>
      <ul>
        <li>Sudden center of gravity shifts</li>
        <li>Unequal sling loading</li>
        <li>Rotational instability</li>
        <li>Increased dynamic loading</li>
        <li>Compression force changes</li>
      </ul>
      <p>As the load rotates:</p>
      <ul>
        <li>Sling geometry changes</li>
        <li>Load forces redistribute</li>
        <li>Attachment point loading changes</li>
      </ul>
      <p>Tilting operations often require engineered planning.</p>

      <h2 id="upending-loads">Upending loads</h2>
      <p>Upending refers to rotating a load from horizontal to vertical orientation.</p>
      <p>Examples include:</p>
      <ul>
        <li>Structural columns</li>
        <li>Tanks</li>
        <li>Pipe sections</li>
        <li>Precast concrete panels</li>
        <li>Towers</li>
      </ul>

      <h2 id="upending-considerations">Upending considerations</h2>
      <p>Upending operations may involve:</p>
      <ul>
        <li>Multiple cranes</li>
        <li>Tail cranes</li>
        <li>Rotational control systems</li>
        <li>Specialized rigging</li>
        <li>Engineered lifting points</li>
      </ul>
      <p>During upending:</p>
      <ul>
        <li>Center of gravity shifts continuously</li>
        <li>Sling tension changes dynamically</li>
        <li>Crane loading changes throughout the movement</li>
      </ul>

      <h2 id="rotating-loads">Rotating loads</h2>
      <p>Loads may require controlled rotation during:</p>
      <ul>
        <li>Alignment operations</li>
        <li>Structural installation</li>
        <li>Mechanical assembly</li>
        <li>Placement into restricted areas</li>
      </ul>

      <h2 id="rotation-hazards">Rotation hazards</h2>
      <p>Rotational movement may create:</p>
      <ul>
        <li>Twisting forces</li>
        <li>Sling torque</li>
        <li>Unexpected swinging</li>
        <li>Worker exposure hazards</li>
        <li>Collision risks</li>
      </ul>
      <p>Controlled rotational movement requires:</p>
      <ul>
        <li>Communication</li>
        <li>Stable rigging geometry</li>
        <li>Controlled crane movement</li>
        <li>Proper tagline management</li>
      </ul>

      <h2 id="load-drift-control">Load drift</h2>
      <p>Load drift occurs when a suspended load moves horizontally in an unintended direction.</p>
      <p>Causes may include:</p>
      <ul>
        <li>Wind</li>
        <li>Boom deflection</li>
        <li>Uneven hoisting</li>
        <li>Dynamic motion</li>
        <li>Improper crane positioning</li>
      </ul>
      <p>Drift may increase:</p>
      <ul>
        <li>Collision risk</li>
        <li>Swing motion</li>
        <li>Difficulty in precise placement</li>
      </ul>

      <h2 id="pendulum-motion">Pendulum motion</h2>
      <p>Suspended loads naturally behave like pendulums.</p>
      <p>Pendulum motion may increase because of:</p>
      <ul>
        <li>Sudden starts or stops</li>
        <li>Wind</li>
        <li>Uneven terrain</li>
        <li>Rapid crane movement</li>
        <li>Improper tagline use</li>
      </ul>
      <p>Pendulum movement may create:</p>
      <ul>
        <li>Dynamic loading</li>
        <li>Personnel hazards</li>
        <li>Impact damage</li>
        <li>Rigging instability</li>
      </ul>

      <h2 id="tagline-use">Tagline use</h2>
      <p>Taglines are commonly used to:</p>
      <ul>
        <li>Control load rotation</li>
        <li>Reduce drift</li>
        <li>Stabilize suspended loads</li>
        <li>Assist positioning</li>
        <li>Maintain worker distance from the load</li>
      </ul>

      <h2 id="tagline-safety">Tagline safety considerations</h2>
      <p>Improper tagline use may create:</p>
      <ul>
        <li>Entanglement hazards</li>
        <li>Trip hazards</li>
        <li>Pinch points</li>
        <li>Sudden tension hazards</li>
      </ul>
      <p>Taglines should:</p>
      <ul>
        <li>Remain clear of pinch points</li>
        <li>Never wrap around body parts</li>
        <li>Be used in a controlled manner</li>
        <li>Maintain safe worker positioning</li>
      </ul>

      <h2 id="multi-point-load-control">Multi-point load control</h2>
      <p>Complex loads may require:</p>
      <ul>
        <li>Multiple taglines</li>
        <li>Multiple control points</li>
        <li>Coordinated worker positioning</li>
        <li>Simultaneous movement control</li>
      </ul>
      <p>Examples include:</p>
      <ul>
        <li>Long structural steel</li>
        <li>Modular assemblies</li>
        <li>Bridge components</li>
        <li>Mechanical units</li>
      </ul>

      <h2 id="precision-placement">Precision placement</h2>
      <p>Precision placement operations require:</p>
      <ul>
        <li>Slow controlled movement</li>
        <li>Continuous communication</li>
        <li>Stable rigging geometry</li>
        <li>Careful alignment</li>
        <li>Environmental awareness</li>
      </ul>
      <p>Examples include:</p>
      <ul>
        <li>Mechanical installations</li>
        <li>Structural alignment</li>
        <li>Equipment setting</li>
        <li>Confined area placement</li>
      </ul>

      <h2 id="blind-placement-operations">Blind placement operations</h2>
      <p>Blind placement occurs when:</p>
      <ul>
        <li>Workers guiding the load cannot see the crane operator</li>
        <li>The operator cannot see the landing zone</li>
        <li>Structural obstructions limit visibility</li>
      </ul>
      <p>Blind operations require:</p>
      <ul>
        <li>Reliable communication systems</li>
        <li>Dedicated signalers</li>
        <li>Controlled movement speeds</li>
        <li>Increased situational awareness</li>
      </ul>

      <h2 id="dynamic-loading-load-control">Dynamic loading during load control</h2>
      <p>Dynamic loading may occur during:</p>
      <ul>
        <li>Swing correction</li>
        <li>Rotational control</li>
        <li>Sudden stopping</li>
        <li>Wind gusts</li>
        <li>Load contact with structures</li>
        <li>Snagging</li>
      </ul>
      <p>Dynamic forces may greatly exceed static load weight.</p>

      <h2 id="snagged-loads">Snagged loads</h2>
      <p>Loads may become snagged on:</p>
      <ul>
        <li>Structures</li>
        <li>Reinforcing steel</li>
        <li>Embedded items</li>
        <li>Equipment</li>
        <li>Uneven surfaces</li>
      </ul>
      <p>Snagging may create:</p>
      <ul>
        <li>Shock loading</li>
        <li>Sudden load release</li>
        <li>Rigging overload</li>
        <li>Crane instability</li>
      </ul>
      <p>Loads should never be forcefully pulled free without proper evaluation.</p>

      <h2 id="wind-effects-load-control">Wind effects on load control</h2>
      <p>Wind is one of the most significant factors affecting suspended load behavior.</p>
      <p>Wind effects may include:</p>
      <ul>
        <li>Rotation</li>
        <li>Drift</li>
        <li>Swing amplification</li>
        <li>Increased dynamic loading</li>
        <li>Loss of load control</li>
      </ul>
      <p>Large surface-area loads are especially vulnerable.</p>
      <p>Examples include:</p>
      <ul>
        <li>Formwork panels</li>
        <li>Rebar mats</li>
        <li>Wall panels</li>
        <li>Steel decking</li>
        <li>Signage</li>
        <li>Modular structures</li>
      </ul>

      <h2 id="boom-deflection-awareness">Boom deflection awareness</h2>
      <p>Crane booms naturally deflect under load.</p>
      <p>Boom deflection may affect:</p>
      <ul>
        <li>Load positioning</li>
        <li>Radius</li>
        <li>Drift</li>
        <li>Alignment accuracy</li>
      </ul>
      <p>Precision lifts must account for crane movement and structural flexing.</p>

      <h2 id="load-stabilization-techniques">Load stabilization techniques</h2>
      <p>Load stabilization methods may include:</p>
      <ul>
        <li>Tagline systems</li>
        <li>Spreader bars</li>
        <li>Lifting beams</li>
        <li>Controlled lift sequencing</li>
        <li>Equalizing systems</li>
        <li>Temporary supports</li>
        <li>Engineered rigging systems</li>
      </ul>
      <p>Stabilization methods depend on:</p>
      <ul>
        <li>Load geometry</li>
        <li>Environmental conditions</li>
        <li>Lift complexity</li>
        <li>Available space</li>
      </ul>

      <h2 id="human-factors-load-control">Human factors &amp; load control</h2>
      <p>Human factors affecting load control may include:</p>
      <ul>
        <li>Fatigue</li>
        <li>Inexperience</li>
        <li>Communication breakdown</li>
        <li>Distraction</li>
        <li>Overconfidence</li>
        <li>Poor positioning</li>
      </ul>
      <p>Advanced load control operations require high levels of:</p>
      <ul>
        <li>Focus</li>
        <li>Communication</li>
        <li>Coordination</li>
        <li>Situational awareness</li>
      </ul>

      <h2 id="situational-awareness-load-control">Situational awareness during load control</h2>
      <p>Personnel involved in load control operations must continuously monitor:</p>
      <ul>
        <li>Load behavior</li>
        <li>Swing motion</li>
        <li>Rotation</li>
        <li>Sling tension</li>
        <li>Worker positioning</li>
        <li>Environmental conditions</li>
        <li>Communication effectiveness</li>
        <li>Structural clearances</li>
      </ul>
      <p>Conditions may change rapidly during lifting operations.</p>
      <p>Continuous evaluation and adaptation are essential for maintaining safe load control throughout the lift.</p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m8} className="font-medium text-primary hover:underline">
          ← Module 8 — Advanced sling geometry &amp; load behavior
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
