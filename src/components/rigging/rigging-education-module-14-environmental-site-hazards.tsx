import {riggingEducationArticleClass, riggingEducationFooterRowClass, riggingEducationNavStripClass} from "@/components/rigging/rigging-education-prose";
import type { Locale } from "@/i18n/config";


/** Module 14 — Environmental & site hazards (wind, weather, ground, visibility, traffic, powerlines). */
export function RiggingEducationModule14EnvironmentalSiteHazards({locale}: {readonly locale: Locale}) {
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
        <li>WorkSafeBC regulations related to cranes, weather conditions, and site safety</li>
        <li>ASME B30 crane-related standards</li>
        <li>ASME B30.5 — Mobile &amp; Locomotive Cranes</li>
        <li>ASME B30.3 — Tower Cranes</li>
        <li>Applicable CSA standards</li>
        <li>BC Crane Safety guidance</li>
        <li>Manufacturer operational limitations</li>
        <li>Engineered lift procedures</li>
        <li>Site-specific environmental and weather policies</li>
      </ul>
      <p>
        Environmental limitations and operational restrictions must always follow manufacturer requirements, engineered lift plans, site procedures, and
        applicable regulations.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>Environmental and site conditions play a major role in crane and rigging safety. Even properly planned lifts may become hazardous when environmental factors affect:</p>
      <ul>
        <li>Load stability</li>
        <li>Crane performance</li>
        <li>Ground conditions</li>
        <li>Communication systems</li>
        <li>Worker movement</li>
        <li>Visibility</li>
        <li>Structural loading</li>
      </ul>
      <p>Environmental conditions may change rapidly during lifting operations and can significantly alter force behavior within:</p>
      <ul>
        <li>Suspended loads</li>
        <li>Rigging systems</li>
        <li>Crane structures</li>
        <li>Supporting ground surfaces</li>
      </ul>
      <p>This section explores common environmental and site hazards affecting crane and rigging operations.</p>
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
          M13 — Crane physics
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

      <h2 id="environmental-awareness-lifting">Environmental awareness in lifting operations</h2>
      <p>Environmental awareness involves recognizing how external conditions affect:</p>
      <ul>
        <li>Equipment</li>
        <li>Loads</li>
        <li>Personnel</li>
        <li>Communication</li>
        <li>Operational decision-making</li>
      </ul>
      <p>Environmental conditions should be continuously monitored throughout lifting operations.</p>
      <p>Conditions that appear acceptable at the beginning of a lift may deteriorate quickly.</p>

      <h2 id="wind-hazards">Wind hazards</h2>
      <p>Wind is one of the most significant environmental hazards affecting lifting operations.</p>
      <p>Wind may:</p>
      <ul>
        <li>Push suspended loads</li>
        <li>Rotate loads</li>
        <li>Increase sling tension</li>
        <li>Destabilize cranes</li>
        <li>Create pendulum motion</li>
        <li>Increase dynamic loading</li>
      </ul>
      <p>Large surface-area loads are especially vulnerable to wind effects.</p>

      <h2 id="windsail-effect">Windsail effect</h2>
      <p>The windsail effect occurs when wind acts against a load with significant surface area.</p>
      <p>Examples include:</p>
      <ul>
        <li>Formwork panels</li>
        <li>Rebar mats</li>
        <li>Wall panels</li>
        <li>Steel decking</li>
        <li>Mechanical units</li>
        <li>Signage</li>
        <li>Modular assemblies</li>
      </ul>
      <p>Wind pressure may create:</p>
      <ul>
        <li>Horizontal loading</li>
        <li>Rotation</li>
        <li>Drift</li>
        <li>Sudden load movement</li>
        <li>Structural instability</li>
      </ul>

      <h2 id="wind-dynamic-loading">Wind &amp; dynamic loading</h2>
      <p>Wind may generate dynamic forces that greatly exceed static load weight.</p>
      <p>Wind gusts may create:</p>
      <ul>
        <li>Rapid load acceleration</li>
        <li>Shock loading</li>
        <li>Swing amplification</li>
        <li>Uneven sling tension</li>
        <li>Rotational instability</li>
      </ul>
      <p>Dynamic movement becomes increasingly difficult to control as:</p>
      <ul>
        <li>Wind speed increases</li>
        <li>Surface area increases</li>
        <li>Load length increases</li>
      </ul>

      <h2 id="wind-monitoring">Wind monitoring</h2>
      <p>Wind conditions should be monitored continuously during lifting operations.</p>
      <p>Monitoring methods may include:</p>
      <ul>
        <li>Site weather systems</li>
        <li>Wind meters</li>
        <li>Crane instrumentation</li>
        <li>Environmental observations</li>
        <li>Manufacturer operational limits</li>
      </ul>
      <p>Wind conditions at crane height may differ significantly from ground-level conditions.</p>

      <h2 id="wind-operational-limits">Wind operational limits</h2>
      <p>Crane manufacturers commonly establish operational wind limits.</p>
      <p>Environmental limits may vary depending on:</p>
      <ul>
        <li>Crane type</li>
        <li>Boom length</li>
        <li>Load surface area</li>
        <li>Crane configuration</li>
        <li>Operational activity</li>
      </ul>
      <p>Operations may need to stop if:</p>
      <ul>
        <li>Wind limits are exceeded</li>
        <li>Load stability cannot be maintained</li>
        <li>Communication becomes unreliable</li>
      </ul>

      <h2 id="rain-moisture-hazards">Rain &amp; moisture hazards</h2>
      <p>Rain and moisture may affect:</p>
      <ul>
        <li>Worker footing</li>
        <li>Visibility</li>
        <li>Communication systems</li>
        <li>Rigging surfaces</li>
        <li>Electrical systems</li>
        <li>Ground stability</li>
      </ul>
      <p>Wet surfaces may increase:</p>
      <ul>
        <li>Slip hazards</li>
        <li>Load movement</li>
        <li>Difficulty controlling rigging</li>
      </ul>
      <p>Moisture may also increase corrosion rates on lifting equipment.</p>

      <h2 id="ice-snow-hazards">Ice &amp; snow hazards</h2>
      <p>Ice and snow create additional hazards during lifting operations.</p>
      <p>Potential concerns include:</p>
      <ul>
        <li>Reduced traction</li>
        <li>Hidden hazards</li>
        <li>Ice accumulation on loads</li>
        <li>Frozen rigging components</li>
        <li>Reduced visibility</li>
        <li>Increased load weight</li>
      </ul>
      <p>Ice accumulation may significantly alter:</p>
      <ul>
        <li>Load weight</li>
        <li>Center of gravity</li>
        <li>Load balance</li>
        <li>Crane loading</li>
      </ul>

      <h2 id="temperature-effects">Temperature effects</h2>
      <p>Extreme temperatures may affect:</p>
      <ul>
        <li>Wire rope flexibility</li>
        <li>Hydraulic systems</li>
        <li>Brake systems</li>
        <li>Synthetic sling materials</li>
        <li>Worker performance</li>
        <li>Structural materials</li>
      </ul>
      <p>Cold temperatures may increase brittleness in some materials.</p>
      <p>High temperatures may affect:</p>
      <ul>
        <li>Lubrication</li>
        <li>Synthetic sling strength</li>
        <li>Worker fatigue</li>
        <li>Equipment performance</li>
      </ul>

      <h2 id="lightning-hazards">Lightning hazards</h2>
      <p>Cranes and suspended loads may become lightning hazards during storms.</p>
      <p>Potential lightning risks include:</p>
      <ul>
        <li>Direct strikes</li>
        <li>Electrical conduction</li>
        <li>Induced voltage</li>
      </ul>
      <p>Tower cranes and long booms may become prominent lightning paths.</p>
      <p>Operations should follow site procedures and manufacturer recommendations regarding storm conditions.</p>

      <h2 id="reduced-visibility">Reduced visibility</h2>
      <p>Visibility limitations may result from:</p>
      <ul>
        <li>Fog</li>
        <li>Rain</li>
        <li>Snow</li>
        <li>Dust</li>
        <li>Darkness</li>
        <li>Glare</li>
        <li>Smoke</li>
      </ul>
      <p>Reduced visibility may affect:</p>
      <ul>
        <li>Communication</li>
        <li>Load positioning</li>
        <li>Hazard recognition</li>
        <li>Crane movement coordination</li>
      </ul>
      <p>Blind lift conditions may develop rapidly during poor visibility.</p>

      <h2 id="ground-conditions-site">Ground conditions</h2>
      <p>Ground conditions are critical to crane stability and safe lifting operations.</p>
      <p>Potential hazards include:</p>
      <ul>
        <li>Soft ground</li>
        <li>Water saturation</li>
        <li>Frost conditions</li>
        <li>Excavations</li>
        <li>Buried utilities</li>
        <li>Voids</li>
        <li>Uneven terrain</li>
      </ul>
      <p>Ground failure may lead to:</p>
      <ul>
        <li>Crane instability</li>
        <li>Outrigger settlement</li>
        <li>Structural overload</li>
        <li>Crane overturning</li>
      </ul>

      <h2 id="soil-bearing-capacity-site">Soil bearing capacity</h2>
      <p>Ground surfaces must support:</p>
      <ul>
        <li>Crane weight</li>
        <li>Load weight</li>
        <li>Outrigger forces</li>
        <li>Dynamic loading effects</li>
      </ul>
      <p>Ground bearing pressure may increase significantly during:</p>
      <ul>
        <li>Heavy lifts</li>
        <li>Long radius operations</li>
        <li>Dynamic movement</li>
        <li>Uneven loading</li>
      </ul>
      <p>Ground conditions may change during operations because of:</p>
      <ul>
        <li>Rain</li>
        <li>Frost thaw</li>
        <li>Vibration</li>
        <li>Excavation activity</li>
      </ul>

      <h2 id="underground-hazards">Underground hazards</h2>
      <p>Underground conditions may affect crane stability.</p>
      <p>Potential underground hazards include:</p>
      <ul>
        <li>Utilities</li>
        <li>Tunnels</li>
        <li>Vaults</li>
        <li>Buried structures</li>
        <li>Recently backfilled excavations</li>
        <li>Drainage systems</li>
      </ul>
      <p>Ground may appear stable while lacking sufficient load-bearing capacity.</p>

      <h2 id="site-congestion">Site congestion</h2>
      <p>Congested worksites create additional hazards including:</p>
      <ul>
        <li>Restricted crane movement</li>
        <li>Personnel exposure</li>
        <li>Equipment interference</li>
        <li>Limited access</li>
        <li>Reduced visibility</li>
        <li>Communication difficulties</li>
      </ul>
      <p>Crowded environments require increased coordination and situational awareness.</p>

      <h2 id="overhead-hazards">Overhead hazards</h2>
      <p>Overhead hazards may include:</p>
      <ul>
        <li>Powerlines</li>
        <li>Structures</li>
        <li>Scaffolding</li>
        <li>Adjacent cranes</li>
        <li>Temporary supports</li>
        <li>Elevated work platforms</li>
      </ul>
      <p>Suspended loads and crane booms must maintain safe clearances from all overhead obstructions.</p>

      <h2 id="powerline-hazards">Powerline hazards</h2>
      <p>Electrical contact remains one of the most serious hazards in crane operations.</p>
      <p>Crane booms, load lines, rigging, and suspended loads may conduct electricity.</p>
      <p>Hazards may occur through:</p>
      <ul>
        <li>Direct contact</li>
        <li>Electrical arcing</li>
        <li>Induced voltage</li>
      </ul>
      <p>Minimum approach distances must always be maintained according to:</p>
      <ul>
        <li>WorkSafeBC requirements</li>
        <li>Utility owner requirements</li>
        <li>Site procedures</li>
      </ul>

      <h2 id="traffic-mobile-equipment">Traffic &amp; mobile equipment hazards</h2>
      <p>Crane operations often occur near:</p>
      <ul>
        <li>Vehicles</li>
        <li>Heavy equipment</li>
        <li>Delivery routes</li>
        <li>Public traffic</li>
        <li>Pedestrian pathways</li>
      </ul>
      <p>Traffic interaction may increase:</p>
      <ul>
        <li>Collision hazards</li>
        <li>Personnel exposure</li>
        <li>Communication difficulties</li>
      </ul>
      <p>Traffic control systems may be required.</p>

      <h2 id="public-exposure-hazards">Public exposure hazards</h2>
      <p>Some lifting operations occur near:</p>
      <ul>
        <li>Public sidewalks</li>
        <li>Roadways</li>
        <li>Occupied buildings</li>
        <li>Adjacent properties</li>
      </ul>
      <p>Additional precautions may include:</p>
      <ul>
        <li>Barricades</li>
        <li>Exclusion zones</li>
        <li>Traffic control</li>
        <li>Spotters</li>
        <li>Controlled access systems</li>
      </ul>
      <p>Public protection becomes especially important during urban lifting operations.</p>

      <h2 id="environmental-decision-making">Environmental decision-making</h2>
      <p>Environmental conditions may require:</p>
      <ul>
        <li>Lift delays</li>
        <li>Operational modifications</li>
        <li>Additional controls</li>
        <li>Engineering review</li>
        <li>Shutdown procedures</li>
      </ul>
      <p>Conditions that exceed safe operational limits should result in lifting activities being paused until safe conditions return.</p>

      <h2 id="human-factors-environmental">Human factors in environmental conditions</h2>
      <p>Environmental stress may affect:</p>
      <ul>
        <li>Judgment</li>
        <li>Communication</li>
        <li>Reaction time</li>
        <li>Fatigue levels</li>
        <li>Situational awareness</li>
      </ul>
      <p>Workers exposed to:</p>
      <ul>
        <li>Heat</li>
        <li>Cold</li>
        <li>Wind</li>
        <li>Noise</li>
        <li>Stress</li>
      </ul>
      <p>may experience reduced operational effectiveness.</p>

      <h2 id="situational-awareness-environmental">Situational awareness during environmental exposure</h2>
      <p>Personnel involved in lifting operations should continuously monitor:</p>
      <ul>
        <li>Weather changes</li>
        <li>Wind conditions</li>
        <li>Ground stability</li>
        <li>Visibility</li>
        <li>Load behavior</li>
        <li>Crane movement</li>
        <li>Personnel positioning</li>
        <li>Communication effectiveness</li>
      </ul>
      <p>Environmental conditions may change rapidly during crane operations.</p>
      <p>
        Continuous observation and operational discipline are essential for maintaining safe lifting activities under changing environmental conditions—together
        with manufacturer limits, engineered plans, and site-approved procedures.
      </p>

      <div className={riggingEducationFooterRowClass}>
        <a href={m13} className="font-medium text-primary hover:underline">
          ← Module 13 — Crane physics for riggers
        </a>
        <a href={m15} className="font-medium text-primary hover:underline">
          Module 15 — Lift planning &amp; critical lifts →
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
