import {KaTeXBlock} from "@/components/katex/katex-math";
import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";

import type { Locale } from "@/i18n/config";


const rk = String.raw;

/** Module 25 — Rigging incident case studies & failure analysis (educational reference). */
export function RiggingEducationModule25RiggingIncidentCaseStudiesFailureAnalysis({locale}: {readonly locale: Locale}) {
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
        <li>ASME B30 crane and rigging standards</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer operating procedures</li>
        <li>Engineering and lift planning practices</li>
        <li>Incident investigation principles</li>
        <li>Site-specific safe work procedures</li>
      </ul>
      <p>Incident analysis should always support continuous improvement, operational awareness, and hazard prevention.</p>

      <h2 id="introduction">Introduction</h2>
      <p>Crane and rigging incidents rarely result from a single failure.</p>
      <p>Most serious lifting incidents involve multiple contributing factors such as:</p>
      <ul>
        <li>Improper planning</li>
        <li>Communication failure</li>
        <li>Human factors</li>
        <li>Environmental exposure</li>
        <li>Dynamic loading</li>
        <li>Equipment misuse</li>
        <li>Procedural breakdown</li>
        <li>Engineering deficiencies</li>
      </ul>
      <p>Studying incidents helps workers understand:</p>
      <ul>
        <li>How hazards develop</li>
        <li>How failures escalate</li>
        <li>How force behaves during abnormal conditions</li>
        <li>Why procedures exist</li>
        <li>How operational decisions affect safety</li>
      </ul>
      <p>This section explores common lifting incident patterns and operational lessons learned from crane and rigging failures.</p>
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
        <a href={m22} className="font-medium text-primary hover:underline">
          M22 — Block
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

      <h2 id="incident-analysis-principles">Incident analysis principles</h2>
      <p>Incident analysis should focus on:</p>
      <ul>
        <li>Understanding causes</li>
        <li>Identifying contributing factors</li>
        <li>Improving operational controls</li>
        <li>Preventing recurrence</li>
      </ul>
      <p>Incident review should avoid oversimplified conclusions such as:</p>
      <ul>
        <li>“Worker error”</li>
        <li>“Equipment failure”</li>
      </ul>
      <p>Most incidents involve interacting technical and human factors.</p>

      <h2 id="immediate-cause-vs-root-cause">Immediate cause vs root cause</h2>

      <h3 id="immediate-cause-definition">Immediate cause</h3>
      <p>The direct event that triggered the incident.</p>
      <p>Examples:</p>
      <ul>
        <li>Sling failure</li>
        <li>Crane overload</li>
        <li>Communication error</li>
      </ul>

      <h3 id="root-cause-definition">Root cause</h3>
      <p>The underlying system, planning, or operational issue that allowed the incident to occur.</p>
      <p>Examples:</p>
      <ul>
        <li>Inadequate planning</li>
        <li>Lack of training</li>
        <li>Production pressure</li>
        <li>Poor supervision</li>
        <li>Inadequate engineering review</li>
      </ul>
      <p>Understanding root causes is essential for preventing future incidents.</p>

      <h2 id="case-study-sling-angle-overload">Case study — Sling angle overload</h2>

      <h3 id="incident-overview-sling-angle-overload">Incident overview</h3>
      <p>A structural steel load was rigged using a two-leg bridle sling system.</p>
      <p>Workers believed the sling capacity exceeded the load weight.</p>
      <p>During hoisting:</p>
      <ul>
        <li>One sling leg failed</li>
        <li>The load rotated violently</li>
        <li>Structural damage occurred</li>
        <li>Workers narrowly avoided injury</li>
      </ul>

      <h3 id="immediate-cause-sling-angle-overload">Immediate cause</h3>
      <p>The sling tension exceeded sling capacity because of:</p>
      <ul>
        <li>Extremely low sling angles</li>
      </ul>

      <h3 id="contributing-factors-sling-angle-overload">Contributing factors</h3>
      <p>Factors included:</p>
      <ul>
        <li>Incorrect sling angle assumptions</li>
        <li>Lack of force calculation</li>
        <li>Inadequate rigging review</li>
        <li>Time pressure</li>
        <li>No engineered lift evaluation</li>
      </ul>

      <h3 id="operational-lessons-sling-angle-overload">Operational lessons</h3>
      <p>Key lessons:</p>
      <ul>
        <li>Sling angles dramatically increase tension</li>
        <li>Low sling angles may overload slings rapidly</li>
        <li>Visual estimation is unreliable</li>
        <li>Rigging geometry must always be evaluated</li>
      </ul>

      <h3 id="sling-angle-formula-reminder-case-study">Sling angle formula reminder</h3>
      <KaTeXBlock tex={rk`T=\frac{W}{2\sin\theta}`} />

      <h2 id="case-study-shock-loading-failure">Case study — Shock loading failure</h2>

      <h3 id="incident-overview-shock-loading">Incident overview</h3>
      <p>A suspended load became temporarily snagged during lifting.</p>
      <p>The operator continued hoisting until the load suddenly released.</p>
      <p>The sudden release created:</p>
      <ul>
        <li>Violent load acceleration</li>
        <li>Shock loading</li>
        <li>Rigging hardware deformation</li>
        <li>Crane structural stress</li>
      </ul>

      <h3 id="immediate-cause-shock-loading">Immediate cause</h3>
      <p>Shock loading caused force levels far exceeding static load weight.</p>

      <h3 id="contributing-factors-shock-loading">Contributing factors</h3>
      <p>Factors included:</p>
      <ul>
        <li>Poor load path evaluation</li>
        <li>Inadequate communication</li>
        <li>Failure to stop operations</li>
        <li>Excessive hoisting force</li>
        <li>Lack of situational awareness</li>
      </ul>

      <h3 id="operational-lessons-shock-loading">Operational lessons</h3>
      <p>Key lessons:</p>
      <ul>
        <li>Snagged loads must be evaluated immediately</li>
        <li>Sudden release creates dynamic loading</li>
        <li>Shock loading may destroy rigging systems rapidly</li>
        <li>Controlled movement is essential</li>
      </ul>

      <h2 id="case-study-side-loaded-shackle-failure">Case study — Side loaded shackle failure</h2>

      <h3 id="incident-overview-side-loaded-shackle">Incident overview</h3>
      <p>A shackle was loaded at an improper angle during a complex lift.</p>
      <p>During movement:</p>
      <ul>
        <li>The shackle body distorted</li>
        <li>The pin experienced side loading</li>
        <li>The connection failed</li>
        <li>The suspended load shifted unexpectedly</li>
      </ul>

      <h3 id="immediate-cause-side-loaded-shackle">Immediate cause</h3>
      <p>The shackle was subjected to side loading outside its intended loading direction.</p>

      <h3 id="contributing-factors-side-loaded-shackle">Contributing factors</h3>
      <p>Factors included:</p>
      <ul>
        <li>Improper rigging geometry</li>
        <li>Congested work area</li>
        <li>Lack of engineered review</li>
        <li>Improvised rigging setup</li>
      </ul>

      <h3 id="operational-lessons-side-loaded-shackle">Operational lessons</h3>
      <p>Key lessons:</p>
      <ul>
        <li>Rigging hardware must be loaded correctly</li>
        <li>Side loading greatly reduces hardware capacity</li>
        <li>Improvised rigging increases operational risk</li>
        <li>Proper alignment is essential</li>
      </ul>

      <h2 id="case-study-powerline-contact">Case study — Powerline contact</h2>

      <h3 id="incident-overview-powerline-contact">Incident overview</h3>
      <p>A crane boom approached energized overhead powerlines during material handling operations.</p>
      <p>Electrical arcing occurred between:</p>
      <ul>
        <li>The boom</li>
        <li>The energized conductor</li>
      </ul>
      <p>Ground personnel were exposed to electrical hazards.</p>

      <h3 id="immediate-cause-powerline-contact">Immediate cause</h3>
      <p>Minimum approach distance was violated.</p>

      <h3 id="contributing-factors-powerline-contact">Contributing factors</h3>
      <p>Factors included:</p>
      <ul>
        <li>Poor site planning</li>
        <li>Inadequate spotter positioning</li>
        <li>Limited situational awareness</li>
        <li>Communication breakdown</li>
        <li>Congested worksite conditions</li>
      </ul>

      <h3 id="operational-lessons-powerline-contact">Operational lessons</h3>
      <p>Key lessons:</p>
      <ul>
        <li>Powerline hazards remain one of the most serious crane risks</li>
        <li>Electricity may arc without direct contact</li>
        <li>Dedicated controls are essential near energized systems</li>
        <li>Safe clearances must always be maintained</li>
      </ul>

      <h2 id="case-study-wind-induced-load-instability">Case study — Wind-induced load instability</h2>

      <h3 id="incident-overview-wind-induced-instability">Incident overview</h3>
      <p>Large formwork panels were lifted during increasing wind conditions.</p>
      <p>During travel:</p>
      <ul>
        <li>Wind rotated the load</li>
        <li>Sling tension became uneven</li>
        <li>The load drifted toward the structure</li>
        <li>Workers lost load control</li>
      </ul>

      <h3 id="immediate-cause-wind-induced-instability">Immediate cause</h3>
      <p>Wind created dynamic loading and rotational instability.</p>

      <h3 id="contributing-factors-wind-induced-instability">Contributing factors</h3>
      <p>Factors included:</p>
      <ul>
        <li>Large surface-area load</li>
        <li>Changing environmental conditions</li>
        <li>Inadequate wind monitoring</li>
        <li>Continued operations despite deteriorating weather</li>
      </ul>

      <h3 id="operational-lessons-wind-induced-instability">Operational lessons</h3>
      <p>Key lessons:</p>
      <ul>
        <li>Windsail effects may rapidly destabilize suspended loads</li>
        <li>Wind conditions may differ significantly at elevation</li>
        <li>Environmental monitoring must continue throughout operations</li>
        <li>Operations may need to stop as conditions change</li>
      </ul>

      <h2 id="case-study-ground-failure-crane-instability">Case study — Ground failure &amp; crane instability</h2>

      <h3 id="incident-overview-ground-failure-crane">Incident overview</h3>
      <p>A mobile crane was positioned near recently backfilled excavation work.</p>
      <p>During lifting:</p>
      <ul>
        <li>Outrigger settlement occurred</li>
        <li>Crane stability was compromised</li>
        <li>The lift was stopped before overturning occurred</li>
      </ul>

      <h3 id="immediate-cause-ground-failure-crane">Immediate cause</h3>
      <p>The supporting ground lacked sufficient bearing capacity.</p>

      <h3 id="contributing-factors-ground-failure-crane">Contributing factors</h3>
      <p>Factors included:</p>
      <ul>
        <li>Inadequate ground assessment</li>
        <li>Lack of engineering review</li>
        <li>Water-saturated soil conditions</li>
        <li>Improper support matting</li>
      </ul>

      <h3 id="operational-lessons-ground-failure-crane">Operational lessons</h3>
      <p>Key lessons:</p>
      <ul>
        <li>Ground conditions directly affect crane stability</li>
        <li>Recently backfilled areas may settle unexpectedly</li>
        <li>Ground bearing pressure must be evaluated carefully</li>
        <li>Soil conditions may change during operations</li>
      </ul>

      <h2 id="case-study-multiple-crane-lift-failure">Case study — Multiple crane lift failure</h2>

      <h3 id="incident-overview-multiple-crane-lift">Incident overview</h3>
      <p>Two cranes were used to move a long structural assembly.</p>
      <p>During lifting:</p>
      <ul>
        <li>Unequal load sharing developed</li>
        <li>One crane became overloaded</li>
        <li>The load rotated unexpectedly</li>
      </ul>

      <h3 id="immediate-cause-multiple-crane-lift">Immediate cause</h3>
      <p>Dynamic load transfer caused unequal force distribution between cranes.</p>

      <h3 id="contributing-factors-multiple-crane-lift">Contributing factors</h3>
      <p>Factors included:</p>
      <ul>
        <li>Poor lift sequencing</li>
        <li>Inadequate communication</li>
        <li>Lack of engineered analysis</li>
        <li>Boom deflection effects</li>
        <li>Different crane movement speeds</li>
      </ul>

      <h3 id="operational-lessons-multiple-crane-lift">Operational lessons</h3>
      <p>Key lessons:</p>
      <ul>
        <li>Tandem lifts are highly complex</li>
        <li>Load sharing constantly changes during movement</li>
        <li>Engineered planning is critical</li>
        <li>Communication discipline is essential</li>
      </ul>

      <h2 id="human-factors-in-rigging-incidents">Human factors in incidents</h2>
      <p>Many incidents involve:</p>
      <ul>
        <li>Fatigue</li>
        <li>Assumptions</li>
        <li>Time pressure</li>
        <li>Complacency</li>
        <li>Miscommunication</li>
        <li>Rushing</li>
        <li>Overconfidence</li>
      </ul>
      <p>Technical knowledge alone does not prevent incidents.</p>
      <p>Operational behavior strongly influences lifting safety.</p>

      <h2 id="incident-prevention-through-planning">Incident prevention through planning</h2>
      <p>Effective prevention methods include:</p>
      <ul>
        <li>Lift planning</li>
        <li>Communication systems</li>
        <li>Hazard assessments</li>
        <li>Environmental monitoring</li>
        <li>Inspection programs</li>
        <li>Engineering review</li>
        <li>Situational awareness</li>
        <li>Operational discipline</li>
      </ul>
      <p>Most serious incidents involve warning signs before failure occurs.</p>

      <h2 id="learning-from-near-misses-rigging">Learning from near misses</h2>
      <p>Near misses provide valuable opportunities to:</p>
      <ul>
        <li>Improve procedures</li>
        <li>Identify weaknesses</li>
        <li>Correct unsafe conditions</li>
        <li>Improve communication</li>
        <li>Strengthen operational awareness</li>
      </ul>
      <p>Organizations with strong safety cultures encourage reporting and review of near misses.</p>

      <h2 id="situational-awareness-incident-prevention">Situational awareness during operations</h2>
      <p>Personnel involved in lifting operations should continuously monitor:</p>
      <ul>
        <li>Load behavior</li>
        <li>Environmental changes</li>
        <li>Sling alignment</li>
        <li>Personnel exposure</li>
        <li>Ground conditions</li>
        <li>Communication effectiveness</li>
        <li>Crane movement</li>
        <li>Structural response</li>
      </ul>
      <p>Conditions may change rapidly during lifting activities.</p>
      <p>
        Continuous observation and operational awareness remain essential for preventing lifting incidents and maintaining safe crane and rigging operations—together
        with applicable regulations, manufacturer procedures, engineering and lift planning practices, and approved site requirements.
      </p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m24} className="font-medium text-primary hover:underline">
          ← Module 24 — Tower crane rigging operations
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
