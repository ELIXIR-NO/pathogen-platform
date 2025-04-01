import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { UiTLogoModeToggle } from "./uit-logo-mode-toggle";
import { ElixirNorwayLogoModeToggle } from "./elixir-norway-logo-mode-toggle";
import { CreativeCommons } from "lucide-react";
import { VetinstLogoModeToggle } from "./vetinst-logo-mode-toggle";
import { FHILogoModeToggle } from "./fhi-logo-mode-toggle";

export default function Footer() {
	return (
		<footer className="w-full bg-background text-foreground">
			<Separator />
			<div className="container mx-auto w-3/4 px-4 py-8">
				<div className="flex flex-wrap items-center justify-center gap-6">
					<Link href="https://elixir.no" className="hover:underline">
						<ElixirNorwayLogoModeToggle />
					</Link>
					<Link href="https://uit.no" className="hover:underline">
						<UiTLogoModeToggle />
					</Link>
					<Link href="https://www.fhi.no" className="hover:underline">
						<FHILogoModeToggle />
					</Link>
					<Link href="https://www.vetinst.no" className="hover:underline">
						<VetinstLogoModeToggle />
					</Link>
				</div>

				<div className="mt-8 flex items-center justify-center gap-8 border-t pt-6">
					<h3 className="text-2xl font-semibold">Quick Links</h3>
					<ul className="flex flex-wrap items-center gap-4 text-lg">
						<li>
							<Link href="/about" className="hover:underline">
								About
							</Link>
						</li>
						<li>
							<Link href="/privacy-policy" className="hover:underline">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="/terms-of-use" className="hover:underline">
								Terms of Use
							</Link>
						</li>
						<li>
							<Link href="/how-to-cite-us" className="hover:underline">
								How to cite us
							</Link>
						</li>
						<li>
							<Link href="/about?tab=contact-us" className="hover:underline">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				<div className="mt-8 flex flex-row items-center justify-center space-x-2 border-t border-gray-200 pt-4 text-center text-xs text-muted-foreground">
					<CreativeCommons />
					<p>
						{new Date().getFullYear()} ELIXIR Norway. Website content is
						licensed under{" "}
						<a
							href="https://creativecommons.org/licenses/by/4.0/deed.en"
							className="text-primary hover:underline"
						>
							CC-BY 4.0
						</a>{" "}
						unless otherwise noted.
					</p>
				</div>
			</div>
		</footer>
	);
}
