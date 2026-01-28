import Link from "next/link";
import { forwardRef } from "react";

const promotionalHeader = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <div className="bg-primary flex items-center justify-center gap-2 py-2.5 text-center text-xs text-white">
        <span>Webinar on June 15th, Learn Web development</span>
        <Link
          href="/webinar"
          className="underline transition-colors hover:text-black hover:no-underline"
        >
          Signup
        </Link>
      </div>
    </div>
  );
});

promotionalHeader.displayName = "PromotionalHeader";

export default promotionalHeader;
