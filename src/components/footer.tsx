import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { UiTLogoModeToggle } from "./uit-logo-mode-toggle";
import { ElixirNorwayLogoModeToggle } from "./elixir-norway-logo-mode-toggle";
import { CreativeCommons } from "lucide-react";
import { EuCoFoundedLogoModeToggle } from "@/components/eu-co-founded-logo-mode-toggle";

export default function Footer() {
	return (
		<footer className="w-full bg-background text-foreground">
			<Separator />
			<div className="container mx-auto w-1/2 px-4 py-8">
				<div className="grid grid-cols-1 items-start gap-4 md:grid-cols-4">
					<div>
						<Link
							href="https://elixir.no"
							className="flex flex-col items-center space-y-4 hover:underline md:items-center"
						>
							<ElixirNorwayLogoModeToggle />
							<p className="text-center text-sm text-muted-foreground md:text-center">
								Advancing life science research through bioinformatics services
								and resources.
							</p>
						</Link>
					</div>
					<div className="flex flex-col items-center md:items-center">
						<h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
						<ul className="space-y-2 text-sm">
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
					<div>
						<Link
							href="https://uit.no"
							className="flex flex-col items-center space-y-4 hover:underline md:items-center"
						>
							<UiTLogoModeToggle />
							<p className="text-center text-sm text-muted-foreground md:text-center">
								Affiliated with UiT
								<br />
								The Arctic University of Norway
							</p>
						</Link>
					</div>
					<Link
						href="https://european-union.europa.eu"
						className="flex flex-col items-center space-y-4 hover:underline md:items-center"
					>
						<EuCoFoundedLogoModeToggle />
					</Link>
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
