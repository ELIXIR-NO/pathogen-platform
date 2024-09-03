import Link from "next/link";

export default function PrivacyPolicyPage() {
	const lastUpdated = new Date(2024, 9, 2);
	return (
		<div className="flex flex-col space-y-6 text-justify">
			<div>
				<h1 className="text-3xl font-bold">Privacy Policy</h1>
				<p>
					<span className="font-semibold">Last updated: </span>
					{lastUpdated.toLocaleDateString()}
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Introduction</h2>
				<p>
					At{" "}
					<Link href="/" className="text-primary hover:underline">
						pathogens.no
					</Link>
					, we value your privacy. We do not collect, store, or process any
					personal data from our users. Our website is hosted in Norway and is
					committed to complying with the General Data Protection Regulation
					(GDPR) and Norwegian privacy laws.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Data Collection</h2>
				<p>
					We do not collect any personal data from users. No cookies, tracking
					mechanisms, or third-party services are used on this website.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Third Party Service</h2>
				<p>
					We do not use any third-party services that collect data from users.
					This website is free from third-party analytics tools, social media
					plugins, and advertising networks.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Data Security</h2>
				<p>
					While we do not collect personal data, we are committed to maintaining
					a secure website. We recommend using secure protocols when interacting
					with our site.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">User Rights</h2>
				<p>
					Under GDPR, you have the right to access, rectify, and erase personal
					data. However, since no personal data is collected by our website,
					these rights are not applicable.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Contact Information</h2>
				<p>
					If you have any questions or concerns about our privacy practices,
					please contact us at:{" "}
					<a
						href="mailto:contact@elixir.no"
						className="text-primary hover:underline"
					>
						contact@elixir.no
					</a>
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Changes to this Privacy Policy</h2>
				<p>
					We may update this privacy policy as needed. Any changes will be
					posted on this page.
				</p>
			</div>
		</div>
	);
}
