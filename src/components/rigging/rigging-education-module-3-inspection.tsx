import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";
import type { Locale } from "@/i18n/config";


/** Module 3 — Inspection & removal criteria (wire rope rules, slings, hooks, culture). */
export function RiggingEducationModule3Inspection({locale}: {readonly locale: Locale}) {
  const edu = `/lessons`;
  const m1 = `/lessons/module-1`;
  const m2 = `/lessons/module-2`;
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
        <li>ASME B30.5 — Mobile &amp; Locomotive Cranes</li>
        <li>ASME B30.9 — Slings</li>
        <li>ASME B30.10 — Hooks</li>
        <li>ASME B30.26 — Rigging Hardware</li>
        <li>ASME B30.30 — Ropes</li>
        <li>Applicable CSA standards</li>
        <li>Manufacturer inspection requirements</li>
        <li>Engineered lifting procedures</li>
        <li>Site-specific lifting policies and procedures</li>
      </ul>
      <p>
        Inspection requirements, acceptance criteria, and removal-from-service decisions must always follow applicable regulations,
        manufacturer specifications, engineered instructions, and employer procedures.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>
        Inspection is one of the most critical aspects of crane and rigging operations. Rigging equipment is exposed to heavy loads,
        environmental conditions, bending stress, shock loading, abrasion, weather, and repeated operational fatigue.
      </p>
      <p>Over time, these conditions may weaken equipment and increase the risk of:</p>
      <ul>
        <li>Equipment failure</li>
        <li>Dropped loads</li>
        <li>Load instability</li>
        <li>Structural damage</li>
        <li>Serious injury or fatal incidents</li>
      </ul>
      <p>Proper inspection procedures help identify damaged, worn, defective, or improperly configured equipment before lifting operations begin.</p>
      <p>
        <strong>This section explores:</strong>
      </p>
      <ul>
        <li>Inspection principles</li>
        <li>Damage indicators</li>
        <li>Removal criteria</li>
        <li>Broken wire standards</li>
        <li>Hardware inspection</li>
        <li>Sling inspection</li>
        <li>Environmental deterioration</li>
        <li>Operational considerations related to lifting equipment</li>
      </ul>
      <p className={riggingEducationNavStripClass}>
        <a href={edu} className="font-medium text-primary hover:underline">
          ← Rigging education overview
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m1} className="font-medium text-primary hover:underline">
          Module 1
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m2} className="font-medium text-primary hover:underline">
          Module 2 — Equipment
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m4} className="font-medium text-primary hover:underline">
          Module 4 — Crane awareness
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m5} className="font-medium text-primary hover:underline">
          M5 — Basic rigging
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
          M15
        </a>
        <span className="mx-2 text-border">·</span>
        <a href={m16} className="font-medium text-primary hover:underline">
          M16
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

      <h2 id="purpose-rigging-inspections">Purpose of rigging inspections</h2>
      <p>Rigging inspections are intended to:</p>
      <ul>
        <li>Identify damaged equipment</li>
        <li>Detect wear and deterioration</li>
        <li>Prevent lifting failures</li>
        <li>Support safe lifting operations</li>
        <li>Verify compliance with manufacturer requirements</li>
        <li>Reduce operational risk</li>
      </ul>
      <p>Inspection procedures help ensure equipment remains suitable for its intended use.</p>

      <h2 id="inspection-responsibility">Inspection responsibility</h2>
      <p>Rigging inspections may involve:</p>
      <ul>
        <li>Workers</li>
        <li>Riggers</li>
        <li>Supervisors</li>
        <li>Competent persons</li>
        <li>Qualified inspectors</li>
        <li>Engineers or manufacturer representatives in certain situations</li>
      </ul>
      <p>Workers using rigging equipment are generally expected to visually inspect equipment before use.</p>
      <p>More detailed inspections may occur:</p>
      <ul>
        <li>Periodically</li>
        <li>After incidents</li>
        <li>After overload events</li>
        <li>Following repairs</li>
        <li>After environmental exposure</li>
        <li>Before critical lifts</li>
      </ul>

      <h2 id="types-inspections">Types of inspections</h2>
      <h3>Pre-use inspection</h3>
      <p>A visual and functional inspection conducted before equipment is used.</p>
      <p>This inspection may include:</p>
      <ul>
        <li>Damage detection</li>
        <li>Missing components</li>
        <li>Legibility of identification tags</li>
        <li>Obvious wear or distortion</li>
        <li>Connection integrity</li>
      </ul>
      <h3>Frequent inspection</h3>
      <p>Performed at regular intervals depending on:</p>
      <ul>
        <li>Frequency of use</li>
        <li>Severity of service</li>
        <li>Environmental exposure</li>
        <li>Site conditions</li>
      </ul>
      <h3>Periodic inspection</h3>
      <p>A more detailed documented inspection performed by a competent or qualified individual.</p>
      <p>Periodic inspections may involve:</p>
      <ul>
        <li>Measurement</li>
        <li>Detailed documentation</li>
        <li>Removal criteria verification</li>
        <li>Load-bearing component evaluation</li>
      </ul>

      <h2 id="wll-verification">Working load limit (WLL) verification</h2>
      <p>Rigging equipment should display:</p>
      <ul>
        <li>Manufacturer identification</li>
        <li>Capacity markings</li>
        <li>Grade markings where applicable</li>
        <li>Serial or identification information</li>
      </ul>
      <p>Equipment with missing or illegible identification may not be acceptable for lifting operations.</p>
      <p>Manufacturer ratings must never be exceeded.</p>

      <h2 id="inspection-documentation">Inspection documentation</h2>
      <p>Inspection records may include:</p>
      <ul>
        <li>Equipment identification</li>
        <li>Inspection dates</li>
        <li>Inspector information</li>
        <li>Defects identified</li>
        <li>Corrective actions</li>
        <li>Removal-from-service decisions</li>
      </ul>
      <p>Documentation is especially important for:</p>
      <ul>
        <li>Engineered lifting systems</li>
        <li>Critical lifts</li>
        <li>Specialized equipment</li>
        <li>Site compliance programs</li>
      </ul>

      <h2 id="general-inspection-principles">General inspection principles</h2>
      <p>Inspectors commonly look for:</p>
      <ul>
        <li>Deformation</li>
        <li>Cracks</li>
        <li>Corrosion</li>
        <li>Wear</li>
        <li>Heat damage</li>
        <li>Missing components</li>
        <li>Improper modifications</li>
        <li>Distortion</li>
        <li>Fatigue indicators</li>
      </ul>
      <p>Any condition that may reduce equipment strength or operational reliability must be carefully evaluated.</p>

      <h2 id="wire-rope-inspection">Wire rope inspection</h2>
      <h3>Standards &amp; references</h3>
      <ul>
        <li>ASME B30.30</li>
        <li>ASME B30.5</li>
        <li>Manufacturer inspection requirements</li>
        <li>Applicable CSA standards</li>
        <li>WorkSafeBC lifting equipment requirements</li>
      </ul>
      <p>Wire rope is exposed to:</p>
      <ul>
        <li>Abrasion</li>
        <li>Crushing</li>
        <li>Bending fatigue</li>
        <li>Shock loading</li>
        <li>Corrosion</li>
        <li>Drum pressure</li>
        <li>Sheave wear</li>
        <li>Dynamic loading</li>
      </ul>
      <h3>Common wire rope defects — broken wires</h3>
      <p>Broken wires may indicate:</p>
      <ul>
        <li>Fatigue</li>
        <li>Abrasion</li>
        <li>Excessive wear</li>
        <li>Internal deterioration</li>
        <li>Shock loading</li>
      </ul>
      <p>Clusters of broken wires are especially serious because they may indicate localized rope failure.</p>

      <h3>Running rope removal criteria</h3>
      <p>
        Running ropes are ropes that travel over sheaves, wind on drums, and move repeatedly during crane operation. Examples include hoist
        ropes, boom hoist ropes, and running lines.
      </p>
      <p>
        <strong>Removal criteria — running rope:</strong> A running rope must be removed from service when <strong>either</strong> of the following
        conditions exist:
      </p>
      <ul>
        <li>6 randomly distributed broken wires in one rope lay, <strong>or</strong></li>
        <li>3 broken wires in one strand within one rope lay</li>
      </ul>
      <p>
        This is commonly known as the <strong>&ldquo;3–6 rule.&rdquo;</strong> A rope lay is the distance required for one strand to complete one full
        revolution around the rope.
      </p>

      <h3>Standing rope removal criteria</h3>
      <p>Standing ropes generally remain stationary during operation. Examples include pendant ropes, guy lines, and boom suspension ropes.</p>
      <p>
        <strong>Removal criteria — standing rope:</strong> Standing ropes should be removed from service when <strong>either</strong>:
      </p>
      <ul>
        <li>3 broken wires are found within one lay length, <strong>or</strong></li>
        <li>More than 1 broken wire occurs at an end connection</li>
      </ul>

      <h3>Rotation-resistant / non-rotational rope</h3>
      <p>
        Rotation-resistant ropes contain multiple layers of strands designed to reduce rope spin during lifting operations. Because these
        ropes contain smaller outer wires and more complex internal construction, they are more sensitive to broken wire damage.
      </p>
      <p>
        <strong>Removal criteria — rotation-resistant rope:</strong> Rotation-resistant rope should be removed from service when <strong>either</strong>:
      </p>
      <ul>
        <li>2 broken wires are found within 6 rope diameters, <strong>or</strong></li>
        <li>4 broken wires are found within 30 rope diameters</li>
      </ul>
      <p>These stricter criteria exist because internal failure may progress rapidly in rotation-resistant rope constructions.</p>

      <h3>Valley breaks</h3>
      <p>Valley breaks occur between rope strands and are particularly serious because they may indicate:</p>
      <ul>
        <li>Internal rope deterioration</li>
        <li>Core failure</li>
        <li>Fatigue damage</li>
        <li>Internal crushing</li>
      </ul>
      <p>Valley breaks often require immediate removal from service.</p>

      <h3>Birdcaging</h3>
      <p>Birdcaging occurs when strands separate and distort outward. This condition often results from:</p>
      <ul>
        <li>Sudden release of tension</li>
        <li>Shock loading</li>
        <li>Improper reeving</li>
        <li>Twisting</li>
        <li>Crushing</li>
      </ul>
      <p>Birdcaging significantly weakens rope structure.</p>

      <h3>Kinks</h3>
      <p>Kinks permanently deform the rope structure and severely reduce rope strength. Once kinked, wire rope generally cannot return to its original capacity.</p>

      <h3>Crushing</h3>
      <p>Crushing damages rope geometry and internal strand structure. Causes may include:</p>
      <ul>
        <li>Improper drum spooling</li>
        <li>Pinching</li>
        <li>Overloading</li>
        <li>Poor storage</li>
        <li>Cross winding on drums</li>
      </ul>

      <h3>Corrosion</h3>
      <p>Corrosion weakens wire rope strands and may hide internal deterioration. Environmental exposure greatly affects wire rope lifespan.</p>

      <h3>Heat damage</h3>
      <p>Heat may alter the metallurgical properties of wire rope and reduce strength. Discoloration, burns, or welding exposure may indicate heat damage.</p>

      <h2 id="wire-rope-sling-inspection">Wire rope sling inspection</h2>
      <h3>Standards &amp; references</h3>
      <ul>
        <li>ASME B30.9</li>
        <li>Manufacturer inspection requirements</li>
        <li>Applicable CSA standards</li>
      </ul>
      <p>Wire rope slings experience different loading conditions than running ropes and therefore use different inspection criteria.</p>
      <p>
        <strong>Wire rope sling removal criteria:</strong> Wire rope slings should be removed from service when <strong>either</strong>:
      </p>
      <ul>
        <li>10 randomly distributed broken wires occur in one rope lay, <strong>or</strong></li>
        <li>5 broken wires occur in one strand in one rope lay</li>
      </ul>
      <p>
        <strong>Additional criteria include:</strong> 1 broken wire in the eye; damage near end fittings; severe crushing; kinks; corrosion; heat damage;
        distortion. Broken wires near end fittings are particularly serious because stress concentrations occur in these areas.
      </p>

      <h2 id="chain-sling-inspection">Chain sling inspection</h2>
      <h3>Standards &amp; references</h3>
      <ul>
        <li>ASME B30.9</li>
        <li>Manufacturer specifications</li>
        <li>Applicable CSA standards</li>
      </ul>
      <p>Chain slings are durable but still require careful inspection.</p>
      <h3>Stretching</h3>
      <p>Elongated links may indicate overloading.</p>
      <h3>Cracks</h3>
      <p>Cracks may develop from fatigue, shock loading, improper use, or manufacturing defects. Even small cracks may lead to catastrophic failure.</p>
      <h3>Bent or twisted links</h3>
      <p>Deformed links indicate excessive force or improper loading.</p>
      <h3>Wear</h3>
      <p>Wear reduces chain diameter and overall strength. Excessive wear may require removal from service.</p>

      <h2 id="synthetic-sling-inspection">Synthetic sling inspection</h2>
      <h3>Standards &amp; references</h3>
      <ul>
        <li>ASME B30.9</li>
        <li>Manufacturer inspection procedures</li>
        <li>Applicable CSA standards</li>
      </ul>
      <p>Synthetic slings are flexible and lightweight but vulnerable to environmental and surface damage.</p>
      <h3>Cuts &amp; tears</h3>
      <p>Sharp edges or abrasion may cut load-bearing fibers.</p>
      <h3>Abrasion damage</h3>
      <p>Repeated friction weakens sling fibers and outer surfaces.</p>
      <h3>UV degradation</h3>
      <p>Ultraviolet exposure weakens synthetic materials over time.</p>
      <h3>Chemical damage</h3>
      <p>Chemicals may weaken fibers or alter material properties.</p>
      <h3>Heat damage</h3>
      <p>Synthetic materials are sensitive to elevated temperatures. Melting, hardening, or discoloration may indicate heat exposure.</p>
      <h3>Missing identification tags</h3>
      <p>Synthetic slings typically require legible identification tags showing capacity, manufacturer, material type, and serial information. Missing tags may make the sling unsuitable for use.</p>

      <h2 id="hook-inspection">Hook inspection</h2>
      <h3>Standards &amp; references</h3>
      <ul>
        <li>ASME B30.10</li>
        <li>Manufacturer inspection requirements</li>
        <li>Applicable CSA standards</li>
      </ul>
      <p>Hooks are critical load-bearing components requiring regular inspection.</p>
      <h3>Hook inspection areas</h3>
      <ul>
        <li>
          <strong>Throat opening</strong> — An enlarged throat opening may indicate overloading or deformation.
        </li>
        <li>
          <strong>Twisting</strong> — Twisted hooks may result from side loading or improper use.
        </li>
        <li>
          <strong>Cracks</strong> — Cracks may develop due to fatigue or overload conditions.
        </li>
        <li>
          <strong>Safety latches</strong> — Missing or damaged latches increase the risk of accidental disengagement.
        </li>
        <li>
          <strong>Wear</strong> — Wear at contact surfaces may reduce load-bearing capability.
        </li>
      </ul>

      <h2 id="shackle-inspection">Shackle inspection</h2>
      <h3>Standards &amp; references</h3>
      <ul>
        <li>ASME B30.26</li>
        <li>Manufacturer requirements</li>
        <li>Applicable CSA standards</li>
      </ul>
      <p>Shackles should be inspected for:</p>
      <ul>
        <li>Bent components</li>
        <li>Thread damage</li>
        <li>Corrosion</li>
        <li>Pin wear</li>
        <li>Distortion</li>
        <li>Improper modifications</li>
      </ul>
      <p>Pins must match manufacturer specifications. Substituting bolts or incorrect pins may create severe hazards.</p>

      <h2 id="hardware-distortion">Hardware distortion</h2>
      <p>Distortion may appear as:</p>
      <ul>
        <li>Bent components</li>
        <li>Uneven loading marks</li>
        <li>Twisting</li>
        <li>Misalignment</li>
        <li>Elongation</li>
      </ul>
      <p>Distortion often indicates previous overloading or improper loading conditions.</p>

      <h2 id="unauthorized-modifications">Unauthorized modifications</h2>
      <p>Rigging equipment should not be:</p>
      <ul>
        <li>Welded</li>
        <li>Heated</li>
        <li>Drilled</li>
        <li>Ground</li>
        <li>Modified without manufacturer approval</li>
      </ul>
      <p>Unauthorized modifications may:</p>
      <ul>
        <li>Alter material properties</li>
        <li>Reduce strength</li>
        <li>Void certifications</li>
        <li>Create hidden failure points</li>
      </ul>

      <h2 id="removal-from-service">Removal from service</h2>
      <p>Equipment should be removed from service whenever:</p>
      <ul>
        <li>Damage exceeds acceptable limits</li>
        <li>Capacity markings are missing</li>
        <li>Structural integrity is uncertain</li>
        <li>Cracks or deformation exist</li>
        <li>Manufacturer requirements are not met</li>
      </ul>
      <p>When uncertainty exists, equipment should be evaluated by a competent or qualified person before further use.</p>

      <h2 id="storage-handling">Storage &amp; handling considerations</h2>
      <p>Improper storage may damage rigging equipment even when not in use.</p>
      <p>Best practices often include:</p>
      <ul>
        <li>Dry storage</li>
        <li>Protection from chemicals</li>
        <li>Proper coiling and hanging</li>
        <li>Separation from sharp edges</li>
        <li>UV protection for synthetic materials</li>
        <li>Avoiding contamination</li>
      </ul>
      <p>Good storage practices help extend equipment lifespan and maintain reliability.</p>

      <h2 id="inspection-culture">Inspection culture &amp; situational awareness</h2>
      <p>Safe lifting operations depend heavily on proactive inspection culture.</p>
      <p>Experienced rigging personnel continuously observe:</p>
      <ul>
        <li>Equipment condition</li>
        <li>Load behavior</li>
        <li>Environmental changes</li>
        <li>Connection integrity</li>
        <li>Operational abnormalities</li>
      </ul>
      <p>Inspection is not only a formal procedure but also an ongoing awareness process throughout lifting operations.</p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m2} className="font-medium text-primary hover:underline">
          ← Module 2
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
