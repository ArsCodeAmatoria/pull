import { redirect } from "next/navigation";

/**
 * Practice Test has been folded into the official Curriculum flow — lessons,
 * progress tracking, and the official module exam all live under /curriculum
 * now. Keep this route so old links/bookmarks still resolve.
 */
export default function PracticeTestRedirectPage() {
  redirect("/curriculum");
}
