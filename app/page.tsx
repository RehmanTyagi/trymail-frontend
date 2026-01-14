"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Send, ChevronDown } from "lucide-react";
import { CgMenu } from "react-icons/cg";

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = React.useState("English");
  return (
    <nav>
      {/* promotional header */}
      <div className="flex justify-end bg-[#343a40] text-sm">
        <div className="flex items-center gap-1.5 p-2 text-white">
          <Send className="h-4 w-4" />
          <span className="font-semibold">Contact Sales</span>
        </div>
        <span className="mx-1 border-l-[0.5px] border-black" />
        <div className="flex cursor-pointer items-center gap-1.5 p-2 text-white">
          <Globe className="h-4 w-4" />
          <span>{currentLanguage}</span>
          <ChevronDown className="h-3.5 w-3.5" />
        </div>
      </div>
      {/* promotional header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Image
          className="h-10 w-24"
          src="./logo.svg"
          alt="Logo"
          fetchPriority="high"
          width={100}
          height={100}
        />

        <div className="hidden space-x-8 md:flex">
          <div className="group relative">
            <button className="text-gray-700 hover:text-blue-600">
              Products
            </button>
            <div className="invisible absolute left-0 mt-0 w-48 rounded-md bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              <Link
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Email API
              </Link>
            </div>
          </div>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Blog
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Company
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Help Center
          </Link>
        </div>
        <button className="md:hidden">
          <CgMenu className="h-7 w-7 stroke-[0.25px]" />
        </button>
      </div>
      <section className="flex flex-col-reverse px-10 py-2">
        <div>
          {/* <p className="font-better-times text-3xl leading-4 tracking-wide">
            Transactional emails,
            <br />
            that actually deliver
          </p> */}
          <h1 className="mt-4 text-center text-3xl leading-tight font-semibold">
            Reliable Email API for Transactional & Automated Emails at{" "}
            <span className="bfgbg- bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDciIGhlaWdodD0iNTgiIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiNGRkQyNUYiIGQ9Im0yODIgNTcgMy45LS4yaC0uNWMxLjMtLjIgMi43LS4yIDQgMGgtLjVjNi41LS4xIDguNS4zIDE0LjIuMiAzIDAgNC42LS40IDgtLjMgNC4yLjIgOCAwIDEyIDBoLS40YzMuNC0uNSA4LjEtLjggMTUuOS0xIDEgMCAyLS4zIDMtLjRsNi45LS4zYzUuMS0uNCA5LjMtLjQgMTQuNy0xLjFsNC43LS42YTIzLjYgMjMuNiAwIDAgMCAzLjgtMSA1LjYgNS42IDAgMCAwIDEuNy0uOWwuMy0uMy4zLS40Yy4zLS41LjUtMS4xLjUtMS44YTQuOCA0LjggMCAwIDAtLjMtMi4ydi0uM2wtLjMtLjQtLjctLjhhNiA2IDAgMCAwLTEtLjdjLS40LS4zLTEtLjUtMS41LS43bC0yLjktMWMtMS44LS42LTMuNy0xLTUuNi0xLjUtMy0uNi01LjUtMS4yLTctMS43bC40LjFjLTcuMi0xLjYtMTUuMS0yLjktMjIuNi00LTguNC0xLjUtMTUuNS0yLjMtMjIuNi0zLjItNS42LS44LTktMS42LTE1LjctMi40LTYtLjYtMTEtLjktMTguOC0xLjlsLTEzLjMtMi0xMi43LTEuOGMtMy44LS41LTUuOC0uNy03LjctLjctMy41IDAtNy0uNC0xMC42LTFsLTcuMS0xYy0zLjktLjMtNi42LS40LTEwLjMtLjgtNC42LS40LTEwLjQtMS0xNC45LTEuNmEzNjYgMzY2IDAgMCAwLTE3LjgtMmwtOC42LS44LTYuNy0xLjJjLTEuOS0uNS04LTEuMy0xMi42LTItMy43LS41LTYuOC0uOC0xMC4zLTFsLTUuOC0uOC03LjMtLjYtOS0xLjItMTYtMS4yYy00LjUtLjMtOC0uNC0xNC44LTEuMmwtOS0uOC04LjgtLjYtMTUuNy0xLjRjLTYuNC0uOS02LjQtLjgtMTEuNi0xLjRMMjYuOCAxLjNjLTIuNS4xLTcuNi0uMy0xNC42LTFMOCAwIDAgLjZjNi4yIDEgOC43IDEuOCAxNS45IDMgNi41IDEgMTIuNyAxLjkgMjMgMi45bDYgLjcgNC44LjhMNjMgOS4yYzExLjUgMSAyMy42IDIuMSAzMy4yIDIuNyAzLjYuMiA0IC4zIDEwLjcgMS4zIDUgLjcgNy45IDEuMiAxMC44IDEuOGwxNC4xIDEuNWM1LjggMSAxMy4zIDEuOCAyMi40IDIuNyA5LjYuOSAxNy41IDIgMjMgMyAwIDAtMS4yLjIuMi40IDUuMy44IDcuOSAxLjQgMTUuMSAyLjQgNi44LjcgMTQgMS41IDE4LjggMS43IDQgLjMgOC41LjcgMTMuNiAxLjNsOS4xIDFjNS45LjMgMTIuOCAxIDIxLjMgMi4yIDMgLjQgNi43LjkgOSAxbC0xLjUtLjIgMS4xLjJjMy40LjMgNi43LjYgMTAuNSAxLjNsNC40LjYgMjMuNSAzIDIuNC40YzYgLjUgMTIuNCAxLjMgMjEgMi43bDE5LjIgMy4yIDMuOS40LTEuNy0uMy44LjEuNS4yYzQuMy43IDguMyAxLjMgMTMgMi41YTI0OS43IDI0OS43IDAgMCAxIDguNSAyLjRsMS4xLjUuNS4zLjEtLjEuNC0uNmMwLS4yLjItLjMuMy0uMy4yLS4xLjEgMCAwLS4ybC0uNC0uNS0uMi0uMy0uMS0uMy0uMy4zLTEuMi40Yy0uOS4zLTEuOC41LTIuOS42LTQuNC44LTYuNyAxLjMtMTIgMS42LTMuNS0uMi03IDAtMTAuNS4zLTUuOS40LTYuNiAwLTkuMy4xYTkwNy44IDkwNy44IDAgMCAxLTI5LjIgMWgtMTVjLTMuNSAwLTYuOS0uMi04LjMtLjMtMi45LS40LTguNy0uNC0xNC4xLS40LTMuOCAwLTYuNC0uMS05LjMtLjNsLTEyLS40Yy0xMC40LS4yLTIwLjctLjItMzEuMS0uNmwtOS44LS4xaC03LjNjLTQuNS0uNi05LS44LTEzLjQtLjdsLTYuMi0uMmgtMy4zYy0yLjQtLjEtMy0uNC03LjItLjVoLTMuN2MtNS4yLjItMTEuNyAwLTE5LjYtLjQtOS0uNS0xOC0uOS0yNS44LTEtNiAwLTEyLjgtLjYtMTkuMS0uOS00LS42LTEyLjctMS0xOC0xLjctNi43LS4xLTEzLjUtLjUtMjEuNC0xLjQtMi43LS4zLTYtLjgtOC41LS44LTMgMC04LjItLjgtMTAuMy0uOUExMTUgMTE1IDAgMCAxIDI2IDM5LjFsLTIuNi0uNy0yLjItLjhhMTUuMyAxNS4zIDAgMCAxLTIuNS0xLjJ2LjNsLS40LjVjMCAuMy0uMi42LS40LjgtLjMuNC0uNC4yLS4yLjNsLjMuNC4zLjQuMi41LjMuNWE2OC40IDY4LjQgMCAwIDEgOC43LTIuN2w0LjctMWM2LjEtMSAxMS4xLTEuNSAxNi40LTIuMiA1LjctLjcgMTEuMS0xLjMgMTYtMS43bDIuNS0uM2MyLS4zIDQtLjYgNi4yLS43bDQuMi0uM2M5LjktLjggMjEtMi4xIDMwLjYtMi42IDkuNi0xIDIwLTEuNiAyOS43LTIuNmw5LS43IDMuOS0uM2M3LjcgMCAxNy0uNyAyNy43LTEuNWw2LjUtLjRjMi4zIDAgNC43LS4zIDctLjhsMS44LS4zYzYuOS0uNCA2LjgtLjQgMTMuNS0xbDE2LjYtMS4zYzctLjMgMTIuNi0uMyAyMC42LS43IDE2LjItLjkgMzAuNC0xLjIgNDUuMi0xLjUgNCAuMSA5LjgtLjEgMTUuMi0uM2w5LjgtLjQgMTgtLjVhNjQuMyA2NC4zIDAgMCAxIDExLjMuM2M1LjItLjEgMTAuNi0uMiAxNS42LS4xIDMtLjIgNi4xLS40IDkuNy0uNCAzLjYgMCA3LjggMCAxMi42LjdoLS40bDIgLjNhNi4xIDYuMSAwIDAgMSAxLjEuNGwuMi0uNC4zLS43Yy4xLS4zLjMtLjUuNS0uNmEuOC44IDAgMCAxLS40LS4zbC0uMS0uMi0uMy0uMy0uMS0uMy0uMi0uMnYtLjFsLS4yLjItMSAuNWMtLjYuNC0xLjQuNy0yLjIgMWE5NyA5NyAwIDAgMS0xMSAzLjJjMy41LTEgNS41LTEuNyA3LjYtMi41LTQuNSAxLjItOSAyLjEtMTMuNiAzYTM0MyAzNDMgMCAwIDEtOCAxLjljLTggMS41LTE0LjQgMi4zLTIwIDMtOC41LjgtOC44LjktMTguOCAyLjdsLTIuNy40LTEwLjEgMS4yLTQuNi42Yy02LjIgMS0xNC42IDEuOC0yMSAyLjZhMzM4IDMzOCAwIDAgMS0yNC4yIDIuMiAxMDEuNSAxMDEuNSAwIDAgMS0xMi42IDFjLTEuMi0uMy03LjMgMC0xMS44LjEtNC4yLjItOC41LjQtMTMuMS40LTMuOCAwLTcuMy4zLTkuOS41LTMuNC4zLTUuNCAwLTkuMyAwLTMuNC40LTEwLjIuNS0xNy41LjQtNC4zIDAtOC44LS4yLTEzLjMtLjRhNjUxIDY1MSAwIDAgMC0xNy4zLS41Yy02IDAtMTIuMy0uMi0xOC4zLS42bC0xNy0xLjctMTkuOS0yYTQ4My4zIDQ4My4zIDAgMCAxLTM4LjQtNS4zYy0yLjYtLjctNi43LTEuMy0xMS40LTIuMWwtMTEuMi0yLTYuOS0xLjJjLTItLjQtMi44LS40LTcuNy0xLjctMi4xLS43LTQuNS0xLjQtNy0yLjVsLTEuNy0uOS0uNy0uNWgtLjFzMC0uMSAwIDBMOSAxNmMtLjEuMy0uMy42LS42LjhsLjMuNC4yLjUuNC45LjItLjIuOS0uMiAyLS4yYTE2OC44IDE2OC44IDAgMCAxIDI0LjItMWM4IDAgMTUuNC4zIDIyLjguNyA1IC4yIDkuNy40IDEzLjcuMy43IDAgMy4zIDAgNC41LjIgNC40LjMgOC44LjUgMTMuMy42bDYuMi40IDcuNy41IDggLjFjNS41LjQgMTAuMi44IDE1LjIgMSA1IC4yIDkuMSAwIDE0LjEuMyA2LjQuMyA3LjcgMCAxNCAuMyAzLjcuNSA4LjYgMSAxNS40IDEuNSA4IC42IDEzLjguNiAyMC43IDEgMi4xLjMgMy43LjYgNiAuNyA4LjYuNyAxNy41IDEuNCAyNiAxLjcgMy45LjEgOC4zLjMgMTMgLjcgOC40LjcgMTcuNyAxLjIgMjUgMmwxNC4yLjZjOC4yLjcgMTQuNyAxLjUgMjMuMyAxLjlsNC4yLjRjMTAuMSAxIDE5LjUgMS41IDI2LjcgMS42IDMuNiAwIDcuOS4zIDEyLjYuNmwxMS41IDEgNi45LjkgNC40LjQgMTYuMSAxLjIgOCAuNSA5LjIuOCA0LjgtLjNjLTMuNS0uNiAxLS41IDIuOS0uNi0zLjQtLjUtNy4yLTEtMTIuMS0xLjVsLTMuNS0uMi0xMC4zLS40Yy0zLjktLjQtNy40LS44LTEwLjYtMWwtMTIuNC0xLjFjLTcuOS0uNy0xNC40LTEuNS0yMy0yLjItMS40IDAtMi41LS4zLTMuOC0uNGwzLjQtLjItNS0uN2MtNS44LS42LTExLjQtMS40LTE5LjItMi0xMi42LTEtMjUuNC0yLTM4LjEtMi43bC0xMi42LS41Yy05LjctLjktOS43LS45LTE4LTEuMi02LjYtMS40LTcuMi0xLjUtMjEuNi0yLjlsLTEzLjgtLjRjLTUuMiAwLTEyLjMtLjctMTcuNC0uOGgtMTBjLTIuNyAwLTUuMiAwLTkuNy0uMy0yIDAtNC4xLS4zLTYuMS0uOGwtMi43LS42LTE1LjItMS0xMy4zLTEtMTEuNy0uNi0xMy4yLS43LTExLjQtLjZjLTUtLjItNy41LS42LTEyLS43bC0uNi4xLS40LjJjLTE2LS44LTE2LS44LTI2LS41aC0xLjRjLTEyLjQtLjUtMTIuNC0uNi0yNi42LS42bC04LjktLjJhNzMuNCA3My40IDAgMCAwLTExLjMuN0EzLjQgMy40IDAgMCAwIDYgMTZhNC4yIDQuMiAwIDAgMCAwIDEuMyA0LjggNC44IDAgMCAwIC41IDEuOGwuMi40LjQuNGMuNy42IDEuNCAxIDIuMiAxLjRhMjYuMiAyNi4yIDAgMCAwIDUgMkExNDYuMSAxNDYuMSAwIDAgMCAzMSAyNy43bDIuNi41YzQuNC41IDEyLjYgMS45IDE4LjQgMi42bDQuOC43YzkuNCAxLjUgMTguOCAyLjkgMjcuNyA0bDkuNS44YzguNSAxIDE1LjggMiAyNC40IDIuNSAyLjIgMC0uNi0uNSA1LjUgMGwxNS42IDEuNyAxMC4yLjhIMTY0YzcgLjQgMTMuNC43IDIwLjIuNyA4IC4zIDEzLjkgMCAxOS41LS4zIDUgMCA5IC4yIDEzLjEgMCA0LjkgMCA5LjktLjMgMTUuNy0uNiAxMS4zIDAgMjUtLjggMzguOS0xLjhsOS42LS43YzQuNi0uNCA0IDAgNy42LS4zIDMuMS0uNiA2LjItLjggOC45LTFsMTAtMS42YzEwLjEtMS40IDE4LjItMi45IDI4LjctNC42IDYuNS0xLjEgMTIuOS0yLjQgMTkuNC0zLjdsNS40LS44YTEzMi40IDEzMi40IDAgMCAwIDIyLjMtNmMuOC0uMiAxLjctLjcgMi41LTEuMmwuOC0uNmE0LjcgNC43IDAgMCAwIC43LTEuMWwuMS0uMi4xLS4zYTUuMSA1LjEgMCAwIDAgLjMtMS42bC0uMi0xLjQtLjYtMS4xLS4yLS4zLS4yLS4yLS4zLS4yYy0uMi0uMy0uNS0uNC0uOC0uNmExMyAxMyAwIDAgMC0yLjUtLjhsLTIuNC0uNC00LjktLjVjLTUuMS0uNC0yLjUtLjYtNi41LS45bC0zLjQtLjItOS41LjJjLTkuMi0uNS0yMC4xLS4xLTI5LjggMC00LjgtLjQtOS42LS40LTE0LjQtLjFsLTguMS4zaC00IC41bC00LjguMS0yNi42IDFjLTguMS4yLTE2LjUuNy0yMy40IDEuNC01LjIuNi0xMi42IDEtMTkuNCAxLjYtMy43LjMtNCAwLTYuOC4zbC0xNS42IDEuNCAyLjcuMi04LjkuNy04LjIuN2MtMTEuNy4yLTE2LjMuNC0yNy44IDEuMi03IC42LTExLjguOC0xNi44IDFsLTQuNS4yLTEyIDEuMi0xNi43IDFjLTMuNy4yLTYuNC41LTkgLjkgMS40IDAgNy4xLS42IDYuMS0uMi01LjMuNi0xMC4zIDEtMTQuNCAxLjEtMS40IDAtMi41IDAtNSAuMy01LjMuNi03LjcuNS0xMS40IDEtNC42LjUtNC4yLjgtOS43IDEuMy01LjYgMC01LjYgMC0xOC42IDEuM0w0MCAyOC4zYy00LjkuNi05LjcgMS40LTE0LjMgMi40YTQzLjggNDMuOCAwIDAgMC04LjcgM2wtLjYuNC0uNC40YTUuOCA1LjggMCAwIDAtLjggMS4yYy0uMS4zLS4zLjYtLjMgMWE2LjEgNi4xIDAgMCAwLS4xIDIuNSA0LjggNC44IDAgMCAwIDIuNSAzLjVsLjkuNCAxLjYuNWE3OS42IDc5LjYgMCAwIDAgMTYuOSAyLjZjMi4yIDAgNyAuNiAxMC44IDEgNS42LjggMTEuNCAxLjQgMTcuNyAxLjkgNi40LjUgOS42IDEgMTQuNiAxLjVIODRjNy4zLjMgOS4zLjQgMTguMyAxbDIuNy4yIDEyIC40YzYuNSAwIDEzIC4zIDIwIC44bDcuNy41YzUuMiAwIDEwIDAgMTcgLjRsNC44LjJjOC4yLjMgMTYgLjUgMTguNSAxbDEzLjUgMS4xIDUuMi4xIDE2LjYtLjFoMTcuM2wyLjguMmM0LjguNSA5LjYuNiAxNC40LjQgNyAuMSAxMy41LS4xIDIwLjguMWg2LjctLjN6TTcwLjkgNDlsMi42LjNjLjQgMCAuMi4xLS40IDBsLTYuNC0uMmMtMi4zLS41IDEuNi0uMiA0LjIgMHptMTQzLjQtMjMuMy40LjEtMS41LS4xaC0uMyAxLjR6bS0xODkgNS41aC0uNGwxLjQtLjJoLjNsLTEuMy4yeiIvPjxwYXRoIGZpbGw9IiNGRkQyNUYiIGQ9Ik0zNTUuNiAzOS43aC43bC0xLjEtLjFoLjR6TTI4NS40IDU3SDI4MmgzLjR6bTMuOSAwaC0zLjkuNXYtLjJoLS41IDQtLjV2LjJoLjR6bTMzLjQtLjNoMS41LTEuNXpNMzAwLjQgOS42aDEuMy0xLjcuNHptODAuOSA3LjEgMS40LjMtMS0uMmgtLjR6Ii8+PC9zdmc+)]">
              Scale
            </span>
          </h1>
        </div>
        <div>
          <Image
            src="/images/hero.avif"
            alt="hero image"
            width={800}
            height={500}
            className="h-auto w-full"
          />
        </div>
      </section>
    </nav>
  );
}
