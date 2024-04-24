
const contact = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="grid max-w-screen-xl pt-20 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-amber-900 bg-amber-900 dark:text-lime-600 text-lime-600">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-lime-600 text-lime-600">Send Us Your Message via the Form Beside......</div>
		</div>
		<img src="/contact.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-[#fef9c3] bg-[#fef9c3] text-black" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-[#fef9c3] bg-[#fef9c3] text-black" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-[#fef9c3] bg-[#fef9c3] text-black"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-lime-600 bg-lime-600 dark:text-gray-50">Send Message</button>
	</form>
</div>
    </>
  )
}

export default contact