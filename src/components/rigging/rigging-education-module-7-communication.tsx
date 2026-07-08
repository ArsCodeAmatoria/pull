import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";
import type { Locale } from "@/i18n/config";


/** Module 7 — Communication & signaling (hand signals, radio, blind lifts, hierarchy). */
export function RiggingEducationModule7Communication({locale}: {readonly locale: Locale}) {
  const edu = `/lessons`;
  const m1 = `/lessons/module-1`;
  const m2 = `/lessons/module-2`;
  const m3 = `/lessons/module-3`;
  const m4 = `/lessons/module-4`;
  const m5 = `/lessons/module-5`;
  const m6 = `/lessons/module-6`;
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
        <li>WorkSafeBC crane communication requirements</li>
        <li>ASME B30 crane-related standards</li>
        <li>CSA crane and hoisting standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer operating procedures</li>
        <li>Site-specific lifting and communication procedures</li>
      </ul>
      <p>
        Communication systems used during lifting operations must comply with applicable regulations, site procedures, engineered lift requirements,
        and employer policies.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Communication is one of the most critical components of safe crane and rigging operations.</p>
      <p>Lifting activities often involve:</p>
      <ul>
        <li>Multiple workers</li>
        <li>Blind spots</li>
        <li>Limited visibility</li>
        <li>Environmental noise</li>
        <li>Moving equipment</li>
        <li>Simultaneous work activities</li>
        <li>Dynamic load movement</li>
      </ul>
      <p>Clear communication helps ensure:</p>
      <ul>
        <li>Coordinated crane movement</li>
        <li>Controlled load handling</li>
        <li>Hazard awareness</li>
        <li>Worker positioning</li>
        <li>Safe lift execution</li>
      </ul>
      <p>
        Poor communication is a major contributing factor in lifting incidents, dropped loads, struck-by hazards, and equipment damage.
      </p>
      <p>
        This section explores communication principles, signaling systems, radio procedures, and coordination practices commonly associated with
        crane-supported lifting operations.
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

      <h2 id="communication-systems">Communication systems in lifting operations</h2>
      <p>Communication during lifting operations may involve:</p>
      <ul>
        <li>Hand signals</li>
        <li>Radio communication</li>
        <li>Voice commands</li>
        <li>Visual signals</li>
        <li>Audible warnings</li>
        <li>Pre-lift meetings</li>
        <li>Coordinated movement planning</li>
      </ul>
      <p>Communication systems must remain:</p>
      <ul>
        <li>Clear</li>
        <li>Consistent</li>
        <li>Reliable</li>
        <li>Understood by all involved personnel</li>
      </ul>

      <h2 id="dedicated-signaler">Dedicated signaler concept</h2>
      <p>Many lifting operations require a dedicated signaler.</p>
      <p>A dedicated signaler is responsible for:</p>
      <ul>
        <li>Communicating directly with the crane operator</li>
        <li>Monitoring load movement</li>
        <li>Coordinating lift activities</li>
        <li>Helping maintain safe positioning</li>
        <li>Providing movement instructions</li>
      </ul>
      <p>
        Only one designated signaler should normally communicate operational movement commands to the crane operator unless emergency stop
        conditions exist.
      </p>

      <h2 id="signaler-responsibilities">Responsibilities of the signaler</h2>
      <p>Signalers commonly help:</p>
      <ul>
        <li>Maintain communication integrity</li>
        <li>Monitor the load path</li>
        <li>Observe worker positioning</li>
        <li>Watch for hazards</li>
        <li>Coordinate controlled movement</li>
        <li>Relay blind lift instructions</li>
        <li>Prevent conflicting commands</li>
      </ul>
      <p>Signalers must remain attentive throughout lifting operations.</p>

      <h2 id="standard-hand-signals">Standard hand signals</h2>
      <p>Standard hand signals provide a universal visual communication system for crane operations.</p>
      <p>Signals are commonly used for:</p>
      <ul>
        <li>Hoisting</li>
        <li>Lowering</li>
        <li>Swinging</li>
        <li>Traveling</li>
        <li>Emergency stopping</li>
        <li>Boom movement</li>
        <li>Trolley movement</li>
        <li>Auxiliary functions</li>
      </ul>
      <p>Standardization helps reduce miscommunication between workers and operators.</p>

      <h2 id="hand-signal-visibility">Hand signal visibility</h2>
      <p>Hand signals must remain:</p>
      <ul>
        <li>Clearly visible</li>
        <li>Deliberate</li>
        <li>Unambiguous</li>
        <li>Consistent</li>
      </ul>
      <p>Poor visibility may result from:</p>
      <ul>
        <li>Weather</li>
        <li>Lighting conditions</li>
        <li>Blind spots</li>
        <li>Obstructions</li>
        <li>Distance</li>
        <li>Worker positioning</li>
      </ul>
      <p>When signals cannot be seen clearly, alternative communication systems may be required.</p>

      <h2 id="voice-communication">Voice communication</h2>
      <p>Voice communication may be used during:</p>
      <ul>
        <li>Short-distance coordination</li>
        <li>Ground operations</li>
        <li>Spotting activities</li>
        <li>Controlled lift sequences</li>
      </ul>
      <p>Voice communication should remain:</p>
      <ul>
        <li>Clear</li>
        <li>Direct</li>
        <li>Simple</li>
        <li>Consistent</li>
      </ul>
      <p>Complex wording or unnecessary conversation during critical movements may create confusion.</p>

      <h2 id="radio-communication">Radio communication</h2>
      <p>Radio systems are commonly used when:</p>
      <ul>
        <li>Visibility is limited</li>
        <li>Blind lifts are performed</li>
        <li>Distances are large</li>
        <li>Noise levels are high</li>
        <li>Multiple work areas exist</li>
      </ul>

      <h2 id="radio-principles">Radio communication principles</h2>
      <p>Radio communication should:</p>
      <ul>
        <li>Use clear language</li>
        <li>Avoid unnecessary conversation</li>
        <li>Confirm instructions</li>
        <li>Remain concise</li>
        <li>Use agreed terminology</li>
      </ul>
      <p>Operators and signalers should confirm:</p>
      <ul>
        <li>Direction</li>
        <li>Speed</li>
        <li>Movement type</li>
        <li>Load condition</li>
        <li>Emergency instructions</li>
      </ul>

      <h2 id="recommended-radio-practices">Recommended radio practices</h2>
      <p>Common best practices include:</p>
      <ul>
        <li>Identifying who is speaking</li>
        <li>Giving one command at a time</li>
        <li>Waiting for confirmation</li>
        <li>Speaking slowly and clearly</li>
        <li>Avoiding overlapping transmissions</li>
      </ul>
      <p>Examples:</p>
      <ul>
        <li>&ldquo;Hoist slowly.&rdquo;</li>
        <li>&ldquo;Swing left slowly.&rdquo;</li>
        <li>&ldquo;Stop.&rdquo;</li>
        <li>&ldquo;Boom down slowly.&rdquo;</li>
      </ul>

      <h2 id="emergency-stop">Emergency stop signal</h2>
      <p>The emergency stop signal is one of the most important communication commands in crane operations.</p>
      <p>Any worker observing an unsafe condition should be able to communicate a stop instruction.</p>
      <p>Emergency stop situations may involve:</p>
      <ul>
        <li>Personnel exposure</li>
        <li>Load instability</li>
        <li>Equipment failure</li>
        <li>Powerline hazards</li>
        <li>Communication loss</li>
        <li>Uncontrolled movement</li>
      </ul>
      <p>Emergency stop commands must be obeyed immediately.</p>

      <h2 id="blind-lifts">Blind lifts</h2>
      <p>Blind lifts occur when:</p>
      <ul>
        <li>The operator cannot see the load</li>
        <li>The landing area is hidden</li>
        <li>Structures block visibility</li>
        <li>Distance limits visual awareness</li>
      </ul>
      <p>Blind lifts require:</p>
      <ul>
        <li>Reliable communication systems</li>
        <li>Qualified signalers</li>
        <li>Clear movement coordination</li>
        <li>Controlled lift speeds</li>
        <li>Increased situational awareness</li>
      </ul>
      <p>Communication reliability becomes critically important during blind lifts.</p>

      <h2 id="multi-crane-communication">Communication during multi-crane lifts</h2>
      <p>Multiple crane lifts significantly increase communication complexity.</p>
      <p>Additional communication concerns may include:</p>
      <ul>
        <li>Simultaneous crane movement</li>
        <li>Load balance coordination</li>
        <li>Shared timing</li>
        <li>Different operator perspectives</li>
        <li>Multiple blind zones</li>
      </ul>
      <p>Tandem and multi-crane lifts typically require:</p>
      <ul>
        <li>Pre-lift coordination</li>
        <li>Clearly assigned responsibilities</li>
        <li>Defined communication hierarchy</li>
        <li>Controlled movement sequencing</li>
      </ul>

      <h2 id="pre-lift-meetings">Pre-lift meetings</h2>
      <p>Pre-lift meetings help establish communication expectations before lifting operations begin.</p>
      <p>Topics may include:</p>
      <ul>
        <li>Lift sequence</li>
        <li>Load path</li>
        <li>Responsibilities</li>
        <li>Radio channels</li>
        <li>Emergency procedures</li>
        <li>Environmental conditions</li>
        <li>Hazard areas</li>
        <li>Exclusion zones</li>
        <li>Contingency planning</li>
      </ul>
      <p>Pre-lift coordination improves operational consistency and situational awareness.</p>

      <h2 id="communication-failure">Communication failure hazards</h2>
      <p>Communication breakdowns may result in:</p>
      <ul>
        <li>Conflicting commands</li>
        <li>Unexpected movement</li>
        <li>Load collisions</li>
        <li>Personnel exposure</li>
        <li>Equipment damage</li>
        <li>Crane overload conditions</li>
      </ul>
      <p>Communication systems must remain functional throughout lifting operations.</p>

      <h2 id="environmental-communication">Environmental factors affecting communication</h2>
      <p>Environmental conditions may interfere with communication systems.</p>
      <p>Examples include:</p>
      <ul>
        <li>Wind</li>
        <li>Rain</li>
        <li>Noise</li>
        <li>Dust</li>
        <li>Distance</li>
        <li>Equipment interference</li>
        <li>Poor lighting</li>
      </ul>
      <p>Alternative communication systems may be required under challenging conditions.</p>

      <h2 id="situational-awareness-comm">Situational awareness &amp; communication</h2>
      <p>Communication is closely tied to situational awareness.</p>
      <p>Workers involved in lifting operations must continuously monitor:</p>
      <ul>
        <li>Crane movement</li>
        <li>Load behavior</li>
        <li>Personnel locations</li>
        <li>Environmental changes</li>
        <li>Communication effectiveness</li>
        <li>Equipment condition</li>
      </ul>
      <p>Communication should adapt as conditions change throughout the lift.</p>

      <h2 id="human-factors">Human factors &amp; communication</h2>
      <p>Human factors affecting communication may include:</p>
      <ul>
        <li>Fatigue</li>
        <li>Stress</li>
        <li>Noise distraction</li>
        <li>Assumptions</li>
        <li>Overconfidence</li>
        <li>Inexperience</li>
        <li>Language barriers</li>
        <li>Complacency</li>
      </ul>
      <p>Effective communication systems help reduce operational errors caused by human factors.</p>

      <h2 id="communication-hierarchy">Communication hierarchy</h2>
      <p>Clear communication hierarchy helps prevent conflicting instructions.</p>
      <p>Operations commonly involve:</p>
      <ul>
        <li>Crane operator</li>
        <li>Dedicated signaler</li>
        <li>Lift director</li>
        <li>Supervisors</li>
        <li>Riggers</li>
        <li>Ground personnel</li>
      </ul>
      <p>Responsibilities and authority should be clearly understood before lifting begins.</p>

      <h2 id="operational-discipline">Operational discipline</h2>
      <p>Safe communication depends heavily on operational discipline.</p>
      <p>Good communication practices include:</p>
      <ul>
        <li>Remaining attentive</li>
        <li>Avoiding distractions</li>
        <li>Using standard terminology</li>
        <li>Confirming instructions</li>
        <li>Stopping operations when uncertain</li>
      </ul>
      <p>When communication becomes unclear, lifting operations should pause until communication integrity is restored.</p>

      <h2 id="communication-safety-system">Communication as a safety system</h2>
      <p>Communication is not simply conversation during lifting operations.</p>
      <p>It functions as a critical safety system that helps:</p>
      <ul>
        <li>Coordinate movement</li>
        <li>Prevent incidents</li>
        <li>Maintain situational awareness</li>
        <li>Support operational control</li>
        <li>Protect workers and equipment</li>
      </ul>
      <p>Effective communication is one of the most important factors in safe crane and rigging operations.</p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m6} className="font-medium text-primary hover:underline">
          ← Module 6 — Rigging math &amp; load calculations
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
