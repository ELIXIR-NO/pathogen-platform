export default function TermsOfUsePage() {
	const lastUpdate = new Date(2024, 9, 3);
	return (
		<div className="flex flex-col space-y-6 text-justify">
			<div>
				<h1 className="text-3xl font-bold">Terms of Service</h1>
				<p>
					<span className="font-bold">Last updated:</span>
					{lastUpdate.toLocaleDateString()}
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">
					Rules for the Use of IT Services at the Arctic University of Norway
				</h2>
				<p>
					All use of the ELIXIR Tromsø services also assumes that you comply
					with the rules for the use of IT Services at the Arctic University of
					Norway. In case of discrepancies between the rules for the use of IT
					Services at the University of Tromsø and the terms of service of the
					ELIXIR Tromsø services, the former takes precedence.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Use of Service</h2>
				<p>
					ELIXIR Tromsø services are free, public, internet accessible resources
					for use by anyone, unless stated otherwise. Your access to ELIXIR
					Tromsø services may be revoked at any time for reasons deemed
					necessary by the operators of the Services.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Service Limitations</h2>
				<p>
					Your access to the Service is provided under the condition that you
					abide by any limitations placed on the public services.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Disclaimer</h2>
				<p>
					The ELIXIR Tromsø services are provided to you on an “as is” basis and
					without warranty, either express or implied, including, without
					limitation, the warranties of non-infringement, merchantability or
					fitness for a particular purpose. The entire risk as to the quality of
					the service is with you. This disclamer of warranty constitutes an
					essential part of this service agreement.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Limitation of Liability</h2>
				<p>
					Under no circumstances and under no legal theory, whether in tort
					(including negligence), contract, or otherwise, shall the University
					of Oslo (UiO), the University of Bergen (UiB), the University of
					Tromsø (UiT), the Norwegian University of Science and Technology
					(NTNU) or the Norwegian University of Life Sciences (NMBU) or any
					other entity which provides resources for the ELIXIR Tromsø services
					be liable to anyone for any indirect, special, incidental, or
					consequential damages of any character arising as a result of the use
					of the Services including, without limitation, damages for loss of
					goodwill, work stoppage, computer failure or malfunction, or any and
					all other commercial damages or losses. This limitation of liability
					shall not apply to the extent applicable law prohibits such
					limitation.
				</p>
			</div>
		</div>
	);
}
