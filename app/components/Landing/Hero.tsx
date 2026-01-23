import { Bug, Clock8, Network } from "lucide-react";
import Image from "next/image";
import Button from "../common/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="my-20 flex flex-col gap-8">
        <h1 className="text-[58px] leading-tight font-bold text-gray-900">
          Transactional emails that actually&nbsp;
          <span className="bg-[url('/images/circle-decoration.svg')] bg-top bg-no-repeat">
            deliver
          </span>
        </h1>
        <p>
          Powerful email infrastructure for developers. Send transactional
          emails at scale with 99.9% deliverability and real-time analytics.
        </p>

        <div className="flex items-center gap-4">
          <Button
            as={Link}
            className="rehman"
            href="/login"
            variant="primary"
            size="large"
          >
            5k Emails at 5.99$/month
          </Button>
          <Button as="a" href="/signup" variant="secondary" size="large">
            Send 500 emails/Day free
          </Button>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock8 className="h-5 w-auto" />
            <span>24/5 Supports</span>
          </div>
          <div className="flex items-center gap-2">
            <Network className="h-5 w-auto" />
            <span>Less than 100ms Latency</span>
          </div>
          <div className="flex items-center gap-2">
            <Bug className="h-5 w-auto" />
            <span>Developer Friendly APIs</span>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Image
          alt="Hero image"
          src="images/hero.svg"
          width={640}
          height={400}
          className="h-full w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
