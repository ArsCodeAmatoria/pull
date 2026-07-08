import {riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";

import type { Locale } from "@/i18n/config";

/** Locale-prefixed internal links shared by Module 2 article + slide footer */
export function buildModule2EducationLinks(locale: Locale) {
  const base = `/lessons`;
  return {
    edu: base,
    m1: `${base}/module-1`,
    m3: `${base}/module-3`,
    m4: `${base}/module-4`,
    m5: `${base}/module-5`,
    m6: `${base}/module-6`,
    m7: `${base}/module-7`,
    m8: `${base}/module-8`,
    m9: `${base}/module-9`,
    m10: `${base}/module-10`,
    m11: `${base}/module-11`,
    m12: `${base}/module-12`,
    m13: `${base}/module-13`,
    m14: `${base}/module-14`,
    m15: `${base}/module-15`,
    m16: `${base}/module-16`,
    m17: `${base}/module-17`,
    m18: `${base}/module-18`,
    m19: `${base}/module-19`,
    m20: `${base}/module-20`,
    m21: `${base}/module-21`,
    m22: `${base}/module-22`,
    m23: `${base}/module-23`,
    m24: `${base}/module-24`,
    m25: `${base}/module-25`,
    appendixA: `${base}/appendix-a`,
    appendixB: `${base}/appendix-b`,
    appendixC: `${base}/appendix-c`,
    appendixD: `${base}/appendix-d`,
    appendixE: `${base}/appendix-e`
  };
}

export function Module2EducationIntroNarrative() {
  return (
    <>
      <p>
        Rigging operations rely on a wide range of lifting hardware, sling systems, connection devices, and below-the-hook equipment designed
        to safely support, secure, and control loads during lifting activities.
      </p>
      <p>
        Understanding rigging equipment is essential because every component within a lifting system contributes to overall load stability and
        operational safety. Improper selection, misuse, incompatible components, or damaged equipment can result in equipment failure, load
        instability, or catastrophic lifting incidents.
      </p>
      <p>
        This section explores common rigging hardware, sling systems, lifting attachments, and below-the-hook devices used throughout construction,
        industrial, marine, and heavy lifting environments.
      </p>
    </>
  );
}

export function Module2EducationIntroNav({locale}: {readonly locale: Locale}) {
  const L = buildModule2EducationLinks(locale);
  return (
    <p className={riggingEducationNavStripClass}>
      <a href={L.edu} className="font-medium text-primary hover:underline">
        ← Rigging education overview
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m1} className="font-medium text-primary hover:underline">
        Module 1 — Regulations &amp; standards
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m3} className="font-medium text-primary hover:underline">
        Module 3 — Inspection
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m4} className="font-medium text-primary hover:underline">
        Module 4
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m5} className="font-medium text-primary hover:underline">
        M5
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m6} className="font-medium text-primary hover:underline">
        M6
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m7} className="font-medium text-primary hover:underline">
        M7
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m8} className="font-medium text-primary hover:underline">
        M8
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m9} className="font-medium text-primary hover:underline">
        M9
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m10} className="font-medium text-primary hover:underline">
        M10
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m11} className="font-medium text-primary hover:underline">
        M11
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m12} className="font-medium text-primary hover:underline">
        M12
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m13} className="font-medium text-primary hover:underline">
        M13
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m14} className="font-medium text-primary hover:underline">
        M14
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m15} className="font-medium text-primary hover:underline">
        M15
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m16} className="font-medium text-primary hover:underline">
        M16
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m17} className="font-medium text-primary hover:underline">
        M17
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m18} className="font-medium text-primary hover:underline">
        M18
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m19} className="font-medium text-primary hover:underline">
        M19
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m20} className="font-medium text-primary hover:underline">
        M20
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m21} className="font-medium text-primary hover:underline">
        M21 — Rope
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m22} className="font-medium text-primary hover:underline">
        M22 — Block
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m23} className="font-medium text-primary hover:underline">
        M23 — Heavy
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m24} className="font-medium text-primary hover:underline">
        M24 — Tower
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.m25} className="font-medium text-primary hover:underline">
        M25 — Incidents
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.appendixA} className="font-medium text-primary hover:underline">
        App A — Signals
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.appendixB} className="font-medium text-primary hover:underline">
        App B — Math
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.appendixC} className="font-medium text-primary hover:underline">
        App C — Hardware
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.appendixD} className="font-medium text-primary hover:underline">
        App D — Cranes
      </a>
      <span className="mx-2 text-border">·</span>
      <a href={L.appendixE} className="font-medium text-primary hover:underline">
        App E — BC
      </a>
    </p>
  );
}

