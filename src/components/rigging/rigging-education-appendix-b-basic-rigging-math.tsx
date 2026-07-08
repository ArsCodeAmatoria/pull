import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";
import {RiggingDiagram} from "@/components/rigging-diagrams";
import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";

import type { Locale } from "@/i18n/config";


const tableWrap = "not-prose my-6 overflow-x-auto rounded-lg bg-card text-sm";

const rk = String.raw;

/** Appendix B — Basic rigging math reference & formulas (educational reference). */
export function RiggingEducationAppendixBBasicRiggingMath({locale}: {readonly locale: Locale}) {
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
  const appendixC = `/lessons/appendix-c`;
  const appendixD = `/lessons/appendix-d`;
  const appendixE = `/lessons/appendix-e`;
  return (
    <div className={riggingEducationArticleClass}>
      <h2 id="regulatory-standards-references-appendix-b">Regulatory &amp; standards references</h2>
      <p>This appendix references concepts commonly associated with:</p>
      <ul>
        <li>WorkSafeBC OHSR Part 14 — Material Handling</li>
        <li>WorkSafeBC OHSR Part 15 — Rigging</li>
        <li>ASME B30 crane-related standards</li>
        <li>ASME B30.5 — Mobile &amp; Locomotive Cranes</li>
        <li>ASME B30.9 — Slings</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer load charts and engineering data</li>
        <li>Engineered lift planning procedures</li>
      </ul>
      <p>
        Rigging calculations must always follow applicable regulations, manufacturer specifications, engineered lift plans, and approved site procedures.
      </p>

      <h2 id="introduction-appendix-b">Introduction</h2>
      <p>Rigging operations involve:</p>
      <ul>
        <li>Force transfer</li>
        <li>Geometry</li>
        <li>Load distribution</li>
        <li>Dynamic movement</li>
        <li>Structural loading</li>
      </ul>
      <p>Basic rigging math helps workers understand:</p>
      <ul>
        <li>Sling tension</li>
        <li>Load balance</li>
        <li>Crane loading</li>
        <li>Force behavior</li>
        <li>Radius effects</li>
        <li>Center of gravity concepts</li>
      </ul>
      <p>These formulas are educational reference tools and should not replace:</p>
      <ul>
        <li>Engineered calculations</li>
        <li>Crane load charts</li>
        <li>Manufacturer specifications</li>
        <li>Professional engineering review</li>
      </ul>
      <p>Complex or critical lifts may require advanced engineering analysis.</p>
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

      <h2 id="sling-angle-and-tension">Sling angle &amp; tension</h2>
      <p>As sling angle decreases, sling tension increases.</p>
      <h3 id="sling-tension-formula">Sling tension formula (symmetric two-leg model)</h3>
      <KaTeXBlock tex={rk`T=\frac{W}{2\sin\theta}`} />
      <RiggingDiagram id="force-triangle" caption="Force triangle at one sling leg — W vertical, T along the sling" />
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`T`} /> = Sling tension (per leg in the symmetric model)
        </li>
        <li>
          <KaTeXInline tex={rk`W`} /> = Load weight
        </li>
        <li>
          <KaTeXInline tex={rk`\theta`} /> = Sling angle measured from horizontal (match your procedure, chart, and calculator convention)
        </li>
      </ul>

      <h3 id="sling-angle-awareness">Sling angle awareness</h3>
      <p>Lower sling angles greatly increase:</p>
      <ul>
        <li>Sling tension</li>
        <li>Horizontal compression forces</li>
        <li>Hardware loading</li>
      </ul>
      <p>Very low sling angles may create extremely high forces within the rigging system.</p>

      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        <RiggingDiagram id="sling-bridle-60" caption="60° from horizontal — multiplier × 1.155" />
        <RiggingDiagram id="sling-bridle-45" caption="45° from horizontal — multiplier × 1.414" />
      </div>

      <h3 id="common-sling-angle-multipliers">Common sling angle multipliers</h3>
      <p>Illustrative multipliers for a symmetric two-leg vertical hitch model (tension per leg divided by share of vertical load)—verify against your training material and engineering direction.</p>
      <div className={tableWrap}>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b bg-muted/40">
              <th className="px-4 py-2 font-semibold text-foreground">Sling angle (from horizontal)</th>
              <th className="px-4 py-2 font-semibold text-foreground">Tension multiplier</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">90°</td>
              <td className="px-4 py-2">1.000</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">75°</td>
              <td className="px-4 py-2">1.035</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">60°</td>
              <td className="px-4 py-2">1.155</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">45°</td>
              <td className="px-4 py-2">1.414</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">30°</td>
              <td className="px-4 py-2">2.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <RiggingDiagram id="tension-multiplier-chart" caption="Compare multipliers — lower angle means higher tension per leg" />

      <h2 id="load-moment-formula">Load moment</h2>
      <p>Crane loading depends heavily on:</p>
      <ul>
        <li>Load weight</li>
        <li>Radius distance</li>
      </ul>
      <h3 id="load-moment-equation">Load moment formula</h3>
      <KaTeXBlock tex={rk`M = F \cdot d`} />
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`M`} /> = Load moment
        </li>
        <li>
          <KaTeXInline tex={rk`F`} /> = Load force
        </li>
        <li>
          <KaTeXInline tex={rk`d`} /> = Radius distance (horizontal moment arm in the basic teaching model)
        </li>
      </ul>

      <h3 id="radius-awareness">Radius awareness</h3>
      <p>As radius increases:</p>
      <ul>
        <li>Crane capacity decreases</li>
        <li>Structural loading increases</li>
        <li>Boom deflection increases</li>
      </ul>
      <p>Moving a load farther away from the crane may greatly increase crane loading.</p>

      <h2 id="horizontal-vertical-force-components">Horizontal &amp; vertical force components</h2>
      <p>Forces may be separated into horizontal and vertical components.</p>
      <h3 id="horizontal-force-formula">Horizontal force formula</h3>
      <KaTeXBlock tex={rk`F_x = F\cos\theta`} />
      <h3 id="vertical-force-formula">Vertical force formula</h3>
      <KaTeXBlock tex={rk`F_y = F\sin\theta`} />
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`F_x`} /> = Horizontal force
        </li>
        <li>
          <KaTeXInline tex={rk`F_y`} /> = Vertical force
        </li>
        <li>
          <KaTeXInline tex={rk`F`} /> = Total force
        </li>
        <li>
          <KaTeXInline tex={rk`\theta`} /> = Force angle (consistent with the model you are using)
        </li>
      </ul>

      <h2 id="center-of-gravity-formula-appendix-b">Center of gravity formula</h2>
      <p>The center of gravity is the balance point of the load.</p>
      <KaTeXBlock tex={rk`x_{\mathrm{cg}}=\frac{\sum_i m_i x_i}{\sum_i m_i}`} />
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`x_{\mathrm{cg}}`} /> = Center of gravity location along the reference axis
        </li>
        <li>
          <KaTeXInline tex={rk`m_i`} /> = Individual mass
        </li>
        <li>
          <KaTeXInline tex={rk`x_i`} /> = Distance from reference point
        </li>
      </ul>

      <h2 id="force-equilibrium-concept">Force equilibrium concept</h2>
      <p>A load is in equilibrium when:</p>
      <ul>
        <li>Forces are balanced</li>
        <li>Rotation is minimized</li>
        <li>Load movement is controlled</li>
      </ul>
      <p>Suspended loads naturally seek equilibrium beneath the hook.</p>

      <h2 id="basic-pressure-formula">Basic pressure formula</h2>
      <p>Ground pressure and structural loading concepts often involve force distributed over area.</p>
      <KaTeXBlock tex={rk`P=\frac{F}{A}`} />
      <p>Where:</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`P`} /> = Pressure
        </li>
        <li>
          <KaTeXInline tex={rk`F`} /> = Force
        </li>
        <li>
          <KaTeXInline tex={rk`A`} /> = Area
        </li>
      </ul>

      <h3 id="ground-bearing-awareness">Ground bearing awareness</h3>
      <p>Ground bearing pressure affects:</p>
      <ul>
        <li>Crane stability</li>
        <li>Outrigger performance</li>
        <li>Surface integrity</li>
      </ul>
      <p>Soft ground or small support areas may greatly increase pressure.</p>

      <h2 id="mechanical-advantage-concept">Mechanical advantage concept</h2>
      <p>Mechanical advantage reduces manual force requirements through:</p>
      <ul>
        <li>Gearing</li>
        <li>Pulley systems</li>
        <li>Hoisting systems</li>
      </ul>
      <p>However:</p>
      <ul>
        <li>Mechanical advantage does not reduce actual load force</li>
        <li>Structural loading still exists within the lifting system</li>
      </ul>

      <h2 id="dynamic-loading-awareness">Dynamic loading awareness</h2>
      <p>Dynamic movement may greatly increase force within rigging systems.</p>
      <p>Dynamic loading may result from:</p>
      <ul>
        <li>Swinging</li>
        <li>Wind</li>
        <li>Sudden starts</li>
        <li>Sudden stops</li>
        <li>Shock loading</li>
        <li>Snagged loads</li>
      </ul>
      <p>Dynamic forces may greatly exceed static load weight.</p>

      <h2 id="shock-loading-awareness">Shock loading awareness</h2>
      <p>Shock loading occurs when force is applied suddenly rather than gradually.</p>
      <p>Shock loading may:</p>
      <ul>
        <li>Multiply sling tension</li>
        <li>Damage hardware</li>
        <li>Distort crane structures</li>
        <li>Cause catastrophic failure</li>
      </ul>
      <p>Controlled movement helps reduce shock loading.</p>

      <h2 id="approximate-material-density">Approximate material density reference</h2>
      <p>Approximate material densities may assist with preliminary load estimation.</p>
      <div className={tableWrap}>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b bg-muted/40">
              <th className="px-4 py-2 font-semibold text-foreground">Material</th>
              <th className="px-4 py-2 font-semibold text-foreground">Approximate weight</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Steel</td>
              <td className="px-4 py-2">490 lb/ft³</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Concrete</td>
              <td className="px-4 py-2">150 lb/ft³</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Aluminum</td>
              <td className="px-4 py-2">170 lb/ft³</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Water</td>
              <td className="px-4 py-2">62.4 lb/ft³</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Wood (varies)</td>
              <td className="px-4 py-2">35–60 lb/ft³</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Actual weights may vary significantly depending on:</p>
      <ul>
        <li>Moisture</li>
        <li>Reinforcement</li>
        <li>Coatings</li>
        <li>Internal components</li>
        <li>Manufacturing methods</li>
      </ul>
      <p>Manufacturer data and engineered information should always be prioritized.</p>

      <h2 id="unit-conversion-awareness">Unit conversion awareness</h2>
      <p>Rigging calculations may involve:</p>
      <ul>
        <li>Imperial units</li>
        <li>Metric units</li>
        <li>Force units</li>
        <li>Length units</li>
      </ul>
      <p>Incorrect unit conversion may create severe lifting hazards.</p>

      <h3 id="common-weight-conversion-reference">Common weight conversion reference</h3>
      <div className={tableWrap}>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b bg-muted/40">
              <th className="px-4 py-2 font-semibold text-foreground">Unit</th>
              <th className="px-4 py-2 font-semibold text-foreground">Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">1 ton (US)</td>
              <td className="px-4 py-2">2,000 lb</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">1 metric tonne</td>
              <td className="px-4 py-2">2,204.6 lb</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">1 kg</td>
              <td className="px-4 py-2">2.205 lb</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">1 kN</td>
              <td className="px-4 py-2">224.8 lb-force (approx.)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="wire-rope-lay-length-awareness">Wire rope lay length awareness</h2>
      <p>Lay length is the distance required for one strand to make a complete revolution around the rope.</p>
      <p>Lay length is used when evaluating:</p>
      <ul>
        <li>Broken wire removal criteria</li>
        <li>Inspection requirements</li>
      </ul>

      <h3 id="basic-running-rope-removal-criteria">Basic running rope removal criteria (reference)</h3>
      <p>Common reference criteria used in wire rope programs (confirm against ASME, manufacturer, and your employer procedure):</p>
      <ul>
        <li>Running rope should be removed from service when 6 randomly distributed broken wires occur in one rope lay, or</li>
        <li>3 broken wires occur in one strand in one rope lay</li>
      </ul>

      <h3 id="rotation-resistant-rope-removal-criteria">Rotation-resistant rope removal criteria (reference)</h3>
      <ul>
        <li>Rotation-resistant rope should be removed from service when 2 broken wires occur within 6 rope diameters, or</li>
        <li>4 broken wires occur within 30 rope diameters</li>
      </ul>

      <h2 id="formula-limitations-appendix-b">Formula limitations</h2>
      <p>These formulas represent simplified educational concepts.</p>
      <p>Actual lifting operations may involve additional variables including:</p>
      <ul>
        <li>Dynamic loading</li>
        <li>Unequal load sharing</li>
        <li>Structural flexing</li>
        <li>Environmental effects</li>
        <li>Crane deflection</li>
        <li>Complex rigging geometry</li>
      </ul>
      <p>Complex lifts may require:</p>
      <ul>
        <li>Engineering review</li>
        <li>Advanced calculations</li>
        <li>Specialized software analysis</li>
        <li>Manufacturer consultation</li>
      </ul>

      <h2 id="applied-operational-awareness-appendix-b">Applied operational awareness</h2>
      <p>Rigging math supports operational decision-making, but calculations alone do not guarantee safe lifting operations.</p>
      <p>Safe lifting also depends on:</p>
      <ul>
        <li>Communication</li>
        <li>Situational awareness</li>
        <li>Controlled movement</li>
        <li>Hazard recognition</li>
        <li>Environmental evaluation</li>
        <li>Proper inspection</li>
        <li>Operational discipline</li>
      </ul>
      <p>Mathematical awareness must always be combined with practical field observation and safe lifting practices.</p>

      <div className={riggingEducationFooterRowClass}>
        <a href={appendixA} className="font-medium text-primary hover:underline">
          ← Appendix A — Standard hand signals
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
        <a href={m21} className="font-medium text-primary hover:underline">
          Module 21 — Knots, hitches &amp; rope applications →
        </a>
        <a href={m22} className="font-medium text-primary hover:underline">
          Module 22 — Block &amp; tackle, reeving &amp; MA →
        </a>
        <a href={m23} className="font-medium text-primary hover:underline">
          Module 23 — Heavy lift engineering &amp; MA →
        </a>
        <a href={m24} className="font-medium text-primary hover:underline">
          Module 24 — Tower crane rigging →
        </a>
        <a href={m25} className="font-medium text-primary hover:underline">
          Module 25 — Incident case studies →
        </a>
        <a href={m20} className="font-medium text-primary hover:underline">
          ← Module 20 — Final integration &amp; operational readiness
        </a>
      </div>
    </div>
  );
}
