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
      explanation: i === correctIdx ? `Correct. ${explanation}` : `Incorrect. ${explanation}`,
    })),
    correctAnswer: correct,
    category,
    difficulty,
  };
}

const questions = [
  q(
    1,
    "A vertical plate clamp is primarily designed to:",
    "a",
    [
      ["Grip the plate edge and transfer load through the clamp jaws", "Vertical clamps are rated to bite the plate and carry load through the clamp body, not sling friction alone."],
      ["Replace a spreader bar on wide loads", "Spreaders address geometry; clamps address plate gripping."],
      ["Increase crane radius", "Clamp type does not change crane radius."],
      ["Eliminate the need for tag lines", "Tag lines are still required for control on many plate picks."],
    ],
    "Vertical plate clamps",
    "easy"
  ),
  q(
    2,
    "Before using a vertical plate clamp, you must verify:",
    "c",
    [
      ["Only the crane capacity chart", "Crane chart does not replace clamp rating and plate thickness limits."],
      ["The paint colour of the plate", "Colour is irrelevant to clamp selection."],
      ["Plate thickness is within the clamp's rated range and jaws are suitable for surface condition", "Manufacturer charts specify min/max thickness and jaw type for mill scale vs smooth plate."],
      ["That the plate is horizontal", "Vertical clamps are used for vertical lifts unless dual-rated."],
    ],
    "Vertical plate clamps",
    "medium"
  ),
  q(
    3,
    "When rigging a plate with two vertical clamps, a spreader bar between the clamps is often used to:",
    "b",
    [
      ["Increase WLL of each clamp", "Spreader does not increase clamp WLL."],
      ["Prevent clamps from closing toward each other and help equalize geometry", "A rigid spreader maintains spacing and reduces sideload on clamp shanks."],
      ["Allow single-leg crane hook rigging only", "Top rigging may still be multi-leg to the hook."],
      ["Remove need for inspection", "Inspection is always required."],
    ],
    "Vertical plate clamps",
    "medium"
  ),
  q(
    4,
    "The main function of a spreader bar in a rigging assembly is to:",
    "d",
    [
      ["Carry bending moment from the load like a lifting beam", "That describes a lifting beam, not a spreader."],
      ["Increase the crane's boom length", "Spreader does not change boom length."],
      ["Replace slings entirely", "Slings still connect hook to spreader and spreader to load."],
      ["Spread sling legs apart so top legs stay more vertical and reduce compression on the load", "Spreaders transfer compression through the bar while slings carry tension."],
    ],
    "Spreader bars",
    "easy"
  ),
  q(
    5,
    "How does a lifting beam differ from a spreader bar?",
    "a",
    [
      ["The beam hangs from the hook and supports the load from below; the spreader separates sling legs above the load", "Beams carry bending; spreaders primarily spread leg angles."],
      ["They are identical terms", "They are different below-the-hook devices with different load paths."],
      ["Spreader bars always have higher WLL", "Rating depends on design, not device name."],
      ["Lifting beams never use top bridles", "Many lifting beams use a top bridle to the hook."],
    ],
    "Lifting beams",
    "easy"
  ),
  q(
    6,
    "On a spreader bar pick, if the top sling angle to the hook increases (legs become more angled), top sling tension:",
    "c",
    [
      ["Decreases", "Steeper angles increase tension for the same vertical load."],
      ["Stays equal to load weight always", "Angle factor applies to slings."],
      ["Increases", "T = W ÷ (n × cos θ) — smaller cos θ means higher tension."],
      ["Is irrelevant to WLL", "Tension must stay under sling WLL."],
    ],
    "Spreader bars",
    "medium"
  ),
  q(
    7,
    "A lifting beam must be rated for:",
    "b",
    [
      ["Tension only, like a sling", "Beams see bending moment and multiple lug loads."],
      ["Bending moment and lug loads including self-weight of the beam", "ASME B30.20 addresses structural capacity of below-the-hook devices."],
      ["Compression only", "Beams primarily resist bending; spreaders resist compression."],
      ["Tag line loads only", "Tag lines are not part of beam structural rating."],
    ],
    "Lifting beams",
    "medium"
  ),
  q(
    8,
    "Two-leg bridle with equal leg length and equal angles does NOT guarantee equal tension when:",
    "d",
    [
      ["The load weight is known", "Known weight alone does not fix unequal sharing if COG is offset."],
      ["Slings are the same length", "Equal legs can still see unequal tension with offset COG."],
      ["Hooks have safety latches", "Latches do not affect tension distribution."],
      ["The load centre of gravity is not centred between the pick points", "Offset COG shifts more load to one leg."],
    ],
    "Non-symmetric tension",
    "medium"
  ),
  q(
    9,
    "On a four-leg bridle with offset COG, a conservative planning approach is to assume:",
    "a",
    [
      ["Only three legs share the load effectively", "One leg may go slack; plan worst leg without counting all four at 100%."],
      ["All four legs always carry exactly 25% each", "Real geometry and COG rarely give equal shares."],
      ["The shortest leg carries the least load", "Often the opposite — short side of COG loads up more."],
      ["COG position does not matter if WLL is high enough", "COG always affects share."],
    ],
    "Non-symmetric tension",
    "hard"
  ),
  q(
    10,
    "The governing WLL of a rigging assembly is:",
    "c",
    [
      ["The sum of all component WLLs", "Components in series do not add — weakest link governs."],
      ["The crane rated capacity only", "Rigging must be checked independently."],
      ["The lowest WLL among hooks, slings, shackles, clamps, and devices in the load path", "Assembly rating is limited by the weakest rated element and hitch mode."],
      ["The highest WLL in the system", "Using highest would overload weaker parts."],
    ],
    "Integration",
    "easy"
  ),
  q(
    11,
    "Serrated jaws on a plate clamp are typically selected for:",
    "b",
    [
      ["Polished stainless sheet", "Smooth jaws are often required to avoid marring and ensure grip on smooth plate."],
      ["Mill scale and rough carbon steel plate", "Teeth bite rough surfaces; smooth plate may need smooth jaws."],
      ["Wood dunnage", "Plate clamps are not for wood."],
      ["Concrete edges", "Wrong tool — use appropriate lifting device."],
    ],
    "Vertical plate clamps",
    "medium"
  ),
  q(
    12,
    "An adjustable spreader bar is set to a new span. Before lifting you should:",
    "d",
    [
      ["Assume the original WLL still applies at any span", "Span may affect compression rating — check chart or engineer."],
      ["Skip pin inspection if span is shorter", "Pins and locks must be engaged per manufacturer."],
      ["Remove tag lines to reduce drag", "Tag lines aid control."],
      ["Verify pins/locks are fully engaged and rating is valid for that configured span", "Document span on lift plan when required."],
    ],
    "Spreader bars",
    "medium"
  ),
  q(
    13,
    "Buckling is a primary failure concern for:",
    "a",
    [
      ["A spreader bar under compression between sling legs", "Long slender spreaders can buckle if span exceeds design."],
      ["A vertical wire rope sling in vertical hitch", "Slings fail in tension, not buckling."],
      ["A shackle pin in shear only", "Shackles are not column members."],
      ["Tag line rope", "Tag lines are not compression members."],
    ],
    "Spreader bars",
    "hard"
  ),
  q(
    14,
    "When COG is unknown on a non-symmetrical load, best practice is to:",
    "b",
    [
      ["Lift quickly to full height to find balance", "Rapid lift increases risk if load swings or tips."],
      ["Estimate COG, plan asymmetric tension, inch off and verify leg loading before full lift", "Trial lift low with stop work if sharing is wrong."],
      ["Use one leg only for simplicity", "Single leg may overload sling and lose control."],
      ["Double crane capacity on chart", "Chart selection does not fix rigging math."],
    ],
    "Non-symmetric tension",
    "medium"
  ),
  q(
    15,
    "A horizontal plate clamp used for a vertical-only rated pick is:",
    "c",
    [
      ["Acceptable if WLL is higher", "Orientation rating must match the lift."],
      ["Acceptable with a spreader", "Wrong clamp type is not fixed by spreader alone."],
      ["Not acceptable unless the clamp is rated for that orientation", "Use correct model per nameplate."],
      ["Acceptable for light loads", "No unapproved derating without manufacturer data."],
    ],
    "Vertical plate clamps",
    "medium"
  ),
  q(
    16,
    "Top bridle angle on a lifting beam affects:",
    "a",
    [
      ["Tension in the top slings and loads at the beam's top lugs", "Short bridles increase leg tension above simple weight share."],
      ["Only the bottom slings", "Top geometry is critical for beam and sling loads."],
      ["Paint on the beam", "Irrelevant."],
      ["Ground bearing pressure only", "That relates to crane/outriggers, not top bridle tension directly."],
    ],
    "Lifting beams",
    "medium"
  ),
  q(
    17,
    "ASME B30.20 primarily addresses:",
    "b",
    [
      ["Mobile crane setup only", "That is closer to B30.5."],
      ["Below-the-hook lifting devices including spreader bars and lifting beams", "B30.20 covers structural lifting attachments."],
      ["Hand signals only", "Signals are a separate topic."],
      ["Forklift operation", "Different standard family."],
    ],
    "Lifting beams",
    "easy"
  ),
  q(
    18,
    "If one leg on a two-leg bridle is slack during initial lift while the other is tight, you should:",
    "d",
    [
      ["Continue — it will equalize at height", "Slack legs can shock-load; geometry is wrong."],
      ["Hit the load with a hammer", "Never strike suspended loads."],
      ["Remove the slack leg from service and lift on one leg", "Single-leg overload risk."],
      ["Stop, lower, and re-rig or adjust pick points / COG correction", "Prove equalization or planned asymmetric share before continuing."],
    ],
    "Non-symmetric tension",
    "easy"
  ),
  q(
    19,
    "Including the weight of spreader bar and lifting beam in crane load chart selection is necessary because:",
    "c",
    [
      ["It is optional if load is light", "Accessory weight is part of total hook load."],
      ["Only the load matters", "Hook load includes rigging below hook."],
      ["The crane sees total suspended weight including rigging hardware", "Underestimating hook load risks overload."],
      ["Inspectors never check it", "Good practice and planning require it."],
    ],
    "Integration",
    "medium"
  ),
  q(
    20,
    "A three-leg bridle on a load with centred COG — planning tension on the worst leg should consider:",
    "b",
    [
      ["Each leg at 33.3% of load always", "Geometry may leave one leg idle or lightly loaded — worst case may be higher on active legs."],
      ["That one leg may carry little or no load and the other two share more", "Do not count three legs at full share without analysis."],
      ["That three-leg always equals four-leg capacity", "Leg count does not automatically add capacity."],
      ["Only choker hitches", "Hitch type matters but COG and geometry govern share."],
    ],
    "Non-symmetric tension",
    "hard"
  ),
];

writeFileSync(
  new URL("../src/data/pro-questions.json", import.meta.url),
  JSON.stringify(questions, null, 2) + "\n"
);

console.log(`Wrote ${questions.length} pro rigging questions.`);