/** Single source used by article view and duplicated ids for slide deep-linking where needed */
export function RiggingEducationModule2EquipmentProse({locale}: {readonly locale: Locale}) {
  return (
    <>
      <section id="introduction" className="not-prose space-y-5 text-base leading-relaxed text-foreground">
        <Module2EducationIntroNarrative />
        <Module2EducationIntroNav locale={locale} />
      </section>

      <h2 id="system-fundamentals">Rigging system fundamentals</h2>
      <>
        <p>A rigging system typically consists of:</p>
        <ul>
          <li>Connection hardware</li>
          <li>Sling systems</li>
          <li>Load attachment points</li>
          <li>Below-the-hook devices</li>
          <li>Crane hook interfaces</li>
          <li>Load control components</li>
        </ul>
      </>
      <>
        <p>Each component within the lifting system must be:</p>
        <ul>
          <li>Compatible</li>
          <li>Properly rated</li>
          <li>Correctly configured</li>
          <li>Inspected before use</li>
          <li>Appropriate for the intended lift</li>
        </ul>
        <p>Rigging systems are only as strong as their weakest component.</p>
      </>

      <h2 id="wll">Working load limit (WLL)</h2>
      <>
        <p>Most rigging equipment is assigned a:</p>
        <ul>
          <li>Working Load Limit (WLL)</li>
          <li>Rated Capacity</li>
          <li>Safe Working Load (SWL)</li>
        </ul>
        <p>These ratings indicate the maximum load the equipment is designed to support under specific conditions.</p>
      </>
      <>
        <p>Capacity ratings may change depending on:</p>
        <ul>
          <li>Sling angle</li>
          <li>Hitch configuration</li>
          <li>Loading direction</li>
          <li>Environmental conditions</li>
          <li>Shock loading</li>
          <li>Dynamic movement</li>
        </ul>
        <p>Equipment must never be loaded beyond manufacturer limitations.</p>
      </>

      <h2 id="identification">Identification &amp; markings</h2>
      <>
        <p>Rigging equipment commonly includes identification markings such as:</p>
        <ul>
          <li>Manufacturer name</li>
          <li>Size</li>
          <li>Grade</li>
          <li>Capacity</li>
          <li>Serial number</li>
          <li>Inspection tags</li>
          <li>Certification markings</li>
        </ul>
        <p>Missing or illegible identification may render equipment unsuitable for use depending on site requirements and applicable standards.</p>
      </>

      <h2 id="shackles">Shackles</h2>
      <>
        <p>Shackles are among the most common rigging connection devices and are used to connect slings, hardware, and lifting components.</p>
      </>
      <>
        <h3>Common shackle types</h3>
        <h4>Anchor shackles</h4>
        <p>Designed for multi-directional loading and commonly used in lifting applications.</p>
        <h4>Chain shackles</h4>
        <p>Typically designed for in-line loading applications.</p>
      </>
      <>
        <h3>Shackle pin types</h3>
        <h4>Screw pin shackles</h4>
        <p>Used for temporary or frequently adjusted connections.</p>
        <h4>Bolt-type shackles</h4>
        <p>Used where long-term or vibration-prone connections exist.</p>
      </>
      <>
        <h3>Shackle considerations</h3>
        <ul>
          <li>Side loading can reduce capacity</li>
          <li>Pin engagement must be correct</li>
          <li>Threads must be undamaged</li>
          <li>Bow orientation matters</li>
          <li>Improper pin substitution is hazardous</li>
        </ul>
      </>

      <h2 id="eyebolts">Eyebolts</h2>
      <>
        <p>Eyebolts provide lifting attachment points for loads and structures.</p>
      </>
      <>
        <h3>Types of eyebolts</h3>
        <h4>Shoulder eyebolts</h4>
        <p>Designed to handle limited angular loading.</p>
        <h4>Non-shoulder eyebolts</h4>
        <p>Designed primarily for vertical loading only.</p>
      </>
      <>
        <h3>Eyebolt hazards</h3>
        <ul>
          <li>Angular loading may reduce capacity</li>
          <li>Improper seating can cause bending</li>
          <li>Thread engagement is critical</li>
          <li>Side loading can cause failure</li>
        </ul>
      </>

      <h2 id="hoist-rings">Hoist rings</h2>
      <>
        <p>Hoist rings are engineered lifting attachment points designed to rotate and align with load direction.</p>
      </>
      <>
        <p>
          <strong>Advantages include:</strong>
        </p>
        <ul>
          <li>Reduced side loading</li>
          <li>Multi-directional movement</li>
          <li>Improved alignment</li>
          <li>Increased flexibility during lifting</li>
        </ul>
      </>
      <>
        <p>Hoist rings are commonly used in:</p>
        <ul>
          <li>Heavy fabrication</li>
          <li>Machinery movement</li>
          <li>Engineered lifting systems</li>
        </ul>
      </>

      <h2 id="hooks">Hooks</h2>
      <>
        <p>Hooks connect crane blocks and lifting systems to rigging assemblies.</p>
      </>
      <>
        <h3>Hook components</h3>
        <ul>
          <li>Hook body</li>
          <li>Safety latch</li>
          <li>Saddle area</li>
          <li>Throat opening</li>
        </ul>
      </>
      <>
        <h3>Hook hazards</h3>
        <ul>
          <li>Excessive throat opening</li>
          <li>Twisting</li>
          <li>Cracking</li>
          <li>Heat damage</li>
          <li>Missing safety latches</li>
          <li>Point loading</li>
        </ul>
        <p>Hooks are designed to support loads within the saddle, not on the tip.</p>
      </>

      <h2 id="master-links">Master links</h2>
      <>
        <p>Master links act as primary connection points between slings and crane hooks.</p>
        <p>They are commonly used in:</p>
        <ul>
          <li>Multi-leg sling assemblies</li>
          <li>Engineered rigging systems</li>
          <li>Chain sling configurations</li>
        </ul>
        <p>Improper loading angles may introduce unintended forces into master links and connecting hardware.</p>
      </>

      <h2 id="turnbuckles">Turnbuckles</h2>
      <>
        <p>Turnbuckles are adjustable tensioning devices used to:</p>
        <ul>
          <li>Adjust rigging length</li>
          <li>Apply tension</li>
          <li>Align loads</li>
          <li>Stabilize systems</li>
        </ul>
      </>
      <>
        <p>They are commonly found in:</p>
        <ul>
          <li>Structural support systems</li>
          <li>Guying systems</li>
          <li>Temporary stabilization assemblies</li>
        </ul>
      </>

      <h2 id="sling-systems">Sling systems</h2>
      <>
        <p>Slings form the primary load-supporting component within many lifting systems.</p>
        <p>Different sling types are selected based on:</p>
        <ul>
          <li>Load characteristics</li>
          <li>Weight</li>
          <li>Surface conditions</li>
          <li>Environmental exposure</li>
          <li>Flexibility requirements</li>
          <li>Abrasion risk</li>
          <li>Temperature exposure</li>
        </ul>
      </>

      <h2 id="wire-rope-slings">Wire rope slings</h2>
      <>
        <p>Wire rope slings are commonly used for:</p>
        <ul>
          <li>Heavy lifting</li>
          <li>Abrasion resistance</li>
          <li>Structural steel handling</li>
          <li>Harsh environments</li>
        </ul>
      </>
      <>
        <h3>Advantages</h3>
        <ul>
          <li>Durable</li>
          <li>High strength</li>
          <li>Heat resistance</li>
          <li>Abrasion resistance</li>
        </ul>
      </>
      <>
        <h3>Limitations</h3>
        <ul>
          <li>Reduced flexibility</li>
          <li>Potential for broken wires</li>
          <li>Susceptible to kinking</li>
          <li>Crushing damage possible</li>
        </ul>
      </>

      <h2 id="chain-slings">Chain slings</h2>
      <>
        <p>Chain slings are widely used in industrial and heavy construction applications.</p>
      </>
      <>
        <h3>Advantages</h3>
        <ul>
          <li>Durable</li>
          <li>Adjustable</li>
          <li>Heat resistant</li>
          <li>Suitable for rugged environments</li>
        </ul>
      </>
      <>
        <h3>Chain grades</h3>
        <p>Common lifting chain grades may include:</p>
        <ul>
          <li>Grade 80</li>
          <li>Grade 100</li>
          <li>Grade 120</li>
        </ul>
      </>
      <>
        <h3>Chain sling hazards</h3>
        <ul>
          <li>Stretching</li>
          <li>Cracking</li>
          <li>Bent links</li>
          <li>Side loading</li>
          <li>Shock loading</li>
        </ul>
      </>

      <h2 id="synthetic-web-slings">Synthetic web slings</h2>
      <>
        <p>Synthetic web slings are lightweight and flexible slings commonly used for:</p>
        <ul>
          <li>Fragile loads</li>
          <li>Finished materials</li>
          <li>Sensitive surfaces</li>
        </ul>
      </>
      <>
        <h3>Advantages</h3>
        <ul>
          <li>Lightweight</li>
          <li>Flexible</li>
          <li>Easy to handle</li>
          <li>Reduced surface damage</li>
        </ul>
      </>
      <>
        <h3>Limitations</h3>
        <ul>
          <li>Susceptible to cuts</li>
          <li>UV degradation</li>
          <li>Chemical damage</li>
          <li>Heat sensitivity</li>
        </ul>
      </>

      <h2 id="round-slings">Round slings</h2>
      <>
        <p>Round slings contain internal load-bearing fibers protected by an outer sleeve.</p>
      </>
      <>
        <h3>Advantages</h3>
        <ul>
          <li>Flexible</li>
          <li>Lightweight</li>
          <li>Good load distribution</li>
          <li>Reduced load damage</li>
        </ul>
      </>
      <>
        <h3>Hazards</h3>
        <ul>
          <li>Hidden internal damage</li>
          <li>Abrasion</li>
          <li>Chemical exposure</li>
          <li>Heat damage</li>
        </ul>
      </>

      <h2 id="synthetic-rope-hmpe">High-performance synthetic rope</h2>
      <>
        <p>Modern lifting operations may use high-performance synthetic fibers such as:</p>
        <ul>
          <li>Dyneema</li>
          <li>HMPE systems</li>
          <li>Specialized synthetic lifting rope</li>
        </ul>
      </>
      <>
        <p>These materials offer:</p>
        <ul>
          <li>High strength-to-weight ratios</li>
          <li>Reduced handling weight</li>
          <li>Flexibility</li>
          <li>Corrosion resistance</li>
        </ul>
      </>
      <>
        <p>However, they may also introduce:</p>
        <ul>
          <li>Heat sensitivity</li>
          <li>Abrasion concerns</li>
          <li>Specialized inspection requirements</li>
        </ul>
      </>

      <h2 id="below-the-hook">Below-the-hook devices</h2>
      <>
        <p>
          Below-the-hook devices are lifting attachments positioned between the crane hook and the load. These devices are often engineered for
          specific lifting applications.
        </p>
      </>

      <h2 id="spreader-bars">Spreader bars</h2>
      <>
        <p>Spreader bars distribute forces across multiple lifting points while reducing sling angle forces.</p>
        <p>They are commonly used for:</p>
        <ul>
          <li>Long loads</li>
          <li>Fragile loads</li>
          <li>Wide lifting points</li>
          <li>Structural steel assemblies</li>
        </ul>
      </>

      <h2 id="lifting-beams">Lifting beams</h2>
      <>
        <p>
          Lifting beams support loads directly beneath the beam structure and are commonly used where headroom is limited, precise load support is
          required, or sling angle reduction is necessary.
        </p>
      </>

      <h2 id="plate-clamps">Plate clamps</h2>
      <>
        <p>Plate clamps are specialized devices used to lift steel plate and structural components.</p>
      </>
      <>
        <h3>Hazards</h3>
        <ul>
          <li>Improper engagement</li>
          <li>Surface contamination</li>
          <li>Side loading</li>
          <li>Inadequate clamping force</li>
        </ul>
        <p>Plate clamps must be used according to manufacturer specifications.</p>
      </>

      <h2 id="magnets">Magnets</h2>
      <>
        <p>Lifting magnets are used for:</p>
        <ul>
          <li>Steel plate handling</li>
          <li>Fabrication shops</li>
          <li>Material movement</li>
        </ul>
      </>
      <>
        <h3>Magnet considerations</h3>
        <ul>
          <li>Surface condition affects holding strength</li>
          <li>Air gaps reduce capacity</li>
          <li>Electrical failure may create hazards</li>
          <li>Sudden release is possible</li>
        </ul>
      </>

      <h2 id="concrete-buckets">Concrete buckets</h2>
      <>
        <p>Concrete buckets are frequently used in tower crane operations to move concrete throughout construction sites.</p>
      </>
      <>
        <h3>Hazards</h3>
        <ul>
          <li>Dynamic loading</li>
          <li>Gate failure</li>
          <li>Load shift</li>
          <li>Swing hazards</li>
          <li>Overloading</li>
        </ul>
      </>

      <h2 id="clamshell-buckets">Clamshell buckets</h2>
      <>
        <p>Clamshell buckets are commonly used for:</p>
        <ul>
          <li>Excavation</li>
          <li>Bulk material handling</li>
          <li>Marine operations</li>
        </ul>
      </>
      <>
        <p>These systems introduce additional considerations related to:</p>
        <ul>
          <li>Dynamic movement</li>
          <li>Swing control</li>
          <li>Ground personnel exposure</li>
        </ul>
      </>

      <h2 id="compatibility">Equipment compatibility</h2>
      <>
        <p>Rigging systems must be compatible as complete assemblies.</p>
      </>
      <>
        <p>Compatibility considerations include:</p>
        <ul>
          <li>Capacity ratings</li>
          <li>Connection geometry</li>
          <li>Pin sizing</li>
          <li>Material compatibility</li>
          <li>Angular loading limitations</li>
          <li>Environmental exposure</li>
        </ul>
        <p>Mixing incompatible components may create unintended stresses or failure points.</p>
      </>

      <h2 id="manufacturer-specs">Manufacturer specifications</h2>
      <>
        <p>Rigging equipment must always be used according to manufacturer instructions and engineering limitations.</p>
      </>
      <>
        <p>Manufacturer documentation may include:</p>
        <ul>
          <li>Capacity charts</li>
          <li>Angle limitations</li>
          <li>Inspection criteria</li>
          <li>Environmental limitations</li>
          <li>Assembly procedures</li>
          <li>Maintenance requirements</li>
        </ul>
        <p>Ignoring manufacturer specifications may create unsafe lifting conditions and invalidate equipment ratings.</p>
      </>

    </>
  );
}

