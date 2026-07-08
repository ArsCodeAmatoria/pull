import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";
type Locale = "en";


/** Module 1 — Regulations, standards & responsibilities (BC / general framing; educational). */
export function RiggingEducationModule1Regulations({locale}: {readonly locale: Locale}) {
  const edu = `/lessons`;
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
      <section id="introduction" className="not-prose space-y-5 text-base leading-relaxed text-foreground">
        <p>
          Rigging operations exist within a highly regulated environment due to the significant hazards associated with lifting, suspended
          loads, crane operations, and material handling activities.
        </p>
        <p>
          Understanding responsibilities, legal requirements, operational limitations, and safe work expectations is one of the most important
          foundations of crane rigging knowledge.
        </p>
        <p>
          This section explores the regulatory framework, industry standards, worker responsibilities, and operational duties commonly
          associated with crane and rigging activities.
        </p>
        <p className={riggingEducationNavStripClass}>
          <a href={edu} className="font-medium text-primary hover:underline">
            ← Rigging education overview
          </a>
        </p>
      </section>

      <h2 id="why-regulations">Why regulations exist</h2>
      <p>
        Lifting operations can produce structural failure, equipment damage, crane overturning, dropped loads, crushing or pinch injuries, electrocution, and
        fatal incidents. Rigging failures often trace back to poor equipment selection, skipped or shallow inspections, weak communication, missing planning,
        incorrect load control, overload, human error, or adverse environment. Regulations and standards aim to reduce those risks by setting minimum
        expectations for how lifts are planned, communicated, and executed.
      </p>

      <h2 id="regulatory-framework">Regulatory framework</h2>
      <h3>WorkSafeBC Occupational Health &amp; Safety Regulation (OHSR)</h3>
      <p>
        In British Columbia, crane and rigging work is framed largely through OHSR Part 14 (Material Handling) and Part 15 (Rigging), alongside other parts that
        address mobile equipment, fall protection, electrical hazards, and general occupational safety. Together they spell out expectations for equipment use,
        inspections, worker competency, safe lifting practices, hazard controls, communication, and who is responsible on site.
      </p>

      <h2 id="industry-standards">Industry standards &amp; references</h2>
      <p>
        Beyond statute and regulation, employers and crews frequently rely on CSA and ASME B30 publications, BC Crane Safety guidance, manufacturer manuals,
        engineered lift procedures, and EN/FEM concepts where applicable. Those references usually deepen operational detail beyond minimum legal requirements but
        must still align with the law and your employer&apos;s adopted procedures.
      </p>

      <h2 id="competent-qualified">Competent vs qualified workers</h2>
      <h3>Competent worker</h3>
      <p>A competent worker generally refers to a person who:</p>
      <ul>
        <li>Has sufficient knowledge, training, and experience</li>
        <li>Is familiar with applicable regulations</li>
        <li>Understands hazards associated with the work</li>
        <li>Has the authority to take corrective action</li>
      </ul>
      <p>Competency is often task-specific and tied to the worker&apos;s ability to safely perform the work being conducted.</p>

      <h3>Qualified worker</h3>
      <p>A qualified worker typically refers to an individual who possesses:</p>
      <ul>
        <li>Specialized technical knowledge</li>
        <li>Recognized credentials or certifications</li>
        <li>Demonstrated experience</li>
        <li>Advanced understanding of specific operations or equipment</li>
      </ul>
      <p>Examples may include:</p>
      <ul>
        <li>Certified crane operators</li>
        <li>Engineers</li>
        <li>Lift directors</li>
        <li>Specialized inspectors</li>
        <li>Advanced rigging personnel</li>
      </ul>

      <h2 id="employer">Employer responsibilities</h2>
      <p>Employers are generally responsible for:</p>
      <ul>
        <li>Providing safe work environments</li>
        <li>Ensuring workers receive proper instruction</li>
        <li>Maintaining equipment</li>
        <li>Developing safe work procedures</li>
        <li>Conducting hazard assessments</li>
        <li>Verifying worker competency</li>
        <li>Ensuring regulatory compliance</li>
      </ul>
      <p>Employers are also responsible for ensuring lifting operations are properly planned and supervised.</p>

      <h2 id="supervisor">Supervisor responsibilities</h2>
      <p>Supervisors play a critical role in lifting operations and are commonly responsible for:</p>
      <ul>
        <li>Ensuring safe work procedures are followed</li>
        <li>Verifying workers understand hazards</li>
        <li>Coordinating lifting activities</li>
        <li>Monitoring field conditions</li>
        <li>Correcting unsafe acts or conditions</li>
        <li>Supporting communication between crews</li>
      </ul>
      <p>
        Supervisors often act as the operational link between management, workers, crane operators, and site coordination personnel.
      </p>

      <h2 id="worker">Worker responsibilities</h2>
      <p>Workers involved in rigging and lifting operations are generally expected to:</p>
      <ul>
        <li>Follow safe work procedures</li>
        <li>Inspect equipment before use</li>
        <li>Report hazards and defects</li>
        <li>Use equipment properly</li>
        <li>Participate in hazard assessments</li>
        <li>Communicate unsafe conditions</li>
        <li>Refuse unsafe work when necessary</li>
      </ul>
      <p>Safe lifting operations rely heavily on worker awareness, communication, and situational judgment.</p>

      <h2 id="refuse-unsafe">Right to refuse unsafe work</h2>
      <p>Workers have the right and responsibility to refuse work they believe presents an undue hazard to themselves or others.</p>
      <p>Examples may include:</p>
      <ul>
        <li>Damaged rigging equipment</li>
        <li>Unsafe weather conditions</li>
        <li>Lack of communication systems</li>
        <li>Unstable loads</li>
        <li>Inadequate lift planning</li>
        <li>Unsafe crane setup</li>
        <li>Powerline hazards</li>
      </ul>
      <p>The refusal process typically involves:</p>
      <ul>
        <li>Reporting the concern</li>
        <li>Investigation of the hazard</li>
        <li>Corrective action where necessary</li>
        <li>Resolution before work continues</li>
      </ul>

      <h2 id="hazard-assessments">Hazard assessments</h2>
      <p>Rigging operations often require hazard identification before lifting activities begin.</p>
      <p>
        <strong>Common assessment methods include:</strong>
      </p>
      <h3>FLHA — Field Level Hazard Assessment</h3>
      <p>A short-duration assessment completed immediately before work begins.</p>
      <h3>JHA — Job Hazard Analysis</h3>
      <p>A more detailed breakdown of tasks, hazards, and control measures associated with specific work activities.</p>
      <p>Hazard assessments may consider:</p>
      <ul>
        <li>Ground conditions</li>
        <li>Weather</li>
        <li>Load characteristics</li>
        <li>Crane configuration</li>
        <li>Nearby workers</li>
        <li>Powerlines</li>
        <li>Access limitations</li>
        <li>Communication systems</li>
        <li>Environmental conditions</li>
      </ul>

      <h2 id="site-specific">Site-specific procedures</h2>
      <p>Different projects and work environments may require:</p>
      <ul>
        <li>Unique lift procedures</li>
        <li>Specialized rigging methods</li>
        <li>Restricted access controls</li>
        <li>Engineered lift plans</li>
        <li>Environmental limitations</li>
        <li>Additional communication systems</li>
      </ul>
      <p>Workers must understand both general rigging principles and site-specific operational requirements.</p>

      <h2 id="documentation">Documentation &amp; operational records</h2>
      <p>Modern lifting operations frequently involve documentation such as:</p>
      <ul>
        <li>Inspection records</li>
        <li>Lift plans</li>
        <li>Crane logbooks</li>
        <li>Equipment certifications</li>
        <li>Hazard assessments</li>
        <li>Pre-lift meeting documentation</li>
        <li>Engineered drawings</li>
        <li>Operator certifications</li>
      </ul>
      <p>Documentation helps support operational planning, compliance, communication, and incident prevention.</p>

      <h2 id="due-diligence">Due diligence</h2>
      <p>Due diligence refers to taking all reasonable precautions to protect workers and maintain safe operations.</p>
      <p>In crane and rigging environments, due diligence may involve:</p>
      <ul>
        <li>Proper planning</li>
        <li>Equipment inspections</li>
        <li>Competency verification</li>
        <li>Hazard identification</li>
        <li>Following manufacturer requirements</li>
        <li>Maintaining communication systems</li>
        <li>Monitoring environmental conditions</li>
      </ul>
      <p>Safe lifting operations depend on continuous attention to detail and proactive hazard management.</p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m2} className="font-medium text-primary hover:underline">
          Module 2 — Equipment →
        </a>
        <a href={m3} className="font-medium text-primary hover:underline">
          Module 3 — Inspection →
        </a>
        <a href={m4} className="font-medium text-primary hover:underline">
          Module 4 — Crane awareness →
        </a>
        <a href={m5} className="font-medium text-primary hover:underline">
          Module 5 — Basic rigging →
        </a>
        <a href={m6} className="font-medium text-primary hover:underline">
          Module 6 — Math →
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
