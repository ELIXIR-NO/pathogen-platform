import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
	return (
		<footer className="mt-auto w-full">
			<Separator />
			<ul className="flex flex-row justify-center space-x-2.5 py-6">
				<li>
					<Link
						href="/about"
						className="border-r-2 pr-2 text-primary hover:underline"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href="/privacy-policy"
						className="border-r-2 pr-2 text-primary hover:underline"
					>
						Privacy Policy
					</Link>
				</li>
				<li>
					<Link
						href="/terms-of-use"
						className="border-r-2 pr-2 text-primary hover:underline"
					>
						Terms of Use
					</Link>
				</li>
				<li>
					<Link
						href="/how-to-cite-us"
						className="border-r-2 pr-2 text-primary hover:underline"
					>
						How to cite us
					</Link>
				</li>
				<li>
					<Link
						href="/about?tab=contact-us"
						className="text-primary hover:underline"
					>
						Contact Us
					</Link>
				</li>
			</ul>
		</footer>
	);
}
