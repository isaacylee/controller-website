import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const KeyFindings = () => {
  return (
    <section className='bg-[#41ffca] py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-12 text-4xl font-bold text-black sm:text-5xl'>
            KEY FINDINGS
          </h2>

          <div className='grid grid-cols-1 items-stretch gap-x-20 lg:grid-cols-2'>
            <div className='space-y-6 pr-4 text-xl text-black'>
              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-black' />
                <p className='text-xl leading-relaxed'>
                  Of over 11,000 TAHO complaints, only 23 were referred to the
                  City Attorney to consider enforcement beyond sending an
                  educational letter. 4 citations were issued - all to one
                  landlord.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-black' />
                <p className='text-xl leading-relaxed'>
                  72% of respondents to our audit survey (tenants who had
                  recently submitted TAHO complaints) reported that their
                  landlord continued to harass them even after their TAHO case
                  was closed.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-black' />
                <p className='text-xl leading-relaxed'>
                  LAHD has not provided its housing investigators with adequate
                  guidance for managing TAHO complaints.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-black' />
                <p className='text-xl leading-relaxed'>
                  Inadequate staffing and resources have limited LAHD's ability
                  to carry out investigations and enforcement of TAHO.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-black' />
                <p className='text-xl leading-relaxed'>
                  LAHD's ability to enforce TAHO has mainly consisted of sending
                  educational letters to offending landlords. For enforcement
                  beyond that, it has heavily relied on the City Attorney's
                  Office.
                </p>
              </div>
            </div>

            <div className='mt-12 grid gap-8 lg:mt-0'>
              <div className='rounded-lg bg-white/90 p-8'>
                <div className='mb-2 text-5xl font-bold text-black'>
                  11,000+
                </div>
                <div className='text-black'>
                  TAHO COMPLAINTS SUBMITTED
                  <br />
                  TO LAHD AS OF JULY 2024.
                </div>
              </div>

              <div className='rounded-lg bg-white/90 p-8'>
                <div className='mb-2 text-5xl font-bold text-black'>
                  23 <span className='text-2xl'>(0.2%)</span>
                </div>
                <div className='text-black'>
                  TAHO COMPLAINTS WERE REFERRED
                  <br />
                  TO THE CITY ATTORNEY'S OFFICE,
                  <br />
                  AS OF JULY 2024.
                </div>
              </div>

              <div className='rounded-lg bg-white/90 p-8'>
                <div className='mb-2 text-5xl font-bold text-black'>
                  4 <span className='text-2xl'>(0.036%)</span>
                </div>
                <div className='text-black'>
                  CITATIONS ISSUED FOR TAHO
                  <br />
                  VIOLATIONS.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFindings;
