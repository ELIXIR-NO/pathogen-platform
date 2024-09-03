export default function HowToCiteUsPage() {
	return (
		<div className="flex flex-col space-y-6 text-justify">
			<div>
				<h2 className="text-2xl font-bold">
					How to cite the Norwegian Pathogens Portal
				</h2>
				<p>
					We encourage the reuse and recognition of material made available on
					the Norwegian Pathogens Portal to align with the FAIR principles and
					Open Science. This page provides information on properly citing the
					portal when reusing and referencing its content. Be aware that the
					information on the portal pages can become updated, and therefore it
					is important to reference specific versions or provide access dates
					within citations. The Norwegian Pathogen Portal is operated by the
					Tromsø node of ELIXIR Norway and has the persistent{" "}
					<a href="https://rrid.site" className="text-primary hover:underline">
						Research Resource Identifier
					</a>{" "}
					RRID:SCR_025641. This helps to facilitate reuse, collect information,
					and track usage. When you cite a specific page in the portal you can
					use this identifier as well as referencing the corresponding authors
					of that page.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">
					Citation templates in APA, MLA and Chicago citation styles
				</h2>
				<p className="italic">
					This example is for citing the page “Antibiotic resistance”
					(pathogens.no/topics/antibiotic-resistance)
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">APA Citation Style</h2>
				<p>
					Author(s). (Year, Month Day). Title of the webpage. Norwegian Pathogen
					Portal (RRID: SCR_025641). URL
				</p>
				<p>
					Kovachich, P., Åberg, E., Hjerde, E. (2024, June 15). Antibiotic
					resistance. Norwegian Pathogen Portal (RRID: SCR_025633).
					https://pathogens.no/topics/antibiotic-resistance
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">MLA Citation Style</h2>
				<p>
					Author(s). &quot;Title of the Webpage.&quot; Norwegian Pathogen
					Portal, operated by Tromsø node of ELIXIR Norway, Day Month Year, URL.
					RRID: SCR_025641.
				</p>
				<p>
					Kovachich, Peter, et al. &quot;Antibiotic resistance.&quot; Norwegian
					Pathogen Portal, operated by Tromsø node of ELIXIR Norway, 15 June
					2023, https://pathogens.no/topics/antibiotic-resistance. RRID:
					SCR_025641.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Chicago Citation Style</h2>
				<p>
					Author(s). &quot;Title of the Webpage.&quot; Norwegian Pathogens
					Portal. Operated by Tromsø node of ELIXIR Norway. Last modified Month
					Day, Year. URL. RRID: SCR_025641.
				</p>
				<p>
					Kovachich, Peter, Åberg, Espen and Hjerde, Erik. &quot;Antibiotic
					resistance.&quot; Norwegian Pathogen Portal. Operated by Tromsø node
					of ELIXIR Norway. Last modified June 15, 2023.
					https://pathogens.no/topics/antibiotic-resistance. RRID: SCR_025641.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold">Citing underlying code</h2>
				<p>
					The Norwegian Pathogens Portal was developed and is operated by the
					Tromsø node of ELIXIR Norway at the UiT The Arctic University of
					Norway. Many have contributed to the code and the source code for the
					website is available on{" "}
					<a href="https://github.com/ELIXIR-NO/pathogen-platform">GitHub</a>.
					All of the code that we have produced is available for reuse under the
					<a href="http://www.apache.org/licenses/LICENSE-2.0">
						Apache licence 2.0
					</a>
					.
				</p>
			</div>
		</div>
	);
}