/** Footer row links (wrap with `riggingEducationFooterRowClass` in article page). */
export function Module2EquipmentFooterLinks({links: L}: {readonly links: ReturnType<typeof buildModule2EducationLinks>}) {
  return (
    <>
      <a href={L.m1} className="font-medium text-primary hover:underline">
        ← Module 1
      </a>
      <a href={L.m3} className="font-medium text-primary hover:underline">
        Module 3 — Inspection →
      </a>
      <a href={L.m4} className="font-medium text-primary hover:underline">
        Module 4 — Crane awareness →
      </a>
      <a href={L.m5} className="font-medium text-primary hover:underline">
        Module 5 — Basic rigging →
      </a>
      <a href={L.m6} className="font-medium text-primary hover:underline">
        Module 6 — Math →
      </a>
      <a href={L.m7} className="font-medium text-primary hover:underline">
        M7 — Communication →
      </a>
      <a href={L.m8} className="font-medium text-primary hover:underline">
        M8 — Advanced geometry →
      </a>
      <a href={L.m9} className="font-medium text-primary hover:underline">
        M9 — Load control →
      </a>
      <a href={L.m10} className="font-medium text-primary hover:underline">
        M10 — Chainfalls →
      </a>
      <a href={L.m11} className="font-medium text-primary hover:underline">
        M11 — Tandem lifts →
      </a>
      <a href={L.m12} className="font-medium text-primary hover:underline">
        M12 — BTH →
      </a>
      <a href={L.m13} className="font-medium text-primary hover:underline">
        M13 — Crane physics →
      </a>
      <a href={L.m14} className="font-medium text-primary hover:underline">
        M14 — Environment &amp; site →
      </a>
      <a href={L.m15} className="font-medium text-primary hover:underline">
        M15 — Lift planning →
      </a>
      <a href={L.m16} className="font-medium text-primary hover:underline">
        M16 — Field rigging →
      </a>
      <a href={L.m17} className="font-medium text-primary hover:underline">
        M17 — Safety culture →
      </a>
      <a href={L.m18} className="font-medium text-primary hover:underline">
        M18 — Reference tables →
      </a>
      <a href={L.m19} className="font-medium text-primary hover:underline">
        M19 — Glossary →
      </a>
      <a href={L.m20} className="font-medium text-primary hover:underline">
        M20 — Integration →
      </a>
      <a href={L.m21} className="font-medium text-primary hover:underline">
        M21 — Knots &amp; rope →
      </a>
      <a href={L.m22} className="font-medium text-primary hover:underline">
        M22 — Block &amp; tackle →
      </a>
      <a href={L.m23} className="font-medium text-primary hover:underline">
        M23 — Heavy lift →
      </a>
      <a href={L.m24} className="font-medium text-primary hover:underline">
        M24 — Tower crane →
      </a>
      <a href={L.m25} className="font-medium text-primary hover:underline">
        M25 — Incidents →
      </a>
      <a href={L.appendixA} className="font-medium text-primary hover:underline">
        Appendix A — Standard hand signals →
      </a>
      <a href={L.appendixB} className="font-medium text-primary hover:underline">
        Appendix B — Basic rigging math &amp; formulas →
      </a>
      <a href={L.appendixC} className="font-medium text-primary hover:underline">
        Appendix C — Rigging equipment identification &amp; hardware reference →
      </a>
      <a href={L.appendixD} className="font-medium text-primary hover:underline">
        Appendix D — Crane types &amp; operational characteristics →
      </a>
      <a href={L.appendixE} className="font-medium text-primary hover:underline">
        Appendix E — BC regulations &amp; compliance quick reference →
      </a>
    </>
  );
}
