import {Separator} from "@/components/ui/separator";
import {riggingEducationArticleClass} from "@/components/rigging/rigging-education-prose";

import type { Locale } from "@/i18n/config";

const overviewSupportingText = "text-foreground/85 dark:text-muted-foreground";

/** Long-form educational introduction: crane rigging & advanced rigging (reference scope, purpose, standards awareness). */
export function CraneRiggingEducationOverview({locale}: {readonly locale: Locale}) {
  const rig = (slug: string) => `/lessons/${slug}`;
  const eduModule = (slug: string) => `/lessons/${slug}`;
  return (
    <div className={riggingEducationArticleClass}>
      <p className={`not-prose text-lg font-medium ${overviewSupportingText}`}>Technical education &amp; reference material</p>

      <section id="introduction" className="not-prose mt-6 space-y-5 text-base leading-relaxed text-foreground">
        <p>
          Crane rigging is a critical component of crane and hoisting operations within construction, industrial, marine, infrastructure,
          manufacturing, and heavy lifting environments. Proper rigging practices are essential for maintaining load stability, protecting
          workers, preventing equipment failure, and supporting safe lifting operations.
        </p>
        <p>
          This educational resource provides foundational and advanced knowledge related to rigging systems, lifting hardware, sling
          configurations, load behavior, communication practices, lift planning, and crane awareness. The material is intended to support the
          development of technical understanding for workers involved in lifting operations and those pursuing careers within crane and
          rigging industries.
        </p>
        <p>
          The content combines practical field knowledge with awareness of modern industry standards, regulatory principles, engineering
          concepts, and operational best practices commonly found throughout crane-supported industries.
        </p>
      </section>

      <h2 id="purpose">Purpose of this material</h2>
      <p>
        The purpose of this material is to provide structured educational information related to crane rigging and advanced rigging operations. Topics
        throughout the resource explore rigging hardware and sling systems, inspection principles and removal criteria, load behavior and center of gravity,
        sling forces and rigging calculations, crane awareness for riggers, communication and signaling, load control, environmental and operational hazards,
        lift planning, and critical or engineered lifts.
      </p>
      <p>
        The material is designed to support apprenticeship and trade education, career development, technical reference, industry awareness, continuing
        education, and broader construction safety knowledge.
      </p>

      <h2 id="industry-context">Industry context</h2>
      <p>
        Rigging operations appear in nearly every sector that uses material handling and lifting equipment. Modern work may use tower, mobile, or
        self-erecting cranes, overhead and gantry systems, marine or industrial hoisting, and specialized engineered devices. Riggers must understand how loads
        behave and how forces affect equipment, cranes, supporting structures, and people near the lift.
      </p>
      <p>
        Even straightforward lifts can involve dynamic loading, sling-angle amplification, instability, weather or ground effects, communication gaps, tight
        sites, and multiple trades in the same airspace—so rigging demands both technical knowledge and situational awareness.
      </p>

      <h2 id="standards">Standards, regulations &amp; industry references</h2>
      <p>
        This material references ideas commonly associated with the WorkSafeBC OHSR, BC Crane Safety guidance, CSA and ASME B30 standards, EN/FEM lifting
        concepts, manufacturer requirements, and engineered lift planning. These references support education and awareness only; always follow site-specific
        procedures, engineered instructions, manufacturer documentation, and the regulatory requirements in force for your work.
      </p>

      <h2 id="areas-of-study">Areas of study</h2>
      <p>This resource moves from fundamentals through advanced practice and planning:</p>

      <h3>Rigging fundamentals</h3>
      <p>
        Hardware and sling types, hitch configurations, inspection thinking, and basic load handling establish how connections and angles behave before loads
        leave the ground.
      </p>

      <h3>Rigging mathematics &amp; physics</h3>
      <p>Sling angles, force vectors, center of gravity, load sharing, and dynamic effects explain why small geometry changes can sharply increase forces.</p>

      <h3>Crane awareness</h3>
      <p>
        Radius, swing path, ground and structural interaction, powerlines, and environmental limits tie rigging choices to how the crane actually moves and
        reacts.
      </p>

      <h3>Advanced rigging concepts</h3>
      <p>
        Asymmetric loading, multi-crane picks, specialty devices, load manipulation, and engineered systems introduce coordination and verification beyond
        textbook symmetric lifts.
      </p>

      <h3>Lift planning concepts</h3>
      <p>Pre-lift hazard identification, communication plans, critical-lift triggers, and contingencies turn technical knowledge into a repeatable field process.</p>

      <h2 id="philosophy">Educational philosophy</h2>
      <p>
        This material is intended to support technical understanding rather than replace field experience, supervision, engineered planning,
        or regulatory requirements.
      </p>
      <p>
        Safe rigging depends on planning, competent supervision, disciplined inspection, clear communication, situational awareness, understanding load
        behavior, and consistent adherence to applicable standards and procedures. Rigging is both a technical discipline and a field skill built through study,
        observation, mentorship, and experience.
      </p>

      <div className="not-prose my-10 rounded-xl bg-muted/25 p-6 dark:bg-muted/15">
        <h2 className="text-lg font-semibold text-foreground">Curriculum modules</h2>
        <p className={`mt-2 text-sm leading-relaxed ${overviewSupportingText}`}>
          Structured units that build on this overview—through math, field practice, and communication—then advanced sling geometry, load
          stability, suspended load control, manual hoists / tensioning, multi-crane / tandem lifts, below-the-hook specialty devices, crane
          physics for riggers, environmental / site hazards, lift planning / critical lifts, practical field rigging applications, and safety
          culture / human factors for operational decision-making, plus reference tables, field guideline awareness, and a glossary of common crane
          and rigging terms, closing with applied integration and operational readiness, Module 21 on knots and rope applications, Module 22 on block and
          tackle / reeving / mechanical advantage, Module 23 on heavy lift engineering and advanced rigging systems, Module 24 on tower crane rigging
          operations, Module 25 on rigging incident case studies and failure analysis, plus Appendix A on standard hand signals, Appendix B on basic rigging
          math and formulas, Appendix C on rigging equipment identification and hardware reference, Appendix D on crane types and operational characteristics,
          and Appendix E on BC regulations, standards, and compliance awareness.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <a href={eduModule("module-1")} className="font-medium text-primary hover:underline">
              Module 1 — Regulations, standards &amp; responsibilities
            </a>
          </li>
          <li>
            <a href={eduModule("module-2")} className="font-medium text-primary hover:underline">
              Module 2 — Rigging equipment knowledge
            </a>
          </li>
          <li>
            <a href={eduModule("module-3")} className="font-medium text-primary hover:underline">
              Module 3 — Inspection &amp; removal criteria
            </a>
          </li>
          <li>
            <a href={eduModule("module-4")} className="font-medium text-primary hover:underline">
              Module 4 — Crane awareness for riggers
            </a>
          </li>
          <li>
            <a href={eduModule("module-5")} className="font-medium text-primary hover:underline">
              Module 5 — Basic rigging practices
            </a>
          </li>
          <li>
            <a href={eduModule("module-6")} className="font-medium text-primary hover:underline">
              Module 6 — Rigging math &amp; load calculations
            </a>
          </li>
          <li>
            <a href={eduModule("module-7")} className="font-medium text-primary hover:underline">
              Module 7 — Communication &amp; signaling
            </a>
          </li>
          <li>
            <a href={eduModule("module-8")} className="font-medium text-primary hover:underline">
              Module 8 — Advanced sling geometry &amp; load behavior
            </a>
          </li>
          <li>
            <a href={eduModule("module-9")} className="font-medium text-primary hover:underline">
              Module 9 — Advanced load control
            </a>
          </li>
          <li>
            <a href={eduModule("module-10")} className="font-medium text-primary hover:underline">
              Module 10 — Chainfalls, lever hoists &amp; tensioning devices
            </a>
          </li>
          <li>
            <a href={eduModule("module-11")} className="font-medium text-primary hover:underline">
              Module 11 — Multiple crane &amp; tandem lifts
            </a>
          </li>
          <li>
            <a href={eduModule("module-12")} className="font-medium text-primary hover:underline">
              Module 12 — Specialty lifting devices &amp; attachments
            </a>
          </li>
          <li>
            <a href={eduModule("module-13")} className="font-medium text-primary hover:underline">
              Module 13 — Crane physics for riggers
            </a>
          </li>
          <li>
            <a href={eduModule("module-14")} className="font-medium text-primary hover:underline">
              Module 14 — Environmental &amp; site hazards
            </a>
          </li>
          <li>
            <a href={eduModule("module-15")} className="font-medium text-primary hover:underline">
              Module 15 — Lift planning &amp; critical lifts
            </a>
          </li>
          <li>
            <a href={eduModule("module-16")} className="font-medium text-primary hover:underline">
              Module 16 — Practical rigging applications &amp; field operations
            </a>
          </li>
          <li>
            <a href={eduModule("module-17")} className="font-medium text-primary hover:underline">
              Module 17 — Rigging safety culture, human factors &amp; operational decision-making
            </a>
          </li>
          <li>
            <a href={eduModule("module-18")} className="font-medium text-primary hover:underline">
              Module 18 — Rigging reference tables, field guidelines &amp; operational awareness
            </a>
          </li>
          <li>
            <a href={eduModule("module-19")} className="font-medium text-primary hover:underline">
              Module 19 — Glossary of crane &amp; rigging terms
            </a>
          </li>
          <li>
            <a href={eduModule("module-20")} className="font-medium text-primary hover:underline">
              Module 20 — Final integration: applied rigging knowledge &amp; operational readiness
            </a>
          </li>
          <li>
            <a href={eduModule("module-21")} className="font-medium text-primary hover:underline">
              Module 21 — Knots, hitches &amp; rope applications
            </a>
          </li>
          <li>
            <a href={eduModule("module-22")} className="font-medium text-primary hover:underline">
              Module 22 — Block &amp; tackle, reeving &amp; mechanical advantage systems
            </a>
          </li>
          <li>
            <a href={eduModule("module-23")} className="font-medium text-primary hover:underline">
              Module 23 — Heavy lift engineering &amp; advanced rigging systems
            </a>
          </li>
          <li>
            <a href={eduModule("module-24")} className="font-medium text-primary hover:underline">
              Module 24 — Tower crane rigging operations
            </a>
          </li>
          <li>
            <a href={eduModule("module-25")} className="font-medium text-primary hover:underline">
              Module 25 — Rigging incident case studies &amp; failure analysis
            </a>
          </li>
          <li>
            <a href={eduModule("appendix-a")} className="font-medium text-primary hover:underline">
              Appendix A — Standard hand signals for crane &amp; rigging operations
            </a>
          </li>
          <li>
            <a href={eduModule("appendix-b")} className="font-medium text-primary hover:underline">
              Appendix B — Basic rigging math reference &amp; formulas
            </a>
          </li>
          <li>
            <a href={eduModule("appendix-c")} className="font-medium text-primary hover:underline">
              Appendix C — Rigging equipment identification &amp; hardware reference
            </a>
          </li>
          <li>
            <a href={eduModule("appendix-d")} className="font-medium text-primary hover:underline">
              Appendix D — Crane types &amp; operational characteristics
            </a>
          </li>
          <li>
            <a href={eduModule("appendix-e")} className="font-medium text-primary hover:underline">
              Appendix E — BC regulations, standards &amp; compliance quick reference
            </a>
          </li>
        </ul>
      </div>

      <Separator className="not-prose my-10" />

      <div className="not-prose rounded-xl bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">Continue in the rigging library</h2>
        <p className={`mt-2 text-sm leading-relaxed ${overviewSupportingText}`}>
          Topic pages expand these themes into procedure-oriented summaries, planning callouts, and field controls.
        </p>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <li>
            <a href={rig("basic-rigging")} className="font-medium text-primary hover:underline">
              Basic rigging
            </a>
          </li>
          <li>
            <a href={rig("advanced-rigging")} className="font-medium text-primary hover:underline">
              Advanced rigging
            </a>
          </li>
          <li>
            <a href={rig("sling-selection")} className="font-medium text-primary hover:underline">
              Sling selection
            </a>
          </li>
          <li>
            <a href={rig("critical-lifts")} className="font-medium text-primary hover:underline">
              Critical lifts
            </a>
          </li>
          <li>
            <a
              href={`/${locale}/tower-cranes/operator-training-program/mathematics`}
              className="font-medium text-primary hover:underline"
            >
              Crane &amp; rigging mathematics (operator programme)
            </a>
          </li>
          <li>
            <a href={`/lessons`} className="font-medium text-primary hover:underline">
              All rigging topics
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
