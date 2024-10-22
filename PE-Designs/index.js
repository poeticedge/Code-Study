// JavaScript Document
ReactDOM.render(<h1>Hello</h1>, document.getElementById("root"))
				
ReactDOM.render(
				<ul><li>Point one</li><li>Point Two</li></ul>, 
				document.getElementById("root")
)

const navbar = (
	<nav>
		<h1>PoeticEdge Design</h1>
		<ul>
			<li>Pricing</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
)

ReactDOM.render (
	navbar, 
	document.getElementById ("root")
)