function CustomersReview() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-sky-100">
      <div className="container mx-auto px-4 md:px-20 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#04121d] mb-6">
          What Our <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Users Say</span>
        </h2>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">2.1K+</div>
            <div className="text-gray-600 text-sm">Downloads & Installations</div>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
            <div className="text-gray-600 text-sm">Based on 1800+ reviews</div>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">2.5K+</div>
            <div className="text-gray-600 text-sm">Active Users Worldwide</div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'William',
              review:
                'BDE Cloud saved me at a time when my computer was hopelessly broken. I had gone through all of the items in Driver Manager, and I was still getting the BSOD for no apparent reason. I installed BDE Cloud, made a 90 second scan, and clicked “Install all” to update the 9 out of date drivers that Microsoft missed. Since then I make a scan several times a week, and BDE Cloud has kept my computer in shape.',
            },
            {
              name: 'Roger CJ',
              review:
                'BDE Cloud is just that: easy to use and worth the not-insignificant annual charge. Plus, it found driver updates for all of my computers - some so old they are still running Windows 7 - that the native PC software, if any, either didnt or couldnt.',
            },
            {
              name: 'Jan K.',
              review:"I have been struggling for months to update to W11. Constantly getting errors that not al drivers were uptodate without telling which. One run of DE updating 12 drivers which windows said were uptodate and the update to W11 went flawless. So thanks DE!"
            },
            {
              name: 'Alanpetrob',
              review:
                'I like the ease of access, simplicity of language (minimal jargon), and overall perfomance. Plus, it saves me a fortune on norty anti-virus sites who constantly send me messages that my "Drivers are out of date" and "causing critical crashes" then offerin g to fix it for a furher amount, even though I have purchased their "Ultimate" AV package.',
            },
            {
              name: 'Stuart Thompson',
              review: 'Would highly recommend, very easy product to download and use, also staff are very friendly and happy to answer any questions you may have, will definitely be renewing my subscription I didn’t know my machine had 30 out of date drivers at the start and it’s helped me keep over 150 drivers up to date.'
            },
            {
              name: 'Erich Doehling',
              review: 'BDE Cloud is by far the best option I have found for keeping drivers up to date and charging a fair price to do so. I started off using it for my personal computers, then expanded it to my companys business computers as well. They make it extremely simple to use, which was a must-have for my business, as some of my employees are not tech-savvy. Its truly as easy as a click of a button, or you can even set it up to be automated.'
            },
            {
              name: 'Therese',
              review: "BDE Cloud fixed my whole computer. It had been having constant high CPU usage for a while and I couldn't figure out why. I scanned for corrupted files, checked for malware and was on the verge to send it for repair when I thought I'd give it a go to update the drivers (I didn't, to be honest, think it would make any difference because my computer was up-to-date according to Windows Update). And lo and behold, it sorted, and my computer is back to normal CPU usage."
            },
            {
              name: 'EUGENIO',
              review: "Perfect solution to keep your computer up to date. Best of all, it doesn't run in the background like other software do making your computer resources to run slow monitoringyour every move. I recommend it as anyone's first choice. Kuddos!"
            },
            {
              name: 'Snowdye Fitton',
              review: "The scan process for updating the drivers was very easy to do. It did update my drivers. But after updating the drivers it appears that i had something else wrong. The customer service was very good to do numerous things to solve my computer issues. They went beyond the drivers concerns to providing other helpful problem solving things. Thanks"
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-2">
                <span className="text-md font-semibold text-green-600 mr-2">
                    Trustpilot
                </span>
                <div className="flex text-green-500">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-sm italic mb-4">"{item.review}"</p>
              <div className="text-sm font-semibold text-gray-900">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomersReview;
