import React from 'react'

const sponsorSections = [
  'TITLE SPONSOR',
  'PATRON SPONSOR',
  'PLATINUM SPONSOR',
  'GOLD SPONSORS',
  'ASSOCIATE SPONSORS',
  'EXHIBITORS',
  'HI TEA SPONSOR',
]

const Eight = () => {
  return (
    <section className="w-full bg-white py-2">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        {sponsorSections.map((title) => (
          <div key={title} className="border-t border-[#e6e6e6] py-10 md:py-12">
            <div className="mx-auto w-full max-w-[360px] text-center">
              <h3 className="text-[14px] font-semibold uppercase tracking-[0.03em] text-[#20242b]">
                {title}
              </h3>
              <p className="mt-3 text-[20px] text-[#8d8d8d]">Coming soon...</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Eight
