import { writeFileSync } from "fs";

function q(id, question, correct, options, category, difficulty = "medium") {
  const letters = ["a", "b", "c", "d"];
  const correctIdx = letters.indexOf(correct);
  return {
    id,
    question,
    options: options.map(([text, explanation], i) => ({
      id: letters[i],
      text,
      explanation:
        i === correctIdx
          ? `Correct. ${explanation}`
          : `Incorrect. ${explanation}`,
    })),
    correctAnswer: correct,
    category,
    difficulty,
  };
}

const questions = [
  q(1, "Under WorkSafeBC OHSR, which parts most directly frame crane material handling and rigging work in BC?", "b", [
    ["Part 8 and Part 9", "Those parts address general safety and fall protection, not the primary rigging framework."],
    ["Part 14 (Material Handling) and Part 15 (Rigging)", "BC rigging and hoisting expectations are largely organized under OHSR Part 14 and Part 15, as covered in Module 1."],
    ["Part 20 and Part 21", "Those are not the primary OHSR parts referenced for rigging in this course."],
    ["Part 1 only", "Part 1 provides general duties but not the detailed rigging requirements."],
  ], "WorkSafeBC & Regulations", "easy"),

  q(2, "Who bears primary responsibility for ensuring a safe workplace and compliant lifting operations under WorkSafeBC?", "c", [
    ["The crane operator only", "Operators have duties, but primary workplace safety responsibility rests with the employer."],
    ["The rigger only", "Riggers must work safely but are not primarily responsible for the overall safe workplace."],
    ["The employer", "Module 1 states employers must provide safe environments, procedures, training, and maintained equipment."],
    ["The general contractor alone", "Responsibility does not automatically transfer solely to the GC in all situations."],
  ], "WorkSafeBC & Regulations", "easy"),

  q(3, "A competent worker in BC rigging context generally means someone who:", "a", [
    ["Has sufficient knowledge, training, and experience for the task and understands the hazards", "Module 1 defines competency as task-specific knowledge, training, experience, and hazard awareness."],
    ["Holds any trade certification", "Certification alone does not automatically equal competency for every rigging task."],
    ["Has worked on site for one year", "Time alone does not define competency without knowledge and hazard awareness."],
    ["Can lift the heaviest load on site", "Physical ability is not the regulatory definition of competency."],
  ], "WorkSafeBC & Regulations", "medium"),

  q(4, "A qualified worker typically differs from a competent worker because a qualified worker:", "d", [
    ["Needs no experience", "Qualified workers require demonstrated specialized knowledge and experience."],
    ["Only works indoors", "Work location does not define qualification."],
    ["Is always the supervisor", "Supervisors may be qualified, but the terms are not interchangeable."],
    ["Has specialized credentials, knowledge, or advanced experience for specific work", "Module 1 describes qualified workers as having specialized technical knowledge and recognized credentials."],
  ], "WorkSafeBC & Regulations", "medium"),

  q(5, "Workers in BC have the right to refuse work when they believe it presents:", "b", [
    ["Any inconvenience", "Refusal must be based on undue hazard, not inconvenience."],
    ["An undue hazard to themselves or others", "Module 1 covers the right and duty to refuse unsafe work such as damaged rigging or inadequate planning."],
    ["A schedule delay", "Production pressure is not grounds for refusal."],
    ["A supervisor's disagreement", "Disagreement alone is not the legal basis for refusal."],
  ], "WorkSafeBC & Regulations", "easy"),

  q(6, "A Field Level Hazard Assessment (FLHA) is best described as:", "a", [
    ["A short assessment completed immediately before work begins", "Module 1 distinguishes FLHA as a short-duration pre-task assessment."],
    ["An annual equipment audit", "Annual audits are different from field-level pre-task assessments."],
    ["A manufacturer inspection", "Manufacturer inspections are separate from crew FLHAs."],
    ["A post-incident report only", "FLHAs are proactive, not only after incidents."],
  ], "WorkSafeBC & Regulations", "easy"),

  q(7, "Due diligence in rigging operations includes all of the following EXCEPT:", "c", [
    ["Proper lift planning", "Planning is a core due diligence element in Module 1."],
    ["Equipment inspections", "Inspection before and during use supports due diligence."],
    ["Assuming workers will figure it out on site", "Due diligence requires proactive verification, not assumptions."],
    ["Verifying worker competency", "Employers must ensure workers are competent for assigned tasks."],
  ], "WorkSafeBC & Regulations", "medium"),

  q(8, "BC Crane Safety (BCCSA) guidance is used in this course as:", "b", [
    ["A replacement for WorkSafeBC law", "Industry guidance supports but does not replace regulation."],
    ["Operational best-practice guidance alongside OHSR requirements", "The overview and Module 1 reference BC Crane Safety with WorkSafeBC and standards."],
    ["Optional advice only with no safety value", "BCCSA guidance is widely used for crane and rigging safety in BC."],
    ["A substitute for engineered lift plans", "Engineered plans may still be required regardless of guidance documents."],
  ], "WorkSafeBC & Regulations", "medium"),

  q(9, "Working Load Limit (WLL) on rigging hardware means:", "a", [
    ["The maximum load the item is rated to handle under specified conditions", "Module 2 and 3 cover WLL as the rated capacity that must not be exceeded."],
    ["The weight of the hook block only", "WLL applies to slings, shackles, and other rigging components."],
    ["The crane's maximum radius capacity", "That relates to load charts, not individual rigging WLL."],
    ["The combined crew lifting ability", "WLL is an equipment rating, not human capacity."],
  ], "Rigging Equipment", "easy"),

  q(10, "Rigging equipment must never be loaded:", "d", [
    ["Vertically", "Vertical loading is normal when within WLL and proper configuration."],
    ["With a shackle", "Shackles are common connectors when rated appropriately."],
    ["Using synthetic slings", "Synthetic slings are valid when selected and protected properly."],
    ["Beyond its marked WLL or without a known rating", "Module 2 and 3 stress WLL verification and never exceeding rated capacity."],
  ], "Rigging Equipment", "easy"),

  q(11, "A bow (anchor) shackle is typically selected when:", "b", [
    ["Only straight in-line loading is possible", "Anchor shackles are for in-line loads; bow shackles allow angular loading."],
    ["Multi-directional or angular loading may occur", "Module 2 and Appendix C describe bow shackles for angular loading applications."],
    ["The load is always underwater", "Environment alone does not define shackle type."],
    ["No identification tag is present", "Missing tags should trigger removal from service, not shackle type selection."],
  ], "Rigging Equipment", "medium"),

  q(12, "Synthetic web slings must be protected from:", "c", [
    ["Only rain", "UV, cuts, chemicals, and sharp edges also matter."],
    ["Only heavy loads", "Load weight is managed by WLL; protection is about damage prevention."],
    ["Sharp edges, cuts, UV exposure, and chemicals per manufacturer guidance", "Module 2 covers synthetic sling damage modes and protection requirements."],
    ["Being stored indoors only", "Proper storage helps, but field protection from edges is critical during use."],
  ], "Rigging Equipment", "medium"),

  q(13, "Wire rope slings showing severe kinking, birdcaging, or core protrusion should be:", "a", [
    ["Removed from service immediately", "Module 3 lists distortion and wire rope damage as removal criteria."],
    ["Used only on light loads", "Damaged slings must not remain in service at any load level."],
    ["Repaired with duct tape", "Unauthorized repairs are prohibited."],
    ["Rotated to hide the damage", "Concealing damage violates inspection principles."],
  ], "Inspection & Removal", "easy"),

  q(14, "Before each use, rigging equipment should receive:", "b", [
    ["No inspection if it was used yesterday", "Prior use does not replace pre-use inspection."],
    ["A pre-use inspection by a competent person", "Module 3 describes pre-use inspections before each shift or use."],
    ["Inspection only once per year", "Periodic inspections supplement, not replace, pre-use checks."],
    ["Inspection only after failure", "Reactive inspection is too late for prevention."],
  ], "Inspection & Removal", "easy"),

  q(15, "If a shackle has no visible WLL or identification tag, the correct action is:", "c", [
    ["Assume it matches the last similar shackle", "Ratings must be verified, not assumed."],
    ["Double the expected load for safety", "Overloading without rating is unsafe."],
    ["Remove from service until rating is verified", "Module 3 requires WLL verification before use."],
    ["Paint a new tag without engineering data", "Tags must reflect verified manufacturer or engineering information."],
  ], "Inspection & Removal", "medium"),

  q(16, "A common wire rope removal criterion taught in this course is:", "d", [
    ["One broken wire anywhere on the site", "Criteria are based on counts within specified rope diameter spans."],
    ["Any rust on the reel", "Surface rust assessment follows manufacturer/regulatory criteria, not automatic removal."],
    ["Faded paint on the drum", "Cosmetic drum paint is unrelated to rope rejection."],
    ["Two broken wires in six rope diameters, or four in thirty diameters (verify manufacturer rules)", "Appendix E and Module 3 reference this common field guideline with manufacturer override."],
  ], "Inspection & Removal", "hard"),

  q(17, "Unauthorized modification of rigging hardware—such as welding on a shackle—is:", "b", [
    ["Acceptable if done by any welder", "Only manufacturer-approved modifications are permitted."],
    ["Prohibited unless expressly approved by the manufacturer or engineer", "Module 3 covers unauthorized modifications as grounds for removal."],
    ["Required for long loads", "Load length does not justify unauthorized modification."],
    ["Allowed on synthetic slings only", "Modifications to slings and hardware are generally prohibited."],
  ], "Inspection & Removal", "medium"),

  q(18, "The center of gravity of a load affects rigging because:", "a", [
    ["It determines how the load will hang and balance when lifted", "Module 5 explains COG controls stability and sling loading."],
    ["It replaces WLL calculations", "COG analysis complements but does not replace WLL checks."],
    ["It only matters for crane operators", "Riggers must understand COG for hitch selection and control."],
    ["It is always at the geometric centre of every object", "COG can be offset due to material distribution."],
  ], "Basic Rigging", "easy"),

  q(19, "Workers should never stand:", "c", [
    ["Upwind of a dust source only", "Position relative to dust is not the primary suspended-load rule."],
    ["More than 10 m from the crane", "Distance alone does not define the exclusion zone rule."],
    ["Under a suspended load or in the fall zone", "Module 5 and 16 emphasize staying out from under loads and exclusion zones."],
    ["On the opposite side of the tag line", "Tag line side does not eliminate swing or drop hazards."],
  ], "Basic Rigging", "easy"),

  q(20, "Tag lines are used primarily to:", "b", [
    ["Increase the WLL of slings", "Tag lines do not change equipment ratings."],
    ["Help control load rotation and drift without placing workers under the load", "Module 5 and 18 describe tag line use for control with entanglement awareness."],
    ["Replace hand signals", "Tag lines supplement but do not replace communication systems."],
    ["Attach loads to the crane boom", "Tag lines are not load-bearing rigging components."],
  ], "Basic Rigging", "easy"),

  q(21, "Softeners or edge protection should be used to:", "d", [
    ["Increase sling angle", "Edge protection does not change geometry."],
    ["Mark the load weight", "Weight marking is separate from sling protection."],
    ["Replace shackles", "Softeners protect slings; they do not replace rated connectors."],
    ["Prevent cutting and abrasion damage to slings at sharp edges", "Module 5 covers sling protection at edges and corners."],
  ], "Basic Rigging", "easy"),

  q(22, "Shock loading occurs when:", "a", [
    ["A load is suddenly stopped, dropped, or snatched, creating impact forces", "Module 5 and case studies in Module 25 cover shock loading hazards."],
    ["The crane moves smoothly at constant speed", "Smooth motion minimizes dynamic forces."],
    ["Slings are at exactly 90°", "Angle affects tension but shock loading is dynamic impact."],
    ["A FLHA is completed", "Assessments reduce risk but do not by themselves cause shock load."],
  ], "Basic Rigging", "medium"),

  q(23, "A vertical (straight) hitch on a single sling leg at 90° from horizontal produces tension in that leg approximately:", "b", [
    ["Double the load weight always", "At 90° the multiplier is about 1.0 for the illustrated model in Appendix B."],
    ["Equal to the load weight (multiplier about 1.0)", "Appendix B lists 90° with a 1.000 tension multiplier."],
    ["Four times the load weight", "That would correspond to very low angles, not 90°."],
    ["Zero tension", "The sling must carry the load; tension is not zero."],
  ], "Rigging Math", "medium"),

  q(24, "For a symmetric two-leg hitch, as the sling angle from horizontal decreases from 60° to 30°, sling tension per leg:", "c", [
    ["Decreases", "Lower angles increase leg tension, not decrease it."],
    ["Stays the same", "Geometry changes force distribution."],
    ["Increases significantly", "Appendix B shows 60° ≈ 1.155 and 30° ≈ 2.000 multiplier."],
    ["Becomes irrelevant", "Angle always matters in sling tension."],
  ], "Rigging Math", "medium"),

  q(25, "At a 45° sling angle from horizontal, the approximate tension multiplier in this course's reference table is:", "b", [
    ["1.000", "That is the 90° value."],
    ["1.414", "Appendix B and Module 18 list 45° ≈ 1.414."],
    ["2.000", "That is the 30° value."],
    ["0.707", "That is not the multiplier shown in the course tables."],
  ], "Rigging Math", "hard"),

  q(26, "Rigging math in the field should always be verified against:", "d", [
    ["Social media charts", "Unverified sources are not acceptable."],
    ["Guesswork when busy", "Estimates cannot replace verified methods."],
    ["The heaviest sling on the truck", "Sling size alone does not verify tension calculations."],
    ["Manufacturer data, engineered plans, and approved site procedures", "Appendix B states formulas are educational and must follow official direction."],
  ], "Rigging Math", "easy"),

  q(27, "During crane operations, a dedicated signal person is required when:", "a", [
    ["The operator cannot see the load or path clearly, such as blind lifts", "Module 7 and Appendix A describe dedicated signalers for blind or obstructed lifts."],
    ["The radio battery is full", "Battery status does not define signaling requirements."],
    ["The load is painted orange", "Load colour is irrelevant."],
    ["Only one worker is on site", "Even small crews need clear communication when visibility is limited."],
  ], "Communication & Signals", "medium"),

  q(28, "The emergency STOP hand signal:", "b", [
    ["May only be given by the supervisor", "Module 7 and Appendix A state any worker may signal stop in an emergency."],
    ["Should be obeyed immediately by the operator when given by any authorized person", "Stop signals override other movements for safety."],
    ["Means slowly lower the load", "Stop means cease movement, not controlled lowering."],
    ["Is optional if the operator is experienced", "Stop must always be honored."],
  ], "Communication & Signals", "easy"),

  q(29, "When both radio and hand signals are in use, the crew should:", "c", [
    ["Use both simultaneously without coordination", "Mixed uncordinated signals create confusion."],
    ["Let the newest worker choose", "Communication hierarchy must be established pre-lift."],
    ["Follow the pre-lift agreed communication hierarchy and one primary signal source", "Module 7 covers radio discipline and signal authority."],
    ["Ignore hand signals if a radio exists", "Backup methods may still be required."],
  ], "Communication & Signals", "medium"),

  q(30, "Before a blind lift, the crew should:", "d", [
    ["Skip the pre-lift meeting to save time", "Pre-lift meetings are critical for blind lifts."],
    ["Rely on the operator's memory alone", "Blind lifts require agreed signals, paths, and roles."],
    ["Remove tag lines to simplify", "Tag lines may be part of control when used safely."],
    ["Conduct a pre-lift review of signals, path, roles, and stop procedures", "Module 7 and 15 emphasize planning and communication before blind lifts."],
  ], "Communication & Signals", "medium"),

  q(31, "A critical lift typically requires:", "b", [
    ["No documentation", "Critical lifts require enhanced planning and documentation."],
    ["Engineered or detailed lift planning, review, and coordination", "Module 15 covers critical lift planning beyond routine picks."],
    ["Only one rigger on site", "Critical lifts often need more coordination, not less."],
    ["Faster execution without assessment", "Speed without planning increases risk."],
  ], "Load Planning & Control", "medium"),

  q(32, "A pre-lift meeting (toolbox talk) should include:", "a", [
    ["Roles, hazards, communication, rigging plan, and environmental conditions", "Module 15 and 16 list pre-lift coordination topics."],
    ["Only the crane colour", "Equipment appearance is not the focus."],
    ["Coffee orders", "Administrative items do not replace safety briefing content."],
    ["Post-lift cleanup only", "The meeting occurs before the lift."],
  ], "Load Planning & Control", "easy"),

  q(33, "Load drift during a lift is best controlled by:", "c", [
    ["Increasing speed", "Speed often worsens drift and dynamic forces."],
    ["Removing all tag lines", "Tag lines may help control when used properly."],
    ["Coordinated slow movements, tag lines, and clear signals", "Module 9 covers load control techniques."],
    ["Standing closer under the load", "Workers must stay out of the fall zone."],
  ], "Load Planning & Control", "medium"),

  q(34, "Tandem or multi-crane lifts in BC generally require:", "d", [
    ["No special planning if cranes are the same model", "Multi-crane lifts require engineered planning and coordination."],
    ["Only one signal person for both cranes without briefing", "Complex lifts need defined command structure."],
    ["Faster hoisting to reduce exposure", "Speed increases dynamic loading risks."],
    ["Engineered lift plans, defined roles, and strict communication", "Module 11 and 15 cover tandem lift planning requirements."],
  ], "Load Planning & Control", "hard"),

  q(35, "Minimum approach distances to energized power lines must follow:", "a", [
    ["WorkSafeBC requirements, utility owner rules, and site procedures", "Modules 4, 14, 18, and Appendix E stress regulatory and utility-specific clearance."],
    ["Whatever the rigger feels is safe", "Clearances are defined by regulation and utility requirements."],
    ["Ten metres for all voltages without exception", "Distances vary by voltage; verify exact tables and site rules."],
    ["Only the crane operator's judgment", "Riggers and planners must respect powerline zones too."],
  ], "Environmental & Site Hazards", "medium"),

  q(36, "If a crane or rigging system contacts an energized line, the first priority is:", "b", [
    ["Continue the lift quickly", "Movement can worsen contact and electrocution risk."],
    ["Keep workers away and follow emergency/utility procedures; do not touch equipment until cleared", "Module 25 powerline case study covers electrocution and step potential hazards."],
    ["Spray water on the line", "Water conducts electricity and increases hazard."],
    ["Cut the rigging immediately while touching the load", "Contact with energized equipment can be fatal."],
  ], "Environmental & Site Hazards", "hard"),

  q(37, "Wind can affect a rigging operation by:", "c", [
    ["Only cooling workers", "Wind affects load control and crane capacity, not just comfort."],
    ["Having no effect on suspended loads", "Wind creates sail area and dynamic forces on loads."],
    ["Causing load swing, sail effect, and reduced safe crane capacity", "Modules 14 and 24 cover wind exposure and out-of-service procedures."],
    ["Eliminating the need for tag lines", "Wind often increases the need for control measures."],
  ], "Environmental & Site Hazards", "easy"),

  q(38, "An exclusion zone around a lift is intended to:", "d", [
    ["Mark the lunch area", "Exclusion zones are safety boundaries, not break areas."],
    ["Speed up production", "Zones protect personnel, not production metrics."],
    ["Store unused slings", "Storage locations are separate from swing/fall zones."],
    ["Keep non-essential workers out of swing, drop, and rigging failure areas", "Module 18 describes exclusion zones for suspended load hazards."],
  ], "Environmental & Site Hazards", "easy"),

  q(39, "Ground conditions matter to riggers because:", "a", [
    ["Unstable ground can affect crane stability and load handling even if rigging is correct", "Module 14 and 16 link ground bearing to overall lift safety."],
    ["They determine sling colour coding", "Sling colour relates to capacity/material, not soil."],
    ["They replace WLL tags", "Ground conditions do not change equipment ratings."],
    ["Only engineers on another site need to know", "Riggers need situational awareness of ground and setup."],
  ], "Environmental & Site Hazards", "medium"),

  q(40, "The rigger's role in relation to the crane operator is to:", "b", [
    ["Operate the crane when tired", "Operators must be certified and assigned to operate."],
    ["Prepare and attach loads safely, communicate, and maintain load control per plan", "Module 4 describes coordination between riggers and operators."],
    ["Set crane outrigger pressure limits", "That is setup/engineering/operator domain per procedures."],
    ["Ignore signals if rigging is complete", "Communication must continue through the lift."],
  ], "Crane Awareness", "easy"),

  q(41, "Crane load charts apply primarily to:", "c", [
    ["Shackle paint colour", "Charts do not address paint."],
    ["Sling edge protection", "Rigging protection is separate from crane charts."],
    ["Crane capacity at given configurations—not a substitute for rigging WLL", "Module 4 teaches riggers to understand charts without confusing them with sling ratings."],
    ["FLHA format", "Assessments are procedural documents, not load charts."],
  ], "Crane Awareness", "medium"),

  q(42, "Increasing crane radius generally:", "a", [
    ["Decreases available crane capacity", "Module 4 and Appendix B cover radius effects on crane loading."],
    ["Increases capacity unlimitedly", "Capacity decreases as radius increases."],
    ["Has no effect on the lift", "Radius is fundamental to crane loading."],
    ["Eliminates swing", "Swing is unrelated to chart radius effects."],
  ], "Crane Awareness", "medium"),

  q(43, "Hooks without a functioning safety latch (when required) should be:", "d", [
    ["Used with extra speed", "Speed increases drop risk."],
    ["Wrapped with tape", "Tape is not an approved repair."],
    ["Loaded to twice WLL", "Overloading is prohibited."],
    ["Taken out of service until properly repaired or replaced", "Module 3 inspection criteria include hook condition and latches."],
  ], "Inspection & Removal", "medium"),

  q(44, "Chain slings with stretched links, cracks, or twisted links should be:", "b", [
    ["Used on the shortest leg only", "Any damaged leg compromises the assembly."],
    ["Removed from service", "Module 3 lists chain damage as removal criteria."],
    ["Heat-treated on site", "Unauthorized heat treatment alters rating."],
    ["Rotated to hide cracks", "Concealing damage violates inspection duty."],
  ], "Inspection & Removal", "easy"),

  q(45, "A basket hitch doubles the vertical capacity of a sling ONLY when:", "c", [
    ["Always, regardless of angle", "Basket capacity depends on angle and loading mode."],
    ["The load is twice as heavy as the WLL", "Load weight must still respect rated configurations."],
    ["Both legs share load properly and configuration is within manufacturer guidance", "Module 5 and 8 explain hitch geometry affects actual loading."],
    ["No shackles are used", "Connectors are often required in basket configurations."],
  ], "Basic Rigging", "hard"),

  q(46, "ASME B30.9 in this course primarily relates to:", "a", [
    ["Slings", "Module 2 and 5 reference ASME B30.9 for sling standards."],
    ["Tower crane climbing", "Climbing is covered under other standards and modules."],
    ["Office ergonomics", "Not related to rigging."],
    ["Concrete mixing", "Outside rigging scope."],
  ], "Rigging Equipment", "medium"),

  q(47, "ASME B30.26 in this course primarily relates to:", "d", [
    ["Mobile crane load charts", "Load charts are operator/manufacturer documents under other B30 volumes."],
    ["Tower foundations only", "Foundations are engineering/site design topics."],
    ["PPE laundry", "Not a rigging standard topic."],
    ["Rigging hardware such as shackles and hooks", "Module 2 references B30.26 for hardware."],
  ], "Rigging Equipment", "medium"),

  q(48, "Spreader bars are used to:", "b", [
    ["Increase wind speed", "Spreader bars manage load geometry and forces."],
    ["Control load width and reduce sling angle on long loads", "Module 12 describes spreader bars and below-the-hook devices."],
    ["Replace the crane hook", "They attach below the hook as engineered devices."],
    ["Eliminate the need for WLL", "All components retain rated limits."],
  ], "Rigging Equipment", "medium"),

  q(49, "Below-the-hook devices such as lifting beams must:", "c", [
    ["Never be inspected", "BTH devices require inspection and rated identification."],
    ["Be loaded beyond stamp if the load is light", "Ratings cannot be exceeded."],
    ["Be used within engineered or manufacturer-rated limits with proper inspection", "Module 12 covers specialty devices and compliance."],
    ["Always be homemade", "Custom devices require engineering approval."],
  ], "Rigging Equipment", "medium"),

  q(50, "When using a choker hitch, rigger should remember:", "a", [
    ["Choker tension is higher than a straight vertical hitch on the same sling", "Module 5 and 8 note choker efficiency and increased tension."],
    ["Choker hitches reduce tension to zero", "Tension increases, not disappears."],
    ["Choker hitches need no WLL check", "All hitches must respect WLL and configuration factors."],
    ["Choker hitches are banned in BC", "Choker hitches are allowed when properly applied."],
  ], "Basic Rigging", "medium"),

  q(51, "Proper storage of rigging equipment includes:", "d", [
    ["Leaving slings under tension overnight", "Prolonged tension can damage slings."],
    ["Storing wet synthetic slings sealed in plastic indefinitely", "Wet storage can cause mildew and damage."],
    ["Piling hooks under heavy steel without protection", "Storage should prevent damage and kinks."],
    ["Clean, dry, off the ground, and protected from UV, chemicals, and mechanical damage", "Module 3 covers storage and handling practices."],
  ], "Inspection & Removal", "easy"),

  q(52, "A supervisor's role during lifting includes:", "b", [
    ["Ignoring unsafe acts to meet schedule", "Supervisors must correct unsafe conditions per Module 1."],
    ["Ensuring procedures are followed and coordinating crews", "Module 1 lists supervisor duties for lifting coordination."],
    ["Operating two cranes at once", "Supervisors coordinate; they do not replace certified operators without qualification."],
    ["Removing WLL tags for clarity", "Tags must remain legible."],
  ], "WorkSafeBC & Regulations", "medium"),

  q(53, "Job Hazard Analysis (JHA) differs from FLHA because JHA is:", "c", [
    ["Completed only after an incident", "JHAs are proactive planning tools."],
    ["Only for office staff", "JHAs apply to field tasks including rigging."],
    ["A more detailed task breakdown of hazards and controls", "Module 1 distinguishes JHA as more detailed than FLHA."],
    ["Optional in BC law always", "Assessment requirements depend on work; both tools are best practice and often required by employers."],
  ], "WorkSafeBC & Regulations", "medium"),

  q(54, "Technical Safety BC (TSBC) involvement in BC lifting commonly relates to:", "a", [
    ["Equipment registration and compliance for certain cranes and elevating devices", "Appendix E references TSBC alongside WorkSafeBC."],
    ["Sling colour preferences", "TSBC does not set sling colours."],
    ["Coffee break timing", "Not within TSBC scope."],
    ["Replacing all rigging WLL rules", "TSBC complements but does not replace rigging WLL requirements."],
  ], "WorkSafeBC & Regulations", "hard"),

  q(55, "If rigging contact with a load sharp edge is unavoidable, the rigger should:", "b", [
    ["Use an untagged sling", "Tags and ratings remain mandatory."],
    ["Use rated edge protection and select appropriate sling type", "Module 5 requires protection and proper sling selection."],
    ["Double the hoist speed", "Speed increases dynamic loading."],
    ["Remove the safety latch from the hook", "Hook latches are safety devices."],
  ], "Basic Rigging", "easy"),

  q(56, "Landing a load safely requires:", "d", [
    ["Dropping it quickly onto blocks", "Controlled landing prevents shock loading and crush hazards."],
    ["Workers guiding with hands under the load", "Hands must stay out from under suspended loads."],
    ["No communication with the operator", "Communication continues until the load is landed and detached."],
    ["Controlled lowering, clear path, cribbing/dunnage ready, and hands clear", "Module 5 and 16 cover landing zone practices."],
  ], "Basic Rigging", "medium"),

  q(57, "Human factors such as fatigue and production pressure:", "c", [
    ["Improve rigging safety", "Module 17 explains they often increase error rates."],
    ["Are unrelated to incidents", "Module 25 case studies cite human factors."],
    ["Can contribute to rigging incidents and poor decisions", "Module 17 covers safety culture and human factors."],
    ["Replace the need for inspections", "Inspections remain mandatory."],
  ], "Load Planning & Control", "medium"),

  q(58, "When a sling angle is very low (e.g., 15–20°), the rigger should:", "a", [
    ["Recognize extremely high sling tension and reconsider the rigging plan", "Module 8 warns low angles create excessive forces."],
    ["Assume the WLL doubles", "Low angles increase tension dramatically."],
    ["Remove tag lines for efficiency", "Control measures become more important, not less."],
    ["Skip the pre-lift meeting", "Low-angle picks need more planning."],
  ], "Rigging Math", "hard"),

  q(59, "The STOP hand signal is typically performed by:", "b", [
    ["Waving both arms in circles", "That indicates a different function such as travel or swing depending on standard."],
    ["Arms extended horizontally, then brought together sharply", "Appendix A describes standardized stop signals."],
    ["Pointing upward only", "That commonly indicates hoist, not stop."],
    ["Turning your back to the operator", "Signal person must face operator with clear visibility."],
  ], "Communication & Signals", "medium"),

  q(60, "Radio communication during lifts should use:", "c", [
    ["Nicknames without call signs", "Clear identification reduces errors."],
    ["Only one-way commands with no read-back", "Closed-loop communication confirms understanding."],
    ["Standard call protocols, clear commands, and confirmation read-back", "Module 7 covers radio discipline."],
    ["Any channel without coordination", "Channels must be assigned to avoid cross-talk."],
  ], "Communication & Signals", "medium"),

  q(61, "Engineered lift plans are typically required when:", "d", [
    ["Picking a small tool box with one sling", "Routine picks follow standard procedures."],
    ["Every lift regardless of risk", "Not all lifts require full engineering."],
    ["The operator requests coffee", "Not a planning trigger."],
    ["The lift exceeds routine limits, uses multiple cranes, or has unusual geometry/weight", "Module 15 and 23 describe engineered lift scenarios."],
  ], "Load Planning & Control", "medium"),

  q(62, "Side loading a shackle:", "b", [
    ["Is acceptable if the load is light", "Side loading can overload the shackle body."],
    ["Is prohibited—shackles must be loaded in line with their pin/bow design", "Module 25 case study covers side-loaded shackle failure."],
    ["Increases WLL", "Side loading reduces effective capacity."],
    ["Is required for basket hitches on shackles", "Use proper hardware orientation and rated connections."],
  ], "Basic Rigging", "hard"),

  q(63, "After a near miss involving rigging:", "c", [
    ["Ignore it if nothing fell", "Near misses are learning opportunities per Module 17 and 25."],
    ["Hide it to avoid paperwork", "Reporting supports prevention."],
    ["Report, investigate, and adjust procedures as needed", "Safety culture expects near-miss reporting."],
    ["Increase load speed next time", "Would increase risk."],
  ], "Load Planning & Control", "easy"),

  q(64, "Rigging hardware colour coding or markings should be used to:", "a", [
    ["Identify capacity, type, or inspection status per employer procedure", "Appendix C covers identification and hardware reference."],
    ["Decorate equipment only", "Markings serve safety identification."],
    ["Hide damage", "Concealment is unsafe."],
    ["Replace annual inspection", "Markings supplement inspection programs."],
  ], "Rigging Equipment", "easy"),

  q(65, "Before attaching a load, the rigger should confirm:", "d", [
    ["Only the weather from last week", "Current conditions matter."],
    ["That the operator is not on break only", "Incomplete check."],
    ["Social media updates", "Irrelevant to lift safety."],
    ["Weight estimate, COG, rigging plan, equipment condition, communication, and exclusion zones", "Module 16 integrates field checks before attachment."],
  ], "Load Planning & Control", "medium"),

  q(66, "Using slings with knots to shorten length:", "b", [
    ["Is standard practice", "Knots reduce capacity and are not acceptable rigging practice for load-bearing slings."],
    ["Is generally prohibited unless specifically approved by manufacturer/engineer", "Module 21 discusses knots for rope applications separately from load slings."],
    ["Doubles WLL", "Knots reduce strength."],
    ["Is required for basket hitches", "Basket hitches use proper hardware, not knots."],
  ], "Basic Rigging", "hard"),

  q(67, "When two slings connect to one hook without a master link or beam:", "c", [
    ["Angles do not matter", "Hook loading and sling angles always matter."],
    ["WLL automatically adds together", "Capacities do not simply add without analysis."],
    ["The rigger must check hook loading, angles, and compatibility", "Module 8 covers multi-leg geometry and hook loading."],
    ["Only one sling carries load", "Both legs may share load unequally."],
  ], "Rigging Math", "medium"),

  q(68, "Ice or snow on a rigging path affects safety by:", "a", [
    ["Increasing slip, visibility, and equipment handling hazards", "Module 14 covers weather effects."],
    ["Improving grip on slings", "Ice generally reduces control."],
    ["Eliminating FLHA need", "Weather increases need for assessment."],
    ["Increasing WLL", "Weather does not change ratings."],
  ], "Environmental & Site Hazards", "easy"),

  q(69, "The primary reason for documenting inspections and lift plans is to:", "d", [
    ["Fill filing cabinets", "Documentation has operational purpose."],
    ["Slow down work only", "It supports coordination and compliance."],
    ["Replace training", "Training and documentation work together."],
    ["Support hazard management, coordination, compliance, and continuous improvement", "Module 1 and Appendix E list documentation purposes."],
  ], "WorkSafeBC & Regulations", "easy"),

  q(70, "If you are unsure whether a lift is within rigging or crane limits, you should:", "b", [
    ["Proceed slowly and hope for the best", "Uncertainty requires stopping and verifying."],
    ["Stop, verify with supervisor/engineer/manufacturer data, and do not proceed until resolved", "Module 1 refusal rights and Module 15 planning apply."],
    ["Add another shackle without rating", "Unrated hardware is prohibited."],
    ["Remove exclusion zones to save time", "Zones protect workers."],
  ], "Load Planning & Control", "easy"),
];

writeFileSync(
  new URL("../src/data/questions.json", import.meta.url),
  JSON.stringify(questions, null, 2) + "\n"
);

console.log(`Wrote ${questions.length} rigging questions.`);
