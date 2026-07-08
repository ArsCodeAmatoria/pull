import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";
type Locale = "en";


/** Module 21 — Knots, hitches & rope applications (educational reference). */
export function RiggingEducationModule21KnotsHitchesRopeApplications({locale}: {readonly locale: Locale}) {
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
        <li>Applicable CSA standards</li>
        <li>ASME B30 rigging-related standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer rope specifications</li>
        <li>Site-specific lifting and rope-use procedures</li>
      </ul>
      <p>
        Rope systems and knot applications must always follow applicable regulations, manufacturer requirements, engineered procedures, and approved site
        practices.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Although modern lifting operations rely heavily on:</p>
      <ul>
        <li>Wire rope</li>
        <li>Chain slings</li>
        <li>Synthetic slings</li>
        <li>Engineered lifting devices</li>
      </ul>
      <p>rope systems remain important in many crane and rigging environments.</p>
      <p>Rope applications are commonly used for:</p>
      <ul>
        <li>Taglines</li>
        <li>Temporary control systems</li>
        <li>Rope access support</li>
        <li>Light-duty lifting</li>
        <li>Positioning</li>
        <li>Structural rigging</li>
        <li>Rescue support</li>
        <li>Material handling</li>
        <li>Securing loads</li>
      </ul>
      <p>Understanding rope behavior, knot selection, and rope limitations is important because improper rope use may create:</p>
      <ul>
        <li>Sudden failure</li>
        <li>Loss of load control</li>
        <li>Snap-back hazards</li>
        <li>Personnel exposure</li>
        <li>Uncontrolled movement</li>
      </ul>
      <p>
        This section explores common rope applications, knot systems, rope behavior, and operational awareness principles associated with rope use in
        rigging environments.
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

      <h2 id="rope-types">Rope types</h2>
      <p>Ropes used in industrial applications may include:</p>
      <ul>
        <li>Natural fibre rope</li>
        <li>Synthetic rope</li>
        <li>Kernmantle rope</li>
        <li>Braided rope</li>
        <li>Twisted rope</li>
        <li>Static rope</li>
        <li>Dynamic rope</li>
      </ul>
      <p>Different rope types behave differently under load.</p>

      <h3 id="natural-fibre-rope">Natural fibre rope</h3>
      <p>Natural fibre ropes may include:</p>
      <ul>
        <li>Manila</li>
        <li>Sisal</li>
        <li>Cotton</li>
      </ul>
      <p>Natural fibre ropes are generally less common in modern industrial rigging because they:</p>
      <ul>
        <li>Absorb moisture</li>
        <li>Deteriorate more rapidly</li>
        <li>Have lower strength</li>
        <li>Are more sensitive to environmental conditions</li>
      </ul>

      <h3 id="synthetic-rope">Synthetic rope</h3>
      <p>Common synthetic rope materials include:</p>
      <ul>
        <li>Nylon</li>
        <li>Polyester</li>
        <li>Polypropylene</li>
        <li>HMPE (High-Modulus Polyethylene)</li>
      </ul>
      <p>Synthetic ropes may offer:</p>
      <ul>
        <li>Higher strength</li>
        <li>Reduced weight</li>
        <li>Better weather resistance</li>
        <li>Improved flexibility</li>
      </ul>
      <p>However, synthetic materials may also introduce:</p>
      <ul>
        <li>Stretch characteristics</li>
        <li>Heat sensitivity</li>
        <li>UV degradation</li>
        <li>Abrasion concerns</li>
      </ul>

      <h2 id="rope-construction-types">Rope construction types</h2>

      <h3 id="twisted-rope">Twisted rope</h3>
      <p>Constructed by twisting strands together.</p>
      <p>Characteristics may include:</p>
      <ul>
        <li>Flexibility</li>
        <li>Simplicity</li>
        <li>Rotation tendency under load</li>
      </ul>

      <h3 id="braided-rope">Braided rope</h3>
      <p>Constructed with interwoven fibres.</p>
      <p>Characteristics may include:</p>
      <ul>
        <li>Reduced rotation</li>
        <li>Improved handling</li>
        <li>Better abrasion resistance</li>
      </ul>

      <h3 id="kernmantle-rope">Kernmantle rope</h3>
      <p>Commonly used in rescue and climbing systems.</p>
      <p>Consists of:</p>
      <ul>
        <li>Internal load-bearing core (kern)</li>
        <li>Protective outer sheath (mantle)</li>
      </ul>
      <p>Provides:</p>
      <ul>
        <li>High strength</li>
        <li>Controlled stretch properties</li>
        <li>Improved durability</li>
      </ul>

      <h2 id="rope-stretch-characteristics">Rope stretch characteristics</h2>
      <p>Different ropes stretch differently under load.</p>

      <h3 id="dynamic-rope">Dynamic rope</h3>
      <p>Designed to stretch and absorb energy.</p>
      <p>Often used in:</p>
      <ul>
        <li>Climbing</li>
        <li>Fall arrest systems</li>
        <li>Energy absorption applications</li>
      </ul>

      <h3 id="static-rope">Static rope</h3>
      <p>Designed with minimal stretch.</p>
      <p>Often used for:</p>
      <ul>
        <li>Positioning</li>
        <li>Rigging</li>
        <li>Rescue systems</li>
        <li>Controlled lifting applications</li>
      </ul>

      <h3 id="rope-stretch-hazards">Rope stretch hazards</h3>
      <p>Stretch may create:</p>
      <ul>
        <li>Stored energy</li>
        <li>Snap-back hazards</li>
        <li>Unexpected movement</li>
        <li>Dynamic loading</li>
      </ul>
      <p>High-energy rope systems must be carefully controlled.</p>

      <h2 id="rope-inspection">Rope inspection</h2>
      <p>Ropes should be inspected for:</p>
      <ul>
        <li>Cuts</li>
        <li>Abrasion</li>
        <li>Heat damage</li>
        <li>Chemical exposure</li>
        <li>UV degradation</li>
        <li>Fraying</li>
        <li>Broken fibres</li>
        <li>Contamination</li>
        <li>Stiffness</li>
        <li>Deformation</li>
      </ul>
      <p>Damaged rope should be removed from service when integrity becomes questionable.</p>

      <h2 id="rope-storage">Rope storage</h2>
      <p>Improper storage may damage rope through:</p>
      <ul>
        <li>Moisture exposure</li>
        <li>UV exposure</li>
        <li>Chemical contamination</li>
        <li>Abrasion</li>
        <li>Crushing</li>
        <li>Heat exposure</li>
      </ul>
      <p>Best practices often include:</p>
      <ul>
        <li>Dry storage</li>
        <li>Clean storage areas</li>
        <li>Protection from sunlight</li>
        <li>Proper coiling methods</li>
        <li>Separation from chemicals</li>
      </ul>

      <h2 id="knot-efficiency">Knot efficiency</h2>
      <p>Knots reduce rope strength.</p>
      <p>Depending on knot type, rope material, and rope condition, a knot may reduce rope strength significantly.</p>
      <p>Improper knot selection may create severe hazards during loading operations.</p>

      <h2 id="common-rope-hazards">Common rope hazards</h2>
      <p>Potential rope hazards include:</p>
      <ul>
        <li>Snap-back</li>
        <li>Abrasion</li>
        <li>Cutting</li>
        <li>Shock loading</li>
        <li>Improper knot tying</li>
        <li>Heat damage</li>
        <li>Chemical degradation</li>
        <li>Overloading</li>
      </ul>
      <p>Workers should remain outside potential recoil zones when ropes are tensioned.</p>

      <h2 id="bowline-knot">Bowline knot</h2>
      <p>
        <strong>Purpose:</strong> Creates a fixed loop that does not tighten under load.
      </p>
      <p>
        <strong>Common uses:</strong> Tagline attachment, temporary securing, rigging support, rope anchoring.
      </p>
      <p>
        <strong>Characteristics:</strong> Easy to untie after loading, reliable under controlled loading, widely used in rigging applications.
      </p>

      <h2 id="running-bowline">Running bowline</h2>
      <p>
        <strong>Purpose:</strong> Creates a sliding loop that tightens around the load.
      </p>
      <p>
        <strong>Common uses:</strong> Load control, temporary securing, pole or pipe handling.
      </p>
      <p>
        <strong>Hazards:</strong> May tighten under load; improper tying may allow slippage.
      </p>

      <h2 id="figure-eight-knot">Figure eight knot</h2>
      <p>
        <strong>Purpose:</strong> Creates a strong stopper knot.
      </p>
      <p>
        <strong>Common uses:</strong> Rope termination, climbing systems, rescue applications.
      </p>

      <h2 id="figure-eight-follow-through">Figure eight follow-through</h2>
      <p>
        <strong>Purpose:</strong> Creates a secure loop attachment.
      </p>
      <p>
        <strong>Common uses:</strong> Anchoring systems, rope attachment points, rescue rigging.
      </p>
      <p>
        <strong>Provides:</strong> Strong attachment, good inspection visibility.
      </p>

      <h2 id="clove-hitch">Clove hitch</h2>
      <p>
        <strong>Purpose:</strong> Provides temporary attachment around cylindrical objects.
      </p>
      <p>
        <strong>Common uses:</strong> Temporary securing, tagline attachment, light-duty positioning.
      </p>
      <p>
        <strong>Hazards:</strong> May slip under certain loading conditions if not backed up properly.
      </p>

      <h2 id="timber-hitch">Timber hitch</h2>
      <p>
        <strong>Purpose:</strong> Used for handling logs, poles, or cylindrical objects.
      </p>
      <p>
        <strong>Common uses:</strong> Timber handling, pole movement, temporary securing.
      </p>

      <h2 id="rolling-hitch">Rolling hitch</h2>
      <p>
        <strong>Purpose:</strong> Attaches rope to another rope or cylindrical object while resisting movement.
      </p>
      <p>
        <strong>Common uses:</strong> Tensioning, rope control systems, temporary restraint.
      </p>

      <h2 id="half-hitch">Half hitch</h2>
      <p>
        <strong>Purpose:</strong> A simple securing hitch often used as a supporting or backup hitch.
      </p>
      <p>
        <strong>Common uses:</strong> Load stabilization, rope positioning, supplemental securing.
      </p>
      <p>Often combined with other knots.</p>

      <h2 id="sheet-bend">Sheet bend</h2>
      <p>
        <strong>Purpose:</strong> Joins two ropes together.
      </p>
      <p>
        <strong>Common uses:</strong> Extending rope length, connecting different rope diameters.
      </p>

      <h2 id="tagline-rope-applications">Tagline rope applications</h2>
      <p>Taglines help:</p>
      <ul>
        <li>Reduce load rotation</li>
        <li>Control drift</li>
        <li>Stabilize suspended loads</li>
        <li>Improve worker positioning</li>
      </ul>
      <p>Taglines should:</p>
      <ul>
        <li>Remain free of knots that may snag</li>
        <li>Avoid sharp edges</li>
        <li>Be properly controlled</li>
      </ul>

      <h2 id="rope-tensioning-awareness">Rope tensioning awareness</h2>
      <p>Tensioned rope systems store energy.</p>
      <p>Stored energy may release suddenly if:</p>
      <ul>
        <li>Rope fails</li>
        <li>Knots slip</li>
        <li>Anchors fail</li>
        <li>Loads shift</li>
      </ul>
      <p>Potential hazards include:</p>
      <ul>
        <li>Snap-back</li>
        <li>Flying debris</li>
        <li>Sudden movement</li>
        <li>Worker impact</li>
      </ul>

      <h2 id="snap-back-zones">Snap-back zones</h2>
      <p>Workers should avoid positioning themselves:</p>
      <ul>
        <li>In line with tensioned rope systems</li>
        <li>Near potential recoil paths</li>
        <li>Between loaded rope systems and structures</li>
      </ul>
      <p>Snap-back hazards may cause severe injury or fatal incidents.</p>

      <h2 id="rope-abrasion-protection">Rope abrasion protection</h2>
      <p>Ropes exposed to sharp edges, rough surfaces, structural steel, or concrete corners may require:</p>
      <ul>
        <li>Edge protection</li>
        <li>Protective sleeves</li>
        <li>Softeners</li>
        <li>Controlled routing</li>
      </ul>
      <p>Abrasion may rapidly weaken rope fibres.</p>

      <h2 id="heat-chemical-exposure">Heat &amp; chemical exposure</h2>
      <p>Heat and chemicals may weaken rope materials.</p>
      <p>Potential sources include:</p>
      <ul>
        <li>Welding operations</li>
        <li>Hot surfaces</li>
        <li>Solvents</li>
        <li>Acids</li>
        <li>Petroleum products</li>
        <li>UV exposure</li>
      </ul>
      <p>Some rope damage may not be immediately visible.</p>

      <h2 id="human-factors-rope-operations">Human factors &amp; rope operations</h2>
      <p>Rope-related incidents may result from:</p>
      <ul>
        <li>Improper knots</li>
        <li>Inadequate inspection</li>
        <li>Improvised systems</li>
        <li>Overloading</li>
        <li>Poor communication</li>
        <li>Inexperience</li>
      </ul>
      <p>Workers should understand rope limitations before applying loads.</p>

      <h2 id="situational-awareness-rope-operations">Situational awareness during rope operations</h2>
      <p>Personnel using rope systems should continuously monitor:</p>
      <ul>
        <li>Rope condition</li>
        <li>Knot integrity</li>
        <li>Tension buildup</li>
        <li>Load movement</li>
        <li>Personnel positioning</li>
        <li>Environmental conditions</li>
        <li>Anchor stability</li>
      </ul>
      <p>Conditions may change rapidly during rope-supported operations.</p>
      <p>
        Continuous observation and controlled movement remain essential during all rope applications and knot operations—together with applicable
        regulations, manufacturer rope data, engineered plans, and site-approved procedures.
      </p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m20} className="font-medium text-primary hover:underline">
          ← Module 20 — Final integration &amp; operational readiness
        </a>
        <a href={m22} className="font-medium text-primary hover:underline">
          Module 22 — Block &amp; tackle, reeving &amp; mechanical advantage →
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
